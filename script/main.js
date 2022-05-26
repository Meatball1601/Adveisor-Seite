document.addEventListener("DOMContentLoaded", function(event) { 

    let single = "";

    fileUploadStyling(single);

})

function fileUploadStyling(single){
    let input = document.querySelectorAll("input[type=file]");
    for (let i = 0; i < input.length; i++) {
        var inputFile = input[i];
        inputFile.addEventListener('change',function(e){

            var label = this.nextElementSibling;
            label.innerHTML = this.files[0].name + ' ' + single;
        });
    }
}