import { useRef } from 'react';
import Image from 'react-bootstrap/Image';

import styles from './customImage.module.css'

function CustomImage({image, setImage}) {
    const avatar = process.env.PUBLIC_URL + '/user.png';
    
    const inputFile = useRef(null);


    const openImageSelector = e =>
    {
        e.preventDefault();

        inputFile.current.click();
    }

    const handleChange = e =>
    {
        const imageFile = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);

        reader.onloadend = (e) =>
        {
            setImage(reader.result);
        }
    }

    return (
        <>
            <Image src={image ? image : avatar} onClick={(event) => openImageSelector(event)} roundedCircle className={styles.image} />
            <input type="file" ref={inputFile} style={{display: 'none'}} accept="image/*" onChange={(event) => handleChange(event)} />
        </>
    );
}

export default CustomImage;