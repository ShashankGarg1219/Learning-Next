'use client';

import { Button, Container, Nav, Navbar } from "react-bootstrap";

const MyNavbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <Navbar className="bg-dark stiky" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Welcome</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">

        <Nav>
            <Nav.Link href="home">Home</Nav.Link>
            {/* <Nav.Link href="#features">About</Nav.Link> */}
            <Button  onClick={handleLogout}>Logout</Button>
          </Nav>
      </Navbar.Collapse>
    </Container>
    {/* <Container>
      <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        <div className="text-white text-xl font-bold">
          Welcome
        </div>
        <div className="space-x-4 flex items-center">
          <a href="/" className="text-gray-300 hover:text-white whitespace-nowrap">
            Home
          </a>
          <a href="/about" className="text-gray-300 hover:text-white whitespace-nowrap">
            About
          </a>
          <button
            onClick={handleLogout}
            className="text-gray-300 hover:text-white whitespace-nowrap"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
    </Container> */}
    </Navbar>

  );
};

export default MyNavbar;
