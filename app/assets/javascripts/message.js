$(function(){

  function buildHTML(message){

    var html =
               `<div class='message' id='latest-message'>
                  <div class='upper-message'>
                    <div class='message__name'>
                      ${message.name}
                    </div>
                    <div class='message__date'>
                      ${message.created_at}
                    </div>
                  </div>`

    var html_text =
                   `<div class='lower-message'>
                      <div class='message__text'>
                        ${message.text}
                      </div>
                     </div>`

    var html_image =
                     `<div class='lower-message'>
                        <div class='message__image'></div>
                          <img src="${message.image.url}" alt=" ">
                        </div>
                      </div>`
    if(message.text && message.image.url){
      html = $(html).append(html_text + html_image + `</div>`)
    } else if(message.image.url == null && message.text[0]){
      html = $(html).append(html_text + `</div>`)
    } else if(!message.text[0] && message.image.url){
      html = $(html).append(html_image + `</div>`)
    } else {
      html = $(html).append(
                            `<p>エラー！</p>
                          </div>`)
    }
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
      $('.form__text-field').val("");
      $('.upload_image').val("");
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


