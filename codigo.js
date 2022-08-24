let box = document.querySelector('.box');
let body = document.querySelector('body');

function chamar(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(response => response.json())
    .then(pokemon=> {
        console.log(pokemon);
        for(let i=0; i <7; i++){
           
            
            fetch(pokemon.results[i].url)
            .then(response => response.json())
            .then(pokemon_url=> {
                let imagem = pokemon_url.sprites.other.dream_world.front_default;
                let tipo = pokemon_url.types[0].type.name;
                let HP = pokemon_url.stats[0].base_stat;
                let attack = pokemon_url.stats[1].base_stat;
                let defence = pokemon_url.stats[2].base_stat;
                let special_attack = pokemon_url.stats[3].base_stat;
                let special_defense = pokemon_url.stats[4].base_stat;
                let speed = pokemon_url.stats[5].base_stat;
                box.innerHTML +=`<div class="pokedex-box" id="chamar_`+i+`">
                                    <div class="nome"><h3>#`+i+` `+pokemon.results[i].name+`</h3></div>
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
            
            
                
            });
            //ate aqui so o nome e imagem;
            fetch(pokemon.results[i].url)
            .then(response => response.json())
            .then(pokemon_c=> {
                cor_api  = pokemon_c.species.url;
                fetch(cor_api)
                .then(response => response.json())
                .then(pokemon_color=> {
                    
                    cor = pokemon_color.color.name;
                    body.innerHTML += `
                    <style>
                        #chamar_`+i+`{
                            background-image: linear-gradient(`+cor+`, white);
                        }
                    </style>
                    `;    
                      
            })

            })
                
            

            
        };
         });

         
}

chamar();