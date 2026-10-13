import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GwEletronico from "../../assets/ImgProjects/GwEletronicos.png";
import BapCel from '../../assets/ImgProjects/BapCell.png'
import Barbearia from '../../assets/ImgProjects/barbearia.png'
import Academia from '../../assets/ImgProjects/academia.png'
import beleza from '../../assets/ImgProjects/beleza.png'
import filmes from '../../assets/ImgProjects/filmes.png'
import mario from '../../assets/ImgProjects/mario.png'
import pizza from '../../assets/ImgProjects/pizza.png'
import tarefas from '../../assets/ImgProjects/tarefas.png'
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
  { 
    id:2 , 
    img: BapCel  , 
    name: "BapCell",
    description:"BapCell é uma plataforma web moderna desenvolvida em React para o gerenciamento e captação de clientes de uma assistência técnica de smartphones. O sistema centraliza a solicitação de orçamentos gratuitos por meio de um formulário dinâmico, direcionando o atendimento de forma ágil diretamente para o WhatsApp. Conta também com seções integradas para exibição de serviços, acessórios em destaque e um painel administrativo para controle interno."
  },
  { 
    id:3 , 
    img: Barbearia , 
    name: "Barbearia Da galera",
    description: "Barbearia da Galera é uma landing page de alta conversão estilo , desenvolvida em React para o setor de estética masculina. O projeto centraliza os canais de contato do estabelecimento (WhatsApp e Instagram), exibe métricas de relevância social (avaliações e agendamentos) e conta com um carrossel interativo para demonstração do portfólio de cortes."
 },

 { 
    id:4, 
    img:Academia , 
    name: "Academia",
    description: "Elite FitnesDesenvolvimento de uma landing page responsiva focada na conversão de novos alunos para academia. O projeto combina um visual dark moderno com call-to-actions estratégicos (agendamento e WhatsApp), destaque para números de impacto e secções explicativas claras.Oferecer uma navegação fluida e aumentar a taxa de adesão a aulas experimentais"
 },
 { 
    id:5 , 
   img: beleza, 
    name: "Salão de Beleza",
    description: "Desenvolvimento de uma landing page elegante e altamente conversiva para o setor de beleza e estética. O projeto combina um visual dark premium com destaque para prova social e agendamento simplificado."
  },
  { 
    id:6 , 
    img:filmes , 
    name: "WsMovies",
    description: "Desenvolvimento da interface de uma plataforma de catálogo de filmes e séries com foco numa experiência imersiva e moderna de utilizador. O projeto destaca um hero banner dinâmico com sinopse, capa do filme e opções rápidas de reprodução."
  },
  { 
    id:7 , 
    img: mario , 
     name: "Encanadores Mario & Luigi",
     description: "Desenvolvimento de uma landing page temática e divertida para prestação de serviços hidráulicos inspirada nos famosos irmãos canalizadores. O projeto combina uma narrativa criativa com foco em conversão rápida para serviços de emergência."
  },
  { 
    id:8 , 
   img: pizza, 
   name: "Pizzaria",
    description: "Desenvolvimento de uma landing page moderna e atrativa para o setor gastronómico, focada no destaque de pizzas artesanais e na facilidade de pedidos online. O projeto combina um visual dark acolhedor com botões diretos de conversão e prova social."
  },
  { 
    id:9 , 
    img: tarefas , 
    name: "Tarefas",
    description: "Desenvolvimento de uma aplicação web funcional de gestão de tarefas, focada em produtividade e simplicidade de utilização. O projeto apresenta uma interface limpa e intuitiva para organização da rotina diária."
  },

];    


function Projects({ limite }) {
  const [activeProject, setActiveProject] = useState(null);

  const  navigate = useNavigate();


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

     
      {limite && 
      <Button 
      label={"Ver Mais"} 
      onClick={() => navigate('/projetos') }
      
      />}
    </Container>
  );
}

export default Projects;
