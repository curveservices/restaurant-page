// restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // create headline h1 & append
    const headline = document.createElement('h1');
    headline.textContent = 'NEW CROSS BUNS';
    const strap = document.createElement('h2');
    strap.textContent = 'South-east London\'s top bakery'
    pageContent.appendChild(headline);
    pageContent.appendChild(strap);

    //create image & append
    const image = document.createElement('img');
    image.src = 'file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/restaurant1.jpeg';
    image.height = '500';
    image.classList.add('home-image')
    pageContent.appendChild(image);

    // 

    //create copy & append
    const copy = document.createElement('h3')
    copy.textContent = 'Serving the sweetest baked goods to New Cross and surrounding South East London post codes, come and have a look';
    pageContent.appendChild(copy);

    content.appendChild(pageContent);

};

export default createRestaurantHomePage;