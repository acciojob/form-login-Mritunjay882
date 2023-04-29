function getFormvalue() {
  // Get a reference to the form element
  var form = document.querySelector("form");

  // Add an event listener to handle form submission
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of the fname and lname input fields
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    // Display the result using alert()
    alert("First Name: " + fname + "\nLast Name: " + lname);
  });
}

