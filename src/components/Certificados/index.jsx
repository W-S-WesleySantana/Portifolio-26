import { Container, ContainerCertificados } from "./styles"
import HTML from "../../assets/Certificados/HTML.png"
import Button from "../Button"

// 1. Crie a lista completa de certificados FORA do componente ou vindo de um arquivo separado
const todosOsCertificados = [
  {id: 1, name: "HTML", src: HTML},
  {id: 2, name: "CSS", src: HTML}, 
  {id: 3, name: "JavaScript", src: HTML},
  {id: 4, name: "React", src: HTML},
  {id: 5, name: "Node.js", src: HTML},
]


function Certificados({ limite }) {
  
  
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
      
    
      {limite && <Button label={"Ver Mais"} />}
    </Container>
  )
}

export default Certificados
