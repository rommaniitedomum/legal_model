import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Youtube from "./Youtube";
import "../styles/common.css";
import Chatbot from "../chatbot/Chatbot.jsx";

const Main = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.5;
    }

    // 스크롤 가능하도록 설정
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowY = "scroll"; // 스크롤 허용
    document.body.style.overflowX = "hidden"; // 가로 스크롤 방지
  }, []);

  return (
    <>
      <div className="relative w-screen h-[85vh] m-0 p-0 bg-black">
        <video
          ref={videoRef}
          src="/Main_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            margin: 0,
            padding: 0,
            zIndex: -1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 0,
          }}
        />

        <div className="layout-container">
          <div className="layout-left">
            {/* 로고 및 링크 */}
            <div
              style={{
                position: "absolute",
                left: "6rem",
                top: "3.5rem",
                display: "flex",
                alignItems: "center",
                gap: "2.5rem",
                zIndex: 2,
              }}
            >
              <Link
                to="/"
                onClick={() => window.location.reload()}
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 200,
                    color: "white",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  Lawmang
                </div>
              </Link>

              <Link
                to="/consultation"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "white",
                  fontFamily: "'Gothic A1', sans-serif",
                  textDecoration: "none",
                  transition: "opacity 0.3s ease",
                  paddingTop: "1rem",
                  paddingLeft: "6rem",
                }}
                onMouseOver={(e) => (e.target.style.opacity = "0.7")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
              >
                상담사례
              </Link>

              <Link
                to="/precedent"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "white",
                  fontFamily: "'Gothic A1', sans-serif",
                  textDecoration: "none",
                  transition: "opacity 0.3s ease",
                  paddingTop: "1rem",
                  paddingLeft: "1.5rem",
                }}
                onMouseOver={(e) => (e.target.style.opacity = "0.7")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
              >
                판례
              </Link>

              <Link
                to="/template"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "white",
                  fontFamily: "'Gothic A1', sans-serif",
                  textDecoration: "none",
                  transition: "opacity 0.3s ease",
                  paddingTop: "1rem",
                  paddingLeft: "1.5rem",
                }}
                onMouseOver={(e) => (e.target.style.opacity = "0.7")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
              >
                법률서식
              </Link>
            </div>

            {/* 메인 문구 */}
            <div
              style={{
                position: "relative",
                marginTop: "70vh",
                marginLeft: "5rem",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "lighter",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                zIndex: 10,
                opacity: 0, // 초기에는 투명하게
                animation: "slideUp 1.5s ease-out forwards", // 애니메이션 적용
              }}
            >
              <style>
                {`
                  @keyframes slideUp {
                    0% {
                      opacity: 0;
                      transform: translateY(70px);
                    }
                    30% {
                      opacity: 0;
                    }
                    100% {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}
              </style>
              <h3
                style={{
                  fontSize: "2.25rem",
                  marginBottom: "1rem",
                  fontFamily: "'Gothic A1', sans-serif",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                }}
              >
                법률의 힘을 믿으세요
              </h3>
              <br />
              <div
                style={{
                  fontFamily: "'Gothic A1', sans-serif",
                  textShadow: "1px 1px 9px rgba(0, 0, 0, 1)",
                }}
              >
                법은 우리가 일상에서 마주치는 여러 어려움을 해결할 수 있는
                강력한 도구입니다.
                <br />
                <br />
                법적 문제에 대해 올바르고 확실한 답을 찾고 싶다면, 로망과
                함께하세요.
              </div>
            </div>
          </div>
          <div className="layout-right">
            <Chatbot />
          </div>
        </div>
      </div>

      {/* Youtube 섹션 */}
      <div style={{ marginTop: "125px" }}>
        <Youtube />
      </div>
    </>
  );
};

export default Main;
