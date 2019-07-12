// $("#submit1").on("click", function (event) {
//     event.preventDefault();

//     id = $("#id-input").val().trim();
//     console.log("extracted id");
//     $.put("/api/findPatient", {
//         // stores input information in database
//         id: id,
//         FirstName: req.body.FirstName,
//         LastName: req.body.LastName,
//         birth: req.body.birth,

//     }).then(function (result) {
//         console.log(result);
//         clearInputForm();
//         //   appends static data for new oatient to page

//         $("#staticData").append("First Name: " + result.FirstName + "<br>Last Name: " + result.LastName + "<br> DOB: " + result.birth);
//         $("#staticData").show();
//     })
// });
  

// function clearInputForm() {
//     $('input[type="text"], textarea').val('');
//     $('input[type=date]').each( function resetDate(){
//         this.value = this.defaultValue;
//       } );
//     // $("input").prop('disabled', true);
//     $(".inputBox").hide();
// }

