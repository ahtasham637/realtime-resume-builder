import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import EditbaleHeading from '../../components/editableHeading/EditbaleHeading';
import DetailCard from '../../components/detailCard/DetailCard';
import ElementRemover from '../../components/elementRemover/ElementRemover';
import ElementAdder from '../../components/ElementAdder/ElementAdder';

function Languages() {

    const [languageHeading, setLanguageHeading] = useState('LANGUAGES');
    const [detailCards, setDetailCards] = useState([]);

    const addDetailCard = e =>
    {
      let newArr = [...detailCards];
      newArr.push({type: "language"});

      setDetailCards(newArr);
    }

    const getCard = (type, index) =>
    {
      return (<Col key={index} sm={6}>
        <ElementRemover index={index} elementArr={detailCards} setElementArr={setDetailCards} />
        <DetailCard type={type} />
        </Col>)
    }

    return (
        <Row className="pagebreak">
          <Col>
            <Row>
              <Col>
                <EditbaleHeading placeholder="Languages" text={languageHeading} setText={setLanguageHeading} />
                <ElementAdder onClick={(event) => addDetailCard(event)} />
              </Col>
            </Row>
            <br />
            <Row>
                {detailCards.map((detailCard, index) => {
                  return getCard(detailCard.type, index)
                })}
            </Row>
          </Col>
        </Row>
    );
}

export default Languages;