let menuList = document.getElementById("nav-links");

      function toggleMenu() {
        if (menuList.style.maxHeight == "0px") {
          menuList.style.maxHeight = "800px";
        } else {
          menuList.style.maxHeight = "0px";
        }
      }


let homepage = document.querySelector(".title-text");
      function homePage() {
        window.location.href = "index.html";
      }



document.querySelector(".formSubmit").addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const comment = document.getElementById("commentArea").value.trim();

  const usernameRegex = /^[a-zA-Z ]{3,20}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneNumberRegex = /^[6-9][\d]{9}$/;

  document.querySelectorAll(".error").forEach((curElem) => (curElem.textContent = ""));

  let isValid = true;

  if (!usernameRegex.test(username)) {
    document.getElementById("usernameError").textContent =
      "Username is not valid. It must include letters and spaces.";
    isValid = false;
  }

  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  if (!phoneNumberRegex.test(phoneNumber)) {
    document.getElementById("phoneNumberError").textContent =
      "Phone number must be 10 digits long and start with 6,7,8 or 9.";
    isValid = false;
  }

  if (isValid) {
    // Created object, form ka data store karne ke liye
    let formData = {
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      comment: comment,
    };


    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("commentArea").value = "";

    console.log("Data saved:", formData);
   
  }
});


function sendEmail() {
  var params = {
    name: document.getElementById("name").value ,
    email: document.getElementById("email").value ,
    phoneNumber: document.getElementById("phoneNumber").value ,
    comment: document.getElementById("commentArea").value ,
  };
  
  const serviceID = "service_ovh8dii";
  const templateID = "template_7p2hnws";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phoneNumber").value = "";
      document.getElementById("commentArea").value = "";
      console.log(res);
      alert("Your message sent successfully!");
    })
    .catch((err) => console.log(err));

}
