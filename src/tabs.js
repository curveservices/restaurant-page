import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";


const createTabs = () => {
    const header = document.querySelector('#nav');

    const logo = document.createElement('img')
    logo.src = './assets/IMG_3505.PNG';
    logo.setAttribute('id', 'logo');
    header.appendChild(logo);
    
    const navigation = document.createElement('div')
    const div1 = document.createElement('button');
    const div2 = document.createElement('button');
    const div3 = document.createElement('button');

    

    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', "menu-btn");
    div3.setAttribute('id', 'contact-btn');

    navigation.classList.add('navigation');
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    div1.textContent = 'HOME';
    div2.textContent = 'MENU';
    div3.textContent = 'CONTACT';

    header.appendChild(navigation)
    navigation.appendChild(div1);
    navigation.appendChild(div2);
    navigation.appendChild(div3);

    div1.addEventListener('click', () => {
        clearPage();
        createRestaurantHomePage();
    });
    div2.addEventListener('click', () => {
        clearPage();
        createMenuPage();
    });
    div3.addEventListener('click', () => {
        clearPage();
        createContactPage();
    });

    logo.addEventListener('click', () => {
        clearPage();
        createRestaurantHomePage();
    });
};

function clearPage() {
    const header = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if(pageContent) {
        header.removeChild(pageContent);
    };
}

export default createTabs;