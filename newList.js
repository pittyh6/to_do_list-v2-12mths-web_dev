let create_new_list_btn = $('.new-list')
let input_text_create_list = $('.input-list-name')
let insert_list_name = $('.insert-list-name')
// let list = $('.list')
let dropdown_content = $('.dropdown-content')



create_new_list_btn.click(function(){
    if(insert_list_name.hasClass('hide')){
        insert_list_name.removeClass('hide')
        insert_list_name.addClass('show')
    }else{
        insert_list_name.removeClass('show')
        insert_list_name.addClass('hide')
    }
})

function createList(){
    let list_name = input_text_create_list.val()
    addListNameNavBar(list_name)
    input_text_create_list.val('')
}

function addListNameNavBar(list_name){
    let list = document.createElement('div')
    list.className = 'list'
    dropdown_content.append(list)

    // create a tag for list nav bar
    let a_list_name = document.createElement('a')
    // add inner html with the same name as list
    a_list_name.innerHTML = list_name
    //add the href attribute
    a_list_name.setAttribute('href', list_name + '.html')
    // append a tag to the list navbar
    list.append(a_list_name)

    //create delete button
    let delete_btn_list_tag = document.createElement('button')
    delete_btn_list_tag.innerHTML = 'Delete'
    delete_btn_list_tag.className = 'delete-btn-list'
    list.append(delete_btn_list_tag)
}

// remove list from list navbar
$(document).ready(function(){
    $(".dropdown-content").on('click', ".delete-btn-list", function(e){
        console.log(e.target)
        e.target.parentNode.remove()
    })
})


