import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaTimes} from 'react-icons/fa';

import EditbaleHeading from '../../components/editableHeading/EditbaleHeading';
import DetailCard from '../../components/detailCard/DetailCard';
import ElementRemover from '../../components/elementRemover/ElementRemover';
import ElementAdder from '../../components/ElementAdder/ElementAdder';


function Social() {
    const [socialHeading, setSocialHeading] = useState('SOCIAL');
    const [detailCards, setDetailCards] = useState([]);
    const [showSocialRow, setShowSocialRow] = useState(true);

    const addDetailCard = e =>
    {
      let newArr = [...detailCards];
      newArr.push({type: "portfolio"});

      setDetailCards(newArr);
    }

    
    const getCard = (type, index) =>
    {
      return (<Col className="pagebreak" key={index} md={12} style={{marginTop: '15px'}}>
        <ElementRemover index={index} elementArr={detailCards} setElementArr={setDetailCards} />
        <DetailCard type={type} />
      </Col>)
    }

    const removeDiv = e =>
    {
      e.preventDefault();

      if(window.confirm("Are you sure you want to remove Social?"))
      {
        setShowSocialRow(() => false);
      }
    }

    return (
      <>
        {showSocialRow && <Row className="pagebreak" style={{marginTop: '45px'}}>
          <Col>
            <Row>
              <Col>
                <EditbaleHeading placeholder="Social" text={socialHeading} setText={setSocialHeading} />
                <ElementAdder onClick={(event) => addDetailCard(event)} />
                <FaTimes className="remover-times" style={{color: 'inherit', fontSize: '20px', marginLeft: '5px', opacity: '0.5', cursor: 'pointer'}} onClick={(event) => removeDiv(event)} />
              </Col>
            </Row>
            <br />
            <Row>
                {detailCards.map((detailCard, index) => {
                  return getCard(detailCard.type, index)
                })}
            </Row>
          </Col>
        </Row>}
      </>
    );
}

export default Social;