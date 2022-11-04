
 const filterContainer = document.querySelector(".gallery-filter"),
 galleryItems = document.querySelectorAll(".gallery-item");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("filter-item")){
   	 // deactivate existing active 'filter-item'
   	 filterContainer.querySelector(".active").classList.remove("active");
   	 // activate new 'filter-item'
   	 event.target.classList.add("active");
   	 const filterValue = event.target.getAttribute("data-filter");
   	 galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
       	item.classList.remove("hide");
       	 item.classList.add("show");
       }
       else{
       	item.classList.remove("show");
       	item.classList.add("hide");
       }
   	 });
   }
 });
// filterObjects("all");

// function filterObjects(c){
//   var i, x;
//   x = document.getElementsByClassName("box");
//   if(c == "all") c="";
//   for(i = 0; i<x.length;i++)
//   {
//     removeClass(x[i],"show");
//     if(x[i].className.indexOf(c) > -1) addClass(x[i],"show")
//   }
// }

// function addClass(element, name){
//   var i, arr1, arr2;
//   arr1=element.className.split(" ");
//   arr2=name.split(" ");
//   for(i = 0; i<arr2.length; i++){
//     if( arr1.indexOf(arr2[i]) == -1){
//       element.className += " " + arr2[i];
//     }
//   }
// }

// function removeClass(element, name){
//   var i, arr1, arr2;
//   arr1=element.className.split(" ");
//   arr2=name.split(" ");
//   for(i = 0; i<arr2.length; i++){
//     while( arr1.indexOf(arr2[i]) > -1){
//       arr1.splice(arr1.indexOf(arr2[i]),1);
//     }
//   }
//   element.className = arr1.join(" ");
// }







// const imageGrid = document.querySelector(".image-grid");
// const links = imageGrid.querySelectorAll("a");
// const imgs = imageGrid.querySelectorAll("img");
// const lightboxModal = document.getElementById("lightbox-modal");
// const bsModal = new bootstrap.Modal(lightboxModal);
// const modalBody = document.querySelector(".modal-body .container-fluid");

// for (const link of links) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const currentImg = link.querySelector("img");
//     const lightboxCarousel = document.getElementById("lightboxCarousel");
//     if (lightboxCarousel) {
//       const parentCol = link.parentElement.parentElement;
//       const index = [...parentCol.parentElement.children].indexOf(parentCol);
//       const bsCarousel = new bootstrap.Carousel(lightboxCarousel);
//       bsCarousel.to(index);
//     } else {
//       createCarousel(currentImg);
//     }
//     bsModal.show();
//   });
// }

// function createCarousel(img) {
//   const markup = `
//     <div id="lightboxCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="false">
//       <div class="carousel-inner">
//         ${createSlides(img)}
//       </div> 
//       <button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
//        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//        <span class="visually-hidden">Previous</span>
//       </button>
//       <button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Next</span>
//       </button>
//     </div>
//     `;

//   modalBody.innerHTML = markup;
// }

// function createSlides(img) {
//   let markup = "";
//   const currentImgSrc = img.getAttribute("src");

//   for (const img of imgs) {
//     const imgSrc = img.getAttribute("src");
//     const imgAlt = img.getAttribute("alt");
//     const imgCaption = img.getAttribute("data-caption");

//     markup += `
//     <div class="carousel-item${currentImgSrc === imgSrc ? " active" : ""}">
//       <img src=${imgSrc} alt=${imgAlt}>
//       ${imgCaption ? createCaption(imgCaption) : ""}
//     </div>
//     `;
//   }

//   return markup;
// }

// function createCaption(caption) {
//   return `<div class="carousel-caption">
//      <p class="m-0">${caption}</p>
//     </div>`;
// }

