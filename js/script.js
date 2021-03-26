/*************************************
* BURGER CREATOR
*************************************/

//Referenze
var burgerName = document.getElementById("name");
var button = document.getElementById("button");
var ingredient = document.getElementsByClassName("ingredient-checkbox");
var displayPrice = document.getElementById("price");
var coupon = document.getElementById("coupon");
console.log(coupon);
//Settings
var coupons = ["topolino", "pippo", "pluto", "paperino"];

//Calcola il prezzo
button.addEventListener("click",
    function() {
        
        //Check nome
        if (burgerName.value.length === 0) {
            alert("Please insert a Burger Name")
        }

        //Aggiunta ingredienti
        var price = 50.00;
        
        for(var i = 0; i < ingredient.length; i++) {
            if(ingredient[i].checked) {
                price += parseInt(ingredient[i].value);
            }
        }

        //Aggiunta coupon
        if(coupons.includes(coupon.value)) {
            price -= price * 0.2;
        }

        //console.log(price);
        displayPrice.innerHTML = price.toFixed(2);
    }
);