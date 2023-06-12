import createRestaurantHomePage from './restaurant';
import createTabs from './tabs';

function initialLoad() {
    createTabs();
    createRestaurantHomePage();
}

export default initialLoad;