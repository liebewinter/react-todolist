import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { useAuth } from 'contexts/AuthContext';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const navigate = useNavigate();
  const { register, isAuthenticated } = useAuth();

  const handleClick = async () => {
    if (username.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }
    if (email.length === 0) {
      return;
    }
    // 原本要從api/auth呼叫的 api register function，因爲useAuth而可以直接從useAuth裡面定義的register function呼叫，且因為useAuth已經有定義authToken內容，此處刪掉authToken，從register裡面取得username,email,password
    const success = await register({
      username,
      email,
      password,
    });

    if (success) {
      Swal.fire({
        title: '註冊成功',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
        position: 'top',
      });
      navigate('/todos');
      return;
    }
    Swal.fire({
      title: '註冊失敗',
      icon: 'error',
      showConfirmButton: false,
      timer: 1000,
      position: 'top',
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/todos');
    }
  }, [navigate, isAuthenticated]);

  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>建立您的帳號</h1>

      <AuthInputContainer>
        <AuthInput
          label="帳號"
          placeholder="請輸入帳號"
          value={username}
          onChange={(nameInputValue) => setUsername(nameInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label="Email"
          placeholder="請輸入Email"
          value={email}
          onChange={(emailInputValue) => setEmail(emailInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label="密碼"
          placeholder="請輸入密碼"
          value={password}
          onChange={(passowrdInputValue) => setPassWord(passowrdInputValue)}
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>註冊</AuthButton>
      <Link to="/login">
        <AuthLinkText>取消</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default SignUpPage;
