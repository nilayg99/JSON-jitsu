function changeText() {
  const words = ["CSV", "XLSX", "XLS"]; // Array of words to transition to
  const span = document.getElementById("transition-text");
  let index = 0;

  // Interval function to change the text and color every 1 second
  const interval = setInterval(function() {
    span.textContent = words[index];
    span.style.color = "#02297d"; // Set text color to #02297d
    index = (index + 1) % words.length; // Loop through words array
  }, 1000); // Change text every 1 second

  // Clear the interval after 3 seconds (3 words * 1 second per word)
  setTimeout(function() {
    clearInterval(interval); // Clear the interval
    span.textContent = "XLSX"; // Reset text to default
    span.style.color = "#02297d"; // Reset text color to default

    // Restart the interval
    setInterval(function() {
      span.textContent = words[index];
      span.style.color = "#02297d"; // Set text color to #02297d
      index = (index + 1) % words.length; // Loop through words array
    }, 1000); // Change text every 1 second
  }, 3000); // Wait for 3 seconds before resetting
}
