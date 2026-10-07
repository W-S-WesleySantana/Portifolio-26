import LogoWS from "../../assets/LogoWs.png";

import { Container } from "./styles";

function Header() {
  return (

    <Container>

    <div className="logoWs">

     <img src={LogoWS} alt="Logo WS" />

    </div>

    <div className="title">

     <h1>Portifolio </h1>

    </div>

      
    </Container>
  );
}

export default Header;