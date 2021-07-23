import DataSource from "../data/data-source.js";
import "../component/search-bar.js";
import "../component/meal-list.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const mealListElement = document.querySelector("meal-list");

    const onButtonSearchClicked = () => {
    DataSource.searchMeal(searchElement.value)
     .then(renderResult)
     .catch(fallbackResult)
    };

    const renderResult = results => {
        mealListElement.meals = results;
    };

    const fallbackResult = message  => {
        mealListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;