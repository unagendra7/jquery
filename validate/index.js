$(document).ready(function () {
  $("#loginForm").validate({
    rules: {
      email: {
        required: true,
        maxlength:20
      },
      password: {
        required: true,
        maxlength:8
      }
    },
    messages: {
      email: {
        required: "specify email",
        maxlength:"length should be below 20"
      },
      password: {
        required: "specify password",
        maxlength:"length should be max 8 charcters"
      }
    },
    submitHandler: function (form) { // for demo
      alert('valid form');
      return false;
    }
  });
});
