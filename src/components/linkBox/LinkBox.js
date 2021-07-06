import React, { useState } from 'react';

import EditableText from '../../components/editableText/EditableText';
import handleLinkClick from '../../helpers/handleLinkClick';

//style
import styles from './link.module.css';

function LinkBox({link, setLink}) {
    const [innerLink, setInnerLink] = useState('');
    const [innerLinkText, setInnerLinkText] = useState('');

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
            const newLink = `http://${link}`;
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
                <EditableText placeHolder="link" text={innerLinkText} setText={handleSetInnerLink} inputClass={styles.input__link} inputWidth="100%" />
            </a>  
        </>
    );
}

export default LinkBox;