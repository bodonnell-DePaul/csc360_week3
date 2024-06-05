import React, {useEffect, useState} from 'react';
import './index.css';
//import App from './App';
import RecipeTitle from './RecipeTitle';
import IngredientList from './IngredientList';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import ChatBot from './Chatbot';

const appInsights = new ApplicationInsights({config: {
    instrumentationKey: ''
    /* ...Other Configuration Options... */
  }});
  appInsights.loadAppInsights();

function CardDisplay(){

    const [recipes, setRecipe ] = useState(null);
    const [recipeIngredients, setIngredients ] = useState(null);
    const [trigger, setTrigger] = useState(0);
    const [prepared, setPrepared ] = useState(false);
    const [activeModal, setActiveModal] = useState(null);   
    const [apiHelloWorld, setHelloWorld] = useState(null); 
    const [apiWeather, setWeatherData] = useState(null); 
    

    function showModal(modalId) 
    {
        appInsights.trackEvent({name: 'Show Modal'});
        setActiveModal(modalId);
        if(recipes !== null)
        {
            //Iterate over the array of recipes
            for(let i = 0; i < recipes.length; i++){
                if(modalId.indexOf(i) > -1)
                {
                    appInsights.trackEvent({name: 'Fetching data for recipe'});
                    console.log(modalId);
                    fetch('https://csc360-backend.azurewebsites.net/recipeIngredients/{repcipeTitle}?recipeTitle='+recipes[i].title)
                    .then(response => response.json())
                    .then(data => { 
                        setIngredients(data);
                        console.log(data);
                    })  
                }
            }
        }
    }

    useEffect(() => {

        // Check each ingredient of the current recipe
        if(recipeIngredients)
        {
            for(let i =0; i< recipeIngredients.length; i++)
            {

                let prepared = true;
                if(recipeIngredients[i].prepared === false)
                {
                    prepared = false;
                    setPrepared(prepared);
                }
            }
        }

    }, [recipeIngredients]);
                    
    function hideModal(){
        setActiveModal(null);
    };

    function ingredientClick(title,index) {
        for (let i = 0; i < recipeIngredients.length; i++) {
            if(recipeIngredients[i].recipeTitle === title){
                recipeIngredients[index].prepared = !recipeIngredients[index].prepared
                setIngredients(recipeIngredients);
                setTrigger(trigger + 1);

            }
        }
    }

    
    // useEffect hook to perform side effects in the component
    useEffect(() => {

        if(apiHelloWorld === null){
            appInsights.trackEvent({name: 'Fetching data from API'});
                fetch('https://csc360-backend.azurewebsites.net/recipes')
                .then(response => response.text())
                .then(data => { 
                    appInsights.trackEvent({name: 'Data fetched from API'});
                    setHelloWorld(data);
                    console.log(data);
            })
            console.log(apiHelloWorld);
        }

        if(apiWeather === null){
            appInsights.trackEvent({name: 'Fetching weather data from API'});
            fetch('https://csc360-backend.azurewebsites.net/weatherforecast')
            .then(response => response.json())
            .then(data => {
                appInsights.trackEvent({name: 'Weather data fetched from API'});
                setWeatherData(data)
                console.log(data);
            })
            console.log(apiWeather)
        }

        if(recipes === null){
            fetch('https://csc360-backend.azurewebsites.net/recipeTitles')
            .then(response => response.json())
            .then(data => {
                appInsights.trackEvent({name: 'Fetching recipe titles from API'});
                    setRecipe(data);
                    console.log(data);
                })
        }
         console.log(recipes);


        // If all ingredients are prepared, update the prepared state to true
        if(prepared){
            setPrepared(prepared);
            //break;
        }
        

        // Update the recipe state with the current recipes array
        //setRecipe(recipes);
    // The effect will re-run when 'trigger' or 'recipes' change
    }, [trigger, recipes]);

    

    if (recipes !== null){
        const cards = recipes.map((recipe, index) => { 
            appInsights.trackEvent({name: 'Creating recipe cards'});
            console.log(recipe);
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
                            <IngredientList ingredients={recipeIngredients} title={recipe.title} onClick={ingredientClick}/>
                            {/* { prepared ? <Alert variant='success'><Alert.Heading>Prep work done!</Alert.Heading></Alert> : <Alert variant='danger'><Alert.Heading>Just keep chopping</Alert.Heading></Alert>}
                            <PreperationSteps steps={recipe.steps}/> */}
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
                {/* <ChatBot hubUrl="http://127.0.0.1:5172/chatHub"/> */}
                <ChatBot hubUrl="https://csc360-backend.azurewebsites.net/chatHub"/>
            </Container>
            // <ChatBot hubUrl="https://csc360-backend.azurewebsites.net/chat"/>
            
        )
    }
}

export default CardDisplay;
