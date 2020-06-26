// FUNCTIONS
// 1. THE FORTUNE TELLER
// let cnt =document.querySelector(".fortune");
function tellFortune(numChild, namePartner, locationGeo, jobTitle){
    let par = document.getElementById("fortune-story");
    par.innerHTML = "You will be a " +jobTitle+ " in " +locationGeo+
     ", and married to " +namePartner+ " with " +numChild+ " kids."
    //  cnt.appendChild(par);
}
tellFortune(5,"Isabel","Canada","Manager");
tellFortune(2, "Cynthia","Kenya", "Artist");

let form = document.querySelector("form");
let content = document.querySelector(".fortune");
     data = [];
    //  content.innerHTML = "";

function fortuneTells(){
 form.addEventListener('submit', (event)=>{
event.preventDefault();

     let children = document.getElementById("numChildren").value;
     let partner = document.getElementById("partner").value;
     let place = document.getElementById("geolocation").value;
     let jobtitle = document.getElementById("job").value;


     let userInput = document.querySelector(".input").value;
     data = [...data, userInput];

     content.innerHTML = "";

     data.forEach( ()=>{
     let pa= document.createElement("p");
     pa.innerHTML = "You will be a " +jobtitle+ " in " +place+
     ", and married to " +partner+ " with " +children+ " kids.";
    
     content.appendChild(pa);
     })
 })
}
fortuneTells();

//THE PUPPY DOG AGE CALCULATOR
let about = document.querySelector(".about");

    function calculateDogAge(){
       let ageofDog = prompt("Enter the Age of your Puppy:");
      //  console.log(ageofDog);
      let ageInDogYears = ageofDog * 7;
// console.log(ageInDogYears);

    let h3 = document.createElement("h3");
    h3.setAttribute("class", "p");
   h3.innerHTML= "Your doggie is " + ageInDogYears+ "years old in dog years!";
    about.appendChild(h3);

    }
   //  calculateDogAge()

//    THE LIFETIME SUPLY CALCULATOR
let ageAmount = document.querySelector(".maxAge");
function calculateSupply(age,amountperDay){
    let maxAge = 110;
    let amount = (maxAge - age) * amountperDay;
    // ageAmount.innerHTML= "";
ageAmount.innerHTML = "You will need " +amount+" to last you until the ripe old age of "
+maxAge+ " years."
    return("You will need " +amount+" to last you until the ripe old age of "
    +maxAge+ " years.");
}
calculateSupply(1,56);
calculateSupply(1,5);
console.log(calculateSupply(35, 100));
console.log(calculateSupply(67,250));
console.log(calculateSupply(5,890));

// THE GEOMETRIZER --Properties of a circle
let circ = document.querySelector(".circumfrence");
 function calcCircumference(radius){
      let circumference = 3.14*(radius*2);
    circ.innerHTML="The circumference is " +circumference+ " units."
      return("The circumference is " +circumference+ " units.");
 }
 calcCircumference(7);
console.log(calcCircumference(3.5));
console.log(calcCircumference(14));
console.log(calcCircumference(24));

let area=document.querySelector(".area");
 function calcArea(radius){
     let ar = 3.14 * ( radius * radius);
     area.innerHTML = "The area is "+ar+" square units.";
     return( "The area is "+ar+" square units.");
 }
calcArea(14);
console.log(calcArea(7));
console.log(calcArea(15));
console.log(calcArea(27));

//THE TEMPERATURE CONVERTER
function celciusToFahrenheit(){
    let divT =document.querySelector(".aboutT");
    divT.innerHTML = "Click ME To Enter the Temperature:";
   divT.style.cursor = "pointer";
   divT.style.fontWeight = "bold";
   divT.style.color = "darkslategray";
   divT.addEventListener('click',()=>{
       var temp=prompt("What's the temperature in degrees?");
       let pT = document.createElement("p");
       pT.innerText="It is " +temp+ " degrees today.";
       divT.appendChild(pT);
      let tempFah =  temp*32;
      let fah = document.querySelector(".t-f");

      fah.innerHTML = "In Fahrenheit:  " +temp +"`C is " +tempFah+"`F.";
      fah.style.color = "salmon";
      fah.style.textDecoration = "underline";
    })
}
celciusToFahrenheit()

function fahrenheitToCelsius(){
    let divF = document.querySelector(".aboutF");
    divF.innerHTML= "Click ME To Enter the Temperature:";
    divF.style.cursor = "pointer";
    divF.style.fontWeight = "bold";
    divF.style.color = "darkslategray";

    divF.addEventListener('click',()=>{
        var temp=prompt("What's the temperature in fahrenheit?");
        let pF = document.createElement("p");
        pF.innerText = "It is " +temp+ " fahrenheit today.";
       divF.appendChild(pF);

       let tempT = temp/32;
       let cels = document.querySelector(".f-t");
       cels.innerHTML = "In Degrees:  " +temp+ "`F is " +tempT+ "`C."
      cels.style.color = "salmon";
      cels.style.textDecoration = "underline";
    })
}
fahrenheitToCelsius();


