/*************************************
* BURGER CREATOR
*************************************/

//Referenze
var burgerName = document.getElementById("name");
var button = document.getElementById("button");
var ingredient = document.getElementsByClassName("ingredient-checkbox");
var displayPrice = document.getElementById("price");
var coupon = document.getElementById("coupon");
var add = document.getElementsByClassName("ingredient-add");
console.log(add);
//Settings
var coupons = ["topolino", "pippo", "pluto", "paperino"];


//Rendere "Add" cliccabile
for(var i = 0; i < add.length; i++) {
    add[i].addEventListener("click", 
        function() {
            var thisCheckbox = this.previousElementSibling;
            thisCheckbox.checked = ! thisCheckbox.checked;
        }
    );
}

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