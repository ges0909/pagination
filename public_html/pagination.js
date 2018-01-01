/**
 *
 * @returns {undefined}
 */
function pagination() {

  $('.prev-btn').on('click', function (event) {
    let el = $(event.target).siblings('#val:first').html();
    let val = parseInt(el);
    $('#val').html(val - 1);
    if ((val - 1) === 0) {
      $(event.target).prop('disabled', true);
    } else if (val === 10) {
      $('.next-btn').prop('disabled', false);
    }
  });

  $('.next-btn').on('click', function (event) {
    let el = $(event.target).siblings('#val:first').html();
    let val = parseInt(el);
    $('#val').html(val + 1);
    if ((val + 1) === 10) {
      $(event.target).prop('disabled', true);
    } else if (val === 0) {
      $('.prev-btn').prop('disabled', false);
    }
  });

}