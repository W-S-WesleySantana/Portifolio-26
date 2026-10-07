import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  gap: 24px;
  background-color: #0f0e13;
  padding: 40px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


export const CardContainer = styled.div`
  background-color: #1e1e24;
  width: 160px;
  height: 160px;
  border-top-left-radius: 24px; 
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transform: scale(0.9);

  &:hover{
    transition: 0.5s;
    transform: scale(1);
  }

 
`;

export const CardTitle = styled.span`
  color: #8a7bcf; 
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 12px;

 

  
`;

export const CardIcon = styled.div`
  
 
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12rem;
  color: #8a7bcf;
  transform: scale(0.9);

  &:hover{
    transition: 0.5s;
    transform: scale(1.3);
  }
  



`



export const BorderBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #5d3fd3, #a020f0);
`;

