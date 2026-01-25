import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '@/app/MainPage';
import AppLayout from '@/layouts/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<MainPage/>} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
