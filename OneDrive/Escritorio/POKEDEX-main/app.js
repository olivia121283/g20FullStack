
const boxPokemones = document.querySelector('#box-pokemones');

let url = 'https://pokeapi.co/api/v2/pokemon/';

for (let i=1 ; i<=151; i++){
  fetch(url + i)
  .then((response)=> response.json())
  .then(data => mostrarPokemon(data))
}

function mostrarPokemon (data){
 let type = data.types.map(type => type.type.name);
  const {id, name, weight } = data;
  const cardPokemon = document.createElement ('div');
  cardPokemon.classList.add('col','mb-3');
  cardPokemon.innerHTML = ` 
  <div class="card bg-secondary flex-row rounded-3">
  <div class="w-50">
      <img src="${data.sprites.other["official-artwork"].front_default}" class="img-fluid object-fit" alt="">
  </div>
  <div class="card-body w-50">
      <h5 class="card-title"></h5>
      <h2 class="card-text mb-0 text-capitalize"><span>"${id}"</span>.</h2>
      <p class="card-text mb-3 text-capitalize"><span>"${name}"</span>.</p>
      <p class="card-text mb-3 text-capitalize"><span>"${type}"</span>.</p>
      <p class="card-text mb-3 text-capitalize"><span>"${weight}"</span>.</p>
  </div>
  </div>    
    `;
    boxPokemones.appendChild(cardPokemon);
}




















/*const cargarPokemones = async () =>{
try {
const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
//console.log(respuesta);
   const datos = await respuesta.json();
   //console.log(datos);
    datos.results.forEach(datos => {
      const {id, ThumbnailImage, name, abilities, weight } = datos;
      const cardPokemon = document.createElement ('div');
      cardPokemon.classList.add('col','mb-3');
      cardPokemon.innerHTML = ` 
      <div class="card bg-secondary flex-row rounded-3">
      <div class="w-50">
          <img src="${ThumbnailImage}" class="img-fluid object-fit" alt="">
      </div>
      <div class="card-body w-50">
          <h5 class="card-title"></h5>
          <h2 class="card-text mb-0 text-capitalize"><span>"${id}"</span>.</h2>
          <p class="card-text mb-3 text-capitalize"><span>"${name}"</span>.</p>
          <p class="card-text mb-3 text-capitalize"><span>"${abilities}"</span>.</p>
          <p class="card-text mb-3 text-capitalize"><span>"${weight}"</span>.</p>
      </div>
      </div>    
        `;
        boxPokemones.appendChild(cardPokemon);
    });

   } catch (error) {
    console.log(error);
  }
}
  cargarPokemones();

*/
    

































/*const boxPokemones = document.querySelector('#box-pokemones');

function fetchPokemon(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then (res => res.json())
  .then (data => {
    mostrarPokemones(data);
  });
}
function fetchPokemones(number){
  for (let i=1; i<=number; i++){
    fetchPokemon(i);
  }
}

let url= "https://pokeapi.co/api/v2/pokemon/"
axios.get(url).then(function(response){
let pokemon = response.data;});

function mostrarPokemones(pokemon){
  pokemon.forEach(pokemon => {
  const {id, ThumbnailImage, name, abilities, weight } = pokemon;
  const cardPokemon = document.createElement ('div');
  cardPokemon.classList.add('col','mb-3');
  cardPokemon.innerHTML = ` 
  <div class="card bg-secondary flex-row rounded-3">
  <div class="w-50">
      <img src="${ThumbnailImage}" class="img-fluid object-fit" alt="">
  </div>
  <div class="card-body w-50">
      <h5 class="card-title"></h5>
      <h2 class="card-text mb-0 text-capitalize"><span>"${id}"</span>.</h2>
      <p class="card-text mb-3 text-capitalize"><span>"${name}"</span>.</p>
      <p class="card-text mb-3 text-capitalize"><span>"${abilities}"</span>.</p>
      <p class="card-text mb-3 text-capitalize"><span>"${weight}"</span>.</p>
  </div>
  </div>       
  `;
  boxPokemones.appendChild(cardPokemon);
   });
 mostrarPokemones();
}

*/