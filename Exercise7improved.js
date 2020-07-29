document.querySelector('#todoListForm').addEventListener("submit", function(event) {
    console.log("Form Submited")
  event.preventDefault();
  

var value = $("#ToDoFeild").val();
$("#myList").append( "<li>"+value+"</li>" )
})