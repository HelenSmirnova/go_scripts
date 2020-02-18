// function initjQuery(callback) {
// 	var script = document.createElement( "script" )
// 	script.type = "text/javascript";
// 	if(script.readyState) {
// 	script.onreadystatechange = function() {
// 		if ( script.readyState === "loaded" || script.readyState === "complete" ) {
// 			script.onreadystatechange = null;
// 			callback();
// 		}
// 	};
//   } else {
// 	script.onload = function() {
// 		callback();
// 	};
//   }
//   script.src = '//code.jquery.com/jquery-3.3.1.min.js';
//   document.getElementsByTagName( "head" )[0].appendChild( script );
// }
// if (!window.jQuery) {
// 	initjQuery(function() {
// 		readyjQueryinit();
// 	});
// }else{
// 	readyjQueryinit();
// }



function doo(){	
  var modifyBtn = document.getElementsByClassName('modify-search')[0];
  modifyBtn.click();
  var modalBg = document.getElementsByClassName('cdk-overlay-backdrop mat-dialog-backdrop-light cdk-overlay-backdrop-showing')[0];
  modalBg.style.visibility = 'hidden';
}


