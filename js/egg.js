// JavaScript Document

function xieyi()
{
	var msg = "根本没有什么协议OK吗"
	if (confirm(msg)==true){
		return alert("要交代的几个事情：\n1．这个网站里所有链接都是有效的\n2．目录并未收录全部Disney游戏\n3．除图片、字体外其余文件均为本人版权所有\n4．千万别做程序猿（易脱发猝死\n5．别的我辶");
	} else {
			return alert("わい爱你呦！o(*^＠^*)o");
		}
}

function sousuo()
{
	alert("我很懒，不想搜。")
}

function more ()
{
	document.getElementById("nickname").style.display="block";
	document.getElementById("sex").style.display="block";
	document.getElementById("age").style.display="block";
	document.getElementById("loc").style.display="block";
	document.getElementById("crt").style.display="block";
	// document.getElementById("fujia").innerHTML = "附加选项 -";
}

function pass()
{
	var pw,pw2
	pw = document.getElementById("password").value
	pw2 = document.getElementById("password2").value
	if (pw != pw2)
		{ document.getElementById("pwwrong").style.display="block";
		  document.getElementById("password2").style.borderColor="Red";
		  document.getElementById("submit").disabled=true;
		} else {
			document.getElementById("pwwrong").style.display="none";
		  	document.getElementById("password2").style.borderColor="#222";
			document.getElementById("submit").disabled=false;
		 }
}