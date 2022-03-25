const services = [
    {name: "Allergies", imageURL: "./assets/corona.png"},
    {name: "Cardiology", imageURL: "./assets/heart.jpg"},
    {name: "Dermatology", imageURL: "./assets/pic.jpg"},
    {name: "ENT", imageURL: "./assets/corona.png"},
    {name: "Opthalmology", imageURL: "./assets/corona.png"},
    {name: "Allergies", imageURL: "./assets/corona.png"},
    {name: "Allergies", imageURL: "./assets/corona.png"},
    {name: "Allergies", imageURL: "./assets/corona.png"},
    {name: "Allergies", imageURL: "./assets/corona.png"},
    {name: "Allergies", imageURL: "./assets/corona.png"},
    {name: "Allergies", imageURL: "./assets/corona.png"},
    {name: "More Specification", imageURL: "./assets/corona.png"},

];

const servicesEL = document.querySelector(".services");

services.forEach(function(service){
    servicesEL.innerHTML += `
    <div class="col-2 text-center">
        <div class="service-icon-wrapper rounded-circle  m-auto d-flex align-items-center justify-content-center" 
             style="width: 80px; height: 80px; background-color: #d8ebee;">
            <img src="${service.imageURL}" height="40px" class="service-icon"/>
        </div>
        <p class="service-title">${service.name}</p>
    </div>
    `
});
