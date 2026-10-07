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


@media (max-width: 500px) {


   flex-direction: column-reverse;
   justify-content: center;
   align-items: center;
   height: 90%;

  
   .Curriculo, .Contato{
    width: 150px;
   }

  

   

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
}

.ButtonBox{
    display: flex;
    gap: 15px;

    .Curriculo, .Contato{
        padding: 10px 20px;
        border-radius: 15px;
        border: none;
        cursor: pointer;
        color: #ffffff;
        font-weight: 500;
        background-color: #6C4AF5;
        transform: scale(1);

     &:hover{
        background-color:rgb(62, 41, 147);
        transition: 0.5s;
        transform: scale(0.9);
        -webkit-box-shadow: 
        0px 10px 13px -7px #000000, 
        9px 16px 50px 2px rgba(108,74,245,0.68); 

        box-shadow: 0px 10px 13px -7px #000000, 
        9px 16px 50px 2px rgba(108,74,245,0.68);
}
     }

    }

    .Contato{
        background-color: transparent;
        border: 1px solid #6C4AF5;
    }


    @media (max-width: 500px){
        gap: 5px;
        p{
            padding: 5px;
        }
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
    width: 350px;
    line-height: 25px;
    font-size: 1rem;
    color:rgb(168, 168, 168);
 }
 
 
 `

