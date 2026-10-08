import styled from "styled-components";


export const Container = styled.div`

width: 100%;
height: 100%;
text-align: center;
justify-content: center;


h1{
    color: #fff;
    font-size: 2rem;
    margin-bottom: 15px;

}
@media (max-width: 600px){
    width: auto;
    height: auto;
    padding: 2px;
    margin-bottom: 15px;


    
}

`
export const ContainerCertificados = styled.div`

width: 100%;
height: 50%;
margin-top: 10vh;
display: grid;
grid-template-columns: repeat(3, 3fr);
gap: 20px 5px;
align-items: center;

@media (max-width: 600px){

    grid-template-columns: repeat(1,1fr);
    height: auto;
    margin-top: 8px;

}

div{
   
    width: 250px;
    height: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: scale(0.9);

    &:hover{
    cursor: pointer;
    transform: scale(1);
    transition: 0.5s;
}

@media (max-width: 600px){

  
  width: 90%;
  margin-bottom: 15px;

}

}

h2{
    color: #fff;
    font-size: 1rem;
  
}

img{
  
   width: 250px;
    padding: 5px; 

    @media (max-width: 600px){

    width: 100%;
    padding: 5px;
    
}
}



`