import {menuArray} from './data.js';
let orderSummaryData = [];
let orderTotal = 0;

document.addEventListener('click', function(e){

    if(e.target.dataset.addItem){
        addMenuItem(e.target.dataset.addItem);
    }
    else if(e.target.dataset.removeItem){
        deleteFoodItem(e.target.dataset.removeItem);
    }
})


let addMenuItem = (menuItemId) => {
    
    if(orderSummaryData.length === 0){
        orderSummaryData = menuArray;
        orderSummaryData.map( orderItem => {
            orderItem.quantity = 0;
        })
    }

    for(let i=0; i<orderSummaryData.length; i++){
        if(orderSummaryData[i].id == menuItemId){
            orderSummaryData[i].quantity += 1;
        }
    }
    console.log(orderSummaryData);
    renderOrderSummary();
}

let deleteFoodItem = (menuItemId) => {

    for(let i=0; i<orderSummaryData.length; i++){

        if(orderSummaryData[i].id == menuItemId){
            orderSummaryData[i].quantity -= 1;
        }
    }
    
    console.log(orderSummaryData);
    renderOrderSummary();
}

let completeOrderBtnClick = () => {

}

let payButtonClick = () => {

}

let renderOrderSummary = () => {

    let orderSummaryHtml = `<h2 class="order-title">Your Order</h2>`;

    orderSummaryData.forEach( orderItem => {

        if(orderItem.quantity > 0){
            orderSummaryHtml += `<div class="order-item-container">
                                <div class="order-item">
                                    <p class="order-item-name">${orderItem.name} x${orderItem.quantity}</p>
                                    <p class="order-item-remove-btn" data-remove-item=${orderItem.id}>remove</p>
                                </div>
                                <p class="order-item-price">$${orderItem.price * orderItem.quantity}</p>
                            </div>`
        }
        
    })

    document.getElementById('order-list').innerHTML = orderSummaryHtml;

    if (orderSummaryData.length === 0){
        document.getElementById('order-total-container').innerHTML = '';
    }
    else {
        orderTotal = 0;
        for(let i=0; i<orderSummaryData.length; i++){
            orderTotal += orderSummaryData[i].price * orderSummaryData[i].quantity;
        }
        document.getElementById('order-total-container').innerHTML = `<p class="order-total-label">Total price:</p>
                                    <p class="order-total">$${orderTotal}</p>`
    }
    orderSummaryHtml = ``;
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
                                <p class="item-price">$${menuItem.price}</p>
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