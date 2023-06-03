console.log('Importing module');
import { cart, addToCart } from './cart.js';
// default import (podería usarse calquera nome ao facer a importación)
import shippingCost from './cart.js';
addToCart('bread', 5);
console.log(cart);
console.log(shippingCost);
