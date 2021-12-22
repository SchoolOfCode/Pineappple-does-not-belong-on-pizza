/* 
👉 It's a tough day for an office of hungry programmers. 
The pizzas have arrived and some of them have pineapple on them. You need to find a way
of removing the pineapple from the array of pizza toppings.  

For example:
* Given[ham, cheese, tomato sauce, pineapple] your solution should return - pineapple
*/

//👉 


const ingredients =['ham', 'cheese', 'tomato sauce', 'pineapple']
// ['cheese', 'olives', 'peppers', 'basil']
// ['tomato sauce', 'chicken', 'pineapple', 'sweetcorn', 'salami']
// ['cheese', 'tomato sauce', 'prawns', 'pineapple', 'squid', 'tuna']
// ['cheese', 'tomato sauce']
// ['cheese', 'tomato sauce', 'pepperoni', 'pineapple', 'beef', 'ham', 'salami', 'chicken']
// ['cheese', 'tomato sauce', 'spicy beef', 'jalapeno', 'chili flakes']

// ingredients.find(ewwPineapple)

export default function ewwPineapple(ingredient){
    return ingredients.slice('pineapple')
}


