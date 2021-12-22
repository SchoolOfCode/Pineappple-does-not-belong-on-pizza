//👉 Write your tests below here:

import ewwPineapple from "./main.js"

test("function to find and remove all pineapples from ingredients array", function(){
    const actual = ewwPineapple()
    const expected = 'pineapple'
    expect(actual).toBe(expected)
})