/*   ****************         Home page     ****************         */
let localJson1 = "content.json";

//Header variables
let navDiv = document.getElementById("nav");
let navLink = document.getElementById("navLink1");
let navLink2 = document.getElementById("navLink2");
let navLink3 = document.getElementById("navLink3");
let navLink4 = document.getElementById("navLink4");
let headerContent = document.getElementById("block");
let navLogo = document.getElementById("nav-link");
let navList = document.getElementById("nav-list");

//Foter variables
let wrapper = document.getElementById("wrapper");
let wrLink = document.getElementById("wrLink");
let wrPoint = document.getElementById("wrPoint1");
let wrPoint2 = document.getElementById("wrPoint2");
let wrPoint3 = document.getElementById("wrPoint3");
let wrPoint4 = document.getElementById("wrPoint4");
let infoLink = document.getElementById("info1");
let infoLink2 = document.getElementById("info2");
let infoLink3 = document.getElementById("info3");
let data = document.getElementById("dataProtec");
let policies = document.getElementById("policies");
let terms = document.getElementById("terms");

//Hamburger menu variables
let ddmImage = document.getElementById("navImg");
let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let value4 = document.getElementById("value4");
let ddm = document.getElementById("ddm");
let cross = document.getElementById("cross");

//Main variables
let welcome = document.getElementById("welcome");
let introduction = document.getElementById("introduction")
let article1 = document.getElementById("article1");
let img1 = document.getElementById("photo1");
let img2 = document.getElementById("photo2");
let img3 = document.getElementById("photo3");

let fetchFunc = document.addEventListener("DOMContentLoaded", () => {
    fetch(localJson1)
      .then((response) => response.json())
      .then((resData) => {
        //Header elements
        //Logo
        const logo = document.createElement("img");
        logo.classList.add("nav__logo");
        logo.src = resData[0].logo;
        navLogo.appendChild(logo);
  
        //Navbar links
        navLink.innerHTML = resData[0].home_page;
        navLink2.innerHTML = resData[0].goal_page;
        navLink3.innerHTML = resData[0].signup_page;
        navLink4.innerHTML = resData[0].team_page;

        //Header title
        const title = document.createElement("h1");
        title.classList.add("block__title");
        title.innerHTML = resData[7].welcome;
        headerContent.appendChild(title);
        //Header paragraph
        const headerPar = document.createElement("p");
        headerPar.classList.add("block__text");
        headerPar.innerHTML = resData[7].introduction;
        headerContent.appendChild(headerPar);
  
        // Footer elements
        const footerLogo = document.createElement("img");
        footerLogo.classList.add("wrapper__logo");
        footerLogo.src = resData[1].footerlog;
        wrLink.appendChild(footerLogo);
        //Footer list
        wrPoint.innerHTML = resData[0].home_page;
        wrPoint2.innerHTML = resData[0].goal_page;
        wrPoint3.innerHTML = resData[0].signup_page;
        wrPoint4.innerHTML = resData[0].team_page;
        //Footer info
        infoLink.innerHTML = resData[1].footNumber;
        infoLink2.innerHTML = resData[1].footEmail;
        infoLink3.innerHTML = resData[1].footAdress;
        //Footer policies
        policies.innerHTML = resData[1].policies;
        terms.innerHTML = resData[1].terms;
        data.innerHTML = resData[1].data;

        //Main Content

        //goal1
        const goal1 = document.createElement("h2");
        goal1.classList.add("goal1__artic_title");
        article1.appendChild(goal1);
        goal1.innerHTML = resData[8].goal1;

        const description1 = document.createElement("h3");
        description1.classList.add("goal1__artic_description");
        article1.appendChild(description1);
        description1.innerText = resData[8].description;

        const fact1 = document.createElement("p");
        fact1.classList.add("fact1_p");
        pfact1.appendChild(fact1);
        fact1.innerHTML = resData[8].image_flip;

        img1.src = resData[8].image;

        //goal2
        const goal2 = document.createElement("h2");
        goal2.classList.add("goal2__artic_title");
        article2.appendChild(goal2);
        goal2.innerHTML = resData[9].goal2;

        const description2 = document.createElement("h3");
        description2.classList.add("goal2__artic_description");
        article2.appendChild(description2);
        description2.innerText = resData[9].description;

        const fact2 = document.createElement("p");
        fact2.classList.add("fact2_p");
        pfact2.appendChild(fact2);
        fact2.innerHTML = resData[9].image_flip;

        img2.src = resData[9].image;
        
        //goal3
        const goal3 = document.createElement("h2");
        goal3.classList.add("goal3__artic_title");
        article3.appendChild(goal3);
        goal3.innerHTML = resData[10].goal3;

        const description3 = document.createElement("h3");
        description3.classList.add("goal3__artic_description");
        article3.appendChild(description3);
        description3.innerText = resData[10].description;    

        const fact3 = document.createElement("p");
        fact3.classList.add("fact3_p");
        pfact3.appendChild(fact3);
        fact3.innerHTML = resData[10].image_flip;
        
        img3.src = resData[10].image;

        //why box

        const why = document.createElement("h1");
        why.classList.add("why_artic_title");
        article4.appendChild(why);
        why.innerText = resData[11].Why;

        const description4 = document.createElement("h1");
        description4.classList.add("why_artic_description");
        article4.appendChild(description4);
        description4.innerText = resData[11].description;
  
        //hamburger menu
        ddmImage.src = resData[6].hamburger;
        cross.src = resData[6].cross;
  
        value1.innerHTML = resData[0].home_page;
        value2.innerHTML = resData[0].goal_page;
        value3.innerHTML = resData[0].signup_page;
        value4.innerHTML = resData[0].team_page;
  
        ddmImage.addEventListener("click", () => {
          ddm.classList.add("active");
        });
        cross.addEventListener("click", () => {
          ddm.classList.remove("active");
        });
      })
      .catch((error) => console.error("Error fetching JSON data:", error));
  });
  