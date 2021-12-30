const products = [{
    id: 1,
    name: 'Dettol Soap',
    price: 200
  }, {
    id: 2,
    name: 'Juice',
    price: 550
  }, {
    id: 3,
    name: 'Body Cream',
    price: 2000
  }, {
    id: 4,
    name: 'Plaintain Chips',
    price: 2500
  }, {
    id: 5,
    name: 'Cripsy Chicken',
    price: 1250
  }, {
    id: 6,
    name: 'Chocolate',
    price: 120
  }, {
    id: 7,
    name: 'Plantain',
    price: 300
  },
 ]
  

// declaring the cart, containing items in it and the total price so far
const cart = {
items: [],
total: 0
} 

const getCart = (cart) => {
cart.total = cart.items.reduce((acc, product) => {
  //To get the price of each commodity ( unit price * quantity)  
  const price = (product.quantity * product.price)
    return acc + price
}, 0)

return cart
}
  
  
const orderFunction = (input, quantity = 1) => {
  // Validation that input is not more than 7 which is the number of products and also not less than 0
if (input > 7 || input < 0) {
    throw new Error('Input range is not specified')
}
// Validation that quantity of each product selected is at least 1 
if (quantity <= 0) {
    throw new Error('Quantity cannot be empty')
}
// if input is 0 display cart 
if (input === 0) return getCart(cart)


// check if the input number matches any product in the Products list 
const product = products.find((item) => item.id === input)

// check if a product selected already exist in the cart before
const productIndex = cart.items.findIndex((item) => item.id === input)

if (productIndex === -1) {
  // this shows it doesn't exist hence its pushed into the cart
    cart.items.push({...product,quantity})

    
    return {
    message: `You have added ${product.name} to the cart`,
    cart: getCart(cart),
    prompt: 'kindly select(1-7) the list of item purchase, and press 0 to display the invoice',
    items: products
    }
}
// if the product already exist, the quantity is updated 
cart.items[productIndex] = {
    ...cart.items[productIndex],
    quantity: cart.items[productIndex].quantity + quantity
}


return {
    message: `You have added ${product.name} to the cart`,
    cart: getCart(cart),
    prompt: 'kindly select(1-7) the list of item purchase, and press 0 to display the invoice',
    items: products
}
}
  
  
  
//   console.log(orderFunction(2,3))
//   console.log(orderFunction(1,3))
// console.log(orderFunction(0))


