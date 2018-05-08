$(function() {

  function buildHTML(message){

    var html = `<div class='message' id='latest-message'>
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
                    <img class="message__image" src=${message.image} alt="">
                  </div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    // console.log(this)
    // console.log(url)
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
      $('.contents-message').append(html);
      $('.contents').animate({scrollTop: $('.contents')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error!');
    })
  });
});


