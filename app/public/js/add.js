

$("#staticData").hide();

function addTime() {
    var dt = new Date();
    dt.setHours(dt.getHours() + 1);
    document.write(dt);
  };

// updates progress bar of teset completed
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
//  extracts data from input fields 
  $("#submit").on("click", function (event) {
  event.preventDefault();

  first = $("#first-input").val().trim();
  last = $("#last-input").val().trim();
  birth = $("#birth-input").val();
  console.log("hello");
  $.post("/api/newPatient", {
// stores input information in database
      FirstName: first,
      LastName: last,
      birth: birth,

  }).then(function (result) {
      console.log(result);
      submitForm();
      $("#staticData").append("First Name: "+ result.FirstName +"<br>Last Name: "+ result.LastName +"<br> DOB: "+ result.birth);
      $("#staticData").show();
      
      

      
  })
});


// extract data from drop  check box

function getAntibodies(checkbox)
{
    var selectedAntibodies = []
    $("input:checkbox[name=type]:checked").each(function(){
        selectedAntibodies.push($(this).val());
    });

    // if (checkbox.checked)
    // {
    //     alert("a");
    // }
}








// add antibody to specific patient
$(function updateAntibodies() {
    $('input').on('click', function (){
        $('input:checked').each(function () {
            if ($(this).attr('value') > startingValue) {
              startingValue = $(this).attr('value');
            }
          });

    });
});


// clears form 
function submitForm() {
    $('input[type="text"], textarea').val('');
    // $("input").prop('disabled', true);
    $(".inputBox").hide();
   
  }
//   appends static data to page
  function staticData(results) {

    $("#staticData").append(results);
    console.log(this.FirstName);
    console.log(FirstName);
    console.log(results)
   

  };
  