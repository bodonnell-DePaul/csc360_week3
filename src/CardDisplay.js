import React, {useEffect, useState} from 'react';
import './index.css';
//import App from './App';
import RecipeTitle from './RecipeTitle';
import IngredientList from './IngredientList';
import {api_recipes} from './Common';
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

    const [recipes, setRecipe ] = useState(api_recipes);
    const [trigger, setTrigger] = useState(0);
    const [prepared, setPrepared ] = useState(false);
    const [activeModal, setActiveModal] = useState(null);   
    const [apiHelloWorld, setHelloWorld] = useState(null); 
    const [apiWeather, setWeatherData] = useState(null); 
    

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

        if(apiHelloWorld === null){
            fetch('http://127.0.0.1:5172/recipes')
            .then(response => response.text())
            .then(data => setHelloWorld(data))
        }

        if(apiWeather === null){
            fetch('http://127.0.0.1:5172/weatherforecast')
            .then(response => response.json())
            .then(data => setWeatherData(data))
        }

        fetch('http://127.0.0.1:5172/recipeTitles')
        .then(response => response.json())
        .then(data => setRecipe(data))


        console.log(recipes);
        // Iterate over the array of recipes
        for(let i = 0; i < recipes.length; i++){
            // Assume the recipe is prepared initially
            let prepared = true;

            // Check each ingredient of the current recipe
            if(recipes[i].ingredients){
                for(let j = 0; j < recipes[i].ingredients.length; j++){
                    // If any ingredient is not prepared, set the prepared flag to false
                    if(recipes[i].ingredients[j].prepared === false){
                        prepared = false;
                        // Update the prepared state to false
                        setPrepared(prepared);
                        break;
                        
                    }
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

    

    const cards = api_recipes.map((recipe, index) => { 
        return (
            <Col key={index}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={recipe.imageUrl} />
                    <Card.Body>
                        <Card.Title>
                            <RecipeTitle title={recipe.title} review={recipe.review}/> 
                        </Card.Title>
                        <Card.Text>
                            {recipe.description}
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
            <h1>{apiHelloWorld}</h1>
            <Row>
                {cards}
            </Row>
            {apiWeather && apiWeather.map((day,index) => (
                    <div key={index}>
                        <h1>Date: {day.date}</h1>
                        <h3>Temp: {day.temperatureF}</h3>
                        <h3>Summary: {day.summary}</h3>
                    </div>
                ))
            }
        </Container>
    )
}

export default CardDisplay;