import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { isJsonString } from './untils';
import { jwtDecode } from "jwt-decode";
import * as UserService from './services/UserService';
import { useDispatch } from 'react-redux';
import { updateUser } from './redux/slices/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const { decoded, storageData } = handleDecode();
    if (decoded?.id) {
      handleGetDetailUser(decoded.id, storageData);
    }
  }, []);

  const handleDecode = () => {
    let storageData = localStorage.getItem('access_token');
    let decoded = {};
    if (storageData && isJsonString(storageData)) {
      try {
        storageData = JSON.parse(storageData);
        decoded = jwtDecode(storageData);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
    return { decoded, storageData };
  };

  // Configure Axios interceptor
  UserService.axiosJWT.interceptors.request.use(
    async (config) => {
      const currentTime = new Date();
      const { decoded } = handleDecode();
      if (decoded?.exp < currentTime.getTime() / 1000) {
        try {
          const data = await UserService.refreshToken();
          localStorage.setItem('access_token', JSON.stringify(data.access_token));
          config.headers['token'] = `Bearer ${data.access_token}`;
        } catch (error) {
          console.error('Error refreshing token:', error);
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handleGetDetailUser = async (id, token) => {
    try {
      const res = await UserService.getDetailUser(id, token);
      dispatch(updateUser({ ...res?.data, access_token: token }));
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
