import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100vw;
height: 15vh;
margin: 0 auto;
align-items: center;
border-bottom: 1px solid #6C4AF5;
color: #fff;
position: fixed;
z-index: 10;
background:  #16161d;


@media (max-width: 500px){
    z-index: 0;
    position: relative;
    height: 10vh;
}



img{

width: 50px;
border-radius: 30px;
margin: 20px 0 20px 30px;
position: relative;

}

.title{
    margin: 0 auto;
}

h1{
    margin: 0 auto;
}


 
           


`