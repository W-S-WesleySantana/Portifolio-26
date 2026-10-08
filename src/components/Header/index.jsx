import LogoWS from "../../assets/LogoWs.png";
import Button from "../Button"
import { useNavigate } from "react-router-dom";

import { BoxLogoWs, Container, Nav } from "./styles";

function Header() {

  const navigate = useNavigate();




  return (

    <Container>

    

    <BoxLogoWs className="logoWs">

     <img src={LogoWS} alt="Logo WS" />

    </BoxLogoWs>

  

     <h1>Portfólio </h1>
 
    

      <Nav>

      <Button 
      label={"Home"}
      onClick={() => navigate('/')}
      size={'xsmall'}
      /> 
      <Button 
      label={"Certificados"}
      onClick={() => navigate('/certificados')}
      size={'xsmall'}
      />
      <Button 
      label={"Projetos"}
      onClick={() => navigate('/projetos')}
      size={'xsmall'}
      />
       
      
       
      </Nav>

      
    </Container>
  );
}

export default Header;