var input = document.querySelector("#input");
var price = document.querySelector("#price");
var ul = document.querySelector("#ul");
var totalText = document.querySelector("#totalText");

var totalArr = [];

function addItem() {
    if (input.value !== "" && price.value !== "") {
        // Add item to the list
        ul.innerHTML += `
        <li>
            ${input.value} 
            <p>${price.value}</p>
            <button onclick="deleteItem(this)"><i class="fa-solid fa-trash"></i></button>
            <button onclick="editItem(this)"><i class="fa-solid fa-pen"></i></button>
        </li>`;

        // Convert price to a number and push it into the array
        totalArr.push(parseFloat(price.value));

        // Reset input fields
        input.value = "";
        price.value = "";

        // Update total price
        totalItems();
    } else {
        alert("Fill All the fields first");
    }
}

// Edit item function
function editItem(e) {
    var pro = prompt("Enter updated value", e.parentNode.firstChild.textContent);
    e.parentNode.firstChild.textContent = pro;
}

// Delete item function
function deleteItem(e) {
    var priceValue = parseFloat(e.parentNode.querySelector('p').textContent);
    

    totalArr = totalArr.filter(price => price !== priceValue);

    // Remove item from the list
    e.parentNode.remove();

    // Update total price
    totalItems();
}

// Delete all items function
function deleteAll() {
    ul.innerHTML = "";
    totalArr = []; 
    totalItems();
}


function totalItems() {
    var total = totalArr.reduce(function(sum, price) {
        return sum + price;
    }, 0);
        totalText.textContent = `Total Price: ${total.toFixed(2)}`;  // Display the total price
}
