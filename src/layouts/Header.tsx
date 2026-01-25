import mainLogo from '@/assets/images/mainLogo.png';
import { useAuth } from '@/contexts/AuthContext';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="h-14 px-4 flex items-center justify-between border-b border-gray-200 bg-[#EEE9E5]">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src={mainLogo}
          alt="Boogle Logo"
          className="h-7 cursor-pointer"
        />
          <span className="text-lg font-bold tracking-tight">
          Boogle!
        </span>
      </div>

      {/* Right area */}
      <div className="flex items-center text-sm font-medium">
        {user ? (
          <span>{user.name}님</span>
        ) : (
          <button className="px-3 py-1 border border-gray-300 rounded-md bg-white">
            로그인
          </button>
        )}
      </div>
    </header>
  );
}
