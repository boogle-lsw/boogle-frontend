import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import Header from '@/components/Header';

import MainPage from '@/pages/MainPage';
import MyPage from '@/pages/MyPage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CategoryPage from './pages/CategoryPage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/category" element={<CategoryPage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
