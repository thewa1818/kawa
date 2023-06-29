


const cuteNum = 5;

const fetchC = async () =>{
  for(let i =0; i <= cuteNum; i++){
    await getC(i);
  }
};


const getC = async (id) =>{
  const url = `https://rickandmortyapi.com/api/character`;
  const res = await fetch(url);
  const cute = await res .json();
  console.log(cute);
  createC(cute);
}


function createC(cute){
  const kawaii = `
  <div>
  <img src=${cute.results[0].image}>
  <p class="id">No.${cute.results[0].id}</p>
  <p class="name">${cute.results[0].name}</p>
  <p class="status">★${cute.results[0].status}</p>
  </div>
  
  `

  $(".list").append(kawaii);
};

fetchC();




