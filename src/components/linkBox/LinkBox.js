import React from 'react';

import EditableText from '../../components/editableText/EditableText';
import handleLinkClick from '../../helpers/handleLinkClick';
import useLocalStorage from '../../hooks/useLocalStorage';

//style
import styles from './link.module.css';

function LinkBox({link, setLink, type, idx}) {
    const [innerLink, setInnerLink] = useLocalStorage(`${type}_${idx}_innerLink`, '');
    const [innerLinkText, setInnerLinkText] = useLocalStorage(`${type}_${idx}_innerLinkText`, '');

    const handleSetInnerLink = text =>
    {
        const linkWithHttp = getLinkWithHttp(text);
        const linkWithoutHttp = getLinkWithoutHttp(linkWithHttp);

        setLink(linkWithHttp);

        setInnerLink(linkWithHttp);
        setInnerLinkText(linkWithoutHttp);
    }

    const getLinkWithHttp = text =>
    {
        if(text.indexOf('http') === -1)
        {
            const newLink = `http://${text}`;
            return newLink;
        }

        return text;
    }

    const getLinkWithoutHttp = text =>
    {

        if(text.indexOf('http') !== -1)
        {
            const newLink = text.replace(/^https?:\/\//, '');
            return newLink;
        }

        return text;
    }

    return (
        <>
            <a href={innerLink && `${innerLink}`} rel="noreferrer" target="_blank" onClick={(event) => handleLinkClick(event, link)} className={styles.link}>
                <EditableText idx={idx} placeHolder="link" text={innerLinkText} setText={handleSetInnerLink} inputClass={styles.input__link} inputWidth="100%" />
            </a>  
        </>
    );
}

export default LinkBox;