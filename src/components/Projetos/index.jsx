import { useState } from "react";
import GwEletronico from "../../assets/ImgProjects/GwEletronicos.png";
import { 
  Container, Title, Subtitle, ContainerProjects, 
  ProjectBox, ImgProject, ProjectTitle, ProjectFooter,
  ModalOverlay, ModalContainer, CloseButton 
} from "./styles";
import Button from "../Button";


const todosOsProjetos = [
  { 
    id: 1, 
    img: GwEletronico, 
    name: "Gw Eletronico",
    description: "Este é um projeto de e-commerce completo desenvolvido para a GW Eletrônicos. Conta com carrinho de compras dinâmico, integração com meios de pagamento e um painel administrativo totalmente responsivo."
  },
 
]; 


function Projects({ limite }) {
  const [activeProject, setActiveProject] = useState(null);


  const projetosExibidos = limite 
    ? todosOsProjetos.slice(0, limite) 
    : todosOsProjetos;

  return (
    <Container>
      <Title>Projetos</Title>
    
      <Subtitle>{limite ? "Destaques" : "Todos os Projetos"}</Subtitle>

      <ContainerProjects>
     
        {projetosExibidos.map((project) => (
          <ProjectBox key={project.id}>
            <ImgProject src={project.img} alt={project.name} />
            <ProjectTitle>{project.name}</ProjectTitle>
            
            <ProjectFooter>
              <h3>{project.name}</h3>
              <button onClick={() => setActiveProject(project)}>
                Ver mais
              </button>
            </ProjectFooter>
          </ProjectBox>
        ))}
      </ContainerProjects>

      {activeProject && (
        <ModalOverlay onClick={() => setActiveProject(null)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setActiveProject(null)}>X</CloseButton>
            <h2>{activeProject.name}</h2>
            <p>{activeProject.description}</p>
          </ModalContainer>
        </ModalOverlay>
      )}

     
      {limite && <Button label={"Ver Mais"} />}
    </Container>
  );
}

export default Projects;
