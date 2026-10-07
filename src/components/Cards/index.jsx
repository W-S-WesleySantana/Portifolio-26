import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaFigma, FaNode } from "react-icons/fa";
import { 
    BorderBottom, 
    CardContainer, 
    CardIcon, 
    CardTitle, 
    Container 
} from './styles';

function Cards(){

    const listaTecnologias = [
        { id: 1, nome: "HTML5", icon: FaHtml5 },
        { id: 2, nome: "CSS", icon: FaCss3Alt },
        { id: 3, nome: "JavaScript", icon: FaJsSquare  },
        { id: 4, nome: "React", icon: FaReact  },
        { id: 5, nome: "Figma", icon: FaFigma  },
        { id: 6, nome: "NodeJs", icon: FaNode  },
        
    ];
      
    return (
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
    );
}

export default Cards;






    
