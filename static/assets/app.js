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
      $('#error').text(xhr.responseJSON && xhr.responseJSON.error ? xhr.responseJSON.error : 'Something went wrong');
    });
}());
