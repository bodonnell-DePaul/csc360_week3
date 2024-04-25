const recipe = {
    title: ' My Mashed potatoes',
    feedback: {
        rating: 4.8,
        reviews: 20
    },
    ingredients: [
        { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: '1/8 cup heavy cream', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true },
    ],
    steps:[
        {description: 'Add cut potatoes to a pot of heavily salted water', completed: false},
        {description: 'Bring pot to a boil', completed: false},
        {description: 'Boil the potatoes until fork tender, about 15-20 minutes', completed: false},
        {description: 'Strain the potatoes.', completed: false},
        {description: 'Return potatoes to pot', completed: false},
        {description: 'Add butter, cream, salt, and pepper to taste', completed: false},
        {description: 'Mash potatoes', completed: false},
        {description: 'Reseason and add butter and cream as desired', completed: false},    
    ]
};

export {recipe};

const orig_recipes =[ {
    title: ' My Mashed potatoes',
    feedback: {
        rating: 3.8,
        reviews: 20
    },
    ingredients: [
        { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: '1/8 cup heavy cream', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true },
    ],
    steps:[
        {description: 'Add cut potatoes to a pot of heavily salted water', completed: false},
        {description: 'Bring pot to a boil', completed: false},
        {description: 'Boil the potatoes until fork tender, about 15-20 minutes', completed: false},
        {description: 'Strain the potatoes.', completed: false},
        {description: 'Return potatoes to pot', completed: false},
        {description: 'Add butter, cream, salt, and pepper to taste', completed: false},
        {description: 'Mash potatoes', completed: false},
        {description: 'Reseason and add butter and cream as desired', completed: false},    
    ]
},
{
    title: ' Cheesey Mashed potatoes',
    feedback: {
        rating: 4.8,
        reviews: 20
    },
    ingredients: [
        { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: '1/8 cup heavy cream', prepared: false },
        { name: '2 cups shredded cheddar cheese', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true },
    ],
    steps:[
        {description: 'Add cut potatoes to a pot of heavily salted water', completed: false},
        {description: 'Bring pot to a boil', completed: false},
        {description: 'Boil the potatoes until fork tender, about 15-20 minutes', completed: false},
        {description: 'Strain the potatoes.', completed: false},
        {description: 'Return potatoes to pot', completed: false},
        {description: 'Add butter, cream, salt, and pepper to taste', completed: false},
        {description: 'Mash potatoes', completed: false},
        {description: 'Reseason and add butter and cream as desired', completed: false},    
    ]
},
{
    title: ' Lumpy Mashed potatoes',
    feedback: {
        rating: 2.8,
        reviews: 20
    },
    ingredients: [
        { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true },
    ],
    steps:[
        {description: 'Add cut potatoes to a pot of heavily salted water', completed: false},
        {description: 'Bring pot to a boil', completed: false},
        {description: 'Boil the potatoes until fork tender, about 15-20 minutes', completed: false},
        {description: 'Strain the potatoes.', completed: false},
        {description: 'Return potatoes to pot', completed: false},
        {description: 'Add butter, cream, salt, and pepper to taste', completed: false},
        {description: 'Mash potatoes', completed: false},
        {description: 'Reseason and add butter and cream as desired', completed: false},    
    ]
},
{
    title: ' Creamy Mashed potatoes',
    feedback: {
        rating: 3.5,
        reviews: 20
    },
    ingredients: [
        { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: '1 cup heavy cream', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true },
    ],
    steps:[
        {description: 'Add cut potatoes to a pot of heavily salted water', completed: false},
        {description: 'Bring pot to a boil', completed: false},
        {description: 'Boil the potatoes until fork tender, about 15-20 minutes', completed: false},
        {description: 'Strain the potatoes.', completed: false},
        {description: 'Return potatoes to pot', completed: false},
        {description: 'Add butter, cream, salt, and pepper to taste', completed: false},
        {description: 'Mash potatoes', completed: false},
        {description: 'Reseason and add butter and cream as desired', completed: false},    
    ]
}];

export {orig_recipes};

const api_recipes =[ {
    title: 'ERROR',
    review: {
        rating: -1,
        reviews: -1
    },
    ingredients: [
        { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: '1/8 cup heavy cream', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true },
    ],
    steps:[
        {description: 'Add cut potatoes to a pot of heavily salted water', completed: false},
        {description: 'Bring pot to a boil', completed: false},
        {description: 'Boil the potatoes until fork tender, about 15-20 minutes', completed: false},
        {description: 'Strain the potatoes.', completed: false},
        {description: 'Return potatoes to pot', completed: false},
        {description: 'Add butter, cream, salt, and pepper to taste', completed: false},
        {description: 'Mash potatoes', completed: false},
        {description: 'Reseason and add butter and cream as desired', completed: false},    
    ]
},
{
    title: 'ERROR',
    review: {
        rating: -1,
        reviews: -1
    },
    ingredients: [
        { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: '1/8 cup heavy cream', prepared: false },
        { name: '2 cups shredded cheddar cheese', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true },
    ],
    steps:[
        {description: 'Add cut potatoes to a pot of heavily salted water', completed: false},
        {description: 'Bring pot to a boil', completed: false},
        {description: 'Boil the potatoes until fork tender, about 15-20 minutes', completed: false},
        {description: 'Strain the potatoes.', completed: false},
        {description: 'Return potatoes to pot', completed: false},
        {description: 'Add butter, cream, salt, and pepper to taste', completed: false},
        {description: 'Mash potatoes', completed: false},
        {description: 'Reseason and add butter and cream as desired', completed: false},    
    ]
},
{
    title: 'ERROR',
    review: {
        rating: -1,
        reviews: -1
    },
    ingredients: [
        { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true },
    ],
    steps:[
        {description: 'Add cut potatoes to a pot of heavily salted water', completed: false},
        {description: 'Bring pot to a boil', completed: false},
        {description: 'Boil the potatoes until fork tender, about 15-20 minutes', completed: false},
        {description: 'Strain the potatoes.', completed: false},
        {description: 'Return potatoes to pot', completed: false},
        {description: 'Add butter, cream, salt, and pepper to taste', completed: false},
        {description: 'Mash potatoes', completed: false},
        {description: 'Reseason and add butter and cream as desired', completed: false},    
    ]
},
{
    title: 'ERROR',
    review: {
        rating: -1,
        reviews: -1
    },
    ingredients: [
        { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: '1 cup heavy cream', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true },
    ],
    steps:[
        {description: 'Add cut potatoes to a pot of heavily salted water', completed: false},
        {description: 'Bring pot to a boil', completed: false},
        {description: 'Boil the potatoes until fork tender, about 15-20 minutes', completed: false},
        {description: 'Strain the potatoes.', completed: false},
        {description: 'Return potatoes to pot', completed: false},
        {description: 'Add butter, cream, salt, and pepper to taste', completed: false},
        {description: 'Mash potatoes', completed: false},
        {description: 'Reseason and add butter and cream as desired', completed: false},    
    ]
}];

export {api_recipes};

function toggleVisibility(id) {
    const element = document.getElementById(id+'myModal');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

export { toggleVisibility };

// function togglePrepared(title, index) {
//     const element = document.getElementById(title+index);
//     if (element.classList.contains('prepared')) {
//         element.classList.remove('prepared');
//         //element.style.textDecoration = 'none';
//         //element.style.color = 'black';
//     }
//     else{
//         //element.style.textDecoration = 'line-through';
//         //element.style.color = 'red';
//         element.classList.add('prepared');
//     }
// }

// export {togglePrepared};