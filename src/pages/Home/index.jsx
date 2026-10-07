import Cards from "../../components/Cards";
import Header from "../../components/Header"

import { AboutMe, Container, LeftBox, RightBox, Slipcase } from "./styles";

function Home() {

  return (
    <Container>

   <Header/>

   <Slipcase>

    {/*CAIXA A ESQUERDA */}

   <LeftBox>

   <h2>Olá, eu sou o <br /> <span> Wesley Santana :) </span> </h2>

   <p>Desenvolvedor Front-End | React.js |</p>

 
 <div className="ButtonBox">
    <button className="Curriculo">Dawnload CV</button>

    <button className="Contato">Entra Em Contato</button>

 </div>

   </LeftBox>

    {/*CAIXA A DIREITA */}

   <RightBox>

   <a className="MainPhoto" href="https://github.com/W-S-WesleySantana " target="_blank" rel="noopener noreferrer"> Foto</a>

   </RightBox>

   </Slipcase>
   
    {/*SOBRE MIM*/}


   <AboutMe>
   
   <h2>Sobre Mim</h2>

   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur qui reprehenderit blanditiis sit molestiae, quaerat quidem porro, at, hic quod unde eum asperiores dolor accusamus voluptatum minima earum impedit officia.
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui nulla quisquam cupiditate ex soluta minus obcaecati magni quis fugit labore, aspernatur aliquid. Est deleniti saepe, delectus et quia eligendi!
   </p>


   </AboutMe>


   {/*HABILIDADES */}
      
      <Cards/>
      


    </Container>
  );
}

export default Home;