
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

return {
  add: add,
  getAll: getAll

};
})();

pokemonRepository.getAll().forEach(function(pokemon){ document.write('<p>'+ pokemon.name+'</p>')})





// function loopBlockFunction(currentName){
//   document.write("<h3> " + currentName.name + "</h3>");
//   document.write("<p>" + 'Type: ' + currentName.types + "</p>")
//   document.write("<p>" + 'Height: ' + currentName.height + "</p>")
//
//
//   if (currentName.height > 5){
//     document.write("<p>" + ' - Wow, that\’s big!' + "</p>");
//
//   }
// }
// pokemonRepository.forEach(loopBlockFunction);
