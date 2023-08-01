/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//module for creating contact page\nconst createContactPage = () => {\n    const content = document.querySelector('#content');\n    \n    const pageContent = document.createElement('div');\n    content.appendChild(pageContent);\n    pageContent.classList.add('page-content');\n\n    const contactHeader = document.createElement('h1');\n    pageContent.appendChild(contactHeader);\n    contactHeader.classList.add('contacts-header');\n    contactHeader.textContent = 'ORDER NOW!';\n\n    const contactContainer = document.createElement('div');\n    pageContent.appendChild(contactContainer);\n    contactContainer.classList.add('contact-container');\n\n    const contactSubHeader = document.createElement('h3');\n    contactSubHeader.classList.add('contacts');\n    contactContainer.appendChild(contactSubHeader);\n    contactSubHeader.textContent = 'CONTACTS';\n\n// Call\n    const contactsListCall = document.createElement('h4');\n    contactsListCall.classList.add('contacts');\n    contactContainer.appendChild(contactsListCall);\n    const contactsListCallText = document.createTextNode('CALL US:  ');\n    contactsListCall.appendChild(contactsListCallText);\n    const contactsListCallLink = document.createElement('a');\n    contactsListCallLink.classList.add('contacts');\n    contactsListCallLink.setAttribute('href', 'tel: +44 020 3455 4785');\n    contactsListCallLink.textContent = '+44 020 3455 4785';\n    contactsListCall.appendChild(contactsListCallLink);\n\n// Follow \n    const contactsListFollow = document.createElement('h4');\n    contactContainer.appendChild(contactsListFollow);\n    contactsListFollow.classList.add('contacts');\n    const contactsListFollowText = document.createTextNode('FOLLOW US:  ');\n    contactsListFollow.appendChild(contactsListFollowText);\n// Follow us Insta\n    const contactsListFollowInsta = document.createElement('a');\n    contactsListFollowInsta.classList.add('contacts');\n    contactsListFollowInsta.setAttribute('href', 'https://www.instagram.com/newcrossbuns/');\n    contactsListFollowInsta.setAttribute('target', '_blank');\n    contactsListFollowInsta.textContent =  'Instagram';\n    contactsListFollow.appendChild(contactsListFollowInsta);\n    const br = document.createTextNode(' / ');\n    contactsListFollow.appendChild(br);\n// Follow us Facebook\n    const contactsListFollowFB = document.createElement('a');\n    contactsListFollowFB.classList.add('contacts');\n    contactsListFollowFB.setAttribute('href', 'https://www.facebook.com/newcrossbuns/');\n    contactsListFollowFB.setAttribute('target', '_blank');\n    contactsListFollowFB.textContent = 'Facebook';\n    contactsListFollow.appendChild(contactsListFollowFB);\n    const br1 = document.createTextNode(' / ');\n    contactsListFollow.appendChild(br1);\n// Follow us Twitter\n    const contactsListFollowTwit = document.createElement('a');\n    contactsListFollowTwit.classList.add('contacts');\n    contactsListFollowTwit.setAttribute('href', 'https://twitter.com/ViveCrepe');\n    contactsListFollowTwit.setAttribute('target', '_blank');\n    contactsListFollowTwit.textContent = 'Twitter';\n    contactsListFollow.appendChild(contactsListFollowTwit);\n// Open hours\n    const contactsListOpen = document.createElement('div');\n    contactsListOpen.classList.add('times-container');\n    contactContainer.appendChild(contactsListOpen);\n\n    const contactsListTime = document.createElement('h4')\n    contactsListTime.classList.add('contacts');\n    contactsListTime.textContent = 'OPENING TIMES: ';\n    contactsListOpen.appendChild(contactsListTime);\n    const contactsListDaysp = document.createElement('p')\n    contactsListDaysp.setAttribute('id', 'day-time')\n    contactsListDaysp.textContent = 'Mon - Sat | 8am - 6pm';\n    contactsListOpen.appendChild(contactsListDaysp)\n\n\n// create form\n    const formContainer = document.createElement('div');\n    formContainer.classList.add('form-container');\n    pageContent.appendChild(formContainer);\n\n    const form = document.createElement('form');\n    form.classList.add('contact-form');\n\n    const formHeader = document.createElement('h2');\n    formHeader.classList.add('contact-header');\n    formHeader.textContent = 'CONTACT US!'\n\n    const nameInput = document.createElement('input');\n    nameInput.type = 'text';\n    nameInput.placeholder = 'Your full name';\n    nameInput.classList.add('input');\n    \n\n    const emailInput = document.createElement('input');\n    emailInput.type = 'email';\n    emailInput.placeholder = 'you@example.com';\n    emailInput.classList.add('input');\n\n    const phoneInput = document.createElement('input');\n    phoneInput.type = 'text';\n    phoneInput.placeholder = 'Your phone number';\n    phoneInput.classList.add('input');\n    \n\n    const submitButton = document.createElement('input');\n    submitButton.setAttribute('id', 'submit');\n    submitButton.classList.add('input');\n    submitButton.type = 'submit';\n    submitButton.value = 'submit';\n\n    form.appendChild(formHeader)\n    form.appendChild(nameInput);\n    form.appendChild(emailInput);\n    form.appendChild(phoneInput);\n    form.appendChild(submitButton);\n    formContainer.appendChild(form);    \n    \n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n// Load Page\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// module for menu page\nconst createMenuPage = () => {\n    const content  = document.querySelector('#content');\n    const pageContent = document.createElement('div');\n    pageContent.classList.add('page-content');\n\n    const heading = document.createElement('h1');\n    heading.textContent = 'OUR BAKED GOODS';\n    heading.classList.add('title');\n    const copy = document.createElement('h2');\n    copy.textContent = 'All freshly hand made daily!';\n    copy.classList.add('title');\n    \n    const menuList = document.createElement('div');\n    menuList.classList.add('menu-container');\n\n    const menuItem1 = document.createElement('h3');\n    menuItem1.textContent = 'CINNAMON BUN £4.95';\n    menuItem1.classList.add('item');\n    const copy1 = document.createElement('p');\n    copy1.classList.add('item');\n    copy1.textContent = 'Vegan enriched cinemon bun with sweet vanillia icing';\n    const img1 = document.createElement('img');\n    img1.setAttribute('src','file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/IMG_3919.JPG');\n    img1.classList.add('food-img');\n    const sep1 = document.createElement('hr');\n\n    const menuItem2 = document.createElement('h3');\n    menuItem2.textContent = 'BELGIAN BUN £4.95';\n    menuItem2.classList.add('item');\n    const copy2 = document.createElement('p');\n    copy2.classList.add('item');\n    copy2.textContent = 'Vegan enriched dough filled with lemon curd & topped with sweet icing and a glace cherry';\n    const img2 = document.createElement('img');\n    img2.setAttribute('src', 'file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/IMG_4013.JPG')\n    img2.classList.add('food-img');\n    const sep2 = document.createElement('hr');\n\n    const menuItem3 = document.createElement('h3');\n    menuItem3.textContent = 'NUTELLA KNOT £3.95';\n    menuItem3.classList.add('item');\n    const copy3 = document.createElement('p');\n    copy3.classList.add('item');\n    copy3.textContent = 'A Vegan enriched dough filled with Nutella, tied up & topped with more Nutella ';\n    const img3 = document.createElement('img');\n    img3.setAttribute('src', 'file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/6D8820D8-0415-4225-84C2-068D990B397C.JPG');\n    img3.classList.add('food-img');\n    const sep3 = document.createElement('hr');\n\n    const menuItem4 = document.createElement('h3');\n    menuItem4.textContent = 'CHELSEA BUN £3.95';\n    menuItem4.classList.add('item');\n    const copy4 = document.createElement('p');\n    copy4.classList.add('item')\n    copy4.textContent = 'A Vegan enriched sweet & spicy bun, swirled with sultanas & currents';\n    const img4 = document.createElement('img');\n    img4.setAttribute('src','file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/59DE13A4-63F3-4FDA-AA8D-F13E2AF20F40.JPG');\n    img4.classList.add('food-img');\n    const sep4 = document.createElement('hr');\n\n    const menuItem5 = document.createElement('h3');\n    menuItem5.textContent = '4 BRIOCHE ROLLS | £5.95 ';\n    menuItem5.classList.add('item');\n    const copy5 = document.createElement('p');\n    copy5.classList.add('item');\n    copy5.textContent = 'Vegan enriched brioche buns';\n    const img5 = document.createElement('img');\n    img5.setAttribute('src','file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/58F931AD-564E-41A3-A7A8-63F2EEBA1EB8.JPG');\n    img5.classList.add('food-img');\n\n    // Append items\n    menuList.appendChild(menuItem1);\n    menuItem1.appendChild(copy1);\n    menuItem1.appendChild(img1);\n    menuItem1.appendChild(sep1);\n    \n    menuList.appendChild(menuItem2);\n    menuItem2.appendChild(copy2);\n    menuItem2.appendChild(img2);\n    menuList.appendChild(sep2);\n\n    menuList.appendChild(menuItem3);\n    menuItem3.appendChild(copy3);\n    menuItem3.appendChild(img3);\n    menuList.appendChild(sep3);\n\n    menuList.appendChild(menuItem4);\n    menuItem4.appendChild(copy4);\n    menuItem4.appendChild(img4);\n    menuList.appendChild(sep4);\n\n    menuList.appendChild(menuItem5);\n    menuItem5.appendChild(copy5);\n    menuItem5.appendChild(img5);\n\n\n    pageContent.appendChild(heading);\n    pageContent.appendChild(copy);\n    pageContent.appendChild(menuList);\n    content.appendChild(pageContent);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\n\n\nfunction initialLoad() {\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// restaurant.js\n\nconst createRestaurantHomePage = () => {\n    const content = document.querySelector('#content');\n    const pageContent = document.createElement('div');\n    pageContent.classList.add('page-content');\n\n    // create headline h1 & append\n    const headline = document.createElement('h1');\n    headline.textContent = 'NEW CROSS BUNS';\n    headline.classList.add('title')\n    const strap = document.createElement('h2');\n    strap.textContent = 'South-east London\\'s top bakery';\n    strap.classList.add('title');\n    pageContent.appendChild(headline);\n    pageContent.appendChild(strap);\n\n    //create image & append\n    const image = document.createElement('img');\n    image.src = 'file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/restaurant1.jpeg';\n    image.height = '';\n    image.classList.add('home-image')\n    pageContent.appendChild(image);\n\n    // \n\n    //create copy & append\n    const copy = document.createElement('h3')\n    copy.textContent = 'Serving the sweetest baked goods to New Cross and surrounding South East London post codes, come and have a look';\n    pageContent.appendChild(copy);\n\n    content.appendChild(pageContent);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n\n\n\n\n\nconst createTabs = () => {\n    const header = document.querySelector('#nav');\n\n    const logo = document.createElement('img')\n    logo.src = 'file:///Users/paulrossiter/Documents/coding/repos/restaurant-page/assests/IMG_3505.PNG';\n    logo.setAttribute('id', 'logo');\n    header.appendChild(logo);\n    \n    const navigation = document.createElement('div')\n    const div1 = document.createElement('button');\n    const div2 = document.createElement('button');\n    const div3 = document.createElement('button');\n\n    \n\n    div1.setAttribute('id', 'home-btn');\n    div2.setAttribute('id', \"menu-btn\");\n    div3.setAttribute('id', 'contact-btn');\n\n    navigation.classList.add('navigation');\n    div1.classList.add('tab');\n    div2.classList.add('tab');\n    div3.classList.add('tab');\n\n    div1.textContent = 'HOME';\n    div2.textContent = 'MENU';\n    div3.textContent = 'CONTACT';\n\n    header.appendChild(navigation)\n    navigation.appendChild(div1);\n    navigation.appendChild(div2);\n    navigation.appendChild(div3);\n\n    div1.addEventListener('click', () => {\n        clearPage();\n        (0,_restaurant__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n    div2.addEventListener('click', () => {\n        clearPage();\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n    div3.addEventListener('click', () => {\n        clearPage();\n        (0,_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    logo.addEventListener('click', () => {\n        clearPage();\n        (0,_restaurant__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n};\n\nfunction clearPage() {\n    const header = document.querySelector('#content');\n    const pageContent = document.querySelector('.page-content');\n    if(pageContent) {\n        header.removeChild(pageContent);\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\n\n//# sourceURL=webpack://restaurant-page/./src/tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;