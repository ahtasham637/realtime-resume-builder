import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function BottomButtons() {

    const print = () =>
    {
        window.print();
    }

    const reset = () => {
        // eslint-disable-next-line no-restricted-globals
        const answer = confirm('Are you sure you want to reset the form? You will loose all your saved data');

        if (answer) {
            localStorage.clear()
            window.location.reload()
        }
    }

    return (
        <div id="printBtn">
            <br />
            <br />
            <Row >
                <Col sm={{span: 2, offset: 8}}>
                    <Button variant="danger" size="lg" block onClick={reset}><strong>Reset</strong></Button>
                </Col>
                <Col sm={{span: 2}} >
                    <Button variant="warning" size="lg" block onClick={() => print()}><strong>Print / Pdf</strong></Button>
                </Col> 
            </Row>
            <br />
            <br />
        </div>
    );
}

export default BottomButtons;