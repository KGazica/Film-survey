const formEl = document.querySelector("#form");

formEl.addEventListener("submit", (event) => {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the values of the input fields
  const formData = new FormData(formEl);

  // Send a request to the mock API endpoint with the form data as the request body
  fetch("https://reqres.in/api/save-form-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      film: formData.get("film"),
      rating: formData.get("rating"),
    }),
  })
    .then((response) => {
      // When the response is received, redirect the user to the Success.html page
      window.location.href = "./result.html";
    })
    .catch((error) => {
      // Handle any errors that occurred
      console.error(error);
    });
});
