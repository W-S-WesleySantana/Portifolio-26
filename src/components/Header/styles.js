import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100%;
height: 12vh;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #6C4AF5;
color: #fff;
position: fixed;
z-index: 10;
background:  #16161d;


@media (max-width: 600px){

height: 8vh;

h1{
    display: none;
}

}

`

export const BoxLogoWs = styled.div`


margin-left: 40px ;

img{

width: 40px;
border-radius: 40px;
padding: 2px;

}

@media (max-width: 600px){

img{ 
    display: none;
}

}
 
`

export const Nav = styled.div`

display: flex;
margin-right: 15px;
gap: 10px;

@media (max-width: 600px){

    margin: 0 auto;

}

`