// module for menu page
const createMenuPage = () => {
    const content  = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = 'OUR BAKED GOODS';
    heading.classList.add('title');
    const copy = document.createElement('h2');
    copy.textContent = 'All freshly hand made daily!';
    copy.classList.add('title');
    
    const menuList = document.createElement('div');
    menuList.classList.add('menu-container');

    const menuItem1 = document.createElement('h3');
    menuItem1.textContent = 'CINNAMON BUN £4.95';
    menuItem1.classList.add('item');
    const copy1 = document.createElement('p');
    copy1.classList.add('item');
    copy1.textContent = 'Vegan enriched cinemon bun with sweet vanillia icing';
    const img1 = document.createElement('img');
    img1.src = './assets/IMG_3919.JPG';
    img1.classList.add('food-img');

    const menuItem2 = document.createElement('h3');
    menuItem2.textContent = 'BELGIAN BUN £4.95';
    menuItem2.classList.add('item');
    const copy2 = document.createElement('p');
    copy2.classList.add('item');
    copy2.textContent = 'Vegan enriched dough filled with lemon curd & topped with sweet icing and a glace cherry';
    const img2 = document.createElement('img');
    img2.src = './assets/IMG_4013.JPG';
    img2.classList.add('food-img');

    const menuItem3 = document.createElement('h3');
    menuItem3.textContent = 'NUTELLA KNOT £3.95';
    menuItem3.classList.add('item');
    const copy3 = document.createElement('p');
    copy3.classList.add('item');
    copy3.textContent = 'A Vegan enriched dough filled with Nutella, tied up & topped with more Nutella ';
    const img3 = document.createElement('img');
    img3.src = './assets/6D8820D8-0415-4225-84C2-068D990B397C.JPG';
    img3.classList.add('food-img');

    const menuItem4 = document.createElement('h3');
    menuItem4.textContent = 'CHELSEA BUN £3.95';
    menuItem4.classList.add('item');
    const copy4 = document.createElement('p');
    copy4.classList.add('item')
    copy4.textContent = 'A Vegan enriched sweet & spicy bun, swirled with sultanas & currents';
    const img4 = document.createElement('img');
    img4.src = './assets/59DE13A4-63F3-4FDA-AA8D-F13E2AF20F40.JPG';
    img4.classList.add('food-img');

    const menuItem5 = document.createElement('h3');
    menuItem5.textContent = '4 BRIOCHE ROLLS | £5.95 ';
    menuItem5.classList.add('item');
    const copy5 = document.createElement('p');
    copy5.classList.add('item');
    copy5.textContent = 'Vegan enriched brioche buns';
    const img5 = document.createElement('img');
    img5.src = './assets/58F931AD-564E-41A3-A7A8-63F2EEBA1EB8.JPG';
    img5.classList.add('food-img');

    // Append items
    menuList.appendChild(menuItem1);
    menuItem1.appendChild(copy1);
    menuItem1.appendChild(img1);
    
    menuList.appendChild(menuItem2);
    menuItem2.appendChild(copy2);
    menuItem2.appendChild(img2);

    menuList.appendChild(menuItem3);
    menuItem3.appendChild(copy3);
    menuItem3.appendChild(img3);

    menuList.appendChild(menuItem4);
    menuItem4.appendChild(copy4);
    menuItem4.appendChild(img4);

    menuList.appendChild(menuItem5);
    menuItem5.appendChild(copy5);
    menuItem5.appendChild(img5);


    pageContent.appendChild(heading);
    pageContent.appendChild(copy);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
};

export default createMenuPage;