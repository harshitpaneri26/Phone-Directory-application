import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../Header/Header.css";

function Header() {
  return (
    <>
      <Navbar bg='light' variant='dark'>
        <Container>Phone Directory Application</Container>
      </Navbar>
    </>
  );
}

export default Header;
