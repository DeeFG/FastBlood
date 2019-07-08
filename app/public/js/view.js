

// Initial Values
var first = "";
var last = "";
var hrn = 0;
var birth = "";

// Capture Button Click
$("#submit").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text-boxes
  first = $("#name-input").val().trim();
  last = $("#email-input").val().trim();
  hrn = $("#age-input").val().trim();
  birth = $("#comment-input").val().trim();

  // Code for "Setting values in the database"


});


// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // Make a newBook object
    var newAntibody = {
      title: $("#title").val().trim(),
      author: $("#author").val().trim(),
      genre: $("#genre").val().trim(),
      pages: $("#pages").val().trim()
    };
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newBook)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#title").val("");
    $("#author").val("");
    $("#genre").val("");
    $("#pages").val("");
  
  });
  