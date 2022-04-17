import {FaTimes} from 'react-icons/fa';

import removeElement from '../../helpers/removeElement';

function ElementRemover({index, elementArr, setElementArr, style, placeholder, idx}) {
    return (
        <>
            <FaTimes className="remover-x" onClick={(event) => removeElement(event, index, elementArr, setElementArr, placeholder, idx)} style={style} />
        </>
    );
}

export default ElementRemover;