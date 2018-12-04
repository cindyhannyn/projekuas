function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

$(document).ready(function(){
  $("ul.list-unstyled").on("click", ".init", function() {
      $(this).closest("ul.list-unstyled").children('li:not(.init)').toggle();
  });

  var allOptions = $("ul.list-unstyled").children('li:not(.init)');
  $("ul.list-unstyled").on("click", "li:not(.init)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $("ul.list-unstyled").children('.init').html($(this).html());
      allOptions.toggle();
  });
});

$(document).ready(function(){
  $("ul.list-unstyled-coin").on("click", ".init", function() {
      $(this).closest("ul.list-unstyled-coin").children('li:not(.init)').toggle();
  });

  var allOptions = $("ul.list-unstyled-coin").children('li:not(.init)');
  $("ul.list-unstyled-coin").on("click", "li:not(.init)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $("ul.list-unstyled-coin").children('.init').html($(this).html());
      allOptions.toggle();
  });
});
