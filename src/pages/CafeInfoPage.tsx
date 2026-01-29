import { useNavigate } from "react-router-dom";

function CafeInfoPage () {
  const navigate = useNavigate();

  return (
    <div>
      <h1>CafeInfoPage</h1>
      <button onClick={() => navigate("/mainpage")}>
         홈으로
      </button>
    </div>
  );
}

export default CafeInfoPage;
