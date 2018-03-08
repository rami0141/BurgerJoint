$(function() {
  $(".devBurger").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed sleep to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  

  $("#addburger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#addburger").val().trim();
    };

    // Send the POST request.
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added new burger", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  
  // $(".devburger").on("click", function(event) {
  //   var id = $(this).data("burgerid");

  //   // Send the DELETE request.
  //   $.ajax("/burgers/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted id ", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });