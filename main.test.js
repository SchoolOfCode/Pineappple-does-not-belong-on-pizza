//👉 Write your tests below here:

import ewwPineapple from "./main.js"

test("function to find and remove all pineapples from ingredients array", function(){
    const actual = ewwPineapple(['ham', 'cheese', 'tomato sauce', 'pineapple'])
    const expected = ['ham', 'cheese','tomato sauce']
    expect(actual).toStrictEqual(expected)
})
test("function to find and remove all pineapples from ingredients array", function(){
    const actual = ewwPineapple(['cheese', 'olives', 'peppers', 'basil'])
    const expected = ['cheese', 'olives', 'peppers', 'basil']
    expect(actual).toStrictEqual(expected)
})
test("function to find and remove all pineapples from ingredients array", function(){
    const actual = ewwPineapple(['tomato sauce', 'chicken', 'pineapple', 'sweetcorn', 'salami'])
    const expected = ['tomato sauce', 'chicken', 'sweetcorn', 'salami']
    expect(actual).toStrictEqual(expected)
})
test("function to find and remove all pineapples from ingredients array", function(){
    const actual = ewwPineapple(['cheese', 'tomato sauce', 'prawns', 'pineapple', 'squid', 'tuna'])
    const expected = ['cheese', 'tomato sauce', 'prawns', 'squid', 'tuna']
    expect(actual).toStrictEqual(expected)
})
test("function to find and remove all pineapples from ingredients array", function(){
    const actual = ewwPineapple(['cheese', 'tomato sauce'])
    const expected = ['cheese', 'tomato sauce']
    expect(actual).toStrictEqual(expected)
})
test("function to find and remove all pineapples from ingredients array", function(){
    const actual = ewwPineapple(['cheese', 'tomato sauce', 'pepperoni', 'pineapple', 'beef', 'ham', 'salami', 'chicken'])
    const expected = ['cheese', 'tomato sauce', 'pepperoni', 'beef', 'ham', 'salami', 'chicken']
    expect(actual).toStrictEqual(expected)
})
test("function to find and remove all pineapples from ingredients array", function(){
    const actual = ewwPineapple(['cheese', 'tomato sauce', 'spicy beef', 'jalapeno', 'chili flakes'])
    const expected = ['cheese', 'tomato sauce', 'spicy beef', 'jalapeno', 'chili flakes']
    expect(actual).toStrictEqual(expected)
})