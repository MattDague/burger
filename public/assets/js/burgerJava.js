// This is all the javascript for the buttons on the main page
$(function() {
  // on click even for uneaten button, this button moves the burgers to the eaten column
  $(".uneaten").on("click", function(event) {
    var id = $(this).data("id");
    var devour = $(this).data("devour");
    // sets status of devoured to true,
    var eatStatus = {
      devoured: true
    };
    // pushes through changes to api
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatStatus
    }).then(
      function() {
        location.reload();
      }
    );
  });

  // on click function for adding burger
  $(".add-burger").on("submit", function(event){
      event.preventDefault();
      //grabs buger name from input box
      var newBurger = {
          burger_name: $("#burgerAdd").val().trim(),
      };
      // posts new burger to api and reload page to update display
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(
          function(){
              location.reload();
          }
      )
  });
});