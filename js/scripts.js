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


for (var i=0; i<repository.length;i++){
  document.write(repository[i].name);
  document.write(repository[i].height);

  if (repository[i].height > 5){
    document.write(' - Wow, that\’s big!');
}
}
