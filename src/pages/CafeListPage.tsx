import { useNavigate } from "react-router-dom";

function CafeListPage () {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/cafeinfo")}>
         카페소개페이지로 이동
      </button>
    </div>
  );
}

export default CafeListPage;
