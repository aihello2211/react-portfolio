import React from "react";
import styled from "styled-components";
import video1 from "assets/video1.png";
import video2 from "assets/video2.png";

const Video = () => {
  return (
    <Section>
      <div className="background">
        <img src={video1} alt="Design" className="design1" />
        <img src={video2} alt="Design" className="design2" />
      </div>
      <div
        className="video"
      >
        <iframe
          width="960"
          height="515"
          src="https://www.youtube.com/embed/0lbzmZeS-BY?si=ncGRu61FVY0FZd5o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Section>
  )
}

const Section = styled.section`
  background-color: #662d91aa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .video {
    z-index: 10;
  }
  .background {
    .design1 {
      position: absolute;
      left: 0;
      bottom: -8rem;
      width: 18rem;
    }
    .design2 {
      position: absolute;
      right: 5rem;
      top: 3rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }
    height: 100%;
    padding: 6rem 2rem;
    .video {
      iframe {
        height: 10rem;
        width: 80vw;
      }
    }
  }
`;

export default Video
