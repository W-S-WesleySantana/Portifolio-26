import Wsimag from '../../assets/imgWs.png'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import Cards from "../../components/Cards";
import Certificados from "../../components/Certificados";
import Contacts from "../../components/Contact";
import Header from "../../components/Header"
import Projects from "../../components/Projetos";
import Button from "../../components/Button";

import { AboutMe, Container, LeftBox, RightBox, Slipcase } from "./styles";

function Home() {

  const phoneNumber = '5511971985753'
  const linkWhatsApp = `https://wa.me/${phoneNumber}`;

     
  return (
    <Container>

      <Header />

      <Slipcase>

        {/*CAIXA A ESQUERDA */}

        <LeftBox>

          <h2>Olá, eu sou o <br /> <span> Wesley Santana :) </span> </h2>

          <p>Desenvolvedor Front-End Jr. <br />

            <FaHtml5 />HTML |

            <FaCss3Alt /> CSS |

            <FaJs /> JS |

            <FaReact /> React.js
            |</p>


          <div className="ButtonBox">

            <a href="https://drive.google.com/file/d/1Bwx272pilfspGOY_sCBXmdwWsP1LOHUI/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button
                label={"Download CV"} />
            </a>  

            <Button
              label={"Entra Em Contato"}
              onClick={() => window.open(linkWhatsApp, '_blank', 'noopener,noreferrer')}

            />

          </div>

        </LeftBox>

        {/*CAIXA A DIREITA */}

        <RightBox>

          <a className="MainPhoto" href="https://github.com/W-S-WesleySantana " target="_blank" rel="noopener noreferrer"> <img src={Wsimag} alt="Imagem Wesley Santana" /></a>

        </RightBox>

      </Slipcase>

      {/*SOBRE MIM*/}


      <AboutMe>

        <h2>Sobre Mim</h2>

        <p>Tenho 25 anos e sou um Desenvolvedor Front-End em transição de carreira, focado em criar interfaces modernas, limpas e responsivas. Estou em busca da minha primeira oportunidade profissional no mercado de tecnologia.

        Sou extremamente pontual e focado no cumprimento rigoroso de prazos.
        Esforçado, autodidata e em constante aprendizado para entregar códigos de qualidade.
        Tenho como objetivo atuar em projetos reais onde eu possa colaborar com o time e evoluir minhas habilidades técnicas.
         
        </p>


      </AboutMe>


      {/*HABILIDADES */}

      <Cards />

      <Projects limite={4} />

      <Certificados limite={3} />

      <Contacts />



    </Container>
  );
}

export default Home;