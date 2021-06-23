$(document).ready(function(){

	$('.loader-bg2').delay(5000).fadeOut(100);

	$("tr > td > input").focus(function(){
		$(this).parent().parent().addClass('highlight');
	}).blur(function(){
		$(this).parent().parent().removeClass('highlight');
	});

	$("tr > td > select").focus(function(){
		$(this).parent().parent().addClass('highlight');
	}).blur(function(){
		$(this).parent().parent().removeClass('highlight');
	});
	

	$('#cards').change(function(){
		$('.card-result').html("");
		$("#numberx").val("");
		if($(this).val() == '1'){
			$("#info").addClass("remove");
			$("#numbers").val("");
			$("#userid, #password, #cpassword").removeAttr('required');
			document.getElementById("cardtype").innerHTML = 'Card Number';
			document.getElementById("code").innerHTML = 'Card Security Code';
			$("#numberx").attr('minlength', 4);
			$("#numberx").attr('maxlength', 4);
			rep('#numberx');
		}else if( $(this).val() == '0' ){	
			$("#info").removeClass("remove");
			$("#numbers").val("");
			$("#userid, #password, #cpassword").attr('required', true);
			document.getElementById("cardtype").innerHTML = 'Card Number';
			document.getElementById("code").innerHTML = 'Card Security Code';
			$("#numberx").attr('minlength', 3);
			$("#numberx").attr('maxlength', 3);
			rep('#numberx');
		}else{
			$(this).value = "";
			$("#numbers").val("");
			$("#userid, #password, #cpassword").attr('required', true);
			$("#info").removeClass("remove");
		}
	});

	/*$("#numbers").blur(function(){
		if($(this).val() == ""){
			$('.card-result').html("");
		}
		var data = $(this).val();
		var success = false;
		var link = 'https://lookup.binlist.net/'+data;

		$.getJSON(link, function(data){
			success = true;
			var tayp = data.type, scheme = data.scheme;
			if(tayp == "CREDIT" || tayp == "DEBIT"){
				$('.card-result').html("<font color='lime'>Valid Card Type!</font>");
			}else if( tayp != "CREDIT" && tayp != "DEBIT"){
				$("#numbers").val("");
				$('.card-result').html("<font color='red'>Invalid Card Type!</font>");
			}
		});

		setTimeout(function(){
			if(!success){
				$("#numbers").val("");
				$('.card-result').html("<font color='red'>Invalid Card Type!</font>");
			}
		},3000);

	});*/

	$('#reset').click(function(){
		$("#info").removeClass("remove");
		$('.card-result').html("");
	});

	$("#creditcardexp").keyup(function(){
		var replace = $(this).val().replace(/[^0-9\/.]/g, '');
		$(this).val(replace);
	});

/*   Validation for numbers :D   */
	$('#number, #numbers, #numberx').keyup(function(){
		var replace = $(this).val().replace(/[^0-9]/g, '');
		$(this).val(replace);
	});

	function rep(test){
		$(test).keyup(function(){
			var replace = $(this).val().replace(/[^0-9]/g, '');
				return $(this).val(replace);
		});
	}
/* ENDS HERE */

/*   Validation for Names :D   */
	$('#fname, #mname, #lname').keyup(function(){
		var replace = $(this).val().replace(/[^A-Za-z]/g, '');
		$(this).val(replace);
	});

/* ENDS HERE */

	$("#cpassword").blur(function(){
		if( $("#password").val() != $("#cpassword").val() ){
			alert( 'Password Not Match!' );
			$("#cpassword").val("");
			$("#cpassword").focus();
		}
	});	

	$("#c_ans1").blur(function(){
		if( $("#ans1").val() != $("#c_ans1").val() ){
			alert("Challenge Answers do not match!");
			$("#c_ans1").val("");
		}
	});

	

	$("#c_ans2").blur(function(){
		if( $("#ans2").val() != $("#c_ans2").val() ){
			alert("Challenge Answers do not match!");
			$("#c_ans2").val("");
		}
	});

	$("#c_ans3").blur(function(){
		if( $("#ans3").val() != $("#c_ans3").val() ){
			alert("Challenge Answers do not match!");
			$("#c_ans3").val("");
		}
	});
});	