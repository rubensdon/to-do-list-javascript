const localStorageName = 'to-do-list'
function validateIfExistsNewTask(){

        let values = JSON.parse(localStorage.getItem(localStorageName)|| "[]")
        let inputValue = document.getElementById('input--new--task').value

        let exists = values.find(x =>x.name == inputValue )
        return !exists ? false : true
}
function newTask(){

let input = document.getElementById('input--new--task')


if(!input.value){


    alert('Digite algo para adicionar uma task')
}
else if(validateIfExistsNewTask){

    alert('Já existe uma task com esse nome')

}
else

{
    let values = JSON.parse(localStorage.getItem(localStorageName)|| "[]")

    values.push({

        name: input.value
    })
    localStorage.setItem(localStorageName,JSON.stringify(values))
    showValues()
}
}

function showValues(){

        let values = JSON.parse(localStorage.getItem(localStorageName)|| "[]")

        let list = document.getElementById('to-do-list')

        list.innerHTML = ''

        for(let i=0;i<values.length;i++){

            list.innerHTML += `<li>${values[i] ['name']}<button id='btn-ok' onclick='removeItem("${values[i] ['name']}")'>ok</button></li>`
        }
}

function removeItem(data){

            let values = JSON.parse(localStorage.getItem(localStorageName)|| "[]")

            let index = values.findIndex(x =>x.name == data)
            values.splice(index,1)
            localStorage.setItem(localStorageName,JSON.stringify(values))

showValues()

}

showValues()