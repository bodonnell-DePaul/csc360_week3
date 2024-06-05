import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link eventKey="/" as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="drafts" as={Link} to="/drafts">Drafts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="login" as={Link} to="/login">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="newItem" as={Link} to="/newItem">New Recipe</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
}
export default Navigation