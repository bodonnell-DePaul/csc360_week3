import logo from './hero.png';
import './Login.css';
import {Form, Button, FormGroup} from "react-bootstrap";


function Authenticate(e){
    fetch('http://127.0.0.1:5172/Login',{
        method: "POST",
        headers: {
            "Content-type" : "application/json",
            "Authorization": "Basic " + btoa(e.target.elements.username.value + ":" + e.target.elements.password.value)

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

function Login() {
  return (
    <div className="hero">
        <img src={logo} alt="Hero Image" />
        <div className="hero-content">
            <h1>Login</h1>.
            <Form onSubmit={(e) =>{
                e.preventDefault();
                Authenticate(e);
                e.target.reset();
            }}>
                <FormGroup className='mb-3'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" required/>

                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" required/>
                </FormGroup>
                <Button variant='primary' type="submit" className="w-100">Login</Button>
            </Form>
        </div>

    </div>
  );
}

export default Login;
