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
                     [13123, "Bar Stool", 56, 56.2]
                     ];

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

function validate(skuNumber) {
    var i;

    if (isNaN(skuNumber) || skuNumber === null) {
        window.alert("Not a number! Enter a 5-digit number (ex. 55555).");
        return false;
    } else {
        for (i = 0; i < inventory.length; i++) {
            if (skuNumber === inventory[i][0]) {
                return true;
                }
            }
        window.alert("This sku number doesn't exist! Try again.")
        return false;

    }
}

function show(inventory) {
    "use strict";
/*    //If there are no tasks in the array
    //Check the storage object
    if (inventory.length === 0) {
        storage = localStorage.getItem("inventory") || "";
        //If the storage object contains tasks
        //Repopulate the tasks array
        if (storage.length > 0) {
            inventory = storage.split("|");
        }
    } */
    window.console.log("");
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
    do {
    skuNumber = parseInt(window.prompt("Enter a sku number of product."), 10);
    } while (validate(skuNumber) === false);
    
    do {
    stockQty = parseInt(window.prompt("Enter a stock quantity."), 10);
    } while (isNaN(stockQty));

    for (i = 0; i < inventory.length; i +=1) {
        if (skuNumber === inventory[i][0]) {
            inventory[i][2] = stockQty;
            localStorage.inventory = inventory.join(" | ");
            window.console.log("Quantity was updated for item: " + inventory[i].join(" - "));
        }
    }
 }


function main() {
    "use strict";
    var command;
    var i;
    storage = localStorage.getItem("inventory");
    storage = storage.split("|");
    if (storage.length === 0) {
        localStorage.inventory = inventory;
    } else {
        for (i=0; i < storage.length; i++) {
            storage[i] = storage[i].split(",");

            inventory[i] = [Number(storage[i][0]),
                            storage[i][1],
                            Number(storage[i][2]),
                            Number(storage[i][3])];
      }
    }

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
