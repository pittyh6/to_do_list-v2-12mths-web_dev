var download_list_btn = $('.download')
let download_text_list_elements = []


/* ---------------------------------------------------------------- */
function downloadFile(){
    let get_list_elements = $('.box-item')
    console.log(get_list_elements.text())
    for (let i = 0; i < get_list_elements.length; i++) {
        download_text_list_elements.push(get_list_elements[i].innerText + '\n')
    }
    console.log(download_text_list_elements)
    const file = new File(download_text_list_elements, 'to-do-list.txt', {
        type: 'text/plain',
    })
    download(file)
}
/*download_list_btn.click(function () {
    let get_list_elements = $('.box-item')
    console.log(get_list_elements.text())
    for (let i = 0; i < get_list_elements.length; i++) {
        download_text_list_elements.push(get_list_elements[i].innerText + '\n')
    }
    console.log(download_text_list_elements)
    const file = new File(download_text_list_elements, 'to-do-list.txt', {
        type: 'text/plain',
    })
    download(file)
})*/
/* ---------------------------------------------------------------- */


function download(file) {
    const link = document.createElement('a')
    const url = URL.createObjectURL(file)

    link.href = url
    link.download = file.name
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
}