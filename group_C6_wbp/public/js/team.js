/*   ****************         Team page     ****************         */
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
//Main variables
let mainTitle = document.getElementById("main-title");
let article1 = document.getElementById("article1");
let section1 = document.getElementById("person1");
let img1 = document.getElementById("photo1");
let img2 = document.getElementById("photo2");
let img3 = document.getElementById("photo3");
let img4 = document.getElementById("photo4");

//Variables for interactive features
let getSection = document.getElementById("sec");

//Hamburger menu variables
let ddmImage = document.getElementById("navImg");
let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let value4 = document.getElementById("value4");
let ddm = document.getElementById("ddm");
let cross = document.getElementById("cross");

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

      // //Header title
      const title = document.createElement("h1");
      title.classList.add("block__title");
      title.innerHTML = resData[0].title;
      headerContent.appendChild(title);

      // //Header paragraph
      const headerPar = document.createElement("p");
      headerPar.classList.add("block__text");
      headerPar.innerHTML = resData[0].main_par;
      headerContent.appendChild(headerPar);
      // Header button
      const headerButton = document.createElement("button");
      headerButton.classList.add("block__btn");
      headerButton.innerHTML = resData[0].button;
      headerContent.appendChild(headerButton);
      //Scroll down button
      headerButton.addEventListener("click", () => {
        getSection.scrollIntoView({ behavior: "smooth" });
      });
      // Caption under button
      const caption = document.createElement("span");
      caption.classList.add("block__span");
      caption.innerHTML = resData[0].span;
      headerContent.appendChild(caption);

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
      //Main elements
      mainTitle.innerHTML = resData[2].mainTitle;
      //First person
      const name = document.createElement("h3");
      name.classList.add("person1__artic_title");
      article1.appendChild(name);
      name.innerHTML = resData[2].title;

      const role = document.createElement("p");
      role.classList.add("person1__artic_role");
      article1.appendChild(role);
      role.innerText = resData[2].role;

      const bio = document.createElement("p");
      bio.classList.add("person1__artic_bio");
      article1.appendChild(bio);
      bio.innerText = resData[2].bio;

      const duties = document.createElement("p");
      duties.classList.add("person1__artic_duties");
      article1.appendChild(duties);
      duties.innerText = resData[2].responsibilities;

      img1.src = resData[2].image;

      //Second person
      const name2 = document.createElement("h3");
      name2.classList.add("person2__artic_title");
      name2.classList.add("head");
      article2.appendChild(name2);
      name2.innerHTML = resData[3].title;

      const role2 = document.createElement("p");
      role2.classList.add("person2__artic_role");
      article2.appendChild(role2);
      role2.innerText = resData[3].role;

      const bio2 = document.createElement("p");
      bio2.classList.add("person2__artic_bio");
      article2.appendChild(bio2);
      bio2.innerText = resData[3].bio;

      const duties2 = document.createElement("p");
      duties2.classList.add("person2__artic_duties");
      article2.appendChild(duties2);
      duties2.innerText = resData[3].responsibilities;

      img2.src = resData[3].image;

      //Third person
      const name3 = document.createElement("h3");
      name3.classList.add("person3__artic_title");
      name3.classList.add("head");
      article3.appendChild(name3);
      name3.innerHTML = resData[4].title;

      const role3 = document.createElement("p");
      role3.classList.add("person3__artic_role");
      article3.appendChild(role3);
      role3.innerText = resData[4].role;

      const bio3 = document.createElement("p");
      bio3.classList.add("person3__artic_bio");
      article3.appendChild(bio3);
      bio3.innerText = resData[4].bio;

      const duties3 = document.createElement("p");
      duties3.classList.add("person3__artic_duties");
      article3.appendChild(duties3);
      duties3.innerText = resData[4].responsibilities;

      img3.src = resData[4].image;

      //Fourth person
      const name4 = document.createElement("h3");
      name4.classList.add("person4__artic_title");
      name4.classList.add("head");
      article4.appendChild(name4);
      name4.innerHTML = resData[5].title;

      const role4 = document.createElement("p");
      role4.classList.add("person4__artic_role");
      article4.appendChild(role4);
      role4.innerText = resData[5].role;

      const bio4 = document.createElement("p");
      bio4.classList.add("person4__artic_bio");
      article4.appendChild(bio4);
      bio4.innerText = resData[5].bio;

      const duties4 = document.createElement("p");
      duties4.classList.add("person4__artic_duties");
      article4.appendChild(duties4);
      duties4.innerText = resData[5].responsibilities;

      img4.src = resData[5].image;

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
