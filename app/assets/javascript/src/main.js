window.addEventListener("DOMContentLoaded", function() {
  const contentEl = document.getElementById("sprockets-hello")
  if (contentEl) {
    contentEl.innerText = "Hello from JavaScript (Sprockets)!"
  }
})

$(function() {
  $("#sprockets-jquery-hello").text("Hello from JavaScript (Sprockets + jQuery)!")
})
