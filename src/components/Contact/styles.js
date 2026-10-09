import styled from "styled-components";


export const Container = styled.div`
background-color: #000;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #fff;
border-top: 1px solid  #6C4AF5;
border-bottom: 1px solid  #6C4AF5;
border-radius:15px ;

 
h2{
    font-size: 2rem;
    margin-bottom: 30px;
   
}

@media (max-width:600px){
    h2{
        margin-top: 5vh;
    }
}
`

export const ConteinerContact = styled.div`

display: flex;
gap: 10px;

@media (max-width: 600px){
    flex-direction: column;
    height: 100vh;
   
}

`
export const Contatos = styled.a`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center ;
padding: 15px;
color: #ffffff;

h3{
    font-size: 1.3rem;
    padding: 5px;
}
p{
    font-size: 1rem;
    color:rgb(180, 180, 180);
}

@media (max-width: 600px){

    width: 200px;
    padding: 8px;
   
}`
      
export const  IconWrapper = styled.div`

font-size: 50px;
border-radius: 30px;
padding: 8px;
background-color: rgb(28, 28, 28);
color: #6C4AF5 ;
transform: scale(0.9);


&:hover{
    transform: scale(1);
    transition: 1s;
}

@media (max-width: 600px){
 
    font-size: 30px;
    padding: 5px;
    
}


`



