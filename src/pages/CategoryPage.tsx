import { useNavigate } from "react-router-dom";

function CategoryPage () {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/filter")}>
         선택 완료 (이후 세부 분류 페이지로 이동)
      </button>
    </div>
  );
}

export default CategoryPage;
