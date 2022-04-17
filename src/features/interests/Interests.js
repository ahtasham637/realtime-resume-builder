import useLocalStorage from '../../hooks/useLocalStorage';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//components
import EditableBadge from '../../components/editableBadge/EditableBadge';
import ElementRemover from '../../components/elementRemover/ElementRemover';
import ElementAdder from '../../components/ElementAdder/ElementAdder';
import EditbaleHeading from '../../components/editableHeading/EditbaleHeading';


//styles
import styles from './interests.module.css';
import uuid from '../../helpers/uuid';

function Interests() {
    const [interestsHeading, setInterestsHeading] = useLocalStorage('INTERESTS_TITLE', 'INTERESTS');
    const [interestsList, setInterestsList] = useLocalStorage('interests', []);

    const addDetailCard = () =>
    {
      let newArr = [...interestsList];
      newArr.push({text: "", idx: uuid()});

      setInterestsList(newArr);
    }

    const updateSkillText = index => text =>
    {
        let newArr = [...interestsList];
        newArr[index] = {...newArr[index], text};

        setInterestsList(newArr);
    }

    const getBadge = (text, index, idx) =>
    {
      return (<span style={{position: 'relative'}} key={index}>
          <EditableBadge idx={idx} placeholder="Interest" text={text} setText={updateSkillText(index)} badgeStyle={styles.badge} />
          <ElementRemover index={index} idx={idx} placeholder="Interest" elementArr={interestsList} setElementArr={setInterestsList} style={{position: "relative", right: "0px"}} />
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
                  return getBadge(skill.text, index, skill.idx)
                })}
              </Col>
            </Row>
          </Col>  
        </Row>
    );
}

export default Interests;