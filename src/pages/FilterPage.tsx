import { useNavigate } from "react-router-dom";

function FilterPage() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/login")}>
        로그인으로 이동
      </button>
    </div>
  );
}

export default FilterPage;
