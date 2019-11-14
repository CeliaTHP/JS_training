function fac(n){
for(let f = n-1; f>=1; f--){
n = n*f;
}
return n
}


console.log(fac(prompt("Number pls")))
