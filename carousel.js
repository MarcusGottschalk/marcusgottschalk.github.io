function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$(document).ready(function () {
  console.log('ready');
  var photos = [
    {
      "url": "./images/carousel/SwrhpGQ9Dz.jpg",
      "boxes": [
        {
          "label": "室内/スーパー",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "ビクトリアビター",
          "left": "70",
          "top": "75",
          "width": "7",
          "height": "7"
        },
        {
          "label": "ビクトリアビター",
          "left": "30",
          "top": "28",
          "width": "9",
          "height": "9"
        },
        {
          "label": "ビクトリアビター",
          "left": "80",
          "top": "61",
          "width": "12",
          "height": "12"
        },
        {
          "label": "ビクトリアビター",
          "left": "42",
          "top": "72",
          "width": "22",
          "height": "22"
        },
        {
          "label": "20代男性",
          "left": "12",
          "top": "12",
          "width": "9",
          "height": "9"
        },
        {
          "label": "30代男性",
          "left": "46",
          "top": "16",
          "width": "4",
          "height": "4"
        },
        {
          "label": "30代男性",
          "left": "56",
          "top": "15",
          "width": "4",
          "height": "4"
        },
        {
          "label": "20代男性",
          "left": "65",
          "top": "16",
          "width": "4",
          "height": "4"
        }
      ]
    },
    {
      "url": "./images/carousel/IakUg.jpg",
      "boxes": [
        {
          "label": "室内/バー",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "ステラ・アルトワ",
          "left": "16",
          "top": "39",
          "width": "16",
          "height": "16"
        },
        {
          "label": "ステラ・アルトワ",
          "left": "67",
          "top": "22",
          "width": "18",
          "height": "18"
        }
      ]
    },
    {
      "url": "./images/carousel/NTIGd_QUd0.jpg",
      "boxes": [
        {
          "label": "室内/ゲームルーム",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "タイガービール",
          "left": "4",
          "top": "34",
          "width": "31",
          "height": "31"
        },
        {
          "label": "20代男性",
          "left": "45",
          "top": "31",
          "width": "10",
          "height": "10"
        }
      ]
    },
    {
      "url": "./images/carousel/N05ar_nil8.jpg",
      "boxes": [
        {
          "label": "屋外/噴水池",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "シンハービール",
          "left": "73",
          "top": "65",
          "width": "15",
          "height": "15"
        }
      ]
    },
    {
      "url": "./images/carousel/TOTepPj3vR.jpg",
      "boxes": [
        {
          "label": "屋外/陸上競技場",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "シンハービール",
          "left": "88",
          "top": "90",
          "width": "6",
          "height": "6"
        }
      ]
    },
    {
      "url": "./images/carousel/a0fNQtRr83.jpg",
      "boxes": [
        {
          "label": "室内/レストラン",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "タイガービール",
          "left": "74",
          "top": "7",
          "width": "16",
          "height": "16"
        }
      ]
    },
    {
      "url": "./images/carousel/ZbihoUo_ru.jpg",
      "boxes": [
        {
          "label": "屋外/空港滑走路",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "タイガービール",
          "left": "25",
          "top": "60",
          "width": "15",
          "height": "15"
        }
      ]
    },
    {
      "url": "./images/carousel/cP9mbSB0GG.jpg",
      "boxes": [
        {
          "label": "室内/シャワールーム",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "ステラ・アルトワ",
          "left": "54",
          "top": "72",
          "width": "7",
          "height": "7"
        }
      ]
    },
    {
      "url": "./images/carousel/en4eW.jpg",
      "boxes": [
        {
          "label": "屋外/遊園地",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "シンハービール",
          "left": "41",
          "top": "27",
          "width": "26",
          "height": "26"
        }
      ]
    },
    {
      "url": "./images/carousel/tysL_mLtOS.jpg",
      "boxes": [
        {
          "label": "屋外/陸上競技場",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "ステラ・アルトワ",
          "left": "19",
          "top": "84",
          "width": "18",
          "height": "18"
        }
      ]
    },
    {
      "url": "./images/carousel/fOJNLUow8y.jpg",
      "boxes": [
        {
          "label": "屋外/サッカー場",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "ステラ・アルトワ",
          "left": "21",
          "top": "21",
          "width": "19",
          "height": "19"
        }
      ]
    },


    {
      "url": "./images/carousel/12816768_1707511039492835_719355671_n.jpg",
      "boxes": [
        {
          "label": "屋外/サッカー場",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "ナイキ",
          "left": "38",
          "top": "54",
          "width": "7",
          "height": "7"
        },
        {
          "label": "30代男性",
          "left": "44",
          "top": "34",
          "width": "10",
          "height": "10"
        }
      ]
    },

    {
      "url": "./images/carousel/12783381_197874737246753_1276235519_n.jpg",
      "boxes": [
        {
          "label": "屋外/サッカー場",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "30代男性",
          "left": "30",
          "top": "12",
          "width": "10",
          "height": "10"
        },
        {
          "label": "30代男性",
          "left": "87",
          "top": "13",
          "width": "10",
          "height": "10"
        }
      ]
    },

    {
      "url": "./images/carousel/12357438_908822465868563_1838295207_n.jpg",
      "boxes": [
        {
          "label": "室内/シャワールーム",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "ドリトス",
          "left": "33",
          "top": "51",
          "width": "22",
          "height": "22"
        }
      ]
    },

    {
      "url": "./images/carousel/12783932_915331211917322_142367259_n.jpg",
      "boxes": [
        {
          "label": "室内",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "カップヌードル",
          "left": "32",
          "top": "62",
          "width": "31",
          "height": "31"
        },
        {
          "label": "20代女性",
          "left": "21",
          "top": "17",
          "width": "10",
          "height": "10"
        },
        {
          "label": "20代女性",
          "left": "70",
          "top": "17",
          "width": "10",
          "height": "10"
        }
      ]
    },

    {
      "url": "./images/carousel/12446092_1689564571291095_54046682_n.jpg",
      "boxes": [
        {
          "label": "室内/幼稚園",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "カップヌードル",
          "left": "31",
          "top": "68",
          "width": "31",
          "height": "31"
        },
        {
          "label": "10代男性",
          "left": "25",
          "top": "10",
          "width": "41",
          "height": "41"
        }
      ]
    },


    {
      "url": "./images/carousel/12328488_1556178571359874_848282509_n.jpg",
      "boxes": [
        {
          "label": "室内/住宅",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "カップヌードル",
          "left": "67",
          "top": "36",
          "width": "28",
          "height": "28"
        }
      ]
    },

    {
      "url": "./images/carousel/12677477_592270774261348_253785263_n.jpg",
      "boxes": [
        {
          "label": "室内",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "カップヌードル",
          "left": "56",
          "top": "37",
          "width": "34",
          "height": "34"
        },
        {
          "label": "10代男性",
          "left": "13",
          "top": "33",
          "width": "13",
          "height": "13"
        }
      ]
    },


    {
      "url": "./images/carousel/12725198_1577317869258097_1322746234_n.jpg",
      "boxes": [
        {
          "label": "室内",
          "left": "0",
          "top": "0",
          "width": "100",
          "height": "100"
        },
        {
          "label": "キリンビール",
          "left": "72",
          "top": "39",
          "width": "16",
          "height": "16"
        },
        {
          "label": "20代男性",
          "left": "56",
          "top": "11",
          "width": "34",
          "height": "34"
        },
        {
          "label": "20代女性",
          "left": "5",
          "top": "28",
          "width": "36",
          "height": "36"
        }
      ]
    }
    
  ];
  
  photos = shuffle(photos);
  photos = photos.slice(0, 5);
  photos.forEach(function (photo) {
    var pElem = $('<div/>', {
      class: 'carousel-slide'
    });
    var elem = $('<div/>', {
      class: 'slide-content'
    });
    photo.boxes.forEach(function (box) {
      box.top = Number(box.top);
      box.left = Number(box.left);
      box.width = Number(box.width);
      box.height = Number(box.height);

      var frame = $('<div/>', {
        class: 'bounding-box',
      }).css({
        top: box.top + '%',
        left: box.left + '%',
        width: box.width + '%',
        height: box.height + '%'
      });

      var labelPos = {};
      if (box.top === 0 && box.left === 0) {
        labelPos = {
          top: '1%',
          left: '1%'
        };
      } else {
        if (box.top <= 50) 
          labelPos['top'] = box.top + box.height + 1 + '%';
        if (box.top > 50)
          labelPos['bottom'] = 100 - (box.top) + 1 + '%';
        if (box.left > 50)
          labelPos['right'] = 100 - (box.left + box.width) + '%';
        if (box.left <= 50)
          labelPos['left'] = box.left + '%';
      }
      var label = $('<div/>', {
        class: 'label'
      }).css(labelPos).text(box.label);

      elem.append(frame);
      elem.append(label);
    });

    var img = $('<img/>', {
      src: photo.url
    });

    elem.append(img);
    pElem.append(elem);
    $('.slides').append(pElem);
  });

  $('.slides').slick({
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '30px'
        }
      }
    ]
  });
  // $.ajax({
  //   url: 'carousel.json',
  //   type: 'get',
  //   dataType: 'json'
  // })
  //   .done(function (photos) {
  //   });
});