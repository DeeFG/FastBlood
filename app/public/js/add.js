
// function updateProgressBar(){

//   var checkBox = document.getElementById("checkboxTest");
//   var text = document.getElementById("text");
//   if (checkBox.checked == true){
//     // text.style.display = "block";
//     console.log("true");
//   } else {
//     //  text.style.display = "none";
//      console.log("not true");
//   }

// };





$(document).ready(function () {

    $('input[type="checkbox"]').click(function updateProgressBar() {
        if ($(this).prop("checked") == true) {
            alert("Checkbox is checked.");
        }
        else if ($(this).prop("checked") == false) {
            alert("Checkbox is unchecked.");
        }
    });
});


// var first = "";
// var last = "";
// var hrn = 0;
// var birth = "";


$("#submit").on("click", function (event) {
    event.preventDefault();

    first = $("#first-input").val().trim();
    last = $("#last-input").val().trim();
    hrn = $("#hrn-input").val().trim();
    birth = $("#birth-input").val();
    console.log("hello");
    $.post("/api/newPatient", {

        FirstName: first,
        LastName: last,
        HRN: hrn,
        birth: birth,

    }).then(function (result) {
        console.log(result);
    })
});




// // The code in add.js handles what happens when the user clicks the "Add a book" button.

// // When user clicks add-btn
// $("#add-btn").on("click", function(event) {
//     event.preventDefault();

//     // Make a newBook object
//     var newAntibody = {
//       title: $("#title").val().trim(),
//       author: $("#author").val().trim(),
//       genre: $("#genre").val().trim(),
//       pages: $("#pages").val().trim()
//     };

//     // Send an AJAX POST-request with jQuery
//     $.post("/api/new", newBook)
//       // On success, run the following code
//       .then(function(data) {
//         // Log the data we found
//         console.log(data);
//       });

//     // Empty each input box by replacing the value with an empty string
//     $("#title").val("");
//     $("#author").val("");
//     $("#genre").val("");
//     $("#pages").val("");

//   });