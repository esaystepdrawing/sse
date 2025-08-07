import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navmenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SathyaSaiMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className="text-center mx-auto d-flex flex-column align-items-center">
        <img
            src="/images/logo-en.png" // Replace with the actual path to your logo
            alt="Sathya Sai Center Logo"
            width="80" // Adjust width as needed
            height="20" // Adjust height as needed
            className="logo img-fluid mb-2" // Add any additional classes you need
          />
          <div className='mt-2 text-center'>Sathya Sai Center Milwaukee</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sse"><strong>SSE</strong></Nav.Link>
            <Nav.Link href="/sathya100birthday"><strong>Sathya Sai 100 Birthday</strong></Nav.Link>
            <Nav.Link href="/service"><strong>Service</strong></Nav.Link>
            <Nav.Link href="https://sairhythms.sathyasai.org/" target="_blank"><strong>Prayer and Bhajan</strong></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SathyaSaiMenu;