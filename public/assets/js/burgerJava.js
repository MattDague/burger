
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
  
    // $(".create-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var newCat = {
    //     name: $("#ca").val().trim(),
    //     sleepy: $("[name=sleepy]:checked").val().trim()
    //   };
  
    //   // Send the POST request.
    //   $.ajax("/api/cats", {
    //     type: "POST",
    //     data: newCat
    //   }).then(
    //     function() {
    //       console.log("created new cat");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });
  