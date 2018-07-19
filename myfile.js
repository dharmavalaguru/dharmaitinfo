




$(document).ready(function(){


$('.slider').bxSlider({
  auto: true,

  
  pager: false,
  touchEnabled:false,
  
  });



	if(window.innerWidth>1100 )
		{
	var wheight = window.innerHeight;
	$('.first-part').css({"height":wheight+"px"});

	}


 $(".accordion").on("click", ".accordion-header", function() {
    $(this).toggleClass("active").next().slideToggle();
 });
	

//Filter

// $(".filter-button").click(function(){
//         var value = $(this).attr('data-filter');
        
//         if(value == "all")
//         {
//             //$('.filter').removeClass('hidden');
//             $('.filter').show('1000');
//         }
//         else
//         {
// //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
// //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
//             $(".filter").not('.'+value).hide('3000');
//             $('.filter').filter('.'+value).show('3000');
            
//         }
//     });


$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

$qvalue=0;
   $('.quickcontact').click(function(event) {
   	
    if($qvalue==0)
    {
    	$(".quickcontact-form").addClass('open', 1000);
      	$(".quickcontact").addClass('open1', 1000);       
       	$qvalue=1;
        event.stopPropagation();
    }
    else
    {
       $(".quickcontact-form").removeClass('open', 1000);
       $(".quickcontact").removeClass('open1', 1000);
       $qvalue=0;
        event.stopPropagation();
    }
       
    });
    $('.quickcontact-form').click(function(event) {
        $(".quickcontact-form").addClass('open', 1000);
        event.stopPropagation();
    });
    // $(window).click(function() {
    //   if ( $(".quickcontact-form").hasClass( "open" ) && $(".quickcontact").hasClass( "open1" ))
    //   {
    //   $(".quickcontact-form").removeClass('open', 1000);
    //   $(".quickcontact").removeClass('open1', 1000);
    //   }
        
    // });


    
});











function Valid_quickcontact1() {
    var quickcontactname = document.getElementById('contactname');
    var quickcontactemail = document.getElementById('contactemail');
    var quickcontactphone = document.getElementById('contactphone');
    var quickcontactmessage = document.getElementById('contactcomment');    
    if (qnEmpty(quickcontactname, "Kindly enter your name")) {
        if (isAlphabetquick(quickcontactname, "Enter only letters for your Name")) {
            if (qnEmpty(quickcontactemail, "Kindly enter your email address")) {
                if (emailValidatorquick(quickcontactemail, "Enter a valid email address")) {
                    if (qnEmpty(quickcontactphone, "Kindly enter your contact number")) {
                        if (isNumericquick(quickcontactphone, "Kindly enter valid contact number")) {
                            if (lengthRestrictionquick(quickcontactphone, 8, 10)) {
                                if (qnEmpty(quickcontactmessage, "Kindly enter your message")) {
                                    if (isurlquickcontact(quickcontactmessage, "Remove the URL from the text")) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

function isurlquickcontact(elem, helperMsg) {
    var urlExpression = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (elem.value.match(urlExpression)) {
        document.getElementById("quickcontacterror1").innerHTML = helperMsg;
        elem.focus();
        return false;
    } else {
        return true;
    }
}

function qnEmpty(elem, helperMsg) {
    if (elem.value.length == 0) {
        document.getElementById("quickcontacterror1").innerHTML = helperMsg;
        elem.focus();
        return false;
    }
    return true;
}

function isNumericquick(elem, helperMsg) {
    var numericExpression = /^[0-9]+$/;
    if (elem.value.match(numericExpression)) {
        return true;
    } else {
        document.getElementById("quickcontacterror1").innerHTML = helperMsg;
        elem.focus();
        return false;
    }
}

function isAlphabetquick(elem, helperMsg) {
    var alphaExp = /^[a-zA-Z\s]+$/;
    if (elem.value.match(alphaExp)) {
        return true;
    } else {
        document.getElementById("quickcontacterror1").innerHTML = helperMsg;
        elem.focus();
        return false;
    }
}

function lengthRestrictionquick(elem, min, max) {
    var uInput = elem.value;
    if (uInput.length >= min && uInput.length <= max) {
        return true;
    } else {
        document.getElementById("quickcontacterror1").innerHTML = "Please enter between " + min + " and " + max + " characters";
        elem.focus();
        return false;
    }
}

function emailValidatorquick(elem, helperMsg) {
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (elem.value.match(emailExp)) {
        return true;
    } else {
        document.getElementById("quickcontacterror1").innerHTML = helperMsg;
        elem.focus();
        return false;
    }
}