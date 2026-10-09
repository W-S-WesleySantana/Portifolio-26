import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  overflow-x: hidden;

  @media (max-width: 600px) {
    height: auto;
    min-height: 100vh;
    padding-bottom: 30px;
  }
`;

export const Title = styled.h2`
  margin: 5vh auto 20px auto;
  font-size: 2rem;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    margin: 3vh auto 15px auto;
    font-size: 1.7rem;
  }
`;

export const Subtitle = styled.h3`
  margin: 0 20px;
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
`;

export const ContainerProjects = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    height: auto;
    gap: 20px;
    padding: 10px 20px;
  }
`;

export const ProjectTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: rgb(255, 255, 255);       
  font-size: 1.5rem; 
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); 
  z-index: 2; 
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  width: 90%;
`;

export const ProjectFooter = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85); 
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 3;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;

  h3 {
    color: #fff;
    font-size: 1rem;
    margin: 0;
  }

  button {
    background-color: #6C4AF5; 
    color: #fff;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background-color: #4a3894;
    }
  }
`;

export const ProjectBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 200px; 
  overflow: hidden;
  border-radius: 8px; 
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); 
    z-index: 1;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    &::before {
      opacity: 0;
    }
 
    ${ProjectTitle} {
      opacity: 0;
      transform: translate(-50%, -70%);
    }

    ${ProjectFooter} {
      transform: translateY(0);
    }
  }
`;

export const ImgProject = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  display: block;
`;

export const ModalOverlay = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; 
  padding: 20px;
  box-sizing: border-box;
`;

export const ModalContainer = styled.div`
  background-color: #1e1e1e; 
  color: #ffffff;
  width: 100%;
  max-width: 500px;
  padding: 30px;
  border-radius: 12px;
  position: relative; 
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  animation: modalFadeIn 0.3s ease-out forwards;

  h2 {
    margin: 0 0 15px 0;
    font-size: 1.8rem;
    color: #6C4AF5; 
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #cccccc;
    margin: 0;
  }

  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #888888;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #ffffff;
    transform: scale(1.1); 
  }
`;