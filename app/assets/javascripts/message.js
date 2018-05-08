$(function() {

  $('.form').click('submit', function(e) {
    e.preventDefault();
    textField = $('.form__text-field');
    text = textField.val();
    console.log(text);
  });
});
