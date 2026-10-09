import { useNavigate } from "react-router-dom"
import { Container, ContainerCertificados } from "./styles"
import HTML from "../../assets/Certificados/HTML.png"
import CSSavancado from "../../assets/Certificados/cssAvancado.jpeg"
import JavaScript from "../../assets/Certificados/js.jpeg"
import React from "../../assets/Certificados/HTML.png"
import NodeJs from "../../assets/Certificados/node.jpeg"
import Programacaodo from "../../assets/Certificados/Progamacaodo.jpeg"
import GitGithub from "../../assets/Certificados/GitGithub.png"
import Bancodedados from "../../assets/Certificados/ADMDB.jpeg"
import Cienciadedados from "../../assets/Certificados/cienciaDEdados.jpeg"
import Excel from "../../assets/Certificados/Excel.jpeg"
import HardwareSoftware from "../../assets/Certificados/H.S.jpeg"
import LGPD from "../../assets/Certificados/LGPD.jpeg"
import SGTI from "../../assets/Certificados/SGTI.jpeg"
import Button from "../Button"


const todosOsCertificados = [
  {id: 1, name: "HTML", src: HTML},
  {id: 2, name: "CSS-Avançado", src: CSSavancado}, 
  {id: 3, name: "JavaScript", src: JavaScript},
  {id: 4, name: "React", src: React},
  {id: 5, name: "Node.js", src: NodeJs},
  {id: 6, name: "Git-GitHub", src: GitGithub},
  {id: 7, name: "Progamação do Zero Ia", src: Programacaodo},
  {id: 8, name: "Administrando Banco de Dados", src: Bancodedados},
  {id: 9, name: "Segurança da Tecnologia da Informação", src: SGTI},
  {id: 10, name: "Excel", src: Excel},
  {id: 11, name: "Hardware Software", src: HardwareSoftware},
  {id: 12, name: "LGPD", src: LGPD},
  {id: 13, name: "Ciencia De Dados", src: Cienciadedados},
  
]


function Certificados({ limite }) {

  const navigate = useNavigate();
  
  
  const certificadosExibidos = limite 
    ? todosOsCertificados.slice(0, limite) 
    : todosOsCertificados;

  return (
    <Container>
     <h1>Certificados</h1>
     
      <ContainerCertificados>
     
        {certificadosExibidos.map((certificado) => (
          <div key={certificado.id}>
            <h2>{certificado.name}</h2>
         
            <img src={certificado.src} alt={`Certificado de ${certificado.name}`} />
          </div>
        ))}
      </ContainerCertificados>
      
     
      {limite && 
      <Button 
      label={"Ver Mais"}
      onClick={() => navigate('/certificados')}
      width={'100%'}
      
        
      />}
    </Container>
  )
}

export default Certificados
