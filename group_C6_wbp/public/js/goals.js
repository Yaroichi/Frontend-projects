document.addEventListener("DOMContentLoaded", () => {
  const localJson1 = "content.json";

  // Header variables
  const navDiv = document.getElementById("nav");
  const navLink = document.getElementById("navLink1");
  const navLink2 = document.getElementById("navLink2");
  const navLink3 = document.getElementById("navLink3");
  const navLink4 = document.getElementById("navLink4");
  const headerContent = document.getElementById("block");
  const navLogo = document.getElementById("nav-link");

  // Footer variables
  const wrapper = document.getElementById("wrapper");
  const wrLink = document.getElementById("wrLink");
  const wrPoint = document.getElementById("wrPoint1");
  const wrPoint2 = document.getElementById("wrPoint2");
  const wrPoint3 = document.getElementById("wrPoint3");
  const wrPoint4 = document.getElementById("wrPoint4");
  const infoLink = document.getElementById("info1");
  const infoLink2 = document.getElementById("info2");
  const infoLink3 = document.getElementById("info3");
  const data = document.getElementById("dataProtec");
  const policies = document.getElementById("policies");
  const terms = document.getElementById("terms");

  // Hamburger menu variables
  let ddmImage = document.getElementById("navImg");
  let value1 = document.getElementById("value1");
  let value2 = document.getElementById("value2");
  let value3 = document.getElementById("value3");
  let value4 = document.getElementById("value4");
  let ddm = document.getElementById("ddm");
  let cross = document.getElementById("cross");

  // Goals section
  const goalSection = document.getElementById("goalsection");
  const goalTxt = document.getElementById("goalTxt"); // Make sure this element exists in your HTML

  // Fetch JSON data
  fetch(localJson1)
    .then((response) => response.json())
    .then((resData) => {
      // Populate header elements
      const logo = document.createElement("img");
      logo.classList.add("nav__logo");
      logo.src = resData[0].logo;
      navLogo.appendChild(logo);

      navLink.innerHTML = resData[0].home_page;
      navLink2.innerHTML = resData[0].goal_page;
      navLink3.innerHTML = resData[0].signup_page;
      navLink4.innerHTML = resData[0].team_page;

      const title = document.createElement("h1");
      title.classList.add("block__title");
      title.innerHTML = resData[15].goalsTitle;
      headerContent.appendChild(title);

      const headerPar = document.createElement("p");
      headerPar.classList.add("block__text");
      headerPar.innerHTML = resData[15].goalsText;
      headerContent.appendChild(headerPar);

      // Populate footer elements
      const footerLogo = document.createElement("img");
      footerLogo.classList.add("wrapper__logo");
      footerLogo.src = resData[1].footerlog;
      wrLink.appendChild(footerLogo);

      wrPoint.innerHTML = resData[0].home_page;
      wrPoint2.innerHTML = resData[0].goal_page;
      wrPoint3.innerHTML = resData[0].signup_page;
      wrPoint4.innerHTML = resData[0].team_page;

      infoLink.innerHTML = resData[1].footNumber;
      infoLink2.innerHTML = resData[1].footEmail;
      infoLink3.innerHTML = resData[1].footAdress;

      policies.innerHTML = resData[1].policies;
      terms.innerHTML = resData[1].terms;
      data.innerHTML = resData[1].data;

      // Hamburger menu
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

      // Simple slideshow
      const images = resData[14].goals;
      let i = 0;

      const slideshowImage = document.getElementById("slideshow-image");
      slideshowImage.src = images[i];

      function changeImg() {
        if (i < images.length - 1) {
          i++;
        } else {
          i = 0;
        }

        slideshowImage.src = images[i];
      }

      slideshowImage.addEventListener("click", changeImg);

      // Goal text section
      const descriptionText = resData[16]?.goalTxt; 
      const description = document.createElement("h1");
      description.classList.add("goal_txt");
      description.innerText = descriptionText;  
      goalTxt.appendChild(description);
    })
});
