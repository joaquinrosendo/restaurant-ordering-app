import {menuArray} from './data.js';


let renderMenu = (menuArray) => {

    let htmlMenu = ``;

    menuArray.map(menuItem => {
        console.log(menuItem);

        htmlMenu += `<div class="menu-item">
                        <div class="item-info-container">
                            <p class="item-emoji">${menuItem.emoji}</p>
                            <article class="item-description">
                                <p class="item-name">${menuItem.name}</p>
                                <p class="item-ingredients">${menuItem.ingredients}</p>
                                <p class="item-price">${menuItem.price}</p>
                            </article>
                        </div>
                        <span>
                            <div class="add-item-btn">
                                <p>+</p>
                            </div>
                        </span>
                    </div>`
    })

    document.getElementById("menu-container").innerHTML = htmlMenu;
}

renderMenu(menuArray);