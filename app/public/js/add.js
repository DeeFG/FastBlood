
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




// add time to timer 
// $(document).ready(function () {

//     $('input[type="checkbox"]').click(function updateProgressBar() {
//         if ($(this).prop("checked") == true) {
//             console.log("Checkbox is checked.");
//         }
//         else if ($(this).prop("checked") == false) {
//             console.log("Checkbox is unchecked.");
//         }
//     });
// });


// $("#submit").on("click", function (event) {
//     event.preventDefault();

//     first = $("#first-input").val().trim();
//     last = $("#last-input").val().trim();
//     hrn = $("#hrn-input").val().trim();
//     birth = $("#birth-input").val();
//     console.log("hello");
//     $.post("/api/newPatient", {

//         FirstName: first,
//         LastName: last,
//         HRN: hrn,
//         birth: birth,

//     }).then(function (result) {
//         console.log(result);
//     //    $("displayPtData").append("<h2> + results + </h2>")
        
//     })
// });




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


function addTime() {
    var dt = new Date();
    dt.setHours(dt.getHours() + 1);
    document.write(dt);
  };

  $(function updateProgressBar() {
    $('input').on('click', function () {
      var startingValue = 0;
      $('input:checked').each(function () {
        if ($(this).attr('value') > startingValue) {
          startingValue = $(this).attr('value');
        }
      });
      $('.progress-bar').css('width', startingValue + '%').attr('aria-valuenow', startingValue);
      $('.progress-bar2').css('width', startingValue + '%').attr('aria-valuenow', startingValue);
      $('.progress-bar3').css('width', startingValue + '%').attr('aria-valuenow', startingValue);
    });

  });

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
  //    $("displayPtData").append("<h2> + results + </h2>")
      
  })
});