// restaurant.js
const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // create headline h1 & append
    const headline = document.createElement('h1');
    headline.textContent = 'NEW CROSS BUNS';
    headline.classList.add('title')
    const strap = document.createElement('h2');
    strap.textContent = 'South-east London\'s top bakery';
    strap.classList.add('title');
    pageContent.appendChild(headline);
    pageContent.appendChild(strap);

    //create image & append
    const image = document.createElement('img');
    image.src = './assets/restaurant1.jpeg';
    image.height = '';
    image.classList.add('home-image')
    pageContent.appendChild(image);

    // 

    //create copy & append
    const copy = document.createElement('h3')
    copy.textContent = 'Serving New Cross and surrounding South East London areas';
    pageContent.appendChild(copy);

    content.appendChild(pageContent);

};

export default createRestaurantHomePage;