/*eslint-env browser*/
// --- The Product Inventory Management System ---
var skuNumber;
var storage;
var inventory = [[13675, "Table Lamp", 15, 45.8],
                 [13643, "Tabel", 5, 158.99],
                 [13684, "TV Stand", 8, 132],
                 [13265, "Vaccum Cleaner", 26, 199.99],
                 [13822, "Computer Desk", 10, 89.99],
                 [13843, "Bed", 23, 450],
                 [13123, "Bar Stool", 56, 56.2],
                 ];

localStorage.inventory = inventory;

function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - view all products");
    window.console.log("update - update stock");
    window.console.log("exit - exit the program");
    window.console.log("");
}

function show(inventory) {
    "use strict";
    //If there are no tasks in the array
    //Check the storage object
    if (inventory.length === 0) {
        storage = localStorage.getItem("inventory") || "";
        //If the storage object contains tasks
        //Repopulate the tasks array
        if (storage.length > 0) {
            inventory = storage.split("|");
        }
    }
    inventory.sort();
    inventory.forEach(function(product) {
    window.console.log(product[0] + " " + product[1] + " (" + product[2] + ") $" + product[3]);
    });
    window.console.log(""); 

}

function update() {
    var i;
    var stockQty;
    "use strict";
    //do {
    skuNumber = parseInt(window.prompt("Enter a sku number of product."), 10);
    //} while (false);
    
    stockQty = parseInt(window.prompt("Enter a stock quantity."), 10);
    for (i = 0; i < inventory.length; i +=1) {
        if (skuNumber === inventory[i][0]) {
            inventory[i][2] = stockQty;
            //localStorage.inventory[i][2] = stockQty;
            localStorage.setItem(inventory[i][2], stockQty);
            window.console.log("Quantity was updated for item:" + inventory[i]);
        }
    }
 }

/*
function checkSku(skuNumber) {
    var i;
    window.console.log("entered sku - " + skuNumber + typeof(skuNumber));
    window.console.log(inventory[1][0] + typeof(inventory[2][0]));
    if (isNaN(skuNumber) || skuNumber === null) {
        window.alert("Not a number! Enter a 5-digit number (ex. 55555).");   return false;     
    } else {
        for (i = 0; i < inventory.length; i++) {
            if (inventory[i][0] === skuNumber) {
                window.console.log(inventory[i][2]);
                return true;
            } else {
                window.alert("The entered sku number doesn't exist. Try again.");
                return false;
            }
        }
    }
}
*/
function main() {
    "use strict";
    var command;
    
    displayMenu();
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                show(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("Command is not valid");
            }
        } else {
            window.console.log("Thank you for using our product");
            window.console.log("Have a good one.");
            break;
        }
    }
    
}

main();