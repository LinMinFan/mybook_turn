$.get('https://soa.tainan.gov.tw/Api/Service/Get/0998fe9a-5ac7-4b44-bfa2-c40d8e31e174', function (res) {
  let data = res.data; //全部資料
  console.log(data);
  let counts = data.length; //總筆數
  let div = 4; //每頁筆數
  let pages = Math.ceil((counts) / div)
  $('#flipbook').append(`<div class="hard" id="start"></div>`)
  //console.log(pages);
  for (let i = 1; i <= pages; i++) {
    let start = Math.ceil((i - 1) * div); //起始值
    let end = ((start + div) <= counts) ? `${(start + div)}` : `${counts}`; //結束值
    $('#flipbook').append(`<div id="page${i}" data-page="${i}"><div id="p${i}" class="contentbox"><h5 class="boxtitle">page${i}</h5><div class="box${i}"></div>
    </div></div>`)
    //console.log(start);
    for (let j = start; j < (end); j++) {
      //console.log('j', j);
      $(`#page${i}`).find(`.box${i}`).append(
        `<div class="cardbox"><span class="cover" style="background-image:url(./img/bg${data[j]['Seq']}.png)"></span><div class="text"><div class="thd">${data[j]['區域']}</div><div class="tbd">${data[j]['名稱']}</div><div class="tft">${data[j]['周邊景點']}</div></div></div><div class="hidden">${data[j]['歷史']}</div>`
      );
    }
  }

  $('#flipbook').append(`<div class="hard" id="end"></div>`)

  $("#flipbook").turn({
    width: 1024, //翻頁檢視的寬度
    height: 680, //翻頁檢視的高度
    autoCenter: true // 預設false是否居中
  });

  $('#start').load("start.html");
  $('#end').load("end.html");
  
})


function home() {
  $('#flipbook').turn('previous');
  
  $("#flipbook").turn("page", 1);
  
}


function pre() {
  $('#flipbook').turn('previous');
  setTimeout(function () {
    $('#flipbook').turn('size', 1024, 680);
  }, 500)
}

function next() {
  $('#flipbook').turn('next');
  setTimeout(function () {
    $('#flipbook').turn('size', 1024, 680);
  }, 500)
}