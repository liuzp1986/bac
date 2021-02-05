var xinm = new Array();
xinm[0] = "../../static/img_sanhe/长安.jpg";
xinm[1] = "../../static/img_sanhe/朱亚楠.jpg";
xinm[2] = "../../static/img_sanhe/李双印.png";
xinm[3] = "../../static/img_sanhe/郑伟杰.jpg";
xinm[4] = "../../static/img_sanhe/FZ.jpg";
xinm[5] = "../../static/img_sanhe/袁韬.jpg";
xinm[6] = "../../static/img_sanhe/凌子卿.jpg";
xinm[7] = "../../static/img_sanhe/马俊.jpg";
xinm[8] = "../../static/img_sanhe/阳亮.jpg";
xinm[9] = "../../static/img_sanhe/赵正荣.jpg";
xinm[10] = "../../static/img_sanhe/赵雪芬.jpg";
xinm[11] = "../../static/img_sanhe/汪仕敏.jpg";
xinm[12] = "../../static/img_sanhe/王太微.jpg";
xinm[13] = "../../static/img_sanhe/洪哲炜.jpg";
xinm[14] = "../../static/img_sanhe/朱彤.jpg";
xinm[15] = "../../static/img_sanhe/杨宁.jpg";
xinm[16] = "../../static/img_sanhe/万森.jpg";
xinm[17] = "../../static/img_sanhe/蔡华忠.jpg";
xinm[18] = "../../static/img_sanhe/汪鹏程.jpg";
xinm[19] = "../../static/img_sanhe/宁佳棋.jpg";
xinm[20] = "../../static/img_sanhe/江霞.jpg";
xinm[21] = "../../static/img_sanhe/唐御卿.jpg";
xinm[22] = "../../static/img_sanhe/黄培艺.jpg";
xinm[23] = "../../static/img_sanhe/刘雨童.jpg";
xinm[24] = "../../static/img_sanhe/黄志翔.jpg";
var phone = new Array();
phone[0] = "长安";
phone[1] = "朱亚楠";
phone[2] = "李双印";
phone[3] = "郑伟杰";
phone[4] = "郭文芳";
phone[5] = "袁韬";
phone[6] = "凌子卿";
phone[7] = "马俊";
phone[8] = "阳亮";
phone[9] = "赵正荣";
phone[10] = "赵雪芬";
phone[11] = "汪仕敏";
phone[12] = "王太微";
phone[13] = "洪哲炜";
phone[14] = "朱彤";
phone[15] = "杨宁";
phone[16] = "万森";
phone[17] = "蔡华忠";
phone[18] = "汪鹏程";
phone[19] = "宁佳棋";
phone[20] = "江霞";
phone[21] = "唐御卿";
phone[22] = "黄培艺";
phone[23] = "刘雨童";
phone[24] = "黄志翔";
var giftimg = new Array();
giftimg[0] = "../../static/img/红包.png";
giftimg[1] = "../../static/img/筋膜枪.png";
giftimg[2] = "../../static/img/熨烫机.png";
giftimg[3] = "../../static/img/电动牙刷.png";
giftimg[4] = "../../static/img/榨汁机.png";
giftimg[5] = "../../static/img/冲牙器.png";
giftimg[6] = "../../static/img/扫地机器人.png";
giftimg[7] = "../../static/img/按摩仪.png";
giftimg[8] = "../../static/img/投影仪.png";
giftimg[9] = "../../static/img/音响.png";
giftimg[10] = "../../static/img/iwatch.png";
giftimg[11] = "../../static/img/iphone.png";
var cj = "../../static/img/cj.jpg";
var giftname = new Array();
giftname[0] = "红包";
giftname[1] = "筋膜枪";
giftname[2] = "熨烫机";
giftname[3] = "电动牙刷";
giftname[4] = "榨汁机";
giftname[5] = "冲牙器";
giftname[6] = "扫地机器人";
giftname[7] = "按摩仪";
giftname[8] = "投影仪";
giftname[9] = "音响";
giftname[10] = "iwatch";
giftname[11] = "iphone";
    
var nametxt = $('.slot');
var prizenametxt = $('.slot1');
var phonetxt = $('.name');
var prizephototxt = $('.gift');
var pcount = xinm.length-1;//参加人数
var runing = true;
var trigger = true;
var inUser = (Math.floor(Math.random() * 10000)) % 5 + 1;
var num = 0;
var Lotterynumber = 1; //设置单次抽奖人数
var zeroPrize = 1;
var firstPrize =1;
var secondPrize = 2;
var thirdPrize = 3;
var forthPrize = 4;
var fifthPrize = 5;
var click1 = 0;
var local = window.localStorage;
var date1 = new Date().toLocaleString();
var result = '';

