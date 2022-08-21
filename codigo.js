let box = document.querySelector('.box');

function chamar(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(response => response.json())
    .then(pokemon=> {
        for(let i=1; i < 9; i++){
           
            
            fetch(pokemon.results[i].url)
            .then(response => response.json())
            .then(pokemon_url=> {
                let imagem = pokemon_url.sprites.other.dream_world.front_default;
                console.log(imagem);
                box.innerHTML +=`<div class="pokedex-box">
                                    <div class="nome"><h3>#`+i+` `+pokemon.results[i].name+`</h3></div>
                                    <div class="imagen-pokemon">
                                        <img src="`+imagem+`">
                                    </div>
                                    <div class="informações">iagora?</div>
                                </div>`;
            //ate aqui so o nome e imagem;
                
            });
            
        };
         });

         
}
chamar();