var FormJson = "content.json";

document.addEventListener("DOMContentLoaded", () => {
  fetch(FormJson)
    .then((response) => response.json())
    .then((resData) => {
      const Title = (document.getElementsByTagName("title")[0].textContent = resData[12].Title);

      //creates favicon, the image in the tab icon
      const favicon = document.createElement("link");
      favicon.href = resData[1].logo;
      favicon.setAttribute("rel", "icon");
      document.getElementsByTagName("head")[0].appendChild(favicon);
      
      //subheading variables
      const heading = document.getElementsByTagName("h1")[0];
      heading.textContent = resData[12].heading;
      const subHeading = document.getElementsByTagName("h3")[0];
      subHeading.textContent = resData[12].subheading;
      const image = document.getElementById("SignUpImg");
      image.src = resData[12].imageURL;
      image.alt = resData[12].alt;

      //form info content 
      paragraph1 = document.getElementsByTagName("p")[0];
      paragraph1.textContent = resData[12].Text1;
      paragraph2 = document.getElementsByTagName("p")[1];
      paragraph2.textContent = resData[12].Text2;

      //The form variables
      const legend = document.getElementsByTagName("legend")[0];
      const FNLabel = document.getElementsByTagName("label")[0];
      const LNLabel = document.getElementsByTagName("label")[1];
      const EmailLabel = document.getElementsByTagName("label")[2];
      const CommentLabel = document.getElementsByTagName("label")[3];
      const SubmitBtn = document.getElementById("submit");

      const FNInput = document.getElementById("FirstName");
      const LNInput = document.getElementById("LastName");
      const EmailInput = document.getElementById("Email");
      const CommentInput = document.getElementById("Comment");

      //form text
      legend.textContent = resData[12].Legend;
      FNLabel.textContent = resData[12].FirstName;
      LNLabel.textContent = resData[12].LastName;
      EmailLabel.textContent = resData[12].Email;
      CommentLabel.textContent = resData[12].Comment;
      SubmitBtn.textContent = resData[12].Submit;

      //popup window variables
      var Popup = document.getElementById("Background");
      var PopupClose = document.getElementById("Close");
      PopupClose.textContent = resData[13].Exit;

      var PopupLogo = document.getElementById("LogoPic");
      PopupLogo.src = resData[13].logo;

      var PopupBig = document.getElementById("CongratsText");
      PopupBig.textContent = resData[13].line1;

      var PopupMedium = document.getElementById("MainText");
      PopupMedium.textContent = resData[13].line2;

      var PopupSmall = document.getElementById("SmallText");
      PopupSmall.textContent = resData[13].line3;

      var PopupCont = document.getElementById("Continue");
      PopupCont.textContent = resData[13].close;

      //header and footer variables
      let navDiv = document.getElementById("nav");
      let navLink = document.getElementById("navLink1");
      let navLink2 = document.getElementById("navLink2");
      let navLink3 = document.getElementById("navLink3");
      let navLink4 = document.getElementById("navLink4");
      let wrPoint1 = document.getElementById("wrPoint1");
      let wrPoint2 = document.getElementById("wrPoint2");
      let wrPoint3 = document.getElementById("wrPoint3");
      let wrPoint4 = document.getElementById("wrPoint4");
      let infoLink1 = document.getElementById("info1");
      let infoLink2 = document.getElementById("info2");
      let infoLink3 = document.getElementById("info3");
      let headerContent = document.getElementById("block");
      let navLogo = document.getElementById("nav-link");
      let policies = document.getElementById("policies");
      let terms = document.getElementById("terms");
      let data = document.getElementById("dataProtec");
      let getSection = document.getElementById("sec");
      let ddmImage = document.getElementById("navImg");
      let value1 = document.getElementById("value1");
      let value2 = document.getElementById("value2");
      let value3 = document.getElementById("value3");
      let value4 = document.getElementById("value4");
      let ddm = document.getElementById("ddm");
      let cross = document.getElementById("cross");

      const logo = document.createElement("img");
      logo.classList.add("nav__logo");
      logo.src = resData[0].logo;
      navLogo.appendChild(logo);

      //Navbar links

      navLink1.innerHTML = resData[0].home_page;
      navLink2.innerHTML = resData[0].goal_page;
      navLink3.innerHTML = resData[0].signup_page;
      navLink4.innerHTML = resData[0].team_page;

      //Main title

      const title = document.createElement("h1");
      title.classList.add("block__title");
      title.innerHTML = resData[12].headerTitle;
      headerContent.appendChild(title);

      //Main paragraph
      const headerPar = document.createElement("p");
      headerPar.classList.add("block__text");
      headerPar.innerHTML = resData[12].headerText;
      headerContent.appendChild(headerPar);

      // Footer elements

      const footerLogo = document.createElement("img");
      footerLogo.classList.add("wrapper__logo");
      footerLogo.src = resData[1].footerlog;
      wrLink.appendChild(footerLogo);

      //Footer list
      wrPoint1.innerHTML = resData[0].home_page;
      wrPoint2.innerHTML = resData[0].goal_page;
      wrPoint3.innerHTML = resData[0].signup_page;
      wrPoint4.innerHTML = resData[0].team_page;

      //Footer info

      infoLink1.innerHTML = resData[1].footNumber;
      infoLink2.innerHTML = resData[1].footEmail;
      infoLink3.innerHTML = resData[1].footAdress;
      //Footer policies
      policies.innerHTML = resData[1].policies;
      terms.innerHTML = resData[1].terms;
      data.innerHTML = resData[1].data;

      //hamburger menu
      ddmImage.src = resData[6].hamburger;
      cross.src = resData[6].cross;

      value1.innerHTML = resData[0].home_page;
      value2.innerHTML = resData[0].goal_page;
      value3.innerHTML = resData[0].signup_page;
      value4.innerHTML = resData[0].team_page;

      //events
      //hamburger menu
      ddmImage.addEventListener("click", () => {
        ddm.classList.add("active");
      });
      cross.addEventListener("click", () => {
        ddm.classList.remove("active");
      });

      //form submission
      form.addEventListener("submit", (myfunction) => {
        myfunction.preventDefault();
        const formBody = {
          FirstName: FNInput.value,
          LastName: LNInput.value,
          email: EmailInput.value,
          comment: CommentInput.value,
        };
        const requestHeaders = {
          "Content-Type": "application/json",
        };
        fetch("/form", {
          method: "POST",
          headers: requestHeaders,
          body: JSON.stringify(formBody),
        })
          .then((response) => response.json())
          .then((responsedata) => {
            PopupBig.textContent = resData[13].line1 + responsedata.FirstName;
            PopupSmall.textContent = resData[13].line3 + responsedata.email;
            if((responsedata.FirstName.length>0) &&(responsedata.email.length>4)){
              //success confirmation
              Popup.style.display = "flex";
            } else {
              //failiure confirmation
              alert(
                "Form is invalid. First name must be at least 1 character and email must be at least 5 characters"
              );
            }
          });
      });

      //Emphasises which form input has been clicked

      let inputElements = document.getElementsByClassName("input");

      for (let i = 0; i < inputElements.length; i++) {
        let current = inputElements[i];
        current.addEventListener("click", function MakeActive() {
          current.setAttribute("class", "activeInput");
          current.previousElementSibling.style.color = "white";
          document.addEventListener("click", (event) => {
            if (event.target != current) {
              current.classList.remove("activeInput");
              current.previousElementSibling.style.color = "black";
            }
          });
        });
      }

      //closes popup window
      var span = document.getElementsByClassName("close");

      for (let i = 0; i < span.length; i++) {
        span[i].onclick = function (event) {
          Popup.style.display = "none";
          event.preventDefault();
        };
      }
      window.onclick = function (event) {
        if (event.target == Popup) {
          Popup.style.display = "none";
        }
      };
    })

    .catch((error) => console.error("Error :", error));
});
