/////////////////////////////////////////////////////////////////
//----------------------December 19, 2016----------------------//
//-----------------------by Koray Gocmen-----------------------//
/////////////////////////////////////////////////////////////////


var user = $(".fbxWelcomeBoxName")[0].innerHTML;

var confirmUser = confirm("Would you like to specify a comment to look for?");
var specific = null;

if(confirmUser){
	specific = prompt("Any specific keyword to look for in the comments?");
}
 

function magic(specific, user){
	var indexPost = null;
	$(".fwb a").each(function(i, obj) {
		var currentPoster = obj.innerHTML;
		console.log(currentPoster);
	    if(currentPoster === user){
	    	console.log(currentPoster, i);
	    	indexPost = i;
	    }
	});

	if(indexPost == null){
		alert("We couldn't find any posts that belongs to you");
		return;
	}

	var posts = $("._4-u2.mbm._5jmm._5pat._5v3q._4-u8");
	var postwanted;

	//all posts $("._4-u2.mbm._5jmm._5pat._5v3q._4-u8")
	postwanted = $("._4-u2.mbm._5jmm._5pat._5v3q._4-u8")[indexPost];
	console.log(postwanted);

	var timer = setInterval(function(){
		console.log("inside");
		if($(postwanted).find(".UFIPagerLink")[0]){
			$(postwanted).find(".UFIPagerLink")[0].click();
		}else{
			clearInterval(timer);
			var result = chooseRandom(specific);
			if(result){
				alert(result);
			}else{
				alert("something went wrong");
			}
		}
	},800);


	function chooseRandom(specific){

		var commenters = $(postwanted).find(".UFICommentActorName");

		if(!specific){
			var max = commenters.length;
			var randNum = parseInt(Math.random() * (max));
			return commenters[randNum].innerText;
		}
		
		var specificCommenters = [];
		
		$(postwanted).find(".UFICommentBody").each(function(i, obj){
			if(obj.innerText === specific){
				specificCommenters.push(commenters[i].innerText)
			}
		});

		var max = specificCommenters.length;
		var randNum = parseInt(Math.random() * (max));
		return specificCommenters[randNum];
	}
}

magic(specific, user);