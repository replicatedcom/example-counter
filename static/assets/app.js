$(function () {
  $.ajax({
      url: 'api/increment-page-views',
      method: 'POST',
      dataType: 'json'
    })
    .done(function (data) {
      $('#pageviews').text(data.pageviews);
    })
    .fail(function (xhr, data) {
      console.log(xhr.responseJSON.error);
      $('#error').text(xhr.responseJSON.error);
    });
}());
