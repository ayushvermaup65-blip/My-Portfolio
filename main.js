let menuList = document.getElementById("nav-links");

      function toggleMenu() {
        if (menuList.style.maxHeight == "0px") {
          menuList.style.maxHeight = "800px";
        } else {
          menuList.style.maxHeight = "0px";
        }
      }

let popup = document.getElementById("popup");

      function showPopup() {
        popup.style.display = "flex";

      }

      function closePopup() {
        popup.style.display = "none";
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
    // Create object to store form data
    let formData = {
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      comment: comment,
    };

    // ✅ Store in localStorage (stringify to save object)
    localStorage.setItem("userData", JSON.stringify(formData));

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("commentArea").value = "";

    console.log("Data saved:", formData);
    alert("Message shared to Ayush Verma.");
  }
});

// ✅ Function to access and display stored data
function getStoredData() {
  let savedData = localStorage.getItem("userData");
  if (savedData) {
    let parsedData = JSON.parse(savedData);
    console.log("Retrieved Data:", parsedData);

    // Example: show retrieved data in an alert
    // alert(
    //   `Stored Data:\nName: ${parsedData.username}\nEmail: ${parsedData.email}\nPhone: ${parsedData.phoneNumber}\nComment: ${parsedData.comment}`
    // );
  } else {
    console.log("No data found in Local Storage.");
  }
}

// Call function when page loads (optional)
window.onload = getStoredData;

