$(document).ready(function() {
    
});
function asd(a)
{
    if(a==1)
    document.getElementById("asd").className = '';
    else
    document.getElementById("asd").className = 'hidden';
}
/*if(!$('input').val()){
    $('#register').className = 'hidden';
}
else {
    $('#register').show();
}*/
/*function required(inputtx)
{
 if (inputtx.value.length == 0)
  {
     alert("message");
     return false;
  }
  return true;
}*/
(function() {
    $('form > input').keyup(function() {

        var empty = false;
        $('form > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#register').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        } else {
            $('#register').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        }
    });
})()