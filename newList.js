let create_new_list_btn = document.querySelector('.new-list')
// let list = $('.list')
let click_list_name_navbar = $('.list-element')

document.addEventListener('DOMContentLoaded', function () {

    create_new_list_btn.addEventListener('click', function () {
        alert("list clicked")
        let insert_list_name = $('.insert-list-name')
        if (insert_list_name.hasClass('hide')) {
            insert_list_name.removeClass('hide')
            insert_list_name.addClass('show')
        } else {
            insert_list_name.removeClass('show')
            insert_list_name.addClass('hide')
        }
    });
});

/*$('.new-list').click(function () {
    alert("list")
    let insert_list_name = $('.insert-list-name')
    if (insert_list_name.hasClass('hide')) {
        insert_list_name.removeClass('hide')
        insert_list_name.addClass('show')
    } else {
        insert_list_name.removeClass('show')
        insert_list_name.addClass('hide')
    }
})*/

function createList() {
    // get the data was written down on the input field 
    let input_text_create_list = $('.input-list-name')
    let list_name = input_text_create_list.val()
    addListNameNavBar(list_name)
    input_text_create_list.val('')

}

function addListNameNavBar(list_name) {
    let dropdown_content = $('.dropdown-content')
    let list = document.createElement('div')
    list.className = 'list'
    dropdown_content.append(list)

    // create a tag for list nav bar
    let a_list_name = document.createElement('a')
    // add inner html with the same name as list
    a_list_name.innerHTML = list_name
    //add the href attribute
    //  a_list_name.setAttribute('href', list_name + '.html')
    a_list_name.className = 'list-element'
    // append a tag to the list navbar
    list.append(a_list_name)
    a_list_name.addEventListener('click', function (e) {
        createNewPageList(list_name)
    })


    //create delete button
    let delete_btn_list_tag = document.createElement('button')
    delete_btn_list_tag.innerHTML = 'Delete'
    delete_btn_list_tag.className = 'delete-btn-list'
    list.append(delete_btn_list_tag)
}

$(document).ready(function () {
    // remove list from list navbar
    $(".dropdown-content").on('click', ".delete-btn-list", function (e) {
        console.log(e.target)
        e.target.parentNode.remove()
    })
})

