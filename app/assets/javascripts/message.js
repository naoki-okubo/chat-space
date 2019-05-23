$(function(){

  var buildMessageHTML = function(message) {
      var imageHTML = message.image.url ? `<img src="${message.image.url}" class="lower-message__image" >` : ''
      var html = `<div class="message" data-id=${message.id}>
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-message">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                      ${imageHTML}
                    </div>
                  </div>`
    return html;
  };

  $('.js-form').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildMessageHTML(data);
      $('.messages').append(html);
      $('html,.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('.form__submit').attr('disabled', false);
      $('form')[0].reset();
    })
    .fail(function(){
      alert('ごめん、マジ無理やわ...ほんまごめん。。');
    });
  });

  var reloadMessages = function() {
    var last_message_id = $('.message:last').data('id');
    console.log(last_message_id)
    $.ajax({
      url: './api/messages',
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      $.each(messages, function(){
        insertHTML += buildMessageHTML(this)
      })
      var html = insertHTML;
      $('.messages').append(html);
      $('html,.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function() {
      console.log('error');
    });
  };
  setInterval(reloadMessages, 5000);
});