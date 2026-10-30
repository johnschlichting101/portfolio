/* Shared behavior for every page: image lightbox */
(function(){
  var lb=document.getElementById('lb'); if(!lb) return;
  var lbImg=document.getElementById('lb-img'), lbCap=document.getElementById('lb-cap');
  document.querySelectorAll('img[data-zoom]').forEach(function(img){
    img.tabIndex=0;
    function open(){lbImg.src=img.currentSrc||img.src;lbImg.alt=img.alt;lbCap.textContent=img.alt;if(lb.showModal)lb.showModal();}
    img.addEventListener('click',open);
    img.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
  });
  document.getElementById('lb-close').addEventListener('click',function(){lb.close()});
  lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});
})();
