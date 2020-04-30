console.log('oi')

window.addEventListener('DOMContentLoaded', () => {


    const submit = document.getElementById('todoSubmit');
    const lista = document.getElementById('todoLista');
    let input = document.getElementById('todoInput');
    const removerTodos = document.getElementById('todoRemoverTodos');
    const marcarTodos = document.getElementById('todoMarcarTodos');
    const dontBeADrag = '';

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




            const botaoExcluir = document.createElement('button');
            botaoExcluir.innerText = 'Excluir';
            addTarefa.appendChild(botaoExcluir);
            botaoExcluir.style.color = 'rgb(194, 19, 112)';

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
            })git 

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




            input.value = '';
        }
        
        
        
        
    })
})


// addTarefa.classList.add('classeLi')


 //addTarefa.setAttribute('draggble', true);


 // addTarefa.addEventListener('dragstart', (e) => {
 //     dontBeADrag = e.target.closest('.classeLi');
 //     //e.dataTransfer.effectAllowed = 'move';
 // })

 // addTarefa.addEventListener('dragover', (e) => {
 //     e.preventDefault();

 //     const node = e.target.closest('.classeLi');
 //     e.dataTransfer.dropEffect = 'move';


 //     this.insertBefore(dontBeADrag, node)
 // })

 // addTarefa.addEventListener('dragend', (e) => {
 //     dontBeADrag = null;
 //})
