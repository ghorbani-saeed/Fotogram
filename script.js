const albumsArr = [
    {
        name: "Trade",
        photos: [
            "img/chart-1905225_1280.jpg",
            "img/chart-840330_1280.jpg",
            "img/money-1578510_1280.jpg",
            "img/trading-643722_1280.jpg",
            "img/woman-3972345_1280.jpg",
        ],
    },
    {
        name: "Money",
        photos: [
            "img/dollar-6295019_1280.jpg",
            "img/money-1508451_1280.jpg",
            "img/money-1508453_1280.jpg",
            "img/money-2518389_1280.jpg",
        ],
    },
    {
        name: "Board",
        photos: [
            "img/circuit-board-1429589_1280.jpg",
            "img/circuit-board-279988_1280.jpg",
            "img/circuit-board-5759540_1280.jpg",
            "img/mannequin-4284004_1280.jpg",
            "img/mannequin-5254046_1280.jpg",
            "img/mannequin-915135_1280.jpg",
        ],
    },
    {
        name: "Engineering",
        photos: [
            "img/ai-generated-8894578_1280.jpg",
            "img/engineer-4941329_1280.jpg",
            "img/nasa-2400623_1280.jpg",
            "img/repairing-4887138_1280.jpg",
            "img/technical-8792190_1280.jpg",
            "img/triumph-rocket-840995_1280.jpg",
        ],
    },
    {
        name: "Machine",
        photos: [
            "img/harley-davidson-3794909_1280.jpg",
            "img/macro-1452987_1280.jpg",
            "img/milling-444493_1280.jpg",
            "img/typewriter-1248088_1280.jpg",
            "img/vehicle-2275456_1280.jpg",
        ],
    },
    {
        name: "Sky Diving",
        photos: [
            "img/parachuting-953179_1280.jpg",
            "img/sky-diving-5232929_1280.jpg",
            "img/skydiver-1531962_1280.jpg",
            "img/skydiving-270135_1280.jpg",
            "img/skydiving-2717505_1280.jpg",
        ],
    },
    {
        name: "Poker",
        photos: [
            "img/chess-1215079_1280.jpg",
            "img/dice-6963532_1280.jpg",
            "img/gambling-4178466_1280.jpg",
            "img/playing-cards-1068147_1280.jpg",
            "img/snooker-4516624_1280.jpg",
        ],
    },
    {
        name: "Sport",
        photos: [
            "img/climb-2805903_1280.jpg",
            "img/dirt-bike-1868996_1280.jpg",
            "img/man-498473_1280.jpg",
            "img/man-5462857_1280.jpg",
            "img/quad-bike-631436_1280.jpg",
        ],
    },
    {
        name: "Taste",
        photos: [
            "img/brown-264289_1280.jpg",
            "img/peanuts-1850809_1280.jpg",
            "img/pecans-1214713_1280.jpg",
            "img/pistachios-3223610_1280.jpg",
            "img/walnut-1751661_1280.jpg",
        ],
    },
    {
        name: "Food",
        photos: [
            "img/food-4935258_1280.jpg",
            "img/food-712665_1280.jpg",
            "img/loaf-2796393_1280.jpg",
            "img/sushi-4956246_1280.jpg",
            "img/vacation-2302009_1280.jpg",
        ],
    },
    {
        name: "Fruits",
        photos: [
            "img/blueberries-5243712_1280.jpg",
            "img/cherry-2369275_1280.jpg",
            "img/chestnut-4460384_1280.jpg",
            "img/pineapple-1834329_1280.jpg",
            "img/strawberry-7224875_1280.jpg",
        ],
    },
    {
        name: "Online Games",
        photos: [
            "img/braum-3764518_1280.jpg",
            "img/game-play-4740277_1280.jpg",
            "img/girl-3660213_1280.jpg",
            "img/gragas-3782853_1280.jpg",
            "img/young-3885059_1280.jpg",
        ],
    },
];

