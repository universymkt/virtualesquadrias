$(".js-toggle-password").click(function(e) {
  e.preventDefault();

  const icon = $(this).find(".fa");
  const input = $(this).siblings(".form-control");
  const type = input.prop("type");

  if (type === "password") {
    icon.removeClass("fa-eye").addClass("fa-eye-slash");
    input.attr("type", "text");
  } else {
    icon.removeClass("fa-eye-slash").addClass("fa-eye");
    input.attr("type", "password");
  }
});

$("#js-navbar-toggle").click(function(e) {
  e.preventDefault();

  $("#sidebar").toggleClass("sidebar--open");
});