import { MdMarkEmailRead } from "react-icons/md";
import { Container, Contatos, ConteinerContact, IconWrapper } from "./styles";
import { FaGithubSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contacts() {
 
  const RedesSociais = [
    { 
      id: 1, 
      Icone: MdMarkEmailRead, 
      name: "E-mail", 
      rede: "Wesleymemo7@gmail.com",
      url: "mailto:Wesleymemo7@gmail.com"
    },
    {  
      id: 2, 
      Icone: FaWhatsapp, 
      name: "Whatsapp", 
      rede: "(11) 9 7198-5753",
      url: "https://wa.me.5511971985753" 
    },
    { 
      id: 3, 
      Icone: FaLinkedin, 
      name: "Linkedin", 
      rede: "Wesley Santana",
      url: "https://www.linkedin.com/in/wesley-santana-86902819b"
    },
    { 
      id: 4, 
      Icone: FaGithubSquare, 
      name: "Github",
      rede: "W-S Wesley Santana",
      url: "https://github.com/W-S-WesleySantana" 
    }
  ];



  return (
    <Container >
      <h2>Contatos</h2>
      

      <ConteinerContact>
        {RedesSociais.map((contact) => { 
          const IconeDinamico = contact.Icone;   

          return (
           
            <Contatos 
              key={contact.id} 
              href={contact.url} 
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>
                <IconeDinamico />
              </IconWrapper>    

              <h3>{contact.name}</h3>
              <p>{contact.rede}</p>
            </Contatos>
          );
        })}
      </ConteinerContact>
    </Container>
  );
}

export default Contacts;
