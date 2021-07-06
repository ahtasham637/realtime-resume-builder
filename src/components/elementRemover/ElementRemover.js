import {FaTimes} from 'react-icons/fa';

import removeElement from '../../helpers/removeElement';

function ElementRemover({index, elementArr, setElementArr, style}) {
    return (
        <>
            <FaTimes className="remover-x" onClick={(event) => removeElement(event, index, elementArr, setElementArr)} style={style} />
        </>
    );
}

export default ElementRemover;