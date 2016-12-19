/////////////////////////////////////////////////////////////////
//----------------------December 19, 2016----------------------//
//-----------------------by Koray Gocmen-----------------------//
/////////////////////////////////////////////////////////////////


var user = $(".fbxWelcomeBoxName")[0].innerHTML;

var confirmUser = confirm("Would you like to specify a comment to look for?");

var specific;
if(confirmUser){
	specific = prompt("Any specific keyword to look for in the comments?");
}else{
	specific = null;
}
 

function magic(specific, user){
	var indexPost = null;
	$(".fwb a").each(function(i, obj) {
		var currentPoster = obj.innerHTML;
	    if(currentPoster === user){
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

	var timer = setInterval(function(){
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
		var commenterNames = [];

		$(commenters).each(function(i, obj){
			commenterNames.push(obj.innerText);
		});
		

		if(!specific){
			//this is done inside the if block in order not to change the index of the commenters
			//since these indexes are used if there is a specific comment to look for
			commenterNames = commenterNames.filter(function(elem, index, self) {
		    	return index == self.indexOf(elem);
			});
			var max = commenterNames.length;
			var randNum = parseInt(Math.random() * (max));
			return commenterNames[randNum];
		}
		
		var specificCommenters = [];
		
		$(postwanted).find(".UFICommentBody").each(function(i, obj){
			if(obj.innerText === specific){
				specificCommenters.push(commenterNames[i])
			}
		});

		specificCommenters = specificCommenters.filter(function(elem, index, self) {
		    return index == self.indexOf(elem);
		});

		var max = specificCommenters.length;
		var randNum = parseInt(Math.random() * (max));
		return specificCommenters[randNum];
	}
}

magic(specific, user);