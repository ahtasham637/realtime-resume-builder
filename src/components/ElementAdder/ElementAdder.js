import {FaPlusCircle} from 'react-icons/fa';

function ElementAdder({onClick}) {
    return (
        <>
            <FaPlusCircle className="adder-plus" style={{fontSize: '28px', color: 'rgb(39 100 80)', marginLeft: '20px', cursor: 'pointer'}} onClick={onClick} />
        </>
    );
}

export default ElementAdder;