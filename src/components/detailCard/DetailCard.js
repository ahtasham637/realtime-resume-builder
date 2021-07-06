import React, { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormCheck from 'react-bootstrap/FormCheck';
import FormLabel from 'react-bootstrap/FormLabel';
import {FaPlusCircle, FaTimes, FaAnchor} from 'react-icons/fa';

//components
import EditableText from '../editableText/EditableText';


//styles
import styles from './detailCard.module.css';

//helpers
import getMonths from '../../helpers/getMonths';
import LinkBox from '../linkBox/LinkBox';


function DetailCard({type = "work"}) {
    const [title, setTitle] = useState('');
    const [titlePlaceholder, setTitlePlaceholder] = useState('');
    const [institute, setInstitute] = useState('');
    const [institutePlaceholder, setInstitutePlaceholder] = useState('');
    const [startMonth, setStartMonth] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [endYear, setEndYear] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [listHeading, setListHeading] = useState('');
    const [listHeadingPlaceholder, setListHeadingPlaceholder] = useState('');
    const [list, setList] = useState([]);
    const [link, setLink] = useState('');
    const [isWorkingPresently, setIsWorkingPresently] = useState(false);
    const [showEndDates, setShowEndDates] = useState(true);
    const [showPresentCheckbox, setShowPresentCheckbox] = useState(true);
    const [showPresentLabel, setShowPresentLabel] = useState(true);
    const [showDateRow, setShowDateRow] = useState(true);
    const [showLocationRow, setShowLocationRow] = useState(true);
    const [showDescriptionBox, setShowDescriptionBox] = useState(true);
    const [showLinkBox, setShowLinkBox] = useState(false);
    const [showTitleBox, setShowTitleBox] = useState(true);
    const [showListBox, setShowListBox] = useState(true);
    const [showListHeading, setShowListHeading] = useState(true);

    const [months, setMonths] = useState([]);

    useEffect(() => {
        if(type === "work")
        {
            setTitlePlaceholder(() => "Title/Position");
            setInstitutePlaceholder(() => "Company/Workplace");
            setListHeading(() => "Tasks/Responsibilities");
            setListHeadingPlaceholder(() => "Tasks/Responsibilities");
        }
        else if (type === "education")
        {
            setTitlePlaceholder(() => "Study Program");
            setInstitutePlaceholder(() => "University / College");
            setListHeading(() => "Courses");
            setListHeadingPlaceholder(() => "Courses");
        }
        else if (type === "language")
        {
            setInstitutePlaceholder(() => "Language");
            setStartMonth(() => '');
            setStartYear(() => '');
            setEndMonth(() => '');
            setEndYear(() => '');
            setLocation(() => '');
            setShowEndDates(() => false);
            setShowPresentCheckbox(() => false);
            setShowPresentLabel(() => false);
            setShowDateRow(() => false);
            setShowLocationRow(() => false);
            setShowLinkBox(() => false);
            setShowListBox(() => false);
            setShowListHeading(() => false);
            setShowTitleBox(() => false);

        }
        else
        {
            setShowTitleBox(() => false);
            setInstitutePlaceholder(() => "Name");
            setStartMonth(() => '');
            setStartYear(() => '');
            setEndMonth(() => '');
            setEndYear(() => '');
            setLocation(() => '');
            setShowEndDates(() => false);
            setShowPresentCheckbox(() => false);
            setShowPresentLabel(() => false);
            setShowDateRow(() => false);
            setShowLocationRow(() => false);
            setShowDescriptionBox(() => false);
            setShowLinkBox(() => true);
            setShowListBox(() => false);
            setShowListHeading(() => false);
        }

        setMonths(() => getMonths());
    }, [type]);


    useEffect(() => {
        if(endMonth && endYear)
        {
            setShowPresentLabel(() => false);
        }
        else
        {
            setShowPresentLabel(() => true);
        }
        
    }, [endMonth, endYear])


    const handleOnPresent = e =>
    {   
        const isPresent = e.target.checked;
        setIsWorkingPresently(() => isPresent);

        if(isPresent)
        {
            setShowEndDates(() => false);
            setEndMonth(() => '');
            setEndYear(() => '');
            setShowPresentCheckbox(() => false);
        }
        else
        {
            setShowEndDates(() => true);
        }
        
    }

    const handlePresentHover = e =>
    {
        if(e.type === "mouseenter")
        {
            setShowPresentCheckbox(() => true);
        }
        else if (e.type === "mouseleave")
        {
            if(isWorkingPresently)
            {
                setShowPresentCheckbox(() => false);
            }
        }
    }

    const updateListItem = index => text =>
    {
        let newArr = getListArray();
        newArr[index] = {text};

        setList(newArr);
    }

    const getListArray = () =>
    {
        return [...list];
    }

    const addListItem = e =>
    {
        e.preventDefault();

        const item = {text: ''};
        let newArr = getListArray();
        newArr.push(item);

        setList(newArr);
    }


    const removeListItem = (e, index) =>
    {
        e.preventDefault();
        let newArr = getListArray();

        newArr.splice(index, 1);

        setList(newArr);
    }

    const showList = () =>
    {
        return (<ul className={styles.list__ul}>
            {
                list.map((item, index) => {
                    return (<li key={index}>
                        <EditableText controlType="textarea" placeHolder={listHeadingPlaceholder} text={item.text} setText={updateListItem(index)} />
                        <FaTimes className="remover-times" style={{color: 'rgb(143 119 119)'}} onClick={(event) => removeListItem(event, index)} />
                    </li>)
                })
            }
        </ul>)
    }

    return (
        <Row>
            <Col>
                {showTitleBox && <Row>
                    <Col>
                        <EditableText placeHolder={titlePlaceholder} text={title} setText={setTitle} inputClass={styles.title} />
                    </Col>
                </Row>}
                <Row>
                    <Col>
                        <EditableText placeHolder={institutePlaceholder} text={institute} setText={setInstitute} inputClass={styles.sub__title} />
                    </Col>
                    {showLocationRow && <Col style={{float: 'right', textAlign: 'right'}}>
                        <EditableText placeHolder="City, Country or Remote" text={location} setText={setLocation} inputClass={styles.location} inputWidth="165px" spanStyle={{float: 'right'}} />
                    </Col>}
                </Row>
                {showDateRow && <Row>
                    <Col>
                        <EditableText controlType="select" dropDownData={months} placeHolder="Start month" text={startMonth} setText={setStartMonth} inputClass={styles.dateBox} inputWidth="110px" />
                        {' '}
                        <EditableText placeHolder="Start year" text={startYear} setText={setStartYear} inputClass={styles.dateBox} inputType="number" min="1900" inputWidth="95px" />
                        {'- '}
                        {showEndDates && <EditableText controlType="select" dropDownData={months} placeHolder="End month" text={endMonth} setText={setEndMonth} inputClass={styles.dateBox} inputWidth="110px" />}
                        {' '}
                        {showEndDates && <EditableText placeHolder="End year" text={endYear} setText={setEndYear} inputClass={styles.dateBox} inputType="number" min="1900" inputWidth="95px" />}
                        {' '}
                        {showPresentLabel && <span style={{position: 'relative', left: "10px", top: '3px'}} onMouseEnter={(event) => handlePresentHover(event)} onMouseLeave={(event) => handlePresentHover(event)}>{showPresentCheckbox && <FormCheck type="checkbox" className={styles.checkbox} checked={isWorkingPresently} onChange={(event) => handleOnPresent(event)} />} <FormLabel className={styles.checkbox} style={{position: 'relative', top: '-2px', left: '-6px'}}>Present</FormLabel></span>}
                    </Col>
                </Row>}
                {showDescriptionBox && <Row>
                    <Col>
                        <EditableText controlType="textarea" placeHolder={`Some description about ${institute}...`} text={description} setText={setDescription} inputClass={styles.description} />
                    </Col>
                </Row>}
                {showLinkBox && <Row>
                    <Col>
                        <div className={styles.link__div} style={{width: '100%'}}>
                            <Row>
                                <Col xs={1}>
                                    <FaAnchor style={{color: '#167599'}} />
                                </Col>
                                <Col xs={11}>
                                    <span className={styles.link__text}>
                                        {/* <a href={link && `${link}`} rel="noreferrer" target="_blank" onClick={(event) => handleLinkClick(event, link)} className={styles.link}>
                                            <EditableText placeHolder="link" text={link} setText={setLink} inputClass={styles.input__link} inputWidth="100%" />
                                        </a> */}
                                        <LinkBox link={link} setLink={setLink} />
                                    </span>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>}
                {showListHeading && <Row style={{marginTop: '5px'}}>
                    <Col>
                        <EditableText placeHolder={listHeadingPlaceholder} text={listHeading} setText={setListHeading} inputClass={styles.list__heading} />
                        <FaPlusCircle className="adder-plus" style={{fontSize: '21px', color: 'rgb(44 131 102)', marginLeft: '14px', cursor: 'pointer'}} onClick={(event) => addListItem(event)} />
                    </Col>
                </Row>}
                {showListBox && <Row>
                    <Col>
                        {showList()}
                    </Col>
                </Row>}
            </Col>
        </Row>
    );
}

export default DetailCard;