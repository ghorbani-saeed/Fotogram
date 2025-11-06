

const albumsArr = [
  { name: "Trade",          number: 0,   photo: ["img/chart-1905225_1280.jpg"] }  ,
  { name: "Money",          number: 1,   photo: ["img/dollar-6295019_1280.jpg"] },
  { name: "Board",          number: 2,   photo: ["img/circuit-board-1429589_1280.jpg"] },
  { name: "Engineering",    number: 3,   photo: ["img/ai-generated-8894578_1280.jpg"] },
  { name: "Machine",        number: 4,   photo: ["img/harley-davidson-3794909_1280.jpg"] },
  { name: "Sky Diving",     number: 5,   photo: ["img/parachuting-953179_1280.jpg"] },
  { name: "Poker",          number: 6,   photo: ["img/chess-1215079_1280.jpg"] },
  { name: "Sport",          number: 7,   photo: ["img/climb-2805903_1280.jpg"] },
  { name: "Taste",          number: 8,   photo: ["img/brown-264289_1280.jpg"] },
  { name: "Food",           number: 9,   photo: ["img/food-4935258_1280.jpg"] },
  { name: "Fruits",         number: 10,  photo: ["img/blueberries-5243712_1280.jpg"] },
  { name: "Online Games",   number: 11,  photo: ["img/braum-3764518_1280.jpg"] },

]
const gallery   =    document.getElementById("galleryJS");
const dialog    =    document.getElementById("dlgID");
const dialogImg =    document.getElementById("dialogImg");
const title     =    document.getElementById("h2DialogTitle");
const albumName =    document.getElementById("pAlbumName");
const nextBtn   =    document.getElementById("nextBtn");
const prevBtn   =    document.getElementById("prevBtn");

let currentIndex = 0;


function renderGallery() {
    gallery.innerHTML = ""; 
    for (let i = 0; i < albumsArr.length; i++) {
        const img = document.createElement("img");
        img.src = albumsArr[i].photo[0];
        img.alt = albumsArr[i].name;
        img.classList.add("mySelectedImg");
         img.tabIndex = 0;

        img.onclick = function() {
            currentIndex = i;
            openDialog(currentIndex);
        };

        gallery.appendChild(img);
    }
}

function openDialog(index) {
    const currentAlbm = albumsArr[index];
    dialogImg.src = currentAlbm.photo[0];
    title.textContent = "Album " + index;
    albumName.textContent = currentAlbm.name;
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

nextBtn.onclick = function() {
    currentIndex = (currentIndex + 1) % albumsArr.length;
    openDialog(currentIndex);
};

prevBtn.onclick = function() {
    currentIndex = (currentIndex - 1 + albumsArr.length) % albumsArr.length;
    openDialog(currentIndex);
};

document.onkeydown = function(e) {
    if (!dialog.open) return;

    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "Escape") closeDialog();
    

};

dialog.addEventListener("click", function(e) {   
  if (e.target === dialog) {   // e.target === dialog bedeutet, dass nur geklickt wurde auf den Hintergrund (außerhalb des Dialogs), nicht im Inneren. In diesem Fall wird closeDialog() ausgeführt und der Dialog geschlossen.
    closeDialog();
  }
});