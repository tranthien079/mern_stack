import axios from 'axios';

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-in`, data);
        return res.data;
    } catch (error) {
        if (error.response) {
            return {
                status: 'ERROR',
                message: error.response.data.message ,
            };
        }
    }
};

export const signUpUser = async (data) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-up`, data);
        return res.data;
    } catch (error) {
        if (error.response) {
            return {
                status: 'ERROR',
                message: error.response.data.message ,
            };
        }
    }
};

export const getDetailUser = async (id, access_token) => {
    try {
        const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/user/detail/${id}`, {
            headers: {
                token: `Bearer ${access_token}`,
            }
        });
        return res.data;
    } catch (error) {
        if (error.response) {
            return {
                status: 'ERROR',
                message: error.response.data.message ,
            };
        }
    }
};

export const refreshToken = async () => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/refresh-token`, {}, {
            withCredentials: true
        })
        return res.data;
    } catch (error) {
        if (error.response) {
            return {
                status: 'ERROR',
                message: error.response.data.message ,
            };
        }
    }
};

export const logoutUser = async () => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/log-out`)
        return res.data;
    } catch (error) {
        if (error.response) {
            return {
                status: 'ERROR',
                message: error.response.data.message ,
            };
        }
    }
};