var textInput = $(".description").val();

$("<button>").click(function(event){
    event.preventDefault();

    localStorage.setItem("textInput", textInput);
});