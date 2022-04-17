import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import FormControl from 'react-bootstrap/FormControl';
import {FaPen, FaCheckCircle} from 'react-icons/fa';

import styles from './editableText.module.css';

function EditableText({idx, text, placeHolder, inputClass, setText, inputTextColor = '#fff', controlType="input", inputType="text", min="", max="", inputWidth="80%", spanStyle, controlClass, dropDownData}) {
    const [showInput, setShowInput] = useLocalStorage(`${placeHolder}_${idx}_showInput`, false);
    const [showPen, setShowPen] = useLocalStorage(`${placeHolder}_${idx}_showPen`, true);
    const [innerText, setInnerText] = useLocalStorage(`${placeHolder}_${idx}_innerText`, text);

    const startEditing = e =>
    {
        e.preventDefault();
        setShowPen(() => false);
        setShowInput(() => true);
    }

    const onKeyPressed = e => {
        if(e.target.type === "textarea")
        {
            if(isShiftWithEnterPressed(e))
            {
                return;
            }
        }

        if(e.keyCode === 13)
        {
            e.preventDefault();
            saveAndClose();
        }
        else if(e.keyCode === 27)
        {
            e.preventDefault();
            setShowInput(() => false);
            setShowPen(() => true);
            setInnerText(text);
        }
    }

    const saveAndClose = () =>
    { 
        setShowInput(() => false);
        setShowPen(() => true);
        setText(innerText);
    }

    const isShiftWithEnterPressed = e =>
    {
        if(e.keyCode === 13 && e.shiftKey === true) return true;

        return false;
    }

    const showFormControl = () =>
    {
        if(controlType === "select")
        {
            return getDropDown()
        }
        else
        {
            return getTextBox()
        }
    }


    const getDropDown = () =>
    {
        return (
            <span>
                <FormControl as={controlType} type={inputType} className={`transparent__input shadow-none ${inputClass} ${controlClass}`} value={innerText} style={{color: 'inherit', width: inputWidth}} onKeyUp={(event) => onKeyPressed(event)} onChange={(event) => setInnerText(event.target.value)} autoFocus placeholder={placeHolder} min={min} max={max}>
                    {dropDownData.map((item, index) => {
                        return <option key={index}>{item}</option>
                    })}
                </FormControl>
                <FaCheckCircle style={{color: '#72ae22', cursor: 'pointer'}} onClick={(event) => saveAndClose()} />
            </span>
        );
    }

    const getTextBox = () =>
    {
        return (<FormControl as={controlType} type={inputType} className={`transparent__input shadow-none ${inputClass} ${controlClass}`} value={innerText} style={{color: 'inherit', width: inputWidth}} onKeyUp={(event) => onKeyPressed(event)} onChange={(event) => setInnerText(event.target.value)} autoFocus placeholder={placeHolder} min={min} max={max} />)
    }

    const isTextFilled = txt =>
    {
        if(txt.trim() !== '')
        {
            return true;
        }

        return false;
    }

    const showText = () => 
    {
        return (<span className={inputClass}>{isTextFilled(text) ? text : <span style={{fontStyle: 'italic'}}>{placeHolder}</span>}</span>);
    }

    return (
        <span style={spanStyle}>
            {showInput ? showFormControl() : showText()} {showPen && <FaPen onClick={(event) => startEditing(event)} className={`pen-btn ${inputClass} ${styles.pen}`} />}
        </span>
    );
}

export default React.memo(EditableText);