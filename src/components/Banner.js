import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import data from '../data/portfolioData.json';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);  /*index to which word is currently displayed on the screen*/
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(400 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const toRotate =data.personalInfo.roles;  /*job titles pulled from Json file*/
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text,delta])  /*delta added to keep the animation time synced*/

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(400);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                  <h1>{`Hi! I'm ${data.personalInfo.firstName} `} </h1>
                  <p>{data.personalInfo.description}</p>
                  <h2>
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span>
                  </h2>
                  {/* --- UPDATED BUTTON BLOCK --- */}
<div className="banner-buttons" style={{ display: 'flex', alignItems: 'stretch', gap: '20px', marginTop: '30px' }}>
  
  <a href="#connect" style={{ textDecoration: 'none' }}>
    <button style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '12px 34px',
      margin: '0',
      fontWeight: '700',
      fontSize: '18px',
      gap: '10px',
      background: 'transparent',
     
      color: '#fff',
      height: '100%' 
    }}>
      Let’s Connect <ArrowRightCircle size={25} />
    </button>
  </a>
</div>
{/* ---------------------------- */}
                 
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={data.personalInfo.profilePic} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}