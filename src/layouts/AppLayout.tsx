// 화면 프레임 / 모바일 폭 / 공통 UI 제공하는 역할 

import type { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-[375px] min-h-screen bg-[#EEE9E5]">
        {children}
      </div>
    </div>
  );
}
