var ProgressBar = require('progressbar.js');

var bar = new ProgressBar.Line('#container', {easing: 'easeInOut'});
bar.animate(1);  // Value from 0.0 to 1.0

// user input screen
// find pt search by ID
// race
// check if pt has TS
//--------------------
//check if pt has AB
function checkAntibodies(){
  if()
}; 
//==================15 - multiple dropdowns; changing one dropdown menu based on change in another in Javascript// if RC add calculate rc frequentcy * # units * #AB
// choses plt add 5 mins ( )
// chose cry add 25 mins
// chose plasma mins
//----------------------------------
// if pt is b  add 50 mins 
// IF > 4 UNITS ATT 50 MIN
// if for OR HOLD  dont add 
// if OTHER ( DEFAULT)  calll BB
// click submit-> timestamp
// TOTAL MINS added to timer ( complete screening/thaw)
// MINS to select & send added to timer
// up date progress bar
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(container, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});


bar.animate(0.6);  // Number from 0.0 to 1.0


///

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: ""
});

con.connect(function(err) {
  if (err) throw err;
  //Select all patients and return the result object:
  con.query("SELECT * FROM patientData", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});






