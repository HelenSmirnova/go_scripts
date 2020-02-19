function initjQuery(callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function () {
            callback();
        };
    }
    script.src = '//code.jquery.com/jquery-3.3.1.min.js';
    document.getElementsByTagName("head")[0].appendChild(script);
}

function readyjQueryinit() {
	
$outhtml  = '<div class="ab_show_fares_btn">Показать тарифы'
	$outhtml  += '<svg class="show_fares_arrow" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0L3.70688 0.793125L6.84562 3.9375H0V5.0625H6.84562L3.70688 8.20687L4.5 9L9 4.5L4.5 0Z" fill="white"/></svg>'
	$outhtml  += '</div>'

	$outhtmlselect  = '<div class="ab_select_btn">Выбрать'
	$outhtmlselect  += '</div>'
	setInterval(function(){
		$( ".class-container .class__item" ).each(function(  ) {
			if ($(this).find('.ab_show_fares_btn').length< 1) {
				    $(this).append($outhtml);
			}
		})
		if (window.matchMedia('(max-width: 1279px)').matches) {
			$( ".flights-fares[_ngcontent-c16] .fare-family__item[_ngcontent-c16] .price-container[_ngcontent-c16] .item__price[_ngcontent-c16]" ).each(function(  ) {
				if ($(this).find('.ab_select_btn').length< 1) {
					    $(this).append($outhtmlselect);
				}
				else {

				}
			})
		}
		else{
		}
	}, 100);	
	
	
//     setInterval(function(){
// 		$(".way-oneway").click();
// 	}, 3000);
    }

if (!window.jQuery) {
    initjQuery(function () {
        readyjQueryinit();
    });
} else {
    readyjQueryinit();
}













