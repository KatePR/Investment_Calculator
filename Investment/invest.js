$(document).ready(function(){
	$('[data-toggle = "tooltip"]').tooltip();
	$('input[placeholder]').blur(function(){
		
		$(this).closest('.form-group').removeClass('has-error');
		$('div.error').remove();
		
		if ($(this).val()===""){
		$(this).closest('.form-group').addClass('has-error');
		$(this).closest('.input-group').after("<div class = 'error'>This field is required.</div>");
		$(this).focus();
	} //closed if statement
	});
});

function calculate(){
	var p = parseFloat($('#txtInvestment').val());
	var r = parseFloat($('#txtInterestRate').val());
	var n = parseInt($('#txtYears').val());
	var A = p * Math.pow((1+r), n);
	$('#txtFinalValue').val(A.toFixed(2));
	return false;

}