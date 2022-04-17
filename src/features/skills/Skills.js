import useLocalStorage from '../../hooks/useLocalStorage';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import EditbaleHeading from '../../components/editableHeading/EditbaleHeading';

//helpers

import EditableBadge from '../../components/editableBadge/EditableBadge';
import ElementRemover from '../../components/elementRemover/ElementRemover';
import ElementAdder from '../../components/ElementAdder/ElementAdder';
import uuid from '../../helpers/uuid';

function Skills() {
    const [skillsHeading, setSkillsHeading] = useLocalStorage('SKILLS_TITLE', 'SKILLS');
    const [skillsList, setSkillsList] = useLocalStorage('skills', []);

    const addDetailCard = e =>
    {
      let newArr = [...skillsList];
      newArr.push({text: "", idx: uuid()});

      setSkillsList(newArr);
    }

    const updateSkillText = index => text =>
    {
      let newArr = [...skillsList];


      if(isTextExistsInArr(text))
      {
        newArr.splice(index, 1);
      }
      else
      {
        newArr[index] = {...newArr[index], text};
      }

      setSkillsList(newArr);
    }

    const isTextExistsInArr = text =>
    {
      for(let item of skillsList)
      {
        if(item.text === text)
        {
          return true;
        }
      }

      return false;
    }


    const getBadge = (text, index, idx) =>
    {
      return (<span style={{position: 'relative'}} key={index}>
          <EditableBadge idx={idx} placeholder="skill" text={text} setText={updateSkillText(index)} />
          <ElementRemover index={index} idx={idx} placeholder="skill" elementArr={skillsList} setElementArr={setSkillsList} style={{position: "relative", right: "0px"}} />
        </span>)
    }

    return (
        <Row className="pagebreak">
          <Col>
            <Row>
              <Col>
                <EditbaleHeading placeholder="Skills" text={skillsHeading} setText={setSkillsHeading} />
                <ElementAdder onClick={(event) => addDetailCard(event)} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                {skillsList.map((skill, index) => {
                  return getBadge(skill.text, index, skill.idx)
                })}
              </Col>
            </Row>
          </Col>  
        </Row>
    );
}

export default Skills;