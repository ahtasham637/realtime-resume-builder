import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import EditbaleHeading from '../../components/editableHeading/EditbaleHeading';
import DetailCard from './../../components/detailCard/DetailCard';
import ElementRemover from '../../components/elementRemover/ElementRemover';
import ElementAdder from '../../components/ElementAdder/ElementAdder';

function WorkExperience() {

    const [workExperience, setWorkExperience] = useState('WORK EXPERIENCE');
    const [detailCards, setDetailCards] = useState([]);

    const addDetailCard = e =>
    {
      let newArr = [...detailCards];
      newArr.push({type: "work"});

      setDetailCards(newArr);
    }

    const getCard = (type, index) =>
    {
      return (<Row key={index} className="pagebreak">
        <Col>
          <ElementRemover index={index} elementArr={detailCards} setElementArr={setDetailCards} />
          <DetailCard type={type}  />
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
                {detailCards.map((detailCard, index) => {
                  return getCard(detailCard.type, index)
                })}
              </Col>
            </Row>
          </Col>  
        </Row>
    );
}

export default WorkExperience;