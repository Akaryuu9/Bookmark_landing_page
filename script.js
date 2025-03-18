// FAQ buttons, old code for reference
// function show1() {
//   let x = document.getElementById("ans1");
//   if (x.style.display === "none") {
//      x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// function arrow1() {
//   let z = document.getElementById("arrow1");
//   const path = z.querySelector("path");
//   if (z.style.transform === "none") {
//      z.style.transform = "rotate(180deg)";
//      path.style.stroke = "red";
//   } else {
//     z.style.transform = "none";
//     path.style.stroke = "#5267DF";
//   }
// }

// function show2() {
//   let x = document.getElementById("ans2");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//      x.style.display = "none";
//   }
// }
// function arrow2() {
//   let z = document.getElementById("arrow2");
//   const path = z.querySelector("path");
//   if (z.style.transform === "none") {
//    z.style.transform = "rotate(180deg)";
//    path.style.stroke = "red";
//   } else {
//     z.style.transform = "none";
//     path.style.stroke = "#5267DF";
//   }
// }
// function show3() {
//   let x = document.getElementById("ans3");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// function arrow3() {
//   let z = document.getElementById("arrow3");
//   const path = z.querySelector("path");
//   if (z.style.transform === "none") {
//     z.style.transform = "rotate(180deg)";
//     path.style.stroke = "red";
//   } else {
//     z.style.transform = "none";
//     path.style.stroke = "#5267DF";
//   }
// }
// function show4() {
//   let x = document.getElementById("ans4");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//     } else {
//       x.style.display = "none";
//   }
// }
// function arrow4() {
//   let z = document.getElementById("arrow4");
//   const path = z.querySelector("path");
//   if (z.style.transform === "none") {
//     z.style.transform = "rotate(180deg)";
//     path.style.stroke = "red";
//     } else {
//       z.style.transform = "none";
//       path.style.stroke = "#5267DF";
//   }
// }


//Q1:
document.getElementById("q1").addEventListener("click", function() {
  toggleDisplay("ans1");
  toggleArrow("arrow1");
});

// Q2:
document.getElementById("q2").addEventListener("click", function() {
  toggleDisplay("ans2");
  toggleArrow("arrow2");
});

//Q3:
document.getElementById("q3").addEventListener("click", function() {
  toggleDisplay("ans3");
  toggleArrow("arrow3");
});

//Q4:
document.getElementById("q4").addEventListener("click", function() {
  toggleDisplay("ans4");
  toggleArrow("arrow4");
});

function toggleDisplay(id) {
  let x = document.getElementById(id);
  x.style.display = x.style.display === "none" ? "block" : "none";
}

function toggleArrow(id) {
  let z = document.getElementById(id);
  const path = z.querySelector("path");
  if (z.style.transform === "none") {
    z.style.transform = "rotate(180deg)";
    path.style.stroke = "red";
  } else {
    z.style.transform = "none";
    path.style.stroke = "#5267DF";
  }
}




// Features tabs
document.querySelectorAll('.tab-link').forEach(tab => {
  tab.addEventListener('click', function() {
    const tabId = this.getAttribute('data-tab');

    // Remove active class from all tabs and content
    document.querySelectorAll('.tab-link').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Add active class to clicked tab and corresponding content
    this.classList.add('active');
    document.getElementById(tabId).classList.add('active');
    console.log(tab);
  });
});

// footer input

document.getElementById("email-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");

  const errorMessage = document.getElementById("error-message");
  const emailwrapper = document.getElementById("email-wrapper");
  if (!emailInput.value.trim()) {
    emailwrapper.classList.add("has-error");
    errorMessage.style.display = "inline-block";
  } else {
    errorMessage.style.display = "none";
    emailwrapper.classList.remove("has-error");
  }
});

