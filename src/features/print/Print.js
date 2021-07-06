import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Print() {

    const print = () =>
    {
        window.print();
    }

    return (
        <div id="printBtn">
            <br />
            <br />
            <Row >
                <Col sm={{span: 2, offset: 10}} >
                    <Button variant="warning" size="lg" block onClick={() => print()}><strong>Print / Pdf</strong></Button>
                </Col> 
            </Row>
            <br />
            <br />
        </div>
    );
}

export default Print;