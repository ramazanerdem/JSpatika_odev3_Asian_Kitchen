import { menu } from "./app.js";

let buttonAll = document.querySelector('.btn-container');
let menuItems = document.querySelector('.section-center');

let btnAll = document.createElement("button");
let btnKorea = document.createElement("button");
let btnJapan = document.createElement("button");
let btnChina = document.createElement("button");

btnAll.classList.add("btn", "btn-outline-dark", "btn-item");
btnKorea.classList.add("btn", "btn-outline-dark", "btn-item");
btnJapan.classList.add("btn", "btn-outline-dark", "btn-item");
btnChina.classList.add("btn", "btn-outline-dark", "btn-item");

btnAll.innerHTML = "All";
btnKorea.innerHTML = "Korea";
btnJapan.innerHTML = "Japan";
btnChina.innerHTML = "China";

buttonAll.appendChild(btnAll);
buttonAll.appendChild(btnKorea);
buttonAll.appendChild(btnJapan);
buttonAll.appendChild(btnChina);

btnAll.addEventListener("click", showAll);
btnKorea.addEventListener("click", showAll);
btnJapan.addEventListener("click", showAll);
btnChina.addEventListener("click", showAll);

function showAll() { // menüye her tıklandığında ürünler tüm kaldırılır
    while (menuItems.firstChild) {
        menuItems.removeChild(menuItems.firstChild)
    }

    // tüm menüyü map metoduyla çağırdık.
    const data = menu.map(menuItem => {

            // tüm menü ürünleri sayfaya yazdırıldı
            let productDiv = document.createElement("div");
            productDiv.classList.add("menu-items", "col-lg-6", "col-sm-12");

            // this, globaldeki gerçekleşen event in dom unu belirtir.
            this.innerHTML == menuItem.category ? menuItems.appendChild(productDiv) : 
            this.innerHTML == "All" ? menuItems.appendChild(productDiv): null;
            
            // img dosyaları çağrıldı.
            let image = document.createElement("img");
            image.classList.add("photo");
            image.src = menuItem.img;
            image.alt = menuItem.title;
            productDiv.appendChild(image);

            // menu-items altındaki menu-info div i eklendi
            let menuInfo = document.createElement("div");
            menuInfo.classList.add("menu-info");
            productDiv.appendChild(menuInfo);

            // menu-info altındaki menu-title çağrıldı
            let menuTitle = document.createElement("div");
            menuTitle.classList.add("menu-title");
            menuInfo.appendChild(menuTitle);

            // menu-title altındaki h4 ler eklendi ve bilgi-fiyat çağrıldı.
            let urunAdi = document.createElement("h4");
            let urunFiyat = document.createElement("h4");
            urunFiyat.classList.add("price");
            urunAdi.innerHTML = menuItem.title;
            urunFiyat.innerHTML = menuItem.price;
            menuTitle.appendChild(urunAdi);
            menuTitle.appendChild(urunFiyat);

            // menu-info altındaki menu-text eklendi, desc çağrıldı.
            let menuText = document.createElement("div");
            menuText.classList.add("menu-text");
            menuText.innerHTML = menuItem.desc;
            menuInfo.appendChild(menuText);
    })
};




