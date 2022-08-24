let box = document.querySelector('.box');
let body = document.querySelector('body');



function api(){
    let pesquisa = document.getElementById('search').value;
    fetch('https://pokeapi.co/api/v2/pokemon/'+pesquisa+'')
            .then(response => response.json())
            .then(pokemon_url=> {
                
                console.log(pokemon_url);
                
                    
                    let imagem = pokemon_url.sprites.other.dream_world.front_default;
                    let tipo = pokemon_url.types[0].type.name;
                    let HP = pokemon_url.stats[0].base_stat;
                    let attack = pokemon_url.stats[1].base_stat;
                    let defence = pokemon_url.stats[2].base_stat;
                    let special_attack = pokemon_url.stats[3].base_stat;
                    let special_defense = pokemon_url.stats[4].base_stat;
                    let speed = pokemon_url.stats[5].base_stat;
                    box.innerHTML += `<div class="pokedex-box">
                                        <div class="nome"><h3>`+pokemon_url.name+`</h3></div>
                                        <div class="imagen-pokemon">
                                            <img src="`+imagem+`">
                                        </div>
                                        <div class="informações">
                                            <p>Type:`+tipo+`</p>
                                            <div class="especifico">
                                                <p>HP: `+HP+`</p>
                                                <p>Atack: `+attack+`</p>
                                                <p>Defense: `+defence+`</p>
                                                <p>special attack: `+special_attack+`</p>
                                                <p>special defense: `+special_defense+`</p>
                                                <p>speed: `+speed+`</p>
                                            </div>
                                        
                                        </div>
                                    </div>`;



                                    fetch(pokemon_url.species.url)
                                    .then(response => response.json())
                                    .then( cor =>{
                                        
                                        let color_p = cor.color.name;
                                        body.innerHTML += `
                                                <style>
                                                    .pokedex-box{
                                                        background-image: linear-gradient(`+color_p+`, white);
                                                    }
                                                </style>
                                                `;  
                                    })
            
            
            })}
         
