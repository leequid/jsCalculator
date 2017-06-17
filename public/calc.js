$(document).ready(function() {

  $('.number').click(function(e) {
    $("#display").append($(this).text());
    
  });


  $('.operator').click(function(e) {


    switch ($(this).text()) {
      case 'C':
        $("#display").text("");
        break;
      case '=':

        var values = $("#display").text().match(/\d*\.*\d/g);
        var op = $("#display").text().match(/[/X+-]/g);
        switch (op[0]) {
          case '+':
            $("#display").text(Number(values[0]) + Number(values[1]));
            break;
          case '-':
            $("#display").text(Number(values[0]) - Number(values[1]));
            break;
          case 'X':
            $("#display").text(Number(values[0]) * Number(values[1]));
            break;
          case '/':
            $("#display").text(Number(values[0]) / Number(values[1]));
            break;

        }
        break;
      default:
        addOpAsDiv($(this).text());

    }


  });

  function addOpAsDiv(op) {
    $("#display").append(op);
  }
});
