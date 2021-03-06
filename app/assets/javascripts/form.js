$(function() {

  var search_list = $("#user-search-result");
  var group_user_list = $("#chat-group-user-add");

  function BuildUserHTML(user) {
    var html = `<div class="chat-group-user clearfix">
                 <p class="chat-group-user__name">${user.name}</p>
                 <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=" ${user.id} " data-user-name="${user.name}">追加</a>
                </div>`
    return html
  }

  function addGroupUser(id, name){
    var html = `<div class='chat-group-user clearfix js-chat-member'>
                  <input name='group[user_ids][]' type='hidden' value=" ${id} ">
                  <p class='chat-group-user__name'>${name}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn data-user-id=" ${id} "'>削除</a>
                </div>`
    group_user_list.append(html);
  }

  NoUserHTML = `<div class="chat-group-user clearfix">一致するユーザーはいません</div>`

  $("#user-search-field").on('keyup', function() {
    $("#user-search-result").empty();
    var userIds = $('input[name="group[user_ids][]"]').map(function(){
      return $(this).val();
    }).get();
    var input = $("#user-search-field").val();
    if (input.length) {  
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input, user_ids: userIds},
        dataType: 'json'
      })
      .done(function(users) {
        insertHTML = NoUserHTML;
        if (users.length !== 0) {
          insertHTML = '';
          users.forEach(function(user){
            insertHTML += BuildUserHTML(user);
          });
        }
        search_list.append(insertHTML);
      })
      .fail(function() {
        alert('ユーザー検索に失敗しました');
      })
    }
    else {
      return false
    }

  });

  $("#user-search-result").on('click','.user-search-add',function(){
    $(this).parent().remove();
    var userId = $(this).data('user-id');
    var userName = $(this).data('user-name');
    addGroupUser(userId, userName);
  });

  $("#chat-group-user-8 a").on('click',function(){
    $(this).parent().remove();
  });

  $(document).on('click','.user-search-remove',function(){
    $(this).parent().remove();
  });

});
