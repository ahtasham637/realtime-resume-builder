
import useLocalStorage from '../../hooks/useLocalStorage';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaTimes} from 'react-icons/fa';

import EditbaleHeading from '../../components/editableHeading/EditbaleHeading';
import DetailCard from '../../components/detailCard/DetailCard';
import ElementRemover from '../../components/elementRemover/ElementRemover';
import ElementAdder from '../../components/ElementAdder/ElementAdder';
import uuid from '../../helpers/uuid';

function Portfolio() {

    const [portfolioHeading, setPortfolioHeading] = useLocalStorage('PORTFOLIO_TITLE', 'PORTFOLIO');
    const [detailCards, setDetailCards] = useLocalStorage('portfolio', []);
    const [showPortfolioRow, setShowPortfolioRow] = useLocalStorage('show_portfolio', true);

    const addDetailCard = e =>
    {
      let newArr = [...detailCards];
      newArr.push({type: "portfolio", idx: uuid()});

      setDetailCards(newArr);
    }

    
    const getCard = (type, index) =>
    {
      return (<Col className="pagebreak" key={index} md={12} style={{marginTop: '15px'}}>
        <ElementRemover index={index} elementArr={detailCards} setElementArr={setDetailCards} />
        <DetailCard type={type} idx={index} />
      </Col>)
    }

    const removeDiv = e =>
    {
      e.preventDefault();

      if(window.confirm("Are you sure you want to remove Portfolio?"))
      {
        setShowPortfolioRow(() => false);
      }
    }

    return (
      <>
        {showPortfolioRow && <Row className="pagebreak" style={{marginTop: '45px'}}>
          <Col>
            <Row>
              <Col>
                <EditbaleHeading placeholder="Portfolio" text={portfolioHeading} setText={setPortfolioHeading} />
                <ElementAdder onClick={(event) => addDetailCard(event)} />
                <FaTimes className="remover-times" style={{color: 'inherit', fontSize: '20px', marginLeft: '5px', opacity: '0.5', cursor: 'pointer'}} onClick={(event) => removeDiv(event)} />
              </Col>
            </Row>
            <br />
            <Row>
                {detailCards.map((detailCard) => {
                  return getCard(detailCard.type, detailCard.idx)
                })}
            </Row>
          </Col>
        </Row>}
      </>
    );
}

export default Portfolio;