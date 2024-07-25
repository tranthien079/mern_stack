import axios from 'axios';

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