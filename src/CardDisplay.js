import React, {useEffect, useState} from 'react';
import './index.css';
//import App from './App';
import RecipeTitle from './RecipeTitle';
import IngredientList from './IngredientList';
import {orig_recipes} from './Common';
//import {toggleVisibility} from './Common';
//import {togglePrepared} from './Common';
import PreperationSteps from './PreperationSteps';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';


function CardDisplay(){

    const [recipes, setRecipe ] = useState(orig_recipes);
    const [trigger, setTrigger] = useState(0);
    const [prepared, setPrepared ] = useState(false);
    const [activeModal, setActiveModal] = useState(null);    
    

    function showModal(modalId) {
        setActiveModal(modalId);
    };

    function hideModal(){
        setActiveModal(null);
    };

    function ingredientClick(title,index) {
        for (let i = 0; i < recipes.length; i++) {
            if(recipes[i].title === title){
                for(let j = 0; j < recipes[i].ingredients.length; j++){
                    if (j === index) {
                        recipes[i].ingredients[index].prepared = !recipes[i].ingredients[index].prepared
                        setRecipe(recipes);
                        setTrigger(trigger + 1);
                    }
                }   
            }
        }
    }

    // useEffect hook to perform side effects in the component
    useEffect(() => {
        // Log to console every time the effect runs
        console.log("useEffect");

        // Iterate over the array of recipes
        for(let i = 0; i < recipes.length; i++){
            // Assume the recipe is prepared initially
            let prepared = true;

            // Check each ingredient of the current recipe
            for(let j = 0; j < recipes[i].ingredients.length; j++){
                // If any ingredient is not prepared, set the prepared flag to false
                if(recipes[i].ingredients[j].prepared === false){
                    prepared = false;
                    // Update the prepared state to false
                    setPrepared(prepared);
                    break;
                    
                }
            }

            // If all ingredients are prepared, update the prepared state to true
            if(prepared){
                setPrepared(prepared);
                break;
            }
        }

        // Update the recipe state with the current recipes array
        setRecipe(recipes);
    // The effect will re-run when 'trigger' or 'recipes' change
    }, [trigger, recipes]);

    

    const cards = orig_recipes.map((recipe, index) => { 
        return (
            <Col key={index}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="https://www.slyhkitchen.com/wp-content/uploads/2014/10/Mashed-Potatoes.jpg" />
                    <Card.Body>
                        <Card.Title>
                            <RecipeTitle title={recipe.title} feedback={recipe.feedback}/> 
                        </Card.Title>
                        <Card.Text>
                            Some delicious mashed potatoes, unfortunately without any cheese
                        </Card.Text>
                        <Button variant="primary" onClick={() => showModal(`${index}myModal`)}>Show Details</Button>
                    </Card.Body>
                </Card>

                <Modal id={`${index}myModal`} show={activeModal === `${index}myModal`} onHide={hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{recipe.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <IngredientList ingredients={recipe.ingredients} title={recipe.title} onClick={ingredientClick}/>
                        { prepared ? <Alert variant='success'><Alert.Heading>Prep work done!</Alert.Heading></Alert> : <Alert variant='danger'><Alert.Heading>Just keep chopping</Alert.Heading></Alert>}
                        <PreperationSteps steps={recipe.steps}/>
                    </Modal.Body>
                </Modal>
            </Col>
        );
    });
    return(
        <Container>
            <Row>
                {cards}
            </Row>
        </Container>
    )
}

export default CardDisplay;