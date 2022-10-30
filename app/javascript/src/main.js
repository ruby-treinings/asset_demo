window.addEventListener("DOMContentLoaded", function() {
  const contentEl = document.getElementById("webpack-hello")
  if (contentEl) {
    contentEl.innerText = "Hello from JavaScript (Webpack)!"
  }
})

$(function() {
  $("#webpack-jquery-hello").text("Hello from JavaScript (Weback + jQuery)!")

})
