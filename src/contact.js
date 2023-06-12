//module for creating contact page
const createContactPage = () => {
    const content = document.querySelector('#content');
    
    const pageContent = document.createElement('div');
    content.appendChild(pageContent);
    pageContent.classList.add('page-content');

    const contactHeader = document.createElement('h1');
    pageContent.appendChild(contactHeader);
    contactHeader.classList.add('contact-header');
    contactHeader.textContent = 'ORDER NOW!';

    const contactContainer = document.createElement('div');
    pageContent.appendChild(contactContainer);
    contactContainer.classList.add('contact-container');

    const contactSubHeader = document.createElement('h2');
    contactContainer.appendChild(contactSubHeader);
    contactSubHeader.textContent = 'CONTACTS';

// Call
    const contactsListCall = document.createElement('h3');
    contactContainer.appendChild(contactsListCall);
    const contactsListCallText = document.createTextNode('Call us: ');
    contactsListCall.appendChild(contactsListCallText);
    const contactsListCallLink = document.createElement('a');
    contactsListCallLink.setAttribute('href', 'tel: +44 020 3455 4785');
    contactsListCallLink.textContent = '+44 020 3455 4785';
    contactsListCall.appendChild(contactsListCallLink);

// Follow us Insta
const contactsListFollow = document.createElement('h3');
contactContainer.appendChild(contactsListFollow);
const contactsListFollowText = document.createTextNode('Follow us: ');
contactsListFollow.appendChild(contactsListFollowText);
const contactsListFollowInsta = document.createElement('a');
contactsListFollowInsta.setAttribute('href', 'https://www.instagram.com/newcrossbuns/');
contactsListFollowInsta.setAttribute('target', '_blank');
contactsListFollowInsta.textContent =  'Instagram';
contactsListFollow.appendChild(contactsListFollowInsta);
const sep = document.createTextNode(' / ');

//Follow us Facebook



// create form
    const form = document.createElement('form');
    form.classList.add('contact-form');

    const formHeader = document.createElement('h1');
    formHeader.classList.add('contact-header');
    formHeader.textContent = 'CONTACT US!'

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter your full name';
    

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'you@example.com';

    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.placeholder = 'Enter your phone number';
    

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'submit';

    form.appendChild(formHeader)
    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(phoneInput);
    form.appendChild(submitButton);
    contactContainer.appendChild(form);    
    
};

export default createContactPage;