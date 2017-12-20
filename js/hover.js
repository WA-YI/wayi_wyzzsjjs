// JavaScript Document

var myLinks = document.getElementsByTagName('div');
for(var i = 0; i < myLinks.length; i++){
　　myLinks[i].addEventListener(’touchstart’, function(){this.className = "hover";}, false);
　　myLinks[i].addEventListener(’touchend’, function(){this.className = "";}, false);
}

//源码来自：http://www.qdfuns.com/notes/17610/1f8dd1bda8297020624639f6d6227ea3.html