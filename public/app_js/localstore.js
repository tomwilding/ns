$(document).ready(function() {
	$("#submit").click(function() {
		var key = $("#email").val()
  		var details = 	{	firstName: $("#firstName").val(),
  						lastName: $("#lastName").val(),
  						email: $("#email").val(),
  						number: $("#number").val()
  					};
  		$.post("http://immense-wave-9569.herokuapp.com/submitCustomerData", details, function(data){});
		$(':input').val('');
	});
});