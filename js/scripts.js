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
  types: ['Licking', 'Supersonic']},

];


function loopBlockFunction(currentName){
  document.write("<h3><br> " + currentName.name + "</h3>");
  document.write("<p>" + 'Type: ' + currentName.height + "</p>")

  if (currentName.height > 5){
    document.write("<p>" + ' - Wow, that\’s big!' + "</p>");

}
}
repository.forEach(loopBlockFunction);


// for (var i=0; i<repository.length;i++){
//   document.write("<h3><br> " + repository[i].name + "</h3>");
//
//   document.write('Height: ',repository[i].height);
//   document.write("<p>" + 'Type: ',repository[i].types + "</p>");

// //  if (repository[i].height > 5){
//     document.write(' - Wow, that\’s big!');
//
// }

// }
