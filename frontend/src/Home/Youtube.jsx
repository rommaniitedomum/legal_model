import React, { useState, useEffect } from "react";

const Youtube = () => {
  // YouTube 영상 데이터 (예시)
  const youtubeVideos = [
    { id: 1, embedId: "video1" },
    { id: 2, embedId: "video2" },
    { id: 3, embedId: "video3" },
    { id: 4, embedId: "video4" },
    { id: 5, embedId: "video5" },
  ];

  // 현재 표시할 시작 인덱스 상태
  const [startIndex, setStartIndex] = useState(0);

  // 자동 롤링 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex + 1 >= youtubeVideos.length ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 화면에 보여질 4개의 아이템만 선택
  const getVisibleItems = (items) => {
    const visibleItems = [];
    for (let i = 0; i < 4; i++) {
      const index = (startIndex + i) % items.length;
      visibleItems.push(items[index]);
    }
    return visibleItems;
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "5rem 7rem",
    width: "80%",
    padding: "0",
    overflow: "hidden",
    marginLeft: "1rem",
  };

  // 페이지네이션 점 렌더링 함수 추가
  const renderPaginationDots = (totalItems) => {
    const totalPages = totalItems.length;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "0.5rem",
          marginTop: "2rem",
          marginLeft: "30rem",
        }}
      >
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setStartIndex(index)}
            style={{
              width: "10px",
              height: "13px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: startIndex === index ? "#828282" : "#d2d2d2",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            aria-label={`Page ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#E1DFD9] py-16 mt-32">
      <div className="layout-container">
        <div className="layout-left">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "6rem",

              marginRight: "43rem",
            }}
          >
            <h2
              className="text-white"
              style={{
                WebkitTextStroke: "1px #c8c8c8",
                textStroke: "1px #dcdcdc",
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              YouTube
            </h2>
          </div>

          <div style={containerStyle}>
            {getVisibleItems(youtubeVideos).map((video, index) => (
              <div
                key={`${video.id}-${startIndex}-${index}`}
                style={{
                  width: "80%",
                  height: "200px",
                  margin: index % 2 === 0 ? "0 0 0 auto" : "0 auto 0 0",
                  borderRadius: "32px",
                  overflow: "hidden",
                  backgroundColor: "white",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
                className="aspect-video hover:scale-105 transition-transform duration-300"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    borderRadius: "32px",
                  }}
                />
              </div>
            ))}
          </div>

          {renderPaginationDots(youtubeVideos)}
        </div>
      </div>
    </div>
  );
};

export default Youtube;
