
import { Button, Form } from 'react-bootstrap';

function RecipeSubmit(e) {

    fetch('http://127.0.0.1:5172/recipeTitles',{
    method: "POST",
    headers: {
        "Content-type" : "application/json",
        "Authorization": "Basic " + btoa("brian:password")
    },
    body: JSON.stringify({
        title: e.target.elements.title.value,
        description: e.target.elements.description.value,
        imageUrl: e.target.elements.imageUrl.value
    })
    })
    .then(response => response.text())
    .then(data => { 
        console.log(data);
})
}

function NewItem() {
  return (
    <Form onSubmit={(e) => {
        e.preventDefault();
        RecipeSubmit(e);
        e.target.reset();
    }}>
        <Form.Group>
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control type="text" name="title" required/>

            <Form.Label>Recipe Description</Form.Label>
            <Form.Control type="textarea" name="description" rows={3} required/>

            <Form.Label>Recipe Image URL</Form.Label>
            <Form.Control type="text" name="imageUrl" required />
        </Form.Group>
        <Button variant='primary' type="submit" className="w-100">Submit</Button>
    </Form>
  );
}

export default NewItem;