const myDialog = document.getElementById("dlgID"); // Hole das Dialog-Element von der Seite über die ID "dlgID" → Wird genutzt, um das Dialogfenster zu öffnen, schließen und steuern
const dialogImg = document.getElementById("dialogImg"); // Holt das <img>-Element im Dialog, in dem das aktuelle Foto angezeigt wird → Hier wird das Bild dynamisch gewechselt, wenn man auf „Weiter“ / „Zurück“ klickt
const galleryContainer = document.getElementById("galleryJS"); // Holt den Container, in dem alle Vorschaubilder (Thumbnails) angezeigt werden → Hier werden die kleinen Vorschaubilder der Alben dynamisch eingefügt
let currentAlbumIndex = 0; // Aktuell geöffnetes Album
let currentPhotoIndex = 0; // Aktuelles Foto im Album
const albumNameElem = document.getElementById("P-albumName");
const h2_dialogTitle = document.getElementById("h2_dialogTitle");

// GALERIE ERSTELLEN
//    Erstellt Miniaturbilder für jedes Album
function thumb() {
    // Funktion thumb zum Anzeigen der Album-Bilder in der Galerie
    const container = document.getElementById("galleryJS");

    for (let i = 0; i < albumsArr.length; i++) {
        // Schleife über alle Alben(mit hilfe von schleife werden wir 12 bilder auf dem div mit id galleryJS schmeissen als miniatorbilder als vorschau)
        const firstPhoto = albumsArr[i].photos[0]; // Das erste Bild des aktuellen Albums auswählen
        const img = document.createElement("img"); // Ein neues <img>-Element erstellen
        img.src = firstPhoto; // Bildquelle (src) auf das erste Foto setzen
        img.alt = albumsArr[i].name; // Alt-Text auf den Namen des Albums setzen (für semantisch)
        img.classList.add("mySelectedImg"); // CSS-Klasse für Styling hinzufügen
        img.tabIndex = 0;
        img.onclick = function () { // Wenn auf eines der Vorschaubilder (img) geklickt wird, wird diese anonyme Funktion ausgeführt:
            currentAlbumIndex = i; //jedes Foto hat ein feste index. Speichert den Index (also die Nummer) des angeklickten Albums. Beispiel: Wenn das zweite Album angeklickt wird, ist i = 1. Dadurch weiß das Skript später, aus welchem Album die Fotos im Dialog angezeigt werden sollen.
            currentPhotoIndex = 0; // Erste Foto von jeweilige array(objeckt) nach click auf miniaturbild in den dialog schmeissen und mit hilfe--> § dialogImg.src = albumsArr[currentAlbumIndex].photos[currentPhotoIndex]; §  (Setzt den Foto-Index auf 0 zurück → Das bedeutet, dass immer das erste Foto des gewählten Albums angezeigt wird)
            openDialogWithPhoto(); // Öffnet den Dialog und zeigt das aktuelle Foto an,→ Diese Funktion setzt das Bild im Dialog und zeigt das Fenster an
        };

        img.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {                 //bei aktueller thumbbild wird mit Enter auch neben mausclick auch dialog öffnen können
                currentAlbumIndex = i;
                currentPhotoIndex = 0;
                openDialogWithPhoto();
            }
        });
        container.appendChild(img);                  // Das Bild zum Galerie-Container hinzufügen(mit dem zeile wird sichbar in HTML)-> Bild in Galerie einfügen
    }
}

const nxtBtn = document.getElementById("nextBtn"); //Verschiebe die Event Listener nach außen, also außerhalb der Funktion openDialogWithPhoto() — damit sie nur einmal beim Laden gesetzt werden.
const prBtn = document.getElementById("prevBtn"); //Verschiebe die Event Listener nach außen, also außerhalb der Funktion openDialogWithPhoto() — damit sie nur einmal beim Laden gesetzt werden.

