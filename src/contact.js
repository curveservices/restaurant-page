//module for creating contact page
const createContactPage = () => {
    const content = document.querySelector('#content');
    
    const pageContent = document.createElement('div');
    content.appendChild(pageContent);
    pageContent.classList.add('page-content');

    const contactHeader = document.createElement('h1');
    pageContent.appendChild(contactHeader);
    contactHeader.classList.add('contacts-header');
    contactHeader.textContent = 'ORDER NOW!';

    const contactContainer = document.createElement('div');
    pageContent.appendChild(contactContainer);
    contactContainer.classList.add('contact-container');

    const contactSubHeader = document.createElement('h3');
    contactSubHeader.classList.add('contacts');
    contactContainer.appendChild(contactSubHeader);
    contactSubHeader.textContent = 'CONTACTS';

// Call
    const contactsListCall = document.createElement('h4');
    contactsListCall.classList.add('contacts');
    contactContainer.appendChild(contactsListCall);
    const contactsListCallText = document.createTextNode('CALL US:  ');
    contactsListCall.appendChild(contactsListCallText);
    const contactsListCallLink = document.createElement('a');
    contactsListCallLink.classList.add('contacts');
    contactsListCallLink.setAttribute('href', 'tel: +44 020 3455 4785');
    contactsListCallLink.textContent = '+44 020 3455 4785';
    contactsListCall.appendChild(contactsListCallLink);

// Follow 
    const contactsListFollow = document.createElement('h4');
    contactContainer.appendChild(contactsListFollow);
    contactsListFollow.classList.add('contacts');
    const contactsListFollowText = document.createTextNode('FOLLOW US:  ');
    contactsListFollow.appendChild(contactsListFollowText);
// Follow us Insta
    const contactsListFollowInsta = document.createElement('a');
    contactsListFollowInsta.classList.add('contacts');
    contactsListFollowInsta.setAttribute('href', 'https://www.instagram.com/newcrossbuns/');
    contactsListFollowInsta.setAttribute('target', '_blank');
    contactsListFollowInsta.textContent =  'Instagram';
    contactsListFollow.appendChild(contactsListFollowInsta);
    const br = document.createTextNode(' / ');
    contactsListFollow.appendChild(br);
// Follow us Facebook
    const contactsListFollowFB = document.createElement('a');
    contactsListFollowFB.classList.add('contacts');
    contactsListFollowFB.setAttribute('href', 'https://www.facebook.com/newcrossbuns/');
    contactsListFollowFB.setAttribute('target', '_blank');
    contactsListFollowFB.textContent = 'Facebook';
    contactsListFollow.appendChild(contactsListFollowFB);
    const br1 = document.createTextNode(' / ');
    contactsListFollow.appendChild(br1);
// Follow us Twitter
    const contactsListFollowTwit = document.createElement('a');
    contactsListFollowTwit.classList.add('contacts');
    contactsListFollowTwit.setAttribute('href', 'https://twitter.com/ViveCrepe');
    contactsListFollowTwit.setAttribute('target', '_blank');
    contactsListFollowTwit.textContent = 'Twitter';
    contactsListFollow.appendChild(contactsListFollowTwit);
// Open hours
    const contactsListOpen = document.createElement('div');
    contactsListOpen.classList.add('times-container');
    contactContainer.appendChild(contactsListOpen);

    const contactsListTime = document.createElement('h4')
    contactsListTime.classList.add('contacts');
    contactsListTime.textContent = 'OPENING TIMES: ';
    contactsListOpen.appendChild(contactsListTime);
    const contactsListDaysp = document.createElement('p')
    contactsListDaysp.setAttribute('id', 'day-time')
    contactsListDaysp.textContent = 'Mon - Sat | 8am - 6pm';
    contactsListOpen.appendChild(contactsListDaysp)

// create form
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    pageContent.appendChild(formContainer);

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const formHeader = document.createElement('h2');
    formHeader.classList.add('contact-header');
    formHeader.textContent = 'CONTACT US!'

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Your full name';
    nameInput.classList.add('input');
    

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'you@example.com';
    emailInput.classList.add('input');

    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.placeholder = 'Your phone number';
    phoneInput.classList.add('input');
    
    const submitButton = document.createElement('input');
    submitButton.setAttribute('id', 'submit');
    submitButton.classList.add('input');
    submitButton.type = 'submit';
    submitButton.value = 'submit';

    form.appendChild(formHeader)
    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(phoneInput);
    form.appendChild(submitButton);
    formContainer.appendChild(form);    
    
};

export default createContactPage;