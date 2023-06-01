'use client'
import { Button, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'

export default function Cabecalho() {
  return (
    <header className="flex items-center justify-between bg-purple-50 px-40 py-5">
      <div className="leading-{150%}">
        <a className="text-3xl font-bold">LOGO</a>
      </div>
      <div className="leading-{150%}">
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-lg-0 my-2 me-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </div>
    </header>
  )
}
