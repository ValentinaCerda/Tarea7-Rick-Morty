const characterCard = document.getElementById('charactersCard');

class Api {
  constructor(nombre, especie, imagen) {
    this.__nombre = () => nombre;
    this.__especie = () => especie;
    this.__imagen = () => imagen;
  }
  get nombre() {
    return this.__nombre();
  }
  get especie() {
    return this.__especie();
  }
  get imagen() {
    return this.__imagen();
  }

  show() {
    let characters = [this.imagen, this.nombre, this.especie]
    characterCard.innerHTML +=
    `<div class="card mt-4 border border-5">
      <img clas="card-img image" src="${characters[0]}">
      <h3 class="card-title text-center">${characters[1]}</h3>
      <p class="specie text-center">Especie: ${characters[2]}</p>
    </div>`
  }

}

const getInfo = async () => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await response.json();

    for (let i of data.results) {
      let nombre = i.name
      let especie = i.species
      let imagen = i.image

      let list = new Api(nombre, especie, imagen);
      list.show()
    }
  } catch (error) {
    console.log(error);
  }
  
}
getInfo();