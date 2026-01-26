// pages/LoginPage.tsx
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: '최환' });
    navigate('/mainpage');
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">로그인 페이지</h1>
      <button
        className="px-4 py-2 bg-black text-white rounded-md"
        onClick={handleLogin}
      >
        로그인 (임시)
      </button>
    </div>
  );
}
