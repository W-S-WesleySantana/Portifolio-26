import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #000;
`;

export const Slipcase = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #6C4AF5;
  border-radius: 0 0 15px 15px;
  background-color: #000;

  @media (max-width: 600px) {
    height: auto;
    min-height: 100vh;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    gap: 30px;
  }
`;

export const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 0 20px;

  h2 {
    color: #fff;
    font-size: 2rem;
    text-align: center;
    span {
      color: #6C4AF5;
    }
  }

  p {
    color: rgb(170, 170, 170);
    padding: 0 15px;
    line-height: 25px;
    text-align: center;
    max-width: 500px;
  }

  .ButtonBox {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    padding: 0;
  }
`;

export const RightBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .MainPhoto {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #6C4AF5;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    text-decoration: none;
    transform: scale(0.9);
    transition: 0.5s ease;

    &:hover {
      transform: scale(1);
      box-shadow: inset -1px 3px 8px 5px #1F87FF, 
                  2px 5px 16px 0px #0B325E, 
                  5px 5px 39px 5px rgba(108,74,245,0.43);
    }
  }

  img {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    padding: 0;

    .MainPhoto {
      width: 220px;
      height: 220px;
    }

    img {
      width: 200px;
      height: 200px;
    }
  }
`;

// SOBRE MIM //
export const AboutMe = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  box-sizing: border-box;

  h2 {
    color: #ffffff;
    padding: 10px;
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    width: 100%;
    max-width: 500px;
    line-height: 30px;
    font-size: 1rem;
    font-weight: 400;
    color: rgb(227, 227, 227);
    text-align: center;
  }

  @media (max-width: 600px) {
    min-height: auto;
    padding: 40px 20px;
    
    h2 {
      margin-top: 0;
      margin-bottom: 15px;
    }

    p {
      width: 100%;
    }
  }
`;
