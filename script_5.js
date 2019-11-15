const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }

]

console.log("At least 1 ?");
console.log("--------------------------------");

  let bookNeverRented = []
  for(let index in books) {
if(books[index].rented == 0) {
	bookNeverRented.push(books[index]);
    
}

let test = true;
for(let i=0; i<books.length; i++){
  if(books[i].rented === 0){
    test = false;
    break;
  }
}
if (test){ 
  console.log("No book with < 1 render");
}
else{
  console.log("rip book");
}
}

console.log("\nMost rended book :")
let max = 0;
let bestbook;
for(let i = 0; i < books.length; i++){
  if (max <= books[i].rented){
    max = books[i].rented;
    bestbook = books[i];
  }
}
console.log(bestbook.title +" rented " +bestbook.rented + " times")

console.log("\nLess rended book :")
let min = bestbook.rented;
let worst = 0;
for(let i = 0; i < books.length; i++){
  if (min >= books[i].rented){
    min = books[i].rented;
    worst = books[i];
  }
}
console.log(worst.title +" rented " +worst.rented + " times")

console.log("\nLF an id")
for(let x = 0; x < books.length; x++) {
if (books[x].id === 873495){
console.log("The Book with the id 873495 is "+ books[x].title)
}
}
console.log("\nDelete this id")
let list;
for(let x = 0; x < books.length; x++) {
if (books[x].id !== 133712){
list = books[x].title
console.log(list)
}
}

function check(a,b)
{
if (a.title < b.title)
return -1;
else if (a.title > b.title)
return 1;
 return 0;
}

console.log("\nSorted")
s = "";
s = (books.sort(check))
for (let index in books)
if (books[index].id !== 133712)
{
console.log(s[index].title)
}
