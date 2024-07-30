import React, { useEffect, useState } from 'react'
import InputForm from '../../components/InputForm/InputForm'
import { WrapperContainer, WrapperContainerRight, TextLight } from './style'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { EyeFilled, EyeInvisibleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useMutationHooks } from '../../hook/useMutationHook'
import * as UserService from '../../services/UserService' 
import Loading from '../../components/LoadingComponent/Loading';
import * as message from '../../components/Message/Message'
const SignUpPage = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const handleOnChangeEmail = (value) => {
    setEmail(value)
  }

  const handleOnChangePassword = (value) => {
    setPassword(value)
  }

  const handleOnChangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }

  const handleNavigateSignIn = () => {
    navigate('/sign-in');
  };

  const mutation = useMutationHooks(
    data => UserService.signUpUser(data)
  )

  const { data, isPending, isSuccess, isError } = mutation
  useEffect(() => {
    if (isSuccess && data?.status !== 'ERROR') {
      message.success("Đăng ký thành công");
      navigate('/sign-in');
    } else if (isError) {
      message.error("Đăng ký thất bại");
    }
  }, [isSuccess, isError, navigate, data?.status]);

  const handleSignUp = () => {
    // if (email && password && confirmPassword) {
    //   if (password === confirmPassword) {
        mutation.mutate({ email, password, confirmPassword });
    //   } else {
    //     message.error("Mật khẩu xác nhận không khớp");
    //   }
    // } else {
    //   message.error("Vui lòng nhập đầy đủ thông tin");
    // }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ width: '800px', height: '430px', borderRadius: '6px', backgroundColor: '#fff', fontSize: '15px' }}>
        <WrapperContainer>
          <WrapperContainerRight>
            <h1 style={{ margin: '0px', fontSize: '30px', fontWeight: '700', textAlign: 'center' }}>Đăng kí</h1>
            <p>Mời bạn đăng ký</p>
            <InputForm placeholder='Enter your username' style={{ marginBottom: '10px' }} value={email} onChange={handleOnChangeEmail} />
            <div style={{ position: 'relative' }}>
              <span style={{ zIndex: '10', position: 'absolute', right: '4px', top: '8px', color: '#ccc' }} onClick={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? <EyeFilled /> : <EyeInvisibleOutlined />}
              </span>
              <InputForm placeholder='Enter your password' type={isShowPassword ? 'text' : 'password'} style={{ marginBottom: '10px' }}  
              value={password} onChange={handleOnChangePassword}
              />
            </div>
            <div style={{ position: 'relative' }}>
              <span style={{ zIndex: '10', position: 'absolute', right: '4px', top: '8px', color: '#ccc' }} onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}>
                {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleOutlined />}
              </span>
              <InputForm placeholder='Confirm your password' type={isShowConfirmPassword ? 'text' : 'password'} style={{ marginBottom: '10px' }} 
              value={confirmPassword} onChange={handleOnChangeConfirmPassword}
              />
            </div>
            {data?.status === 'ERROR' && <span style={{ color: 'red', fontSize: '12px' }}>{data?.message}</span>}
            <Loading isPending={isPending}>
              <ButtonComponent
                disabled={!email.length || !password.length || !confirmPassword.length}
                onClick={handleSignUp}
                styleButton={{ backgroundColor: 'rgb(255, 57, 69)', height: '40px', width: '100%', border: 'none', margin: '26px 0 10px' }}
                size='40'
                border={false}
                textButton='Đăng kí'
                styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
              />
            </Loading>

            <p>
              You have an account?
              <TextLight onClick={handleNavigateSignIn} style={{ cursor: 'pointer' }}> Login now</TextLight>
            </p>
          </WrapperContainerRight>
        </WrapperContainer>
      </div>
    </div>
  );
};

export default SignUpPage;