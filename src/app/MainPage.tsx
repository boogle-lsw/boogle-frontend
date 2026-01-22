import Button from "@/components/common/Button"; 
import Logo from "@/assets/images/mainLogo.png";

function MainPage() {
  return (
    <div className="min-h-screen bg-EEE9E5 flex flex-col items-center">
      <img src={Logo} alt="Boogle 로고" className="w-80 mb-1"/>
      <h1 className="text-3xl font-bold text-center py-8">Boogle</h1>
      <p className="text-sm  text-center">신촌 및 홍대 지역 대학생을 위한 <br/> 맞춤형 카페 추천 서비스</p>

      <Button size = "large" >로그인하기</Button>

    </div>
  );
}

export default MainPage;
