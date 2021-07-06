import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//components
import EditableBadge from '../../components/editableBadge/EditableBadge';
import ElementRemover from '../../components/elementRemover/ElementRemover';
import ElementAdder from '../../components/ElementAdder/ElementAdder';
import EditbaleHeading from '../../components/editableHeading/EditbaleHeading';


//styles
import styles from './interests.module.css';

function Interests() {
    const [interestsHeading, setInterestsHeading] = useState('INTERESTS');
    const [interestsList, setInterestsList] = useState([]);

    const addDetailCard = e =>
    {
      let newArr = [...interestsList];
      newArr.push({text: ""});

      setInterestsList(newArr);
    }

    const updateSkillText = index => text =>
    {
        let newArr = [...interestsList];
        newArr[index] = {...newArr[index], text};

        setInterestsList(newArr);
    }

    const getBadge = (text, index) =>
    {
      return (<span style={{position: 'relative'}} key={index}>
          <EditableBadge placeholder="Interest" text={text} setText={updateSkillText(index)} badgeStyle={styles.badge} />
          <ElementRemover index={index} elementArr={interestsList} setElementArr={setInterestsList} style={{position: "relative", right: "0px"}} />
        </span>)
    }

    return (
        <Row className="pagebreak">
          <Col>
            <Row>
              <Col>
                <EditbaleHeading placeholder="Interests" text={interestsHeading} setText={setInterestsHeading} />
                <ElementAdder onClick={(event) => addDetailCard(event)} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                {interestsList.map((skill, index) => {
                  return getBadge(skill.text, index)
                })}
              </Col>
            </Row>
          </Col>  
        </Row>
    );
}

export default Interests;