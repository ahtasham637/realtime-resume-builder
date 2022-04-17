import {useEffect} from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './cover.module.css';


//components
import EditableText from '../../components/editableText/EditableText';
import CustomImage from '../../components/customImage/CustomImage';

function Cover() {
    const [fullName, setFullName] = useLocalStorage('FULL_NAME','');
    const [profession, setProfession] = useLocalStorage('PROFESSION', '');
    const [summary, setSummary] = useLocalStorage('SUMMARY', '');
    const [image, setImage] = useLocalStorage('IMAGE', '');


    const getWhoAreYou = () => 
    {
        return `Who is ${fullName}?`;
    }

    return (
        <Row className={styles.cover}>
            <Col>
                <Row className={styles.content}>
                    <Col>
                        <Row>
                            <Col>
                                <EditableText text={fullName} placeHolder="Enter your name" setText={setFullName} inputClass={styles.full__name} />
                            </Col>
                        </Row>
                        <Row style={{marginTop: '2px'}}>
                            <Col>
                                <EditableText text={profession} placeHolder="Your profession" setText={setProfession} inputClass={styles.profession} />
                            </Col>
                        </Row>
                        <Row style={{marginTop: '8px'}}>
                            <Col>
                                <EditableText text={summary} placeHolder={`${fullName && getWhoAreYou()} Describe yourself`} setText={setSummary} controlType="textarea" />
                            </Col>
                        </Row>
                    </Col>
                    <Col className={styles.right}>
                        <CustomImage image={image} setImage={setImage} />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Cover;