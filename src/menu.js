// module for menu page
const createMenuPage = () => {
    const content  = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = 'OUR BURGERS';
    const copy = document.createElement('h3');
    copy.textContent = 'All OUR BURGERS ARE SERVED WITH THYME SALTED FRIES!';
    
    const menuList = document.createElement('div');
    menuList.classList.add('menu-container');
    
    const menuItem1 = document.createElement('h3');
    menuItem1.textContent = 'PLANT BEAST £9.50';
    menuItem1.classList.add('item');
    const copy1 = document.createElement('p');
    copy1.classList.add('item');
    copy1.textContent = 'Vegan beetroot burger, vegan cheese, pickles, tamatoes, lettuce & burger sauce';

    const menuItem2 = document.createElement('h3');
    menuItem2.textContent = 'SLOPPY GIUEPPE £12.50';
    menuItem2.classList.add('item');
    const copy2 = document.createElement('p');
    copy2.classList.add('item');
    copy2.textContent = 'Double vegan burger patty, chilli, cheese jalapenios & chipotle mayo';

    const menuItem3 = document.createElement('h3');
    menuItem3.textContent = 'BANGKOK BAD BOY £10.50';
    menuItem3.classList.add('item');
    const copy3 = document.createElement('p');
    copy3.classList.add('item');
    copy3.textContent = 'Thai spiced vegan patty, spicy pickles, lettuce & sweet chillli mayo';

    const menuItem4 = document.createElement('h3');
    menuItem4.textContent = 'LOADED FRIES £8.00';
    menuItem4.classList.add('item');
    const copy4 = document.createElement('p');
    copy4.classList.add('item')
    copy4.textContent = 'Large fries topped with vegan chilli, cheese, salsa, guacamole, vegan sour cream & jalapenios';

    // Append items
    menuList.appendChild(menuItem1);
    menuItem1.appendChild(copy1);
    menuList.appendChild(menuItem2);
    menuItem2.appendChild(copy2);
    menuList.appendChild(menuItem3);
    menuItem3.appendChild(copy3);
    menuList.appendChild(menuItem4);
    menuItem4.appendChild(copy4);

    pageContent.appendChild(heading);
    pageContent.appendChild(copy);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
};

export default createMenuPage;