$(function() {

  var search_list = $("#user-search-result");
  var group_user_list = $("#chat-group-user")

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
　　　　　　　　　  <p class="chat-group-user__name">${user.name}</p>
  　　　　　　　　　<a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=" ${user.id} " data-user-name="${user.name}">追加</a>
　　　　　　　　　</div>`
    search_list.append(html);
  }

  function appendNoUser() {
    var html = `<div class="chat-group-user clearfix">一致するユーザーはいません</div>`
    search_list.append(html);
  }

  function appendUserList(id, name){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
  <input name='group[user_ids][]' type='hidden' value=" ${id} ">
  <p class='chat-group-user__name'>${name}</p>
  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
</div>`
    group_user_list.append(html);
  }

  $("#user-search-field").on('keyup', function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        $("#user-search-result").empty();
        appendNoUser();
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });

  $("#user-search-result").on('click','.user-search-add',function(){
    $(this).parent().remove();
    var userId = $(this).data('user-id');
    var userName = $(this).data('user-name');
    appendUserList(userId, userName);
  });

  $("#chat-group-user-8 a").on('click',function(){
      user_id = $(this).prev('input:hidden[name="group[user_ids][]"]').val();
    $(this).parent().remove();
  });

  $(document).on('click','.user-search-remove',function(){
      user_id = $(this).prev('input:hidden[name="group[user_ids][]"]').val();
    $(this).parent().remove();
  });

});
