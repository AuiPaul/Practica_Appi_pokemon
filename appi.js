console.log("chingatumadre")


  
  

  document.addEventListener('DOMContentLoaded' ,() =>{
    const random = getRandomInt(1,151)
      fetchData(random)
  } )



const getRandomInt =(min, max)  =>{
    return Math.floor(Math.random() * (max - min)) + min;
  }


  

  const fetchData = async (id) => {
      try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json() 
        console.log(data)
        const pokemon = {
        img: data.sprites.other.dream_world.front_default,
        nombre:data.name,
        hp:data.stats[0].base_stat,
        tipo:data.types[0].type.name,
        ataque:data.stats[1].base_stat,
        defensa:data.stats[2].base_stat

        }   
        pintarCard(pokemon)
        

      }catch (Error){
          console.log(error)
      }
  }

  const pintarCard = (pokemon) => {
      console.log(pokemon)

      const flex = document.querySelector('.card-pok')
      const template = document.querySelector('.templete-card').content
      const clone = template.cloneNode(true)
      const fragment = document.createDocumentFragment()

      clone.querySelector('.img-pokemon').setAttribute('src', pokemon.img)
      clone.querySelector('.nombrePokemon').textContent = pokemon.nombre
      clone.querySelector('.tipoPokemon').innerHTML= `${pokemon.tipo}`
      clone.querySelector('.vidaPokemon').innerHTML=`${pokemon.hp} `
      clone.querySelector('.ataquePokemon').innerHTML=`${pokemon.ataque}`
      clone.querySelector('.defensaPokemon').innerHTML=`${pokemon.defensa}`

      fragment.appendChild(clone)
      flex.appendChild(fragment)
      
  }


  function refreshPage(){
    window.location.reload();
} 