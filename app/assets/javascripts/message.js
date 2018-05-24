$(function(){

  var reloadTimer = setInterval(function(){
    if(location.pathname.match(/messages/)){
      var lastMessageId = ($('.middle-contents__right__message').data()) ? lastMessageId = $('.middle-contents__right__message:last').data('id') 
      : lastMessageId = 0
      $.ajax({
        url: location.href,
        type: 'GET',
        data: {id: lastMessageId},
        dataType: 'json',
      })
      .done(function(data){
        if (data.length > 0){
          data.forEach(function(newMessage){
            html = buildHTML(newMessage)
            $('.middle-contents__right').append(html);
            $('.middle-contents__right').animate({scrollTop: $('.middle-contents__right')[0].scrollHeight}, 'fast');
          })
        }
      })
      .fail(function(){
         alert('メッセージの取得に失敗しています!')
      })
    } else {
      clearInterval(reloadTimer);
    }
 },5000);

  function buildHTML(message){

    var html_head =
               `<div class='middle-contents__right__message' id='latest-message' data-id="${message.id}">
                  <div class='middle-contents__right__message upper'>
                    <div class='middle-contents__right__message__name'>
                      ${message.name}
                    </div>
                    <div class='middle-contents__right__message__date'>
                      ${message.date}
                    </div>
                  </div>
                  <div class='middle-contents__right__message lower'>
                    <div class='middle-contents__right__message__text'>
                      ${message.text}
                    </div>`
    var html_image =
                     `<div class='middle-contents__right__message__image'>
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
      console.log(data.image)
      var html = buildHTML(data);
      $('.middle-contents__right').append(html);
      $('form')[0].reset();
      $('.bottom-contents__right__submit').prop("disabled", false);
      $('.middle-contents__right').animate({scrollTop: $('.middle-contents__right')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      $('.bottom-contents__right__text-field').val("");
      $('.upload_image').val("");
      $('.bottom-contents__right__submit').prop("disabled", false);
      alert('error!');
    })
  });
});


