import './IngredientList.css'
import React from 'react';
import {Accordion} from 'react-bootstrap';

function PreperationSteps(props) {
    // Create the list items using map
    const preperationSteps = props.steps.map((step, index) => {
        return (
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1" className={ step.completed ? 'completed' : '' }>
              <Accordion.Header>Step: {index+1}</Accordion.Header>
              <Accordion.Body>
                {step.description}
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        );
    });
    // return the HTML for the component
    // ingredientListItems will be rendered as li elements
    return (
        <ol>
            { preperationSteps }
        </ol>
    );
}
export default PreperationSteps;
