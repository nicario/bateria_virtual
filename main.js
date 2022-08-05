let botoes = document.querySelectorAll(".button__div");
let audio = document.querySelectorAll(".audio");
let i;

botoes.forEach(function(btn){
  audio.forEach(function(ad){
    btn.addEventListener("click", function(){
      if(btn.textContent == "Caixa 1"){
        if(ad.classList.contains("audio1")){
          ad.play();
        }
      }else if(btn.textContent == "Caixa 2"){
        if(ad.classList.contains("audio2")){
          ad.play();
        }
      }else if(btn.textContent == "Caixa 3"){
        if(ad.classList.contains("audio3")){
          ad.play();
        }
      }else if(btn.textContent == "Caixa 4"){
        if(ad.classList.contains("audio4")){
          ad.play();
        }
      }else if(btn.textContent == "Caixa 5"){
        if(ad.classList.contains("audio5")){
          ad.play();
        }
      }else if(btn.textContent == "Prato 1"){
        if(ad.classList.contains("audio6")){
          ad.play();
        }
      }else if(btn.textContent == "Prato 2"){
        if(ad.classList.contains("audio7")){
          ad.play();
        }
      }else if(btn.textContent == "Prato 3"){
        if(ad.classList.contains("audio8")){
          ad.play();
        }
      }
    })
  })
})