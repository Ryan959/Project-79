var menu_list_items = ["Burger", "Chicken", "Chese Burger", "Taco", "Rice"];

var new_menu_item;

function show(){
    document.getElementById("menu_list_items").innerHTML = menu_list_items
}

function submit(){
    new_menu_item = document.getElementById("input_item").value;
    menu_list_items.push(new_menu_item)
    menu_list_items.sort();
    document.getElementById("menu_list_items").innerHTML = menu_list_items;
}