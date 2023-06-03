function openLogin() {
    document.getElementById("myRegister").style.display = "none";
    document.getElementById("myLogin").style.display = "block";
    document.getElementById("katawan").style.opacity = "0.5";
}

function closeForm() {
    document.getElementById("myLogin").style.display = "none";
    document.getElementById("myRegister").style.display = "none";
    document.getElementById("katawan").style.opacity = "1";
}

function openRegister() {
    document.getElementById("myLogin").style.display = "none";
    document.getElementById("myRegister").style.display = "block";
}

function clearForm() {
    // Clear the form fields
    document.querySelector('form.register-container').reset();
}

document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-btn"></span>`;
    });

    console.log(buttonsHtml);
});

// registration.js
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener when the DOM content is loaded
    document.getElementById("registrationForm").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form submission
  
      var formData = new FormData(this);
  
      // Send form data to the server
      fetch("connectCust.php", {
          method: "POST",
          body: formData,
      })
        .then(response => response.json())
        .then(data => {
            // Display response message as a pop-up
            alert(data.message);
  
            if (data.status === "success") {
                // Clear the form or perform any other action on success
                clearForm();
  
                // Return to the previous web page
                window.history.back();
            }
        })
        .catch(error => {
            console.error(error);
        });
    });
  });
  



// function openLogin(){
//     document.getElementById("myRegister").style.display="none";
//     document.getElementById("myLogin").style.display="block";
//     document.getElementById("katawan").style.opacity="0.5";
// }

// function closeForm(){
//     document.getElementById("myLogin").style.display="none";
//     document.getElementById("myRegister").style.display="none";
//     document.getElementById("katawan").style.opacity="1";
// }

// function openRegister(){
//     document.getElementById("myLogin").style.display="none";
//     document.getElementById("myRegister").style.display="block";
// }
// function clearForm() {
//     // Clear the form fields
//     document.querySelector('form.register-container').reset();
//   }

// document.querySelectorAll(".carousel").forEach(carousel => {
//     const items = carousel.querySelectorAll(".carousel-item");
//     const buttonsHtml = Array.from(items, () => {
//         return `<span class="carousel-btn"></span>`;
//     });

//     console.log(buttonsHtml);

//     // carousel.insertAdjacentHTML("beforeend", `
//     //     <div class="carousel-nav">
//     //     ${buttonsHtml.join("")}
//     //     </div>
//     // `);

//     // const buttons =carousel.querySelectorAll("carousel-btn");

//     // buttons.forEach((button, i) => {
//     //     button.addEventListener("click", () => {
//     //         items.forEach(item => item.classList.remove("carousel-item_selected"));
//     //         buttons.forEach(button => button.classList.remove("carousel-btn_selected"));
            
//     //         items[i].classList.add("carousel-item_selected");
//     //         button.classList.add("carousel-btn_selected");
//     //     });
//     // });
// });