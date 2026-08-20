import { Container, Row, Col } from "react-bootstrap";
import data from '../data/portfolioData.json';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  /*fetch the current year */
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={data.personalInfo.logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={data.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="Linkedin" /></a>
              <a href={data.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Facebook" /></a>
              <a href={data.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright {currentYear} {data.personalInfo.firstName}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}