"use strict";

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-burger-state").on("click", function(event) {
    const id = $(this).data("id");
    const devoured = $(this).data("devoured");

    const devouredState = {
      devoured: devoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function(err, res) {
      if (err) throw err;
      console.log("changed devoured state to", devoured);
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger-name")
        .val()
        .trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Burger successfully added!");
      location.reload();
    });
  });
});
