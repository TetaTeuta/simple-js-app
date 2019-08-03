
var pokemonRepository = (function () {
var repository = [

  {name:"Bulbasaur",
  height: 7,
  types: ['grass', 'poison']},

  {name:"Jigglypuff",
  height: 0.5,
  types: "Balloon"},

  {name:"Snorlax",
  height: 2.1,
  types: "Dozing"},

  {name:"Lickilicky",
  height: 1.7,
  types: ['Licking', 'Supersonic']}

];

function add(pokemon) {
  repository.push(pokemon);
}

function getAll() {
  return repository;

}



function addListItem(pokemon = {}) {
        var pokemonList = document.querySelector('.pokemon-list');
        var $listItem = document.createElement('li');   //create an li element that contains a button for each Pokémon
        var button = document.createElement('button'); //creates the button element
        $listItem.classList.add('pokemon-list__item');
        button.innerText = pokemon.name;     //Set the innerText of the button to be the Pokémon's name
        button.classList.add('button__style');  //Add a class to the button using the classList.add method
        $listItem.appendChild(button);   //append the button to the list item as its child.
        pokemonList.appendChild($listItem); //append the child in the repository pokemon
        button.addEventListener('click', function(event) {
        showDetails(pokemon); // creating the button as a function/event to be able to click in the future, if need more details.

    });
}
function showDetails(pokemon) {
  console.log(pokemon);
}

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });
console.log(pokemonRepository.getAll());

//for each loop
pokemonRepository.getAll().forEach(function(pokemon) {
     pokemonRepository.addListItem(pokemon);
});