$(window).load(function(){
	for (var i =0; i<fifthPrize;i++){
		$("#n5").append("<li class = 'n5'><div style='float:left'></div><div></div></li>"); }
		for ( var i=0; i<forthPrize; i++){
		$("#n4").append("<li class = 'n4'><div style='float:left'></div><div></div></li>") ; }
		for (var i = 0; i<thirdPrize;i++){
		$('#n3').append("<li class = 'n3'><div style='float:left'></div><div></div></li>");}
		for ( var i=0; i<secondPrize;i++)
		$('#n2').append("<li class ='n2'><div style='float:left'></div><div></div></li>");
		for (var i =0; i<firstPrize;i++)  
		 //{
		$('#n1').append("<li class = 'n1'><div style='float:left'></div><div></div></li>");
		//$('.n0').append(li);   
		 //}
		 for (var i=0;i<zeroPrize;i++)
		$('#n0').append("<li class = 'n0'><div style='float:left'></div><div></div></li>");
		
	nametxt = $('.slot');
	prizenametxt = $('.slot1');
	phonetxt = $('.name');
	nametxt.css('background-image','url('+cj+')');
	prizephototxt = $('.gift');
	phonetxt.html("五等奖");
	prizenametxt.css('background-image','url('+giftimg[0]+')');
	prizephototxt.html(giftname[0]);
});

// 开始停止
function start() {

	if (runing) {

		if ( pcount < Lotterynumber || click1 > 15) {
			alert("抽奖结束");

		}else{
			runing = false;
			$('#start').text('停止');
			startNum()
		}

	} else {
		$('#start').text('自动抽取中('+ Lotterynumber+')');
		click1 += 1 ;
		zd();
	}
	
}

// 开始抽奖

function startLuck() {
	runing = false;
	$('#btntxt').removeClass('start').addClass('stop');
	startNum()
}

// 循环参加名单
function startNum() {
	num = Math.floor(Math.random() * pcount);
	nametxt.css('background-image','url('+xinm[num]+')');
	//console.log("wrong"+xinm[num]);
	phonetxt.html(phone[num]);
	t = setTimeout(startNum, 0);
}

// 停止跳动
function stop() {
	pcount = xinm.length-1;
	clearInterval(t);
	t = 0;
}

// 打印中奖人

