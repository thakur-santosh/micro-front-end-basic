import faker from 'faker';

// purpose of this method is to load the product container
// in development mode and production mode based on how it is being called
const mount = (el) => {
  let products = '';

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// for development mode

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  if (el) {
    mount(el); // assuming the id in the product`s index.html is different in the container`s index.html
  }
}

export { mount };
