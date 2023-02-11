 console.log(document)

 console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");
const paraVideo = document.getElementById("video");
const modal = document.querySelector(".modal");
console.log(video.src);
const linkDoVideo = video.src;
const botaoFecharM = document.querySelector(".fechar-modal");

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", ()=> {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharM.addEventListener("click", () => {
    alternarModal();
    paraVideo.setAttribute("src", "");
});

