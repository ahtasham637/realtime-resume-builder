import useLocalStorage from '../../hooks/useLocalStorage';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import EditbaleHeading from '../../components/editableHeading/EditbaleHeading';
import DetailCard from './../../components/detailCard/DetailCard';
import ElementRemover from '../../components/elementRemover/ElementRemover';
import ElementAdder from '../../components/ElementAdder/ElementAdder';
import uuid from '../../helpers/uuid'

function WorkExperience() {

    const [workExperience, setWorkExperience] = useLocalStorage('WORK_EXPERIENCE_TITLE', 'WORK EXPERIENCE');
    const [detailCards, setDetailCards] = useLocalStorage('work_experience', []);

    const addDetailCard = () =>
    {
      const newCard = [...detailCards];
      newCard.unshift({type: "work", idx: uuid()})
      setDetailCards(newCard);
    }

    const getCard = (type, index) =>
    {
      return (<Row key={index} className="pagebreak">
        <Col>
          <ElementRemover index={index} elementArr={detailCards} setElementArr={setDetailCards} />
          <DetailCard type={type} idx={index} />
        </Col>
      </Row>)
    }

    return (
        <Row className="pagebreak">
          <Col>
            <Row>
              <Col>
                <EditbaleHeading placeholder="Work Experience" text={workExperience} setText={setWorkExperience} />
                <ElementAdder onClick={(event) => addDetailCard(event)} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                {detailCards.map((detailCard) => {
                  return getCard(detailCard.type, detailCard.idx)
                })}
              </Col>
            </Row>
          </Col>  
        </Row>
    );
}

export default WorkExperience;