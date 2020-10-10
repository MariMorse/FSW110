const form = document.myForm
let closeButton = document.getElementsByClassName('close')

form.addEventListener('submit', function (event) {
    event.preventDefault()


    let task = document.getElementById('title').value
    if (task === '') {
        document.getElementById('myForm').reset()
        alert('Please enter a Task...')
    }
    else {
        let newTitle = document.createElement('div')
        let myTask = document.createElement('h3')
        let message = document.createTextNode(task)
        myTask.appendChild(message)
        newTitle.appendChild(myTask)
        document.body.append(newTitle)

        let describe = document.getElementById('description').value
        let newDescribe = document.createElement('p')
        let text = document.createTextNode(describe)
        newDescribe.appendChild(text)
        newTitle.appendChild(newDescribe)

        let erase = document.createElement('button')
        erase.innerHTML = 'DELETE'
        erase.className = 'close'
        newTitle.appendChild(erase)

        document.getElementById('myForm').reset()
    }


    for (i = 0; i < closeButton.length; i++) {
        closeButton[i].addEventListener('click', function () {
            let theDiv = this.parentElement;
            theDiv.style.display = 'none'
        })
    }
})