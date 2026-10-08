import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaFigma, 
  FaNode, 
  FaGitSquare,
  FaGithub
} from "react-icons/fa";
import { 
    BorderBottom, 
    CardContainer, 
    CardIcon, 
    CardTitle, 
    Container, 
    GeneralCashFund
} from './styles';
import { RiTailwindCssFill } from "react-icons/ri";

function Cards(){

    const listaTecnologias = [
        { id: 1, nome: "HTML5", icon: FaHtml5 },
        { id: 2, nome: "CSS", icon: FaCss3Alt },
        { id: 3, nome: "JavaScript", icon: FaJsSquare  },
        { id: 4, nome: "React", icon: FaReact  },
        { id: 5, nome: "Figma", icon: FaFigma  },
        { id: 6, nome: "NodeJs", icon: FaNode  },
        { id: 7, nome: "GIT", icon: FaGitSquare  },
        { id: 8, nome: "GitHub", icon: FaGithub  },
        { id: 9, nome: "TailwindCss", icon: RiTailwindCssFill  },
      

      
    ]; 
      
    return (

      <GeneralCashFund>

      <h2>Habilidades</h2>

        <Container>
      
          {listaTecnologias.map(({ id, nome, icon: IconComponent }) => (
            <CardContainer key={id}>
              <CardTitle>{nome}</CardTitle>
              
             
              <CardIcon>
              
            
                <IconComponent />

              </CardIcon>
              
              <BorderBottom />
            </CardContainer>
          ))}
        </Container>
        </GeneralCashFund>
    );
  
}


export default Cards;






    
