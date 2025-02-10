import React from "react";

const Chatbot = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        right: "5%",
        transform: "translateY(-50%)",
        zIndex: 1000,
        width: "600px",
        height: "830px",
        backgroundColor: "#F7F7F7",
        borderRadius: "15px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 헤더 영역 */}
      <div
        style={{
          padding: "15px",
          borderBottom: "1px solid #eee",
          backgroundColor: "#948F78",
          borderRadius: "15px 15px 0 0",
          color: "white",
          fontFamily: "'Oswald', sans-serif",
          fontWeight: "600",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>L a w C h a t</span>
      </div>

      {/* 메시지 영역 */}
      <div
        style={{
          flex: 1,
          overflow: "auto",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {/* 챗봇 메시지 */}
        <div
          style={{
            backgroundColor: "#e2e2e2",
            padding: "10px 15px",
            borderRadius: "15px 15px 15px 15px",
            maxWidth: "80%",
            alignSelf: "flex-start",
            fontFamily: "'Gothic A1', sans-serif",
            fontWeight: "500",
            fontSize: "15px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "-8px",
              bottom: "0",
              width: "15px",
              height: "15px",
              background: "#e2e2e2",
              clipPath: "polygon(0 0, 100% 100%, 100% 0)",
            }}
          />
          안녕하세요! 무엇을 도와드릴까요?
        </div>

        {/* 사용자 메시지 */}
        <div
          style={{
            backgroundColor: "#948F78",
            color: "white",
            padding: "10px 15px",
            borderRadius: "15px 15px 12px 15px",
            maxWidth: "80%",
            alignSelf: "flex-end",
            fontSize: "15px",
            fontFamily: "'Gothic A1', sans-serif",
            fontWeight: "400",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "-8px",
              bottom: "0",
              width: "15px",
              height: "15px",
              background: "#948F78",
              clipPath: "polygon(0 100%, 0 0, 100% 0)",
            }}
          />
          이혼하고 싶어요.
        </div>
      </div>

      {/* 입력 영역 */}
      <div
        style={{
          borderTop: "1px solid #eee",
          padding: "30px",
          display: "flex",
          gap: "10px",
          backgroundColor: "#ececec",
          borderRadius: "0 0 15px 15px",
        }}
      >
        <input
          type="text"
          placeholder="메시지를 입력하세요."
          style={{
            flex: 1,
            padding: "15px",
            borderRadius: "20px",
            border: "1px solid #ddd",
            outline: "none",
            fontSize: "14px",
          }}
        />
        <button
          style={{
            padding: "8px 20px",
            width: "100px",
            backgroundColor: "#948F78",
            color: "white",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            fontFamily: "'Gothic A1', sans-serif",
            fontWeight: "400",
            fontSize: "15px",
            marginLeft: "10px",
          }}
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
