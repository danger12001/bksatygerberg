var language = localStorage['language'];
if(!language){
  swal({
     title: "Some Text" +
         "<br>" +
         '<button type="button" role="button" tabindex="0" class="SwalBtn1 customSwalBtn">' + 'English' + '</button>' +
         '<button type="button" role="button" tabindex="0" class="SwalBtn2 customSwalBtn">' + 'Afrikaans' + '</button>',
     html: "Some Text" +
         "<br>" +
         '<button type="button" role="button" tabindex="0" class="SwalBtn1 customSwalBtn">' + 'English' + '</button>' +
         '<button type="button" role="button" tabindex="0" class="SwalBtn2 customSwalBtn">' + 'Afrikaans' + '</button>',
     showCancelButton: false,
     showConfirmButton: false
  });
}
$(document).on('click', '.SwalBtn1', function() {
 //Some code 1
 localStorage['language'] = 'English';
});
$(document).on('click', '.SwalBtn2', function() {
 //Some code 2
 localStorage['language'] = 'Afrikaans';

});
