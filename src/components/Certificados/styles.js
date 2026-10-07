import styled from "styled-components";


export const Container = styled.div`

width: 100%;
height: 100%;
text-align: center;
justify-content: center;


h1{
    color: #fff;
}


`

export const ContainerCertificados = styled.div`

width: 100%;
height: 70%;
display: grid;
grid-template-columns: repeat(3, 1fr);
align-items: center;



div{
   
    
    width: 250px;
    height: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


h2{
    color: #fff;
    padding: 5px;
 
   
}

img{
    width: 250px;
 

    
}
`