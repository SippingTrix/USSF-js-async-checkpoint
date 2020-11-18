const fetch = require('node-fetch')
const fs = require('fs')
//get response from pokemon API
//create a file input.text
//read the file contents
//output only the pokemons type
let pokename = fs.readFileSync('input.txt').toString().split("\r\n")
        
for (var i = 0; i < pokename.length; i++){
 fetch(`https://pokeapi.co/api/v2/pokemon/${pokename[i]}`)
 .then(response => response.json())
 .then(json => console.log(json))
}