$(function() {
  $(".uneaten").on("click", function(event) {
    var id = $(this).data("id");
    var devour = $(this).data("devour");

    var eatStatus = {
      devoured: true
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatStatus
    }).then(
      function() {
        console.log("ate burger", devour);
        location.reload();
      }
    );
  });

  $(".add-burger").on("submit", function(event){
      console.log("new burger added");
      event.preventDefault();
      var newBurger = {
          burger_name: $("#burgerAdd").val().trim(),
      }
      console.log("new burger added");
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(
          function(){
              console.log("new burger added");
              location.reload();
          }
      )
  });
});