window.addEventListener("load", function () {
  function sendFormData() {
    var XHR = new XMLHttpRequest();

    // Connect the FormData object and form element
    var Data = new FormData(form);

    // Successful data submission
    XHR.addEventListener("load", function(event) {
      alert(event.target.responseText);
    });

    // In case of error
    XHR.addEventListener("error", function(event) {
      alert('Something went wrong.');
    });
    console.log('error');

    // Set up request
    XHR.open("POST", "https://example.com");

    // Data sent is what the user provided in form
    XHR.send(Data);
  }
 
  // Get form element
  var form = document.getElementById("form");

  // take submit event
  if (form !== null) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendFormData();
  	});
  } else {
  	console.log('null');
  }
});