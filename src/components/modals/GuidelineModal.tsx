interface GuidelineModalProps {
  onClose: () => void;
}

function GuidelineModal({ onClose }: GuidelineModalProps) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "360px",
          backgroundColor: "#fff",
          padding: "24px",
          borderRadius: "8px",
          position: "relative",
          lineHeight: 1.6,
        }}
      >
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>
          가이드라인 · 팝업
        </p>

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          행복한 카페문화를 만들기 위한 <br />
          <strong>Boogle 가이드라인</strong>
        </h2>

        <ol style={{ fontSize: "14px", paddingLeft: "18px" }}>
          <li>
            <strong>Boogle</strong>은 ‘작업하기 좋은 카페’를 발견하는 여정을 돕는
            서비스예요. <br />
            당신의 취향에 꼭 맞는 공간을 더 쉽게 찾을 수 있도록
            만들었습니다.
          </li>
          <br />
          <li>
            우리는 카페에서의 ‘예의 있는 작업 문화’를 소중히 생각합니다.
            <br />
            카공족 이용에 무례한 사용은 조장하지 않으며, 각 공간을 존중하는
            마음으로 Boogle을 이용해 주세요.
          </li>
          <br />
          <li>
            카페가 자신의 정보를 숨기고 싶다면 Boogle은 언제든 존중합니다.
            <br />
            노출을 원치 않는 매장은 편하게 연락 주세요. 빠르게 조치하겠습니다.
          </li>
          <br />
          <li>
            혹시 잘못된 정보나 수정이 필요한 내용이 보였다면 알려주세요.
            <br />
            Boogle은 사용자와 함께 만드는 서비스이기에, 여러분의 제보는 큰
            힘이 됩니다.
          </li>
          <br />
          <li>
            모두가 편안하게 머무를 수 있는 카페 문화를 함께 만들어가고 싶어요.
            <br />
            작은 배려와 정확한 정보 공유가 더 따뜻한 카페 찾기 경험을
            완성합니다.
          </li>
        </ol>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            fontSize: "12px",
            color: "#666",
          }}
        >
          <button
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            오늘 하루 보지 않음
          </button>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default GuidelineModal;
