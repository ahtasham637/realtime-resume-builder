import EditableText from './../editableText/EditableText';

import styles from './editableHeading.module.css';


function EditbaleHeading({placeholder, text, setText, color="#2ca67e"}) {

    return (
        <>
            <div className={styles.heading__div} style={{color: color}}><span className={styles.text}><EditableText placeHolder={placeholder} text={text} setText={setText} inputClass={styles.heading__div} inputTextColor={color} /></span></div>
        </>
    );
}

export default EditbaleHeading;