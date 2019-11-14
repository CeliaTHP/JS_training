const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("From the 70's")
console.log( "--------------------------------");
for(let index in entrepreneurs)
{
if(entrepreneurs[index].year >= 1970 && entrepreneurs[index].year < 1980) {
console.log(entrepreneurs[index].first + " "+ entrepreneurs[index].last + " from " + entrepreneurs[index].year)
} 
}

console.log("\nFull list")
console.log( "--------------------------------");
l = "";
for (let x in entrepreneurs){
l =(entrepreneurs[x].first +" "+ entrepreneurs[x].last);
console.log(l)
}

console.log("\nAge atm")
console.log( "--------------------------------");

for (let index in entrepreneurs){
console.log(entrepreneurs[index].first+" is "+ (2019-entrepreneurs[index].year))
}
function check(a,b)
{
if (a.last < b.last)
return -1;
else if (a.last > b.last)
return 1;
 return 0;
}

console.log("\nSorted")
console.log( "--------------------------------");
s = "";
s = (entrepreneurs.sort(check))
for (let index in entrepreneurs)
{
console.log(s[index].first+ " " + s[index].last)
}

