import React from 'react';
import './RecipeTitle.css';
function RecipeTitle(props) {
    return (
        <section>
            <h2>{ props.title }</h2>
            <h3 className={props.rating < 3 ? 'red' : 'green'}>
                { props.rating } from ({ props.reviews } reviews)
            </h3>
            
        </section>
 
    )
};
export default RecipeTitle;