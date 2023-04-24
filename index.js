const apikey = "8fa8be48";
const frmpedquisa = document.querySelector("form");
frmpedquisa.onsubmit = (ev) => {
  ev.preventDefault();

  const pesquisa = ev.target.pesquisa.value;

  fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apikey}`)
    .then((result) => result.json())
    .then((json) => carregalista(json));
};

const carregalista = (json) => {


  const lista = document.querySelector("div.lista");

 
  lista.innerHTML = `<a href ='https://miguelfranco27.github.io/movie-project/index.html' onclick="fecharp()" type="submit" class="sairpesquisa"> <img src="img/aa6e2e44d114a56c22ceee95d27e248d.png" alt=""></a>`;
  if (json.Response == "False") {
    alert("Nao encontrado");
    return;
  }
  
  window.scrollTo({ top: 590, behavior: 'smooth',});
     

  
  json.Search.forEach((element) => {
    if ((element.Type != "movie" && element.Type != "series") || element.Type == "episode") {
      itemP.innerHTML = "";
    } else {
      let itemP = document.createElement("div");
      itemP.classList.add("itemP");
   
      itemP.innerHTML = `  <img class = 'imgpesquisa' src= " ${element.Poster} "/> <img id="imgin"  src="img/lupa.png" alt="" />      `
      ct = document.querySelector("#categorias");
      ct.style.display = "none";
      
   
      
      lista.appendChild(itemP);

    }
    
  });
};

const chaveapi = "1534b82bcc6ef3f5dc161b3d125cafb2";
const imagehost = "https://image.tmdb.org/t/p/original/";

lista1 = document.querySelector("div.populares");
lista2 = document.querySelector("div.originais");
lista3 = document.querySelector("div.comédias");
lista4 = document.querySelector("div.documentario");
lista5 = document.querySelector("div.TOP");

const categorias = [
  {
    
    nome: "Lançamentos",
    api: fetch( `https://api.themoviedb.org/3/trending/all/week?api_key=${chaveapi}&language=pt-BR`)
  },
  {
    
    nome: "Aclamados",
    api: fetch( `https://api.themoviedb.org/3/movie/top_rated?api_key=${chaveapi}&&language=pt-BR`)
  },

  {
    
    nome: "originais",
    api: fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${chaveapi}&with_networks=21`)
  },
  {
    
    nome: "documentarios",
    api: fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${chaveapi}&with_genres=99`),
  },
];

categorias.map((element) => {

  categorias[0].api
    .then((result) => result.json())
    .then((json) => exibirlista1(json));
  const exibirlista1 = (json) => {
  
    json.results.forEach((element) => {
       
      let item = document.createElement("div");
      item.classList.add("item");
  
       item.innerHTML = `  <img class = 'imgpesquisa' src= " ${imagehost}${element.poster_path} "/> <img id="imgin"  src="img/lupa.png" alt="">    <div id="info">  <img class ='imgdiv'src=" ${imagehost}${element.poster_path} " />  <div class="texto"> <h4>${element.title}</h4>  <p>${element.overview}</p> <button>assistir</button> </div>  </div>   `
      lista1.appendChild(item);
    });
  };
});


    



categorias[1].api
  .then((result) => result.json())
  .then((json) => exibirlista2(json));
const exibirlista2 = (json) => {
  json.results.forEach((element) => {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `  <img class = 'imgpesquisa' src= " ${imagehost}${element.poster_path} "/> <img id="imgin"  src="img/lupa.png" alt="">    <div id="info">  <img class ='imgdiv'src=" ${imagehost}${element.poster_path} " />  <div class="texto"> <h4>${element.title}</h4>  <p>${element.overview}</p> <button>assistir</button> </div> </div>  `
    lista2.appendChild(item);
  });
};


categorias[2].api
  .then((result) => result.json())
  .then((json) => exibirlista3(json));
const exibirlista3 = (json) => {
  json.results.forEach((element) => {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `  <img class = 'imgpesquisa' src= " ${imagehost}${element.poster_path} "/> <img id="imgin"  src="img/lupa.png" alt="">    <div id="info">  <img class ='imgdiv'src=" ${imagehost}${element.poster_path} " />  <div class="texto"> <h4>${element.name}</h4>  <p>${element.overview}</p> <button>assistir</button> </div> </div>  `
    lista3.appendChild(item);
  });
};


categorias[3].api
  .then((result) => result.json())
  .then((json) => exibirlista4(json));
const exibirlista4 = (json) => {
  json.results.forEach((element) => {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `  <img class = 'imgpesquisa' src= " ${imagehost}${element.poster_path} "/> <img id="imgin"  src="img/lupa.png" alt="">    <div id="info">  <img class ='imgdiv'src=" ${imagehost}${element.poster_path} " />  <div class="texto"> <h4>${element.name}</h4>  <p>${element.overview}</p> <button>assistir</button> </div> </div>  `
    lista4.appendChild(item);
  });

};


function showsearch() {
  m = document.getElementById("modal");
  m.style.display = "block";
  fechar = document.querySelector("#show");
  fechar.style.display = "none";
}

function closesearch() {
  m = document.getElementById("modal");
  m.style.display = "none";

  fechar = document.querySelector("#show");
  fechar.style.display = "block";
}

let contador = 1;

setInterval(function () {
  document.getElementById("slide" + contador).checked = true;
  contador++;

  if (contador > 5) {
    contador = 1;
  }
}, 2600);
 const setheader = document.getElementsByTagName('header')
const headerblack = document.getElementsByTagName('header')



function rolar(){ window.scrollTo({ top: 650, behavior: 'smooth',});    }

function rone(){ window.scrollTo({ top: 650, behavior: 'smooth',});}

function rtwo(){ window.scrollTo({ top: 940, behavior: 'smooth',});}

function rtree(){ window.scrollTo({ top: 1350, behavior: 'smooth',});}

function rfour(){ window.scrollTo({ top: 1720, behavior: 'smooth',});}

