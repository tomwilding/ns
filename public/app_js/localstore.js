$(document).ready(function() {
	$("#submit").click(function() {
		var key = $("#email").val()
  		var details = 	{	firstName: $("#firstName").val(),
  						lastName: $("#lastName").val(),
  						email: $("#email").val(),
  						number: $("#number").val()
  					};
  		var port = process.env.PORT || '3000';
  		$.post("http://0.0.0.0" + port + "/submitCustomerData", details, function(data){});
	});
});