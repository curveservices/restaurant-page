// restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // create headline h1 & append
    const headline = document.createElement('h1');
    headline.textContent = 'VE-GAN CLAN';
    const strap = document.createElement('h2');
    strap.textContent = 'Home of plant based burgers'
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
    copy.textContent = 'Serving the best food in town, come and have a look';
    pageContent.appendChild(copy);

    content.appendChild(pageContent);

};

export default createRestaurantHomePage;