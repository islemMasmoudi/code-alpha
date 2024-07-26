var colorImages = [
    "rgb1.jpg", "rgb2.jpg", "rgb11.jpg", "rgb12.jpg", "rgb13.jpg", "rgb14.jpg",
    "rgb15.jpg", "rgb16.jpg", "rgb17.jpg", "rgb18.jpg", "rgb19.jpg", "rgb20.jpg",
    "rgb21.jpg", "rgb22.jpg"
];

var bwImages = [
    "img10.jpg", "img11.jpg", "img12.jpg", "img13.jpg", "img14.jpg", "img15.jpg",
    "img16.jpg", "img1.png", "img3.webp", "img4.png", "img5.png", "img6.jpg",
    "img7.png", "img8.png", "img9.jpg"
];

var grImages = [
    "grey1.jpg", "grey2.jpg", "grey3.jpg", "grey4.jpg", "grey5.jpg", "grey9.jpg",
    "grey10.jpg", "grey11.jpg", "grey13.jpg", "grey14.jpg", "grey8.jpg"
];

function load(images, galleryClass) {
    var gallery = document.querySelector("." + galleryClass);
    gallery.innerHTML = "";

    images.forEach(function(imgSrc) {
        var imgElement = document.createElement("img");
        imgElement.src = imgSrc;
        imgElement.alt = "image";
        imgElement.onclick = function() {
            openImg(imgSrc);
        };
        gallery.appendChild(imgElement);
    });
}

function show(type) {
    var colorGallery = document.querySelector(".color-img-gallery");
    var bwGallery = document.querySelector(".bw-img-gallery");
    var grGallery = document.querySelector(".gr-img-gallery");

    colorGallery.style.display = "none";
    bwGallery.style.display = "none";
    grGallery.style.display = "none";

    if (type === "color") {
        colorGallery.style.display = "flex";
        load(colorImages, "color-img-gallery");
    } else if (type === "bw") {
        bwGallery.style.display = "flex";
        load(bwImages, "bw-img-gallery");
    } else if (type === "gr") {
        grGallery.style.display = "flex";
        load(grImages, "gr-img-gallery");
    }
}

function openImg(imgSrc) {
    var fullimgs = document.getElementById("fullimgs");
    var fullimg = document.getElementById("fullimg");
    fullimg.src = imgSrc;
    fullimgs.style.display = "flex";
}

function closeImg() {
    var fullimgs = document.getElementById("fullimgs");
    fullimgs.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    show("color");
});
