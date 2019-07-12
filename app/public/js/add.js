// search data base for id

// if antibodies present add time to progress bar
//if not present stay the same
// save progress bar in database?
// look up patient again..progress should stay the same
// update again ...progess stay the same

$("#staticData").hide();
$(".Testing").hide();
$(".Products").hide();
$(".Antibodies").hide();


$(".goTesting").click(function() {
  $(".Testing").show();

  $(".inputBox").hide();
  $(".Products").hide();
  $(".Antibodies").hide();
});

$(".goProducts").on("click", function() {
  $(".Products").show();

  $(".inputBox").hide();
  $(".Testing").hide();
  $(".Antibodies").hide();
});

$(".goAntibodies").on("click", function() {
  $(".Antibodies").show();
  $(".inputBox").hide();
  $(".Testing").hide();
  $(".Products").hide();
});





$("#submitAntibodies").click(function() {
  savePatient();
    console.log(" save pt ran");

  });

  // savePatient().then(function() {
  //   console.log(" save pt ran");

  // });
// });


 function savePatient() {

  first = $("#first-input").val().trim();
  last = $("#last-input").val().trim();
  birth = $("#birth-input").val();
  console.log("extracted names");

 var testingChoice = getTestingChoice();
  console.log("Getting Testing Choice");

  var productQuantity = $("#productQuantity").val();
  
  console.log("Product Quantity");
 
  console.log("Getting Product");
  var productSelection = $("#product").val();

  console.log("Getting Antibodies");
  var selectedAntibodies = getAntibodies();
  
  return $.post("/api/newPatient", {
    // stores input information in database
    FirstName: first,
    LastName: last,
    birth: birth,
    Antibodies: selectedAntibodies,
    TypeAndScreen: testingChoice,
    // Product: productSelection,
    //  ProductQuantity: productQuantity,
    Product: productSelection ,
     ProductQuantity: productQuantity,

  }).then(function(result) {
    console.log(result);
    $(".welcome").hide();
    $(".Antibodies").hide();
    $(".inputBox").hide();
    $(".Testing").hide();
    $(".Products").hide();

    clearInputForm();
    //   appends static data for new oatient to page

    $("#staticData").append(
      "<h2>You have created a patietn with a  Hospital ID: </h2>"  + "<h1>" +result.id + "</h1>" +
      "First Name: " +
        result.FirstName +
        "<br>Last Name: " +
        result.LastName +
        "<br> DOB: " +
        result.birth +
        "<br> Antibodies Present: " + result.Antibodies
    );
    $("#staticData").show();
   

  });
}

// add antibody to specific patient

// extracts antibodies selected


function getTestingChoice() {
  var testingChoice = 
  // {
    // TS: 
    document.getElementById("TS").checked;
    // secondType: document.getElementById("secondType").checked,
    // spTest: document.getElementById("spTest").checked
  // };
  return testingChoice;
}



function getAntibodies() {
  var selectedAntibodies = [];
  $.each($(".antibodies option:selected"), function() {
    selectedAntibodies.push($(this).val());
  });
  return selectedAntibodies.join(", ");
  // console.log("Patient has Antibodies " + selectedAntibodies.join(", "));
}




// -----------------------seaerch for patient on client side-------------------------------


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

// clears form
function clearInputForm() {
  $('input[type="text"], textarea').val("");
  $("input[type=date]").each(function resetDate() {
    this.value = this.defaultValue;
  });
  // $("input").prop('disabled', true);
  $(".inputBox").hide();
}



