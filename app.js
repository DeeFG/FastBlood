// user input screen
// find pt search by ID
// race
// check if pt has TS
//--------------------
//check if pt has AB
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


///















window.onload = function() {
    // products is an object but you can think of it as a lookup table
    var products = {
          'RC': ['1', '2','3','4','4','6', '6'],
          'Ontario': ['Bracebridge', 'Waterloo']
        },
        // just grab references to the two drop-downs
        product_select = document.querySelector('#prov'),
        quantity_select = document.querySelector('#town');
  
    // populate the provinces drop-down
    setOptions(product_select, Object.keys(products));
    // populate the town drop-down
    setOptions(quantity_select, products[product_select.value]);
    
    // attach a change event listener to the provinces drop-down
    product_select.addEventListener('change', function() {
      // get the towns in the selected province
      setOptions(quantity_select, products[product_select.value]);
    });
      
    function setOptions(dropDown, options) {
      // clear out any existing values
      dropDown.innerHTML = '';
      // insert the new options into the drop-down
      options.forEach(function(value) {
        dropDown.innerHTML += '<option name="' + value + '">' + value + '</option>';
      });
    }  
  };
 <select id="prov"></select>
<select id="town"></select>

//--------------------------------------

  $(document).ready(function() {

    $("#source").change(function() {
  
      var el = $(this) ;
  
      if(el.val() === "ONLINE" ) {
      $("#status").append("<option>SHIPPED</option>");
      }
        else if(el.val() === "MANUAL" ) {
          $("#status option:last-child").remove() ; }
    });
  
  });


 









