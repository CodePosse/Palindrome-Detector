/* REQUIRED STRING EXTENSIONS */
String.prototype.reverse = function(){
    return this.split("").reverse().join("");
}
String.prototype.palindrome = function(loose) {
    var str = loose ? this.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase() : this;
    return str == str.split('').reverse().join('');
}

$(document).ready(function() {

    var validate = function() {

        var loose = $(':checkbox').is(':checked');

        var valueContainer = $(':text');
        value = valueContainer.val();

        var palindrome = value.palindrome(loose);
        palindrome ?
            $(valueContainer).css('background-color', 'green').css('color', 'white')
                :
            $(valueContainer).css('background-color', 'white').css('color', 'black');
    }

    $(':text').on('keyup', function() {
        validate();
    });

    $(':checkbox').on('change', function() {
        $(':text').trigger('keyup');
    });

});