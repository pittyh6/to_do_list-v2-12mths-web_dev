
let add_btn = $(".add-btn")
let get_item_div = $(".items")
// delete button for delete item list (red button)
// let delete_btn = ""


// get text inserted on input_field
function getTextItemList() {
    let input_field = $(".input-text")
    let text = input_field.val()
    if (text.length > 1) {
        showItemList(text)
        input_field.val('')
        input_field[0].style.border = "none"
        input_field[0].style.height = "60px"
    } else {
        console.log("No text")
        input_field[0].style.border = "3px solid var(--medium-red)"
        input_field[0].style.height = "54px"
    }

}
function addTextList(text, box_item) {
    box_item.append(text)
}

function showItemList(text) {
    // Create Item div to put items in separate block
    let item_list = document.createElement('div')
    item_list.className = 'item'
    $(".items").append(item_list)
    // Create box to add text item list
    let box_item = document.createElement('div');
    box_item.className = 'box-item'
    item_list.append(box_item);
    // Create button delete
    let delete_btn = document.createElement('button')
    delete_btn.className = 'delete-btn'
    item_list.append(delete_btn);
    delete_btn.textContent = 'Delete';
    addTextList(text, box_item)
}
// mark item list as done
$(document).ready(function () {
    $('.elements').on('click', '.box-item', function (e) {
        e.target.style.textDecoration = 'line-through';
    })
})

// Remove item from list after click button delete
$(document).ready(function () {
   $(".elements").on('click', ".delete-btn", function (e) {
       e.target.parentNode.remove()
   })
})


// open list items navbar
$('.drop-btn').click(function () {
    if ($('.dropdown-content').hasClass('hide')) {
        $('.dropdown-content').addClass('display');
        $('.dropdown-content').removeClass('hide')
    } else {
        $('.dropdown-content').removeClass('display');
        $('.dropdown-content').addClass('hide')
    }
})