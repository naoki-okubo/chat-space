$(function() {

  var search_list = $("#user-search-result");
  var chatmember_list = $("#chat-group-users");
    
  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" 
                    data-user-id="${ user.id }" 
                    data-user-name="${ user.name }">追加
                  </div>
                </div>`
    search_list.append(html);
  }

  function appendErrMsgToHTML(msg) {
    var html =`<div class="chat-group-user clearfix">${msg}</div>`
    search_list.append(html);
  }

  function appendBtton(user_id,user_name) {
    var html =`<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value=' ${user_id}'>
                  <p class='chat-group-user__name'>${user_name}</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
              </div>`
    chatmember_list.append(html)
  }

    $("#user-search-field").on("keyup", function() {
        var input = $(this).val();
        $.ajax({
          type: 'GET',
          url: '/users/search',
          data: { keyword: input },
          dataType: 'json'
        })
        
        .done(function(users) {
          search_list.empty();
            if (users.length !== 0) {
              users.forEach(function(user){
                appendUser(user);
              });
            }
            else {
              appendErrMsgToHTML("一致するユーザーはいません");
            }
        })
        .fail(function() {
          alert('検索に失敗しました');
        })

      });
        $(document).on("click", ".user-search-add", function(){
          appendBtton($(this).data("user-id"),$(this).data("user-name"),$(this))
          $(this).parent().remove()
        })
  
        $(document).on("click", ".chat-group-user__btn--remove", function(){
          $(this).parent().remove()
        })
});