function openDialogWithPhoto() {                                          // DIALOG ÖFFNEN -> Zeigt das aktuelle Foto im Album an,
    const photo = albumsArr[currentAlbumIndex].photos[currentPhotoIndex]; //welche minaturbild von gallery geclickt wird erstmal gemerkt wird und von diesem gallery erste bild angezeigt wird aus oben( currentPhotoIndex = 0;  )
    dialogImg.src = photo;                                                // Bild im Dialog anzeigen

    //     NAVIGATION: NÄCHSTES FOTO
    //     ---------------------------
    const albm = albumsArr[currentAlbumIndex]; //  ALBUM DEFINIEREN
    albumNameElem.textContent = albm.name;
    h2_dialogTitle.textContent = `Album ${currentAlbumIndex}`;
    myDialog.showModal();
    dialogImg.focus(); // Setzt den Tastaturfokus auf das Bild im Dialog, damit Benutzer direkt mit der Tastatur navigieren können (z. B. Pfeiltasten für vorheriges/nächstes Foto) und Screenreader das Bild als aktives Element erkennen.

    nxtBtn.addEventListener("click", function (event) {
        event.stopPropagation(); //Verhindert, dass der Klick auch das Dialog-Schließen auslöst,Wenn du auf den Button klickst,würde JavaScript normalerweise denken:Du hast auch auf den Dialog-Hintergrund geklickt.“Dann würde sich das Fenster schließen. event.stopPropagation(); Nur der Button soll reagieren — das Fenster soll offen bleiben.
        const album = albumsArr[currentAlbumIndex]; // Holt das aktuell geöffnete Album anhand des gespeicherten Indexes.
        currentPhotoIndex = (currentPhotoIndex + 1) % album.photos.length; // Erhöht den Index um 1 → zeigt das nächste Foto. Der Modulo-Operator (%) sorgt dafür, dass man nach dem letzten Bild, wieder beim ersten beginnt (endloses Durchblättern). currentPhotoIndex + 1 → geht ein Bild weiter, % album.photos.length → sorgt dafür, dass man am Ende wieder von vorne anfängt,
        dialogImg.src = album.photos[currentPhotoIndex]; // Aktualisiert das Bild im Dialog, um das neue Foto anzuzeige
    });
    //    NAVIGATION: VORHERIGES FOTO
    //    ---------------------------

    prBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Verhindert, dass der Klick das Dialog-Schließen auslöst
        const album = albumsArr[currentAlbumIndex]; // Holt das aktuell geöffnete Album
        currentPhotoIndex =
            (currentPhotoIndex - 1 + album.photos.length) % album.photos.length; // Index um 1 verringern. Wenn wir kleiner als 0 werden, springt er zum letzten Bild- Album hat 5 Fotos → Indexe 0, 1, 2, 3, 4. Wir sind aktuell beim ersten Bild: currentPhotoIndex = 0 --> 0 - 1 = -1 --> + album.photos.length --> -1 + 5 = 4 --> % album.photos.length--> 4 % 5 = 4
        dialogImg.src = album.photos[currentPhotoIndex]; // Zeigt das neue Bild im Dialog an
    });
}

thumb();
function closeDialog() {
    // Funktion zum Schließen des Dialogs über den "X"-Button
    myDialog.close(); // Dialog schließen
    myDialog.classList.remove("dlgopened"); // entfernt CSS-Klasse dlgopened
}
//  KLICK AUF HINTERGRUND
//  Schließt den Dialog, wenn man außerhalb klickt
// -----------------------
myDialog.addEventListener("click", function (event) {
    if (event.target === myDialog) {
        // Nur wenn man auf das <dialog> selbst klickt, nicht auf die Bilder oder Buttons->if (event.target === myDialog) bedeutet: „der Klick war nicht auf ein Kind im Dialog, sondern auf den Backdrop“, also alles außerhalb der Box“.
        closeDialog();
    }
});

//    INITIAL START
//    Fügt beim Laden der Seite die Galerie hinzu
// ----------------------------------------------
document.addEventListener("keydown", function (e) {
    if (!myDialog.open) return; // nur reagieren, wenn der Dialog offen ist
    if (e.key === "ArrowRight") {
        // rechts → nächstes Bild
        currentPhotoIndex =
            (currentPhotoIndex + 1) %
            albumsArr[currentAlbumIndex].photos.length;
        dialogImg.src = albumsArr[currentAlbumIndex].photos[currentPhotoIndex];
    } else if (e.key === "ArrowLeft") {
        // links → vorheriges Bild
        currentPhotoIndex =
            (currentPhotoIndex -
                1 +
                albumsArr[currentAlbumIndex].photos.length) %
            albumsArr[currentAlbumIndex].photos.length;
        dialogImg.src = albumsArr[currentAlbumIndex].photos[currentPhotoIndex];
    } else if (e.key === "Escape") {
        // Esc → Dialog schließen
        closeDialog();
    }
});

// Für jedes Thumbnail

img.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        currentAlbumIndex = i;
        currentPhotoIndex = 0;
        openDialogWithPhoto();
    }
});
