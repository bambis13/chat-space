$(function() {

  function buildHTML(message){

    var html = `<div class='message'>
                  <div class='upper-message'>
                    <div class='message__name'>
                    ${message.name}
                    </div>
                    <div class='message__date'>
                    ${message.created_at}
                    </div>
                  </div>
                  <div class='lower-message'>
                    <div class='message__text'>
                    ${message.text}
                    </div>

                  </div>
                </div>`

//     if(message.text !== nil &message.image present?){html.append('<div class='lower-message'>
// <div class='message__text'>

// </div>

// </div>')
//     }elseif(message.text.present?){

//     }elseif(message.image.present?){

//     }else{

//     }
    return html;
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    // console.log(this)
    // console.log(url)
    // textField = $('.form__text-field');
    // text = textField.val();
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      // console.log(html)
      $('.contents-message').append(html)
      // $('.text_field').val('')
    })
    // .fail(function(){
    //   alert('error!');
    // })
  });
});


