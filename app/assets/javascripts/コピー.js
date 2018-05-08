// $(function(){

//   function buildHTML(message){
//     var html = `<div class='message' id='latest-message'>
//                   <div class='upper-message'>
//                     <div class='message__name'>
//                     ${message.name}
//                     </div>
//                     <div class='message__date'>
//                     ${message.created_at}
//                     </div>
//                   </div>
//                   <div class='lower-message'>
//                     <div class='message__text'>
//                     ${message.text}
//                     </div>
//                     <img class="message__image" src=${message.image} alt="">
//                   </div>
//                 </div>`
//     return html;
//   }


//   $(".new_message").on('submit', function(e){
//     e.preventD
//     efault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action');

//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData:false,
//       contentType:false
//     })
//     .done(function(data){
//       var html = buildHTML(data);
//       $('.notification').empty()
//       $('.contents-message').append(html)
//       $('.new_message')[0].reset()
//       $(".notification").append(
//       `<div class= 'notice'>メッセージが送信されました</div>`
//       )
//       $('.message').animate({scrollTop: $('.message')[0].scrollHeight}, 'fast');
//       $(".sending-area__send-btn").prop('disabled', false);
//     })
//     .fail(function(){
//       alert('error');
//       $(".sending-area__send-btn").prop('disabled', false);
//     })
//   })
// });
