$(document).ready(function() {
	$("#submit").click(function() {
		var key = $("#email").val()
  		var details = 	{	firstName: $("#firstName").val(),
  						lastName: $("#lastName").val(),
  						email: $("#email").val(),
  						number: $("#number").val()
  					};
  		var url = process.env.PORT || '3000';
  		$.post("http://0.0.0.0/submitCustomerData", details, function(data){});
	});
});