//下一頁
$("#flipbook").turn("next")

//上一頁
$("#flipbook").turn("previous")

//縮放
$("#flipbook").turn("zoom",1) 

//當前頁面
$("#flipbook").turn("page")

$("#flipbook").turn({
    width: 1024, //翻頁檢視的寬度
    height: 680,//翻頁檢視的高度
    autoCenter: true // 預設false是否居中
  });