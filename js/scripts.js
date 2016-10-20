$(document).ready(function() {

  var age = parseInt(prompt("How old are youi?"));

    if (age>=18) {
        $("#first").show();
    }
    else {
      $("#second").show();
    }

});
