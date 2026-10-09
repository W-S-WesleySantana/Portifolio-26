import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: hidden;

  h1 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 15px;
    text-align: center;
  }

  @media (max-width: 600px) {
    height: 100vh; 
    padding: 10px;

    h1 {
      margin-bottom: 0px;
      margin-top: 20px;
      font-size: 1.5rem; 
    }
  }
`;

export const ContainerCertificados = styled.div`
  width: 100%;
  max-height: 70vh; 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 20px;
  align-items: center;
  overflow-y: auto; 
  padding: 10px;

  div {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease; 

  

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }

  h2 {
    color: #fff;
    font-size: 1rem;
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    padding: 5px;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 100px); 
    margin: 0;
   

    div {
     
      flex-shrink: 0; 
      margin-bottom: 15px;
    }

    img {
      width: 80%;
      max-width: 300px;
    }
  }
`;
