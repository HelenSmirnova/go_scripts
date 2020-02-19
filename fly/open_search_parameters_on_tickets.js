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
     $( document ).ready(function() {
        console.log( "document loaded" );
          $("div.modify-search").load(function () {
            $(".way-oneway").click();
        });
    });
 
//     setInterval(function () {
//         $("modify-search").load(function () {
//             $(".way-oneway").click();
//         });
//     }, 300);

}


if (!window.jQuery) {
    initjQuery(function () {
        readyjQueryinit();
    });
} else {
    readyjQueryinit();
}













