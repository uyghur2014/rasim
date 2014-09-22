// tormahiri 2014  6-8 kuni
// full right for tormahiri
function takxur()
{


  if("webkitFilter" in document.body.style){

    return true;
  }else{

    alert("bu hil ehtidar siznig torkuguqigiz da yokkan");
    setTimeout(function(){window.close()},2000)
  }
}
takxur();


	window.onload = function() {
    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('korsat');

    fileInput.addEventListener('change', function(e) {
     var file = fileInput.files[0];
var imageType = /image.*/;

if (file.type.match(imageType)) {
  var reader = new FileReader();

  reader.onload = function(e) {
    fileDisplayArea.innerHTML = "";

    var img = new Image();

    img.src = reader.result;

    fileDisplayArea.appendChild(img);
  }

  reader.readAsDataURL(file); 
} else {
  fileDisplayArea.innerHTML = "بۇ خىل ھۆججەتنى قوللىمايدۇ";
}
    });
}
  function tormahiri_filter(s,d){


    query=document.querySelector(s);
    query.style.webkitFilter=d;
  }