function zd() {
	if (trigger) {

		trigger = false;
		var i = 0;

		if ( pcount >= Lotterynumber) {
			stopTime = window.setInterval(function () {
				if (runing) {
					runing = false;
					$('#btntxt').removeClass('start').addClass('stop');
					startNum();
				} else {
					runing = true;
					$('#btntxt').removeClass('stop').addClass('start');
					stop();

					i++;
					Lotterynumber--;

					$('#start').text('自动抽取中('+ Lotterynumber+')');

					if ( i == 1 ) {
						console.log("抽奖结束");
						window.clearInterval(stopTime);
						//console.log("click number:"+click1);
				    			}
						$('#start').text("开始");
						if (click1 == 16) {
							$('#start').text("抽奖结束");}
						Lotterynumber = 1;
						trigger = true;
					
                    
					// if ( Lotterynumber == inUser) {
					// 	// 指定中奖人
					// 	nametxt.css('background-image','url(img/7.jpg)');
					// 	phonetxt.html('指定中奖人');
					// 	$('.luck-user-list').prepend("<li><div class='portrait' style='background-image:url(img/7.jpg)'></div><div class='luckuserName'>指定中奖人</div></li>");
					// 	$('.modality-list ul').append("<li><div class='luck-img' style='background-image:url(img/7.jpg)'></div><p>指定中奖人</p></li>");
					// 	inUser = 9999;
					// }else{
						//打印中奖者名单
						$('.luck-user-list').prepend("<li><div class='portrait' style='background-image:url("+xinm[num]+")'></div><div class='luckuserName'>"+phone[num]+"</div></li>");
						//$('.modality-list ul').append("<li><div class='luck-img' style='background-image:url("+xinm[num]+")'></div><p>"+phone[num]+"</p></li>");
						

                      //adding by lyt

						if (click1 >0  && click1 <= fifthPrize) //
						{ 
						var lis = $(".n5");
                          //  console.log(lis);
					//	console.log(lis);
					//   $(lis[click1]).append("<div class='luck-my' style ='background-image:url("+giftimg[0]+")'></div>");
					//	var ll = $(lis[click1]).children();
					//	console.log("aaaaa"+ll);
					$($(lis[click1-1]).children().get(0)).text(phone[num]);
					$($(lis[click1-1]).children().get(1)).addClass("luck-my");
					$($(lis[click1-1]).children().get(1)).css({"background-image":"url("+giftimg[0]+")"});
				
						};
					    if (click1 >fifthPrize && click1 <= fifthPrize + forthPrize)
						{ var lis = $(".n4");
						
					//	$(lis[click1-fifthPrize-1]).html(phone[num]);
					$($(lis[click1-fifthPrize-1]).children().get(0)).text(phone[num]);

					$($(lis[click1-fifthPrize-1]).children().get(1)).addClass("luck-my");
					$($(lis[click1-fifthPrize-1]).children().get(1)).css({"background-image":"url("+giftimg[click1-fifthPrize]+")"});	
	               	    };
         
						if(click1 >fifthPrize+forthPrize && click1 <=fifthPrize + forthPrize + thirdPrize)
						{var lis = $(".n3");
						 var a = click1-fifthPrize-forthPrize-1;
						// console.log(a);
					//	$(lis[a]).html(phone[num])};
										//	$(lis[click1-fifthPrize-1]).html(phone[num]);
										$($(lis[click1-fifthPrize-forthPrize-1]).children().get(0)).text(phone[num]);
										$($(lis[click1-fifthPrize-forthPrize-1]).children().get(1)).addClass("luck-my");
										$($(lis[click1-fifthPrize-forthPrize-1]).children().get(1)).css({"background-image":"url("+giftimg[click1-fifthPrize]+")"});	}
						
						if(click1>fifthPrize+forthPrize+thirdPrize && click1<=fifthPrize+forthPrize+thirdPrize+secondPrize)
						{var lis = $(".n2");
					//	$(lis[click1-fifthPrize-forthPrize-thirdPrize-1]).html(phone[num])};
								//	$(lis[click1-fifthPrize-1]).html(phone[num]);
								$($(lis[click1-fifthPrize-forthPrize-thirdPrize-1]).children().get(0)).text(phone[num]);
								$($(lis[click1-fifthPrize-forthPrize-thirdPrize-1]).children().get(1)).addClass("luck-my");
								$($(lis[click1-fifthPrize-forthPrize-thirdPrize-1]).children().get(1)).css({"background-image":"url("+giftimg[click1-fifthPrize]+")"});
					}	
						if(click1>fifthPrize+forthPrize+thirdPrize+secondPrize && click1<=fifthPrize+forthPrize+thirdPrize+secondPrize+firstPrize)
						{var lis = $(".n1");
					//	$(lis[click1-fifthPrize-forthPrize-thirdPrize-secondPrize-1]).html(phone[num])};
								//	$(lis[click1-fifthPrize-1]).html(phone[num]);
								$($(lis[click1-fifthPrize-forthPrize-thirdPrize-secondPrize-1]).children().get(0)).text(phone[num]);
								$($(lis[click1-fifthPrize-forthPrize-thirdPrize-secondPrize-1]).children().get(1)).addClass("luck-my");
								$($(lis[click1-fifthPrize-forthPrize-thirdPrize-secondPrize-1]).children().get(1)).css({"background-image":"url("+giftimg[click1-fifthPrize]+")"});}

						if(click1>fifthPrize+forthPrize+thirdPrize+secondPrize+firstPrize && click1<=fifthPrize+forthPrize+thirdPrize+secondPrize+firstPrize+zeroPrize)
						{var lis = $(".n0");
					//	$(lis[click1-fifthPrize-forthPrize-thirdPrize-secondPrize-firstPrize-1]).html(phone[num])};

												//	$(lis[click1-fifthPrize-1]).html(phone[num]);
												$($(lis[click1-fifthPrize-forthPrize-thirdPrize-secondPrize-firstPrize-1]).children().get(0)).text(phone[num]);
																	
$($(lis[click1-fifthPrize-forthPrize-thirdPrize-secondPrize-firstPrize-1]).children().get(1)).addClass("luck-my");						
												$($(lis[click1-fifthPrize-forthPrize-thirdPrize-secondPrize-firstPrize-1]).children().get(1)).css({"background-image":"url("+giftimg[click1-fifthPrize]+")"});	}		//adding by lyt,用于本地保存数据，以防意外操作
						
					//	result.click=click1;
					//	result.name=phone[num];
						
					//	console.log("result"+result.name);
					result = result +"第"+click1+":"+phone[num]+" /";
					console.log("the result is :"+ result);
                    if (window.localStorage && click1 >15)
                             { 
                    
		 //  local.setItem(date1+click1,JSON.stringify(result));	  
		   local.setItem(date1,result);	 
                              }
                      
							  switch(click1){
								case 5:
									//nametxt.css('background-image','url('+cj+')');
									nametxt.css('background-image','url('+xinm[num]+')');
									phonetxt.html(phone[num]);
									prizenametxt.css('background-image','url('+giftimg[1]+')');
									prizephototxt.html(giftname[1]);
									break;
								case 6:
									//nametxt.css('background-image','url('+cj+')');
									nametxt.css('background-image','url('+xinm[num]+')');
									phonetxt.html(phone[num]);
									prizenametxt.css('background-image','url('+giftimg[2]+')');
									prizephototxt.html(giftname[2]);
									break;
								case 7:
									//nametxt.css('background-image','url('+cj+')');
									nametxt.css('background-image','url('+xinm[num]+')');
							phonetxt.html(phone[num]);
									prizenametxt.css('background-image','url('+giftimg[3]+')');
									prizephototxt.html(giftname[3]);	
									break;
								case 8:
									//nametxt.css('background-image','url('+cj+')');
									nametxt.css('background-image','url('+xinm[num]+')');
									phonetxt.html("三等奖");
									prizenametxt.css('background-image','url('+giftimg[4]+')');
									prizephototxt.html(giftname[4]);
									break;
								case 9:
									//nametxt.css('background-image','url('+cj+')');
									nametxt.css('background-image','url('+xinm[num]+')');
									phonetxt.html(phone[num]);
									prizenametxt.css('background-image','url('+giftimg[5]+')');
									prizephototxt.html(giftname[5]);
									break;
								case 10:
									//nametxt.css('background-image','url('+cj+')');
									nametxt.css('background-image','url('+xinm[num]+')');
									phonetxt.html(phone[num]);
									
												prizenametxt.css('background-image','url('+giftimg[6]+')');
												prizephototxt.html(giftname[6]);
												break;
								case 11:
									//nametxt.css('background-image','url('+cj+')');
									nametxt.css('background-image','url('+xinm[num]+')');
									phonetxt.html(phone[num]);
									
												prizenametxt.css('background-image','url('+giftimg[7]+')');
												prizephototxt.html(giftname[7]);
												break;
								case 12:
									//nametxt.css('background-image','url('+cj+')');
									nametxt.css('background-image','url('+xinm[num]+')');
									phonetxt.html(phone[num]);
									
												prizenametxt.css('background-image','url('+giftimg[8]+')');
												prizephototxt.html(giftname[8]);
												break;
								case 13:
									//nametxt.css('background-image','url('+cj+')');
									nametxt.css('background-image','url('+xinm[num]+')');
									phonetxt.html(phone[num]);
									
												prizenametxt.css('background-image','url('+giftimg[9]+')');
												prizephototxt.html(giftname[9]);
												break;
								case 14:
									//nametxt.css('background-image','url('+cj+')');
									nametxt.css('background-image','url('+xinm[num]+')');
									phonetxt.html(phone[num]);
									
												prizenametxt.css('background-image','url('+giftimg[10]+')');
												prizephototxt.html(giftname[10]);
												break;
								case 15:
									//nametxt.css('background-image','url('+cj+')');
									nametxt.css('background-image','url('+xinm[num]+')');
									phonetxt.html(phone[num]);
									
												prizenametxt.css('background-image','url('+giftimg[11]+')');
												prizephototxt.html(giftname[11]);
												break;
														}
						//将已中奖者从数组中"删除",防止二次中奖
						xinm.splice($.inArray(xinm[num], xinm), 1);
						phone.splice($.inArray(phone[num], phone), 1);
                     
						if (click1 >= 12) {
							var n1 = $.inArray("赵正荣", phone);
							if (n1 > 0){
								xinm.splice(n1,1); phone.splice(n1,1);
						
								pcount=pcount-1;
								  }
							var n2 = $.inArray("汪仕敏", phone);
                            if (n2 > 0){
								xinm.splice(n2,1); phone.splice(n2,1);
							
								pcount=pcount-1;
							      }
							var n3 = $.inArray("江霞", phone);
							if (n3 > 0){
								xinm.splice(n3,1); phone.splice(n3,1);
							
								pcount=pcount-1;
									}
				      //     console.log("num:"+n1+":"+n2+":"+n3);
				   	//	console.log("sucess deleted,the rest is :" + xinm);
						};
      
				    
																																																						     
				}
			},1000);
		};
	}
}

