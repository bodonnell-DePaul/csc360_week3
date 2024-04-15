import React from 'react';
import './index.css';
//import App from './App';
import RecipeTitle from './RecipeTitle';
import IngredientList from './IngredientList';
import {recipes} from './Common';
import {toggleVisibility} from './Common';
import PreperationSteps from './PreperationSteps';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CardDisplay(){
    const cards = recipes.map((recipe, index) => {
        return (
            <Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="https://www.slyhkitchen.com/wp-content/uploads/2014/10/Mashed-Potatoes.jpg" />
                    <Card.Body>
                        <Card.Title>
                            <RecipeTitle title={recipe.title} feedback={recipe.feedback}/> 
                        </Card.Title>
                        <Card.Text>
                            Some delicious mashed potatoes, unfortunately without any cheese
                        </Card.Text>
                        <Button variant="primary" onClick={()=>toggleVisibility(index)}>Show Details</Button>
                    </Card.Body>
                </Card>

                <div id={`${index}myModal`} className="modal"style={{ display: 'hide', position: 'fixed' }}>
                <Modal.Dialog>
                <Modal.Header onClick={()=>toggleVisibility(index)} closeButton>
                        <Modal.Title>{recipe.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <IngredientList ingredients={recipe.ingredients}/>
                        <PreperationSteps steps={recipe.steps}/>
                    </Modal.Body>

                </Modal.Dialog>
                </div>
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