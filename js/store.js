var autocall; //전역변수
var autocall2;
var autocall3;
var autocall4;
var autocall5;
var autocall6;
var autocall7;

/*
	함수명 : fadeShow
	기능 : 이미지가 서서히 등장
*/

function fadeShow(){

	//초기설정 시작
	var firstImg = $(".storeSmallBox01>.ssBox>.storeImg").first();//현재 앞에있는 이미지
	var nextImg = firstImg.next();//뒤에 있는 이미지 
  // firstImg.css("opacity","1");//앞에 있는 이미지가 나타나게
  nextImg.css("opacity","0").addClass("zIndex");//뒤에 있는 이미지는 투명했다가 나타나는 동시에 z-index를 위로 올리기 
  //초기설정 끝
  nextImg.fadeTo(1500,1,//다음이미지가 2초가 지나면 opa:1로 변경
  	function(){//그 이후 함수내용 실행 
  	$(".storeSmallBox01>.ssBox").append(firstImg);//처음 이미지를 맨 마지막으로 
  	firstImg.removeClass("zIndex");//뒤로 넘기면서 z-index 삭제 
  	});
 	};//fadeshow
  

  function fadeShow2(){

  //초기설정 시작
  var firstImg = $(".storeSmallBox02>.ssBox>.storeImg").first();//현재 앞에있는 이미지
  var nextImg = firstImg.next();//뒤에 있는 이미지 
  // firstImg.css("opacity","1");//앞에 있는 이미지가 나타나게
  nextImg.css("opacity","0").addClass("zIndex");//뒤에 있는 이미지는 투명했다가 나타나는 동시에 z-index를 위로 올리기 
  //초기설정 끝
  nextImg.fadeTo(1500,1,//다음이미지가 2초가 지나면 opa:1로 변경
    function(){//그 이후 함수내용 실행 
    $(".storeSmallBox02>.ssBox").append(firstImg);//처음 이미지를 맨 마지막으로 
    firstImg.removeClass("zIndex");//뒤로 넘기면서 z-index 삭제 
    });
  };//fadeshow
  

   function fadeShow3(){

  //초기설정 시작
  var firstImg = $(".storeSmallBox03>.ssBox>.storeImg").first();//현재 앞에있는 이미지
  var nextImg = firstImg.next();//뒤에 있는 이미지 
  // firstImg.css("opacity","1");//앞에 있는 이미지가 나타나게
  nextImg.css("opacity","0").addClass("zIndex");//뒤에 있는 이미지는 투명했다가 나타나는 동시에 z-index를 위로 올리기 
  //초기설정 끝
  nextImg.fadeTo(1500,1,//다음이미지가 2초가 지나면 opa:1로 변경
    function(){//그 이후 함수내용 실행 
    $(".storeSmallBox03>.ssBox").append(firstImg);//처음 이미지를 맨 마지막으로 
    firstImg.removeClass("zIndex");//뒤로 넘기면서 z-index 삭제 
    });
  };//fadeshow
  

   function fadeShow4(){

  //초기설정 시작
  var firstImg = $(".storeSmallBox04>.ssBox>.storeImg").first();//현재 앞에있는 이미지
  var nextImg = firstImg.next();//뒤에 있는 이미지 
  // firstImg.css("opacity","1");//앞에 있는 이미지가 나타나게
  nextImg.css("opacity","0").addClass("zIndex");//뒤에 있는 이미지는 투명했다가 나타나는 동시에 z-index를 위로 올리기 
  //초기설정 끝
  nextImg.fadeTo(1500,1,//다음이미지가 2초가 지나면 opa:1로 변경
    function(){//그 이후 함수내용 실행 
    $(".storeSmallBox04>.ssBox").append(firstImg);//처음 이미지를 맨 마지막으로 
    firstImg.removeClass("zIndex");//뒤로 넘기면서 z-index 삭제 
    });
  };//fadeshow
 

   function fadeShow5(){

  //초기설정 시작
  var firstImg = $(".storeSmallBox05>.ssBox>.storeImg").first();//현재 앞에있는 이미지
  var nextImg = firstImg.next();//뒤에 있는 이미지 
  // firstImg.css("opacity","1");//앞에 있는 이미지가 나타나게
  nextImg.css("opacity","0").addClass("zIndex");//뒤에 있는 이미지는 투명했다가 나타나는 동시에 z-index를 위로 올리기 
  //초기설정 끝
  nextImg.fadeTo(1500,1,//다음이미지가 2초가 지나면 opa:1로 변경
    function(){//그 이후 함수내용 실행 
    $(".storeSmallBox05>.ssBox").append(firstImg);//처음 이미지를 맨 마지막으로 
    firstImg.removeClass("zIndex");//뒤로 넘기면서 z-index 삭제 
    });
  };//fadeshow
  

   function fadeShow6(){

  //초기설정 시작
  var firstImg = $(".storeSmallBox06>.ssBox>.storeImg").first();//현재 앞에있는 이미지
  var nextImg = firstImg.next();//뒤에 있는 이미지 
  // firstImg.css("opacity","1");//앞에 있는 이미지가 나타나게
  nextImg.css("opacity","0").addClass("zIndex");//뒤에 있는 이미지는 투명했다가 나타나는 동시에 z-index를 위로 올리기 
  //초기설정 끝
  nextImg.fadeTo(1500,1,//다음이미지가 2초가 지나면 opa:1로 변경
    function(){//그 이후 함수내용 실행 
    $(".storeSmallBox06>.ssBox").append(firstImg);//처음 이미지를 맨 마지막으로 
    firstImg.removeClass("zIndex");//뒤로 넘기면서 z-index 삭제 
    });
  };//fadeshow
   

   function fadeShow7(){

  //초기설정 시작
  var firstImg = $(".storeSmallBox07>.ssBox>.storeImg").first();//현재 앞에있는 이미지
  var nextImg = firstImg.next();//뒤에 있는 이미지 
  // firstImg.css("opacity","1");//앞에 있는 이미지가 나타나게
  nextImg.css("opacity","0").addClass("zIndex");//뒤에 있는 이미지는 투명했다가 나타나는 동시에 z-index를 위로 올리기 
  //초기설정 끝
  nextImg.fadeTo(1500,1,//다음이미지가 2초가 지나면 opa:1로 변경
    function(){//그 이후 함수내용 실행 
    $(".storeSmallBox07>.ssBox").append(firstImg);//처음 이미지를 맨 마지막으로 
    firstImg.removeClass("zIndex");//뒤로 넘기면서 z-index 삭제 
    });
  };//fadeshow






$(function(){

 	autocall=setInterval(fadeShow,1500);
  autocall2=setInterval(fadeShow2,1500);
  autocall3=setInterval(fadeShow3,1500);
  autocall4=setInterval(fadeShow4,1500);
  autocall5=setInterval(fadeShow5,1500);
  autocall6=setInterval(fadeShow6,1500);
  autocall7=setInterval(fadeShow7,1500);

});//jQB