import { mount as productMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';
// Webpack will first look into node module
// if not found the search the Webpack Module Federation

console.log('Container');

productMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));
