import { useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  Image,
  Nav,
  NavDropdown,
  Row,
} from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { LogoContainer } from "../../styles/globalStyles";
import Bellicon from "../../assets/images/bell-icon.png";
import Headphone from "../../assets/images/headphone.png";
import Button from "@restart/ui/esm/Button";

export default function Header() {
  const [active, setActive] = useState(2);
  return (
    <div className="border-bottom border-blue bg-navy-blue">
      <Container>
        <Row className="g-0 align-items-center" style={{ height: "70px" }}>
          <LogoContainer className="">
            <Image
              style={{ height: "100%", maxHeight: "80px" }}
              src={Logo}
              alt="Finex 365"
            />
          </LogoContainer>
          <Col
            className="text-center mx-auto w-100 justify-content-center align-items-center d-flex"
          >
            <div style={{width: "100%", maxWidth: "340px"}}>
            <Nav className="d-flex flex-row justify-content-center align-items-center ">
              <Nav.Link
                onClick={() => setActive(1)}
                className={`color-white ${active === 1 && "nav-active"}`}
              >
                Home
              </Nav.Link>
              <NavDropdown
                className={`${active === 2 && "nav-dropdown-active"}`}
                title="Prediction"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={() => setActive(2)}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setActive(2)}>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setActive(2)}>
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className={`${active === 3 && "nav-dropdown-active"}`}
                title="Lottery"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={() => setActive(3)}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setActive(3)}>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setActive(3)}>
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            </div>
          </Col>
          <Col className="text-center">
            <Nav className="d-flex justify-content-end align-items-center">
              <Image
                style={{ height: "100%", maxHeight: "80px" }}
                className="me-4 cursor-pointer"
                src={Bellicon}
                alt="Bell Icon"
              />
              <Button variant="white" className="border-pink rounded-3 bg-navy-blue d-flex align-items-center justify-content-center me-3">
                <Image style={{maxHeight: "20px"}} src={Headphone} alt="" />
                <p className="text-pink text-center m-0 mb-1 ms-1">Support</p>
              </Button>
              <Dropdown>
                <Dropdown.Toggle variant="white" className="color-white boxshadow-none">
                  <span className="bg-blue border-0 p-1 rounded color-white me-2">
                    RM
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another Action</Dropdown.Item>
                  <Dropdown.Item>Something</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}
