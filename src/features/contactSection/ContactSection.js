import { useState } from 'react';
import {FaEnvelope, FaMobileAlt, FaMapMarkerAlt} from 'react-icons/fa';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './contactSection.module.css';

import EditableText from './../../components/editableText/EditableText';

//helpers
import handleLinkClick from '../../helpers/handleLinkClick';

function ContactSection() {

    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [location, setLocation] = useState('');

    return (
        <Row className={styles.section}>
            <Col>
                <div className={styles.info__div}><FaEnvelope /> <span className={styles.text}><a href={email && `mailto:${email}`} onClick={(event) => handleLinkClick(event, email)} className={styles.link}><EditableText placeHolder="Your email" text={email} setText={setEmail} inputClass={styles.input__text} inputType="email" /></a></span></div>
            </Col>
            <Col>
                <div className={styles.info__div}><FaMobileAlt /> <span className={styles.text}><a href={mobile && `tel:${mobile}`} onClick={(event) => handleLinkClick(event, mobile)} className={styles.link}><EditableText placeHolder="Mobile No: +497842587966" text={mobile} setText={setMobile} inputClass={styles.input__text} inputType="tel" /></a></span></div>
            </Col>
            <Col>
                <div className={styles.info__div}><FaMapMarkerAlt /> <span className={styles.text}><EditableText placeHolder="Your location" text={location} setText={setLocation} inputClass={styles.input__text} /></span></div>
            </Col>
        </Row>
    );
}

export default ContactSection;