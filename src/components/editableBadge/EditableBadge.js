import Badge from 'react-bootstrap/Badge';
import EditableText from "../editableText/EditableText";


import styles from './editableBadge.module.css';

function EditableBadge({variant="success", badgeStyle, placeholder="skill", text, setText, inputWidth="80px", warning=false}) {
    return (
        <Badge variant={variant} className={`${styles.badge} ${badgeStyle} ${warning && styles.warning}`}>
            <EditableText placeHolder={placeholder} text={text} setText={setText} inputWidth="80px" inputClass={styles.skills__input} controlClass={styles.input__control__class} />
        </Badge>
    );
}

export default EditableBadge;