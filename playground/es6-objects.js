// Object property Short hand

const name = "luis"
const userAge = "24"

const user = {
    name, //using shorthand
    age: userAge,
    location: "Puerto Rico"
}

// Shorthand Syntax, value comes from variable from same name,


//Object De structuring, usefull when wanting to acces properties from object

const product = {
    label: "Red notebook",
    price: 3.00,
    stock: 201,
    salePrice: undefined,
    rating: 4.3
}
 //Destructuring Syntax
//we are pulling properties from the objects
//  const {label:productLabel, stock, rating =5} = product // default only used when value is undefined in object
//  console.log(productLabel)
//  console.log(stock)
//  console.log(rating)

const transaction = (type, {label:DataLabel, stock}) => {
    console.log(type,stock, DataLabel)

}

transaction('order', product)