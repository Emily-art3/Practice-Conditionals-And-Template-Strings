let productName = prompt('Enter the product name')
let price = prompt('Enter the price of the product')
let available = prompt('is product available? (yes/no): ')

function productDetails (productName, price, available) {
    let availabilityMessage = (available.toLowerCase() === 'yes') ? 'available' : 'not available';
 return `The ${productName} costs ${price}.It is ${availabilityMessage}.` 
}
 console.log (productDetails(productName, price, available));