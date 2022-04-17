import React, { useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

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
import uuid from '../../helpers/uuid';


function DetailCard({type = "work", idx = 0}) {
    const [title, setTitle] = useLocalStorage(`${type}_${idx}_title`, '');
    const [titlePlaceholder, setTitlePlaceholder] = useLocalStorage(`${type}_${idx}_titlePlaceholder`, '');
    const [institute, setInstitute] = useLocalStorage(`${type}_${idx}_institute`, '');
    const [institutePlaceholder, setInstitutePlaceholder] = useLocalStorage(`${type}_${idx}_institutePlaceholder`, '');
    const [startMonth, setStartMonth] = useLocalStorage(`${type}_${idx}_startMonth`, '');
    const [startYear, setStartYear] = useLocalStorage(`${type}_${idx}_startYear`, '');
    const [endMonth, setEndMonth] = useLocalStorage(`${type}_${idx}_endMonth`, '');
    const [endYear, setEndYear] = useLocalStorage(`${type}_${idx}_endYear`, '');
    const [location, setLocation] = useLocalStorage(`${type}_${idx}_location`, '');
    const [description, setDescription] = useLocalStorage(`${type}_${idx}_description`, '');
    const [listHeading, setListHeading] = useLocalStorage(`${type}_${idx}_listHeading`, '');
    const [listHeadingPlaceholder, setListHeadingPlaceholder] = useLocalStorage(`${type}_${idx}_listHeadingPlaceholder`, '');
    const [list, setList] = useLocalStorage(`${type}_${idx}_list`, []);
    const [link, setLink] = useLocalStorage(`${type}_${idx}_link`, '');
    const [isWorkingPresently, setIsWorkingPresently] = useLocalStorage(`${type}_${idx}_isWorkingPresently`, false);
    const [showEndDates, setShowEndDates] = useLocalStorage(`${type}_${idx}_showEndDates`, true);
    const [showPresentCheckbox, setShowPresentCheckbox] = useLocalStorage(`${type}_${idx}_showPresentCheckbox`, true);
    const [showPresentLabel, setShowPresentLabel] = useLocalStorage(`${type}_${idx}_showPresentLabel`, true);
    const [showDateRow, setShowDateRow] = useLocalStorage(`${type}_${idx}_showDateRow`, true);
    const [showLocationRow, setShowLocationRow] = useLocalStorage(`${type}_${idx}_showLocationRow`, true);
    const [showDescriptionBox, setShowDescriptionBox] = useLocalStorage(`${type}_${idx}_showDescriptionBox`, true);
    const [showLinkBox, setShowLinkBox] = useLocalStorage(`${type}_${idx}_showLinkBox`, false);
    const [showTitleBox, setShowTitleBox] = useLocalStorage(`${type}_${idx}_showTitleBox`, true);
    const [showListBox, setShowListBox] = useLocalStorage(`${type}_${idx}_showListBox`, true);
    const [showListHeading, setShowListHeading] = useLocalStorage(`${type}_${idx}_showListHeading`, true);

    const [months, setMonths] = useLocalStorage(`${type}_${idx}_months`, []);

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

        const item = {text: '', idx: uuid()};
        let newArr = getListArray();
        newArr.push(item);

        setList(newArr);
    }


    const removeListItem = (e, index) =>
    {
        e.preventDefault();
        let newArr = getListArray();

        newArr.splice(index, 1);

        clearByKey()

        setList(newArr);
    }

    const clearByKey = () => {
        Object.keys(localStorage).forEach(key => {
            if (key.indexOf(`${type}_${idx}_`) !== -1) {
                localStorage.removeItem(key)
            }
        })
    }

    const showList = () =>
    {
        return (<ul className={styles.list__ul}>
            {
                list.map((item, index) => {
                    return (<li key={index}>
                        <EditableText idx={item.idx} controlType="textarea" placeHolder={listHeadingPlaceholder} text={item.text} setText={updateListItem(index)} />
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
                        <EditableText idx={idx} placeHolder={titlePlaceholder} text={title} setText={setTitle} inputClass={styles.title} />
                    </Col>
                </Row>}
                <Row>
                    <Col>
                        <EditableText idx={idx} placeHolder={institutePlaceholder} text={institute} setText={setInstitute} inputClass={styles.sub__title} />
                    </Col>
                    {showLocationRow && <Col style={{float: 'right', textAlign: 'right'}}>
                        <EditableText idx={idx} placeHolder="City, Country or Remote" text={location} setText={setLocation} inputClass={styles.location} inputWidth="165px" spanStyle={{float: 'right'}} />
                    </Col>}
                </Row>
                {showDateRow && <Row>
                    <Col>
                        <EditableText idx={idx} controlType="select" dropDownData={months} placeHolder="Start month" text={startMonth} setText={setStartMonth} inputClass={styles.dateBox} inputWidth="110px" />
                        {' '}
                        <EditableText idx={idx} placeHolder="Start year" text={startYear} setText={setStartYear} inputClass={styles.dateBox} inputType="number" min="1900" inputWidth="95px" />
                        {'- '}
                        {showEndDates && <EditableText idx={idx} controlType="select" dropDownData={months} placeHolder="End month" text={endMonth} setText={setEndMonth} inputClass={styles.dateBox} inputWidth="110px" />}
                        {' '}
                        {showEndDates && <EditableText idx={idx} placeHolder="End year" text={endYear} setText={setEndYear} inputClass={styles.dateBox} inputType="number" min="1900" inputWidth="95px" />}
                        {' '}
                        {showPresentLabel && <span style={{position: 'relative', left: "10px", top: '3px'}} onMouseEnter={(event) => handlePresentHover(event)} onMouseLeave={(event) => handlePresentHover(event)}>{showPresentCheckbox && <FormCheck type="checkbox" className={styles.checkbox} checked={isWorkingPresently} onChange={(event) => handleOnPresent(event)} />} <FormLabel className={styles.checkbox} style={{position: 'relative', top: '-2px', left: '-6px'}}>Present</FormLabel></span>}
                    </Col>
                </Row>}
                {showDescriptionBox && <Row>
                    <Col>
                        <EditableText idx={idx} controlType="textarea" placeHolder={`Some description about ${institute}...`} text={description} setText={setDescription} inputClass={styles.description} />
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
                                            <EditableText idx={idx} placeHolder="link" text={link} setText={setLink} inputClass={styles.input__link} inputWidth="100%" />
                                        </a> */}
                                        <LinkBox link={link} setLink={setLink} type={type} idx={idx} />
                                    </span>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>}
                {showListHeading && <Row style={{marginTop: '5px'}}>
                    <Col>
                        <EditableText idx={idx} placeHolder={listHeadingPlaceholder} text={listHeading} setText={setListHeading} inputClass={styles.list__heading} />
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