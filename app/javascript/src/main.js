window.addEventListener("DOMContentLoaded", function() {
  const contentEl = document.getElementById("webpack-hello")
  if (contentEl) {
    contentEl.innerText = "Hello from JavaScript (Webpack)!"
  }
})

$(function() {
  $("#webpack-jquery-hello").text("Hello from JavaScript (Weback + jQuery)!")

  $("#jquery-ui-datepicker").datepicker()

  $("#jquery-ui-datepicker-trigger").button({
    icon: "ui-icon-calendar"
  }).on("click", function() {
    $("#jquery-ui-datepicker").datepicker("show")
  })

  $("#open-dialog").on("click", function() {
    const dateValue = $("#jquery-ui-datepicker").datepicker("getDate")
    let formattedDate = 'nothing :('
    if (dateValue) {
      formattedDate = $.datepicker.formatDate('dd.mm.yy', dateValue)
    }

    $("#dialog [data-field='selected-date']").text(formattedDate)
    $("#dialog").dialog({
      buttons: {
        "Close": function() {
          $(this).dialog( "close" );
        },
      }
    })
  })
})
