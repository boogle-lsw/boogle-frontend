import { useNavigate } from "react-router-dom";

function FilterPage() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/cafelist")}>
        적용하기 - 카페 리스트 페이지로 이동
      </button>
    </div>
  );
}

export default FilterPage;
