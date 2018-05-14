$(function(){

  var reloadTimer = setInterval(function(){
    if(location.pathname.match(/messages/)){
      if($('.message').data()){
        var message = { 'id': $('.message:last').data('id'),}
      } else { 
        var message = { 'id': 0,}
      }
      $.ajax({
        url: location.href,
        type: 'GET',
        data: {message: message},
        dataType: 'json',
      })
      .always(function(data){
        if (data[0]){
          html = buildHTML(data[0])
          $('.contents-message').append(html);
          $('.contents').animate({scrollTop: $('.contents')[0].scrollHeight}, 'fast');
        }
      });
    } else {
      clearInterval(reloadTimer);
    }
 },3000);

  function buildHTML(message){

    var html_head =
               `<div class='message' id='latest-message' data-id="${message.id}">
                  <div class='upper-message'>
                    <div class='message__name'>
                      ${message.name}
                    </div>
                    <div class='message__date'>
                      ${message.date}
                    </div>
                  </div>
                  <div class='lower-message'>
                    <div class='message__text'>
                      ${message.text}
                    </div>`
    var html_image =
                     `<div class='message__image'>
                        <img src="${message.image.url}" alt=" ">
                      </div>`

    html = (message.image.url) ? html = $(html_head).append(html_image + `</div></div>`) : html = $(html_head).append(`</div></div>`)

    return html;
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
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
      $('form')[0].reset();
      $('.form__submit').prop("disabled", false);
      $('.contents').animate({scrollTop: $('.contents')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      $('.form__text-field').val("");
      $('.upload_image').val("");
      $('.form__submit').prop("disabled", false);
      alert('error!');
    })
  });
});


