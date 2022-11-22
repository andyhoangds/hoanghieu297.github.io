$(function () {
  const clipboard_element = $(".copy-email");

  $(".copy-email").click(function(e) {
    // const email_select = e.data("clipboard-text");
    navigator.clipboard.writeText($(".email-text").val());
  });
});