console.log('oi')

window.addEventListener('DOMContentLoaded', () => {


    const submit = document.getElementById('todoSubmit');
    const lista = document.getElementById('todoLista');
    let input = document.getElementById('todoInput');
    const removerTodos = document.getElementById('todoRemoverTodos');
    const marcarTodos = document.getElementById('todoMarcarTodos');
    

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (input.value.trim() == "") {
            alert(`Escreva uma mensagem válida, mizera!`);
        } else {


            const addTarefa = document.createElement('li');
            const textoP = document.createElement('p');
            textoP.innerText = input.value;
            lista.appendChild(addTarefa);
            addTarefa.appendChild(textoP);

            
            input.value = '';

            const botaoExcluir = document.createElement('button');
            botaoExcluir.innerText = 'Excluir';
            addTarefa.appendChild(botaoExcluir);

            botaoExcluir.addEventListener('click', () => {
                lista.removeChild(addTarefa);
            })


            textoP.addEventListener('click', (e) => {
                e.preventDefault();

                if (textoP.classList.contains('classeTextoP')) {
                    textoP.classList.remove('classeTextoP');
                    console.log('Clicado')
                } else {
                    textoP.setAttribute('class', 'classeTextoP');
                    console.log('Clicado de novo')
                }
            })

            marcarTodos.addEventListener('click', () => {

                if (textoP.classList.contains('classeTextoP')) {
                    textoP.classList.remove('classeTextoP');
                    console.log('Clicado')
                } else {
                    textoP.setAttribute('class', 'classeTextoP');
                    console.log('Clicado de novo')
                }
                console.log('clicado')
            })

            removerTodos.addEventListener('click', () => {
                lista.removeChild(addTarefa)
            })

            
        }




    })
})


// // const lista = document.getElementById('todoLista')


// // console.log(textoAdd)

// // const textoAdd = document.getElementById('todoInput')
// // const addLi = document.querySelector('ul')

// // function absorverTarefa() {
// //     const tarefa = document.createElement('li')
// //     textoAdd.innerText = tarefa.value
// //     addLi.appendChild(tarefa)

// // }

// const botaoAdd = document.getElementById('todoSubmit')
// botaoAdd.addEventListener('click', function (e) {
//     e.preventDefault()

//     const form = document.querySelector('todoLista')
//     const addTarefa = form.createElement('li')

// })