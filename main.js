const projects = [
  {
    nome: "DoNext",
    info: "Projeto de Conclusão de curso do curso Tecnico De Informatica do CEFET-MG, o qual propoe uma solução que conecta quem precisa de doações ao doador de forma facilitada e direta",
    image: "images/donext.PNG",
    linkDemo: "",
    linkRepo: "https://github.com/tcc-donext/"
  },
  {
    nome: "MovieDBClone",
    info: "Projeto criado com o intuito de usar a API do MovieDB, um banco de dados de filmes, para mostrar o catalogo de filmes com o framework React ",
    image: "images/MovieDBClone.PNG",
    linkDemo: "https://moviedbclone.herokuapp.com/",
    linkRepo: "https://github.com/MarcusMoraesOliveira/MovieDBclone"
  },
  {
    nome: "MinhaDex",
    info: "Projeto usando a PokeAPI, um banco de dados da série pokemon, em que aprensenta os pokemons e seus respectivos status, para reforçar os conceitos de asincronismo em javascript ",
    image: "images/minhaDex.PNG",
    linkDemo: "https://marcusmoraesoliveira.github.io/minhadex/",
    linkRepo: "https://github.com/MarcusMoraesOliveira/minhadex"
  },

  {
    nome: "BinaryCalc",
    info: "Calculadora de numeros binários para mobile, feita com o framework React Native  ",
    image: "images/binaryCalc.jpg",
    linkDemo: "",
    linkRepo: "https://github.com/MarcusMoraesOliveira/binaryCalc"
  },
]

function createProjects(){


  let container = document.querySelector(".right-container")
  for( let i=0; i<projects.length; i++){
    let divContent = document.createElement("div")
    divContent.classList.add("content")

    let div = document.createElement("div")
    div.classList.add("paper")
    div.classList.add("project")

    let fistDiv = document.createElement("div")
    if(i==3){
      fistDiv.classList.add('font_fix')
    }
    let spanNome = document.createElement("span")
    let pInfo = document.createElement("p")
    spanNome.innerHTML = projects[i].nome;
    spanNome.classList.add("text")
    pInfo.innerHTML = projects[i].info;
    pInfo.classList.add("font")

    fistDiv.appendChild(spanNome)
    fistDiv.appendChild(pInfo)

    let iconsDiv = document.createElement("div")
    if(projects[i].linkDemo!= ""){
      let link = document.createElement("a")
      link.href = projects[i].linkDemo
      link.target = "_blank"

      let iconDemo = document.createElement("i")
      iconDemo.classList.add("fa")
      iconDemo.classList.add("fa-code")
      iconDemo.classList.add("fa-2x")

      link.appendChild(iconDemo)

      iconsDiv.appendChild(link)
    }

    let linkR = document.createElement("a")
    linkR.href = projects[i].linkRepo
    linkR.target = "_blank"

    let iconRepo = document.createElement("i")
    iconRepo.classList.add("fa")
    iconRepo.classList.add("fa-angle-double-down")
    iconRepo.classList.add("fa-2x")

    linkR.appendChild(iconRepo)

    iconsDiv.appendChild(linkR)

    fistDiv.appendChild(iconsDiv)

    div.appendChild(fistDiv)

    let ImageDiv = document.createElement("div")
    let image = document.createElement("img")
    image.src = projects[i].image
    image.classList.add("image")
    ImageDiv.appendChild(image)

    div.appendChild(ImageDiv)


    divContent.appendChild(div)

    container.appendChild(divContent)
  }
}

createProjects()