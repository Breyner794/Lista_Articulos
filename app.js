
//Agregar un elemento a la lista

let form = document.getElementById('Agregar_formulario');
let lista = document.getElementById('items');
let filtro = document.getElementById('filtro');

//Evento del submit del formulario
form.addEventListener('submit', agregarItem);
//Evento Click de la lista
lista.addEventListener('click', eliminarItem);
//Evento para buscar item
filtro.addEventListener('keyup', filtrarItem);

//Funcion para agregar elementos a la lista

function agregarItem (e){
    e.preventDefault();
    let newitem = document.getElementById('item').value;

    if(newitem === ''){

        alert('Por favor, digita un artículo. Este espacio no puede quedar vacío.');

    }else{

        let li =document.createElement('li');  
        li.className = 'list-group-item';    
        li.appendChild(document.createTextNode(newitem));  
    
        let botoneleminar = document.createElement('button');
        botoneleminar.className = 'btn btn-danger btn-sm float-right eliminar';
        botoneleminar.appendChild(document.createTextNode('X'));
    
        li.appendChild(botoneleminar);
    
        lista.append(li);
    }
}

//Funcion para eliminar elemento 

function eliminarItem (e){
    if(e.target.classList.contains('eliminar')){
        if(confirm('¿Seguro de eliminar?')){
            alert('Producto eliminado.')
            let li = e.target.parentElement;
            lista.removeChild(li);
        }
    };
}

//Funcion para buscar elementos o filtrar

function filtrarItem(e){
    let texto = e.target.value.toLowerCase();
    let items = lista.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        let itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
    
}