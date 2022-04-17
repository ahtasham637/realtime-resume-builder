import useLocalStorage from '../../hooks/useLocalStorage';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import EditbaleHeading from '../../components/editableHeading/EditbaleHeading';
import DetailCard from '../../components/detailCard/DetailCard';
import ElementRemover from '../../components/elementRemover/ElementRemover';
import ElementAdder from '../../components/ElementAdder/ElementAdder';
import uuid from '../../helpers/uuid';

function Languages() {

    const [languageHeading, setLanguageHeading] = useLocalStorage('LANGUAGES_TITLE', 'LANGUAGES');
    const [detailCards, setDetailCards] = useLocalStorage('languages', []);

    const addDetailCard = () =>
    {
      let newArr = [...detailCards];
      newArr.push({type: "language", idx: uuid()});

      setDetailCards(newArr);
    }

    const getCard = (type, index) =>
    {
      return (<Col key={index} sm={6}>
        <ElementRemover index={index} elementArr={detailCards} setElementArr={setDetailCards} />
        <DetailCard type={type} idx={index} />
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
                {detailCards.map((detailCard) => {
                  return getCard(detailCard.type, detailCard.idx)
                })}
            </Row>
          </Col>
        </Row>
    );
}

export default Languages;