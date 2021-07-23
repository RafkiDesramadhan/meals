class MealItem extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }
    render() {
        this.innerHTML = `
        <style>
            .meal-list {
                margin-top: 0;
                width: 100%;
                height: 500px;
                object-fit: cover;
                margin-bottom: 50px;
            }
            h2 {
                text-align: center;
                margin-bottom: 20px;
            }
            .meal-info {
                box-shadow: 1px 1px 0 3px grey;
                padding: 10px;
                margin-bottom: 15px;
            }
            @media screen and (max-width: 700px) {
                .meal-list {
                    margin-top: 0;
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                    margin-bottom: 10px;
                }
            }
        </style>
        <h2>Meal List</h2>
        <img class="meal-list" src="${this._meal.strMealThumb}" alt="Meal List">
        <div class="meal-info">
            <h2>${this._meal.strMeal}</h2>
            <h3>Category : ${this._meal.strCategory}</h3>
            <h3>Area : ${this._meal.strArea}</h3> 
            <h3>Instructions : </h3>
            <p>${this._meal.strInstructions}</p>
        </div>
        `;
    }
} 

customElements.define("meal-item", MealItem);