$(document).ready(function() {
	$("#submit").click(function() {
		var key = $("#email").val()
  		var details = 	{	firstName: $("#firstName").val(),
  						lastName: $("#lastName").val(),
  						email: $("#email").val(),
  						number: $("#number").val()
  					};
  		$.post("http://0.0.0.0:80/submitCustomerData", details, function(data){});
	});
});