function createNewPageList(list_name) {

    /* const newPage = document.createElement('html')
     const newHead = document.createElement('head')
     const newBody = document.createElement('body')
 
     const newPageUrl = "/list_name.html"
 
     const title = document.createElement("title");
     title.textContent = list_name;
     //css file 
     const css_index = "public/css/index.css"
     const css_animation = "public/css/animations.css"
     const link_index = document.createElement("link")
     const link_animation = document.createElement("link")
     link_index.rel = "stylesheet"
     link_index.type = "text/css"
     link_index.href = css_index
     link_animation.rel = "stylesheet"
     link_animation.type = "text/css"
     link_animation.href = css_animation
     //js files
     // const js_index = "index.js"
     // const head = newHead[0]
     // const js_script = document.createElement('script')
     // js_script.type = "text/javascript"
     // js_script.src = js_index
     
     const heading = document.createElement("h1");
     heading.textContent = "This is a dynamic page created with JavaScript!";
 */
    const element_page_html = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <link rel="stylesheet" href="css/index.css">
        <link rel="stylesheet" href="css/animations.css"> -->
        <link rel="stylesheet" href="public/css/index.css">
        <link rel="stylesheet" href="public/css/animations.css">
    
    
        <title>${list_name}</title>
    </head>
    
    <body>
    
        <!-- navbar for lists -->
        <nav>
            <div class="dropdown">
                <button class="drop-btn">Lists</button>
                <div class="dropdown-content hide">
                    <div class="list">
                        <a href="index.html" class="list-element">to do list</a>
                        <button class="delete-btn-list">Delete</button>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Animation blob top left scream -->
        <section class="animation-ball">
            <div class="blob">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4d455dc0"
                        d="M32.8,-54.9C40.2,-46.3,42.3,-33.3,45.3,-22.1C48.4,-10.8,52.4,-1.4,47.4,4.1C42.5,9.6,28.6,11.2,22.8,22.3C17.1,33.4,19.5,54,13.6,63.5C7.8,73,-6.3,71.4,-16.3,64.4C-26.3,57.4,-32,45.1,-41.3,35.3C-50.7,25.5,-63.5,18.2,-60.6,11.2C-57.8,4.2,-39.2,-2.6,-31.9,-12.8C-24.5,-22.9,-28.3,-36.4,-24.8,-46.8C-21.4,-57.2,-10.7,-64.4,1,-66C12.7,-67.6,25.4,-63.5,32.8,-54.9Z"
                        transform="translate(100 100)">
                        <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M32.8,-54.9C40.2,-46.3,42.3,-33.3,45.3,-22.1C48.4,-10.8,52.4,-1.4,47.4,4.1C42.5,9.6,28.6,11.2,22.8,22.3C17.1,33.4,19.5,54,13.6,63.5C7.8,73,-6.3,71.4,-16.3,64.4C-26.3,57.4,-32,45.1,-41.3,35.3C-50.7,25.5,-63.5,18.2,-60.6,11.2C-57.8,4.2,-39.2,-2.6,-31.9,-12.8C-24.5,-22.9,-28.3,-36.4,-24.8,-46.8C-21.4,-57.2,-10.7,-64.4,1,-66C12.7,-67.6,25.4,-63.5,32.8,-54.9Z;
                    M20.7,-38.2C24,-30.1,22.1,-19.6,22.1,-12.2C22.2,-4.8,24.4,-0.5,25.2,4.6C25.9,9.7,25.3,15.5,23.7,24.5C22.1,33.5,19.5,45.6,14.7,44.3C10,43,3,28.3,-8.4,26C-19.7,23.8,-35.5,34.1,-44.4,33.2C-53.4,32.3,-55.5,20.3,-53.2,10.1C-50.8,-0.1,-43.9,-8.5,-36.2,-12.8C-28.4,-17.1,-19.9,-17.3,-13.7,-24.2C-7.5,-31,-3.8,-44.4,2.5,-48.2C8.7,-52.1,17.3,-46.3,20.7,-38.2Z;
                    M22.5,-29.2C31.1,-29.4,41.3,-26.5,42.6,-20.4C43.9,-14.3,36.1,-5.1,32,2.6C27.8,10.4,27.3,16.8,23.1,18.1C19,19.5,11.3,15.8,2.2,27.6C-6.9,39.5,-17.3,66.9,-25.8,71.8C-34.4,76.6,-41,59,-49.2,45.1C-57.3,31.2,-66.9,21.1,-72.4,8.1C-77.9,-4.9,-79.2,-20.9,-73.8,-34.1C-68.4,-47.3,-56.2,-57.9,-42.8,-55.5C-29.3,-53,-14.7,-37.7,-3.9,-31.6C6.9,-25.6,13.9,-29,22.5,-29.2Z;
                    M43,-56.3C57.2,-57.9,71.1,-48.3,80,-34.8C88.8,-21.2,92.7,-3.7,82,5.8C71.3,15.3,46.1,16.7,32.4,22.4C18.6,28.1,16.4,38.2,9.3,47.4C2.3,56.6,-9.6,65,-24.4,67.7C-39.2,70.4,-56.8,67.5,-65.3,57C-73.8,46.5,-73.1,28.5,-64.8,15.8C-56.4,3.2,-40.4,-3.9,-33.2,-13.3C-26,-22.6,-27.6,-34,-23.6,-37C-19.5,-40,-9.7,-34.6,2.3,-38.3C14.4,-41.9,28.9,-54.7,43,-56.3Z;
                    M23.2,-33.2C37.3,-27,61.1,-32.9,73.6,-27.2C86.1,-21.6,87.4,-4.4,84.8,12C82.1,28.4,75.6,44.2,62.2,46.6C48.7,49,28.4,38.2,16.1,30.9C3.8,23.6,-0.5,19.8,-8,20.6C-15.5,21.4,-26.2,26.7,-34.8,25.4C-43.4,24.1,-49.9,16.1,-58.3,4.1C-66.7,-7.9,-77.1,-23.9,-70.1,-29.1C-63.2,-34.3,-39.1,-28.8,-24.5,-34.8C-9.9,-40.8,-5,-58.4,-0.2,-58.1C4.5,-57.8,9.1,-39.4,23.2,-33.2Z;
                    M14.2,-31.2C19.4,-18.8,25.3,-16.5,27.7,-12.3C30.1,-8.2,29,-2.1,30.9,6.5C32.9,15.1,37.9,26.1,34,27.9C30,29.7,17.2,22.2,8.5,21.4C-0.2,20.5,-4.8,26.3,-15.6,32.5C-26.3,38.7,-43.2,45.4,-46.2,40.7C-49.1,36,-38.2,20,-39.5,6.1C-40.8,-7.7,-54.4,-19.4,-54.3,-27C-54.3,-34.7,-40.6,-38.3,-29.3,-47.9C-17.9,-57.5,-9,-73.1,-2.2,-69.7C4.5,-66.2,9,-43.7,14.2,-31.2Z;
                    M17.1,-39.3C19.8,-25,17.8,-16.1,22.1,-9.3C26.4,-2.5,37,2.2,43.2,11C49.3,19.8,51.1,32.8,45.5,39.5C39.8,46.3,26.9,46.8,15,49.7C3.1,52.5,-7.7,57.8,-14.7,54C-21.6,50.1,-24.7,37.1,-29.2,27.7C-33.8,18.2,-39.7,12.4,-44.3,4.2C-49,-4.1,-52.2,-14.7,-51.5,-26.6C-50.8,-38.5,-46.3,-51.7,-37,-63C-27.8,-74.3,-13.9,-83.8,-3.3,-78.6C7.3,-73.4,14.5,-53.6,17.1,-39.3Z;
                    M28.6,-48.7C39.9,-37.3,53.9,-34.1,53.5,-26.8C53.2,-19.5,38.5,-8,31,0.5C23.6,9,23.3,14.5,22,22.8C20.6,31.2,18.2,42.4,12.9,44C7.6,45.6,-0.5,37.5,-10.5,34.9C-20.5,32.4,-32.3,35.3,-33.1,30.7C-34,26.1,-23.9,14.1,-21.5,5.4C-19,-3.2,-24.3,-8.3,-24.2,-12C-24,-15.7,-18.5,-17.9,-13.5,-32.2C-8.6,-46.5,-4.3,-72.9,2.2,-76.3C8.7,-79.7,17.3,-60.1,28.6,-48.7Z;
                    M37.3,-61.7C47.5,-51.6,54.1,-39.7,54.4,-28.1C54.6,-16.5,48.4,-5.2,45.4,5.6C42.4,16.4,42.6,26.8,37.1,30.8C31.5,34.9,20.2,32.6,11.3,32.4C2.4,32.2,-4.1,34,-10.2,33C-16.3,31.9,-22,28,-24.6,22.6C-27.1,17.3,-26.5,10.5,-27.5,4C-28.4,-2.6,-30.9,-8.9,-29.3,-13.8C-27.7,-18.6,-21.9,-21.9,-16.4,-34.1C-10.8,-46.4,-5.4,-67.5,4.1,-73.9C13.6,-80.2,27.2,-71.8,37.3,-61.7Z;
                    M33.5,-55.3C40.2,-47.9,39.9,-33,38.4,-21.8C36.9,-10.6,34.2,-3,33.2,4.9C32.3,12.8,33.1,21.1,30.5,29.3C27.9,37.5,21.8,45.6,13.5,49.7C5.3,53.8,-5.3,53.8,-19.7,55.1C-34.2,56.4,-52.5,58.9,-57.3,51C-62.2,43.1,-53.5,24.8,-50.9,10.3C-48.2,-4.1,-51.6,-14.6,-48.7,-22.8C-45.8,-30.9,-36.6,-36.7,-27.4,-42.9C-18.2,-49.1,-9.1,-55.7,2.2,-59C13.5,-62.4,26.9,-62.7,33.5,-55.3Z;
                    M32.8,-54.9C40.2,-46.3,42.3,-33.3,45.3,-22.1C48.4,-10.8,52.4,-1.4,47.4,4.1C42.5,9.6,28.6,11.2,22.8,22.3C17.1,33.4,19.5,54,13.6,63.5C7.8,73,-6.3,71.4,-16.3,64.4C-26.3,57.4,-32,45.1,-41.3,35.3C-50.7,25.5,-63.5,18.2,-60.6,11.2C-57.8,4.2,-39.2,-2.6,-31.9,-12.8C-24.5,-22.9,-28.3,-36.4,-24.8,-46.8C-21.4,-57.2,-10.7,-64.4,1,-66C12.7,-67.6,25.4,-63.5,32.8,-54.9Z;
                    "></animate>
                    </path>
                </svg>
            </div>
        </section>
    
        <div class="container">
            <header>
                <h1>${list_name}</h1>
            </header>
            <main>
                <input type="text" class="input-text">
                <button type="submit" class="add-btn" onclick="getTextItemList()">Add</button>
            </main>
            <section class="elements">
                <div class="items">
                </div>
            </section>
            <section class="actions">
                <button type="button" class="action new-list">Create New List</button>
                <button type="button" class="action download" >Download List</button>
            </section>
            <section class="insert-list-name hide">
                <input type="text" class="input-text input-list-name" placeholder="insert list name">
                <button type="submit" class="add-btn create-list-btn" onclick="createList()">Create</button>
            </section>
        </div>
    
        <!-- import jquery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <!-- import js file -->
        <script src= "index.js"></script>
        <script src="newList.js"></script>
        <script src="downloadList.js"></script>
    
    </body>
    
    </html>
    
   `

    /*newHead.appendChild(title);
    newHead.appendChild(link_index)
    newHead.appendChild(link_animation)
    newBody.appendChild(heading);
    newPage.appendChild(newHead);
    newPage.appendChild(newBody);
 //    newHead.appendChild(js_script)*/

    // document.documentElement.replaceWith(newPage)
    document.body.innerHTML = element_page_html
    // const script_index = document.createElement('script');
    // script_index.src = 'index.js';
    // document.head.appendChild(script_index);
    //window.location.href = newPageUrl
}
