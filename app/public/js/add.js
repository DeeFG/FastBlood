// search data base for id

// if antibodies present add time to progress bar
//if not present stay the same
// save progress bar in database?
// look up patient again..progress should stay the same
// update again ...progess stay the same

$("#staticData").hide();

//  extracts data from input fields
$("#submit").on("click", function(event) {
  event.preventDefault();

  first = $("#first-input")
    .val()
    .trim();
  last = $("#last-input")
    .val()
    .trim();
  birth = $("#birth-input").val();
  console.log("extracted names");
  $.post("/api/newPatient", {
    // stores input information in database
    FirstName: first,
    LastName: last,
    birth: birth
  }).then(function(result) {
    console.log(result);
    clearInputForm();
    //   appends static data for new oatient to page

    $("#staticData").append(
      "First Name: " +
        result.FirstName +
        "<br>Last Name: " +
        result.LastName +
        "<br> DOB: " +
        result.birth
    );
    $("#staticData").show();
  });
});

// add antibody to specific patient
function updateAntibodies() {}

$("#submitPatient").on("click", function() {
  var id = $("#id-input").val();
  console.log(id);
  $.get("/api/" + id).then(function(data) {
    console.log(data);
    if (data.Antibodies) {
      console.log("Has Antibodies and may take up to 1 hour ");
      $(".progress-bar")
        .css("width", "20%")
        .attr("aria-valuenow", 0);
      $(".progress-bar2")
        .css("width", "30%")
        .attr("aria-valuenow", 0);
    } else {
      console.log("No Anitbodies");
      $("#staticData").show();
      $("#staticData").append(
        "First Name: " +
          data.FirstName +
          "<br>Last Name: " +
          data.LastName +
          "<br> DOB: " +
          data.birth +
          "<br> Antibodies: " +
          data.antibodies +
          " Testing needs to be completed and will take up to 1 hour"
      );

      $(".progress-bar")
        .css("width", "0%")
        .attr("aria-valuenow", 0);
      $(".progress-bar2")
        .css("width", "0%")
        .attr("aria-valuenow", 0);
      $(".progress-bar3")
        .css("width", "50%")
        .attr("aria-valuenow", 0);
    }
  });
});

// extracts antibodies selected
$("button").click(function() {
  var selectedAntibodies = [];
  $.each($(".antibodies option:selected"), function() {
    selectedAntibodies.push($(this).val());
  });
  console.log("Patient has Antibodies " + selectedAntibodies.join(", "));
});

// clears form
function clearInputForm() {
  $('input[type="text"], textarea').val("");
  $("input[type=date]").each(function resetDate() {
    this.value = this.defaultValue;
  });
  // $("input").prop('disabled', true);
  $(".inputBox").hide();
}
