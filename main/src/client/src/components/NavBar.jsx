import { useContext } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Notifications from "./Chat/Notifications";
import '../arrow.css'

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (

    <Navbar bg="dark" className="mb-4" style={{ height: "3.75rem" }}>
      <Container>
        <a href="http://localhost:3000/" className="arrow"></a>
        <h2>
          <Link to="/" className="link-light text-decoration-none">
            ChattApp
          </Link>
        </h2>
        {user && <span className="text-warning">Logged in as {user.name}</span>}
        <Nav>
          <Stack direction="horizontal" gap={3}>
            {!user && (
              <>
                <Link to="/login" className="link-light text-decoration-none">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="link-light text-decoration-none"
                >
                  Register
                </Link>
              </>
            )}

            {user && (
              <>
                <Notifications />
                <Link
                  onClick={() => logoutUser()}
                  to="/login"
                  className="link-light text-decoration-none"
                >
                  Logout
                </Link>
              </>
            )}
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;