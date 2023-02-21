import {menuArray} from './data.js';
let orderSummaryData = [];
let orderTotal = 0;

document.addEventListener('click', function(e){

    if(e.target.dataset.addItem){
        addMenuItem(e.target.dataset.addItem);
    }
})


let addMenuItem = (menuItemId) => {

    for(let i=0; i<menuArray.length; i++){

        if(menuArray[i].id == menuItemId){
            orderSummaryData.push(menuArray[i]);
        }
    }

    renderOrderSummary();
}

let deleteFoodItem = () => {

}

let completeOrderBtnClick = () => {

}

let payButtonClick = () => {

}

let renderOrderSummary = () => {
    
}

let renderMenu = (menuArray) => {

    let htmlMenu = ``;

    menuArray.forEach( menuItem => {

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
                            <div class="add-item-btn" >
                                <p data-add-item=${menuItem.id}>+</p>
                            </div>
                        </span>
                    </div>`
    })

    document.getElementById("menu-container").innerHTML = htmlMenu;
}

renderMenu(menuArray);