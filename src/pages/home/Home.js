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
import Print from '../../features/print/Print';


function Home({id, innerRef}) {
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
                    <Row>
                        <Col>
                            <Education />
                        </Col>
                    </Row>
                </Col>
                <Col sm={5}>
                    <Row>
                        <Col>
                            <Skills />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Portfolio />
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <Languages />
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <Interests />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Social />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Print />
        </Container>
    );
}

export default Home;