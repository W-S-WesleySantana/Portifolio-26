import styled from 'styled-components';


export const GeneralCashFund = styled.div`

height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
background-color: #0f0e13;
border-top: 1px solid  #6C4AF5;
border-bottom: 1px solid  #6C4AF5;
border-radius: 10px;

h2{
  
  margin-top: 30px;
  color: #fff;
  
}



`


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 40px;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 600px){
  
     width: 95%;
     grid-template-columns: repeat(3, 1fr);
     
}
`;
 
export const CardContainer = styled.div`
  background-color: #1e1e24;
  width: 100px;
  height: 100px;
  border-top-left-radius: 24px; 
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transform: scale(0.9);

  &:hover{
    transition: 0.5s;
    transform: scale(1);
  }

  @media (max-width:400px){
    
  }

 
`;

export const CardTitle = styled.span`
  color: #8a7bcf; 
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 12px;

 

  
`;

export const CardIcon = styled.div`
  
 
  width: 30px;
  height: 30px;
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