//HOUSES CARDS USING CALLBACK FUNCTION..

let houses = [{
    image:"./Images/log-home.jpeg",
    type :"Log Home",
    aboutHouse :"They originated as small cabins in the 1600s. Originally, they were built as one room using no nails, but now,they can be built in any location as large luxurious getaways.But, most often they are found in rural setting.However, the type of climate dictates the type of wood to be used.",
    price :"$59,999"
},
{
    image:"./Images/crafts-man.jpeg",
    type :"CraftsMan",
    aboutHouse :"Bungalow and Craftsman style homes were born to emphasis on namtural materials - wood,stone,brick. Wide front porches and low-pitched roofs are typical. They have interior's open floor plan features, built-in furniture, big fireplaces and exposed beams.",
    price :"$62,500"
},
{
    image:"./Images/contemporary.jpeg",
    type :"Contemporary",
    aboutHouse :"Contemporary refers to today's building styles, which can vary in design and appearance. Contemporary homes tend to emphasize energy efficiency, sustainable materials, lots of natural light and the use of recycled non-toxic materials.",
    price :"$75,999"
},
{
    image:"./Images/modern.jpeg",
    type :"Modern",
    aboutHouse :"Modern architucture refers to design inspired by the historical art movement of modernism.Modern-style home emphasis on open-living spaces,clean, geometric lines and function-over-form are key elements.",
    price :"$99,999"
},
{
    image:"./Images/pueblo.jpeg",
    type :"Pueblo Revival",
    aboutHouse :"The style was influenced by the ancient Pueblo Indian's simple multifamily homes. Earthy materials such as adobe,concrete,stucco or mortar, and llarge wood beams are used; enclosed courtyards and flat or sloping roof are also typical.Rounded exteriors with square windows also reflect the appearance of original pueblos.  ",
    price :"$42,999"
},
{
    image:"./Images/cottage.jpeg",
    type :"Cottage",
    aboutHouse :"A cottage-style house refers to a small home made of stone or wood siding.It features a curved entryway, gravel of brick front walkway and exterior colors.Today, flowers typically adorn the entryway creating beatiful curb appeal.",
    price :"$30,700"
},
{
    image:"./Images/farmhouse.jpeg",
    type :"FarmHouse",
    aboutHouse :"They are not the style but rather the location and function. They were originally built on rural land with an emphasis on an agrarian lifestyle.However, farmhouses were built for need rather than design, often featuring functional porches as a transitional space creating much more informal and inviting exterior.",
    price :"$82,499"
},
{
    image:"./Images/oriental.jpeg",
    type :"Oriental",
    aboutHouse :"Though it has undergone some Westernization, its design is rooted in Chinese architecture.Most of these styles adapted and created by Asian countries are characterized by a curved roof that expands far and beyond the exterior walls and are often framed with beautiful landscaping.",
    price :"$79,999"
},
{
    image:"./Images/cape-cod.jpeg",
    type :"Cape Cod",
    aboutHouse :"Their design were inspired by the Britain's thatched cottages, but built with steeper roofs and larger chimneys to withstand cold NorthEastern winters. Windows flanking the front door,dormer windows up top and cedar shingles are also typical of the style.Most of today's Cape Cods were bilt after World War 2; they were the first style used in modestly priced housing developments.",
    price :"$95,500"
},
{
    image:"./Images/mid-century.jpeg",
    type :"Mid-Century Modern",
    aboutHouse :"Constructed out of new ideas, mindsets and a forward-thinking style of mid-century modern architecture. They are characterized by flat planes, large glass windows and open space, the style focused on simplistic design and seamless integration of nature.New materials such as steel and plywood at the time, were brought to the forfront of architecture and design, and helped to enlighten new ways of thinking about residential living.",
    price :"$47,999"
}
];

let divCard = document.querySelector(".house-container");

let houseCards = ()=>{
//  console.log(houses);
    let result ="";

    houses.map((item)=>{
        return result += `
        <div class="house">
        <div class="front-side">
    <button class="card-button">About >></button>
    <h3 class="card-heading">${item.type}</h3>
    <img class="card-image" src="${item.image}">
        </div>
        <div class="back-side">
        <button class="card-button"><< Back </button>
        <h2 class="card-price">${item.price}</h2>
        <p class="card-content">${item.aboutHouse}</p>
        </div>
        </div>
        `;
    divCard.innerText= result;

    })
    divCard.innerHTML= result;

}
houseCards();


//CARD CHANGING FROM BACK TO FRONT AND VICE VERSA
Array.from(document.querySelectorAll(".card-button"))
.forEach((value)=>{
    value.onclick = ()=>{
        value.parentElement.parentElement.parentElement.classList.toggle("change");
 value.parentElement.parentElement.classList.toggle("change");
    };
});


