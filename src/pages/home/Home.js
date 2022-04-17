import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import styles from './home.module.css';

import Cover from './../../features/cover/Cover';
import ContactSection from '../../features/contactSection/ContactSection';
import WorkExperience from '../../features/workExperience/WorkExperience';
import Skills from '../../features/skills/Skills';
import Education from '../../features/education/Education';
import Languages from '../../features/languages/Languages';
import Portfolio from '../../features/portfolio/Portfolio';
import Interests from '../../features/interests/Interests';
import Social from '../../features/social/Social';
import BottomButtons from '../../features/bottomButtons/bottomButtons';


function Home({id, innerRef}) {
    Object.keys(localStorage).forEach(key => {
        console.log(`Key is: ${key} And value is: ${localStorage.getItem(key)}`)
    })
    return (
        <Container fluid ref={innerRef} id={id}>
            <Row>
                <Col>
                    <Cover />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ContactSection />
                </Col>
            </Row>
            <Row style={{marginTop: '20px', paddingLeft: '3%', paddingRight: '3%'}}>
                <Col sm={7}>
                    <Row>
                        <Col>
                            <WorkExperience />
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row className="pagebreak">
                        <Col>
                            <Education />
                        </Col>
                    </Row>
                </Col>
                <Col sm={5}>
                    <Row className="pagebreak">
                        <Col>
                            <Skills />
                        </Col>
                    </Row>
                    <Row className="pagebreak">
                        <Col>
                            <Portfolio />
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row className="pagebreak">
                        <Col>
                            <Languages />
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row className="pagebreak">
                        <Col>
                            <Interests />
                        </Col>
                    </Row>
                    <Row className="pagebreak">
                        <Col>
                            <Social />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <BottomButtons />
        </Container>
    );
}

export default Home;