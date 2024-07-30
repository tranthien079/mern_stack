import React, { useState, useEffect } from 'react';
import InputForm from '../../components/InputForm/InputForm';
import { WrapperContainer, WrapperContainerRight, TextLight } from './style';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import Loading from '../../components/LoadingComponent/Loading';
import { EyeFilled, EyeInvisibleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useMutationHooks } from '../../hook/useMutationHook';
import * as UserService from '../../services/UserService';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/slices/userSlice';

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnChangePassword = (value) => {
    setPassword(value);
  };

  const mutation = useMutationHooks(
    (data) => UserService.loginUser(data)
  );

  const { data, isPending, isSuccess } = mutation;

  useEffect(() => {
    if (isSuccess && data?.access_token) {
      navigate('/');
      localStorage.setItem('access_token', JSON.stringify(data?.access_token));
      if(data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        if(decoded?.id) {
          handleGetDetailUser(decoded?.id, data?.access_token)
        } 
      }
    }
  }, [isSuccess, data, navigate]);

  const handleGetDetailUser = async (id, token) => {
    const res = await UserService.getDetailUser(id, token)
    dispatch(updateUser({...res?.data, access_token: token}))
  }

  const handleSignIn = () => {
    // if (email && password) {
      mutation.mutate({ email, password });
    // } else {
    // }
  };

  const handleNavigateSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f5f5f5', fontFamily: 'Roboto,Arial,sans-serif' }}>
      <div style={{ width: '800px', height: '430px', borderRadius: '6px', backgroundColor: '#fff', fontSize: '15px' }}>
        <WrapperContainer>
          <WrapperContainerRight>
            <h1 style={{ margin: '0px', fontSize: '30px', fontWeight: '700', textAlign: 'center' }}>Đăng nhập</h1>
            <p>Moi ban dang nhap</p>
            <InputForm placeholder='Enter your username' style={{ marginBottom: '10px' }}
              value={email} onChange={handleOnChangeEmail}
            />
            <div style={{ position: 'relative' }}>
              <span style={{ zIndex: '10', position: 'absolute', right: '4px', top: '8px', color: '#ccc' }} onClick={() => { setIsShowPassword(!isShowPassword) }}>
                {isShowPassword ? (<EyeFilled />) : <EyeInvisibleOutlined />}
              </span>
              <InputForm placeholder='Enter your password' type={isShowPassword ? 'text' : 'password'}
                value={password} onChange={handleOnChangePassword}
              />
            </div>
            {data?.status === 'ERROR' && <span style={{ color: 'red', fontSize: '12px' }}>{data?.message}</span>}
            <Loading isPending={isPending}>
              <ButtonComponent
                onClick={handleSignIn}
                disabled={!email.length || !password.length}
                styleButton={{ backgroundColor: 'rgb(255, 57, 69)', height: '40px', width: '100%', border: 'none', margin: '26px 0 10px' }}
                size='40'
                border={false}
                textButton={'Đăng nhập'}
                styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
              />
            </Loading>
            <p><TextLight>Forget password</TextLight></p>
            <p>Don't have account?<TextLight onClick={handleNavigateSignUp} style={{ cursor: 'pointer' }}> Create one account</TextLight></p>
          </WrapperContainerRight>
        </WrapperContainer>
      </div>
    </div>
  );
};

export default SignInPage;
