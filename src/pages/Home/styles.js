import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
overflow-y: auto;


`

export const Slipcase = styled.div`

width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;


@media (max-width: 600px) {


   flex-direction: column-reverse;
   justify-content: center;
   align-items: center;
   height: 90%;
   margin-top: 10vh;

}

`

export const LeftBox = styled.div`

width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;

h2{
    color: #fff;
    font-size: 2rem;

    span{
        color: #6C4AF5;
    }
}

p{ 
 color: rgb(170, 170, 170) ;
 padding: 15px;
 line-height: 25px;
 text-align: center;
 justify-content: center;
}

.ButtonBox{
    display: flex;
    gap: 10px;
}

@media (max-width: 600px){

width: 90%;
}

`

export const RightBox = styled.div`

width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

.MainPhoto{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #6C4AF5;
    width: 250px;
    height: 250px;
    border-radius: 150px;
    text-decoration: none;
    transform: scale(0.9);

    &:hover{

        transition: 0.5s;
        transform: scale(1);
        -webkit-box-shadow: 
        inset -1px 3px 8px 5px #1F87FF, 
        2px 5px 16px 0px #0B325E, 
        5px 5px 39px 5px rgba(108,74,245,0.43); 

        box-shadow: inset -1px 3px 8px 5px #1F87FF,
         2px 5px 16px 0px #0B325E, 
         5px 5px 39px 5px rgba(108,74,245,0.43);

    }
}

img{
        width: 230px;
        height: 230px;
        border-radius: 250px;
    }




`

//SOBRE MIM//


export const AboutMe = styled.div`
 
 height: 100%;
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 


 h2{
    color: #ffffff;
    padding: 10px;
    font-size: 2rem;
    margin-top: 15vh;
 }

 p{
    width: 450px;
    line-height: 30px;
    font-size: 1rem;
    font-weight: 400;
    color:rgb(227, 227, 227);
 }

 @media (max-width: 600px){
   
    p{
        width: 80%;
    }
 }
 
 
 `

