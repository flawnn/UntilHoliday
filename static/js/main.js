var time = moment(unix);
time.subtract(3, 'days');

var egg = new Egg();
egg.addCode("up,up,down,down,left,right", function() {
    dank();
}).listen();


$('#clock').countdown(time.toDate(), function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span id="biggie" >%w</span>  weeks  '
      + '<span id="biggie">%d</span>  days  '
      + '<span id="biggie">%H</span>  hour  '
      + '<span id="biggie">%M</span>  min  '
      + '<span id="biggie">%S</span>  sec'));
  });


var _0x5299=['cmVuZGVy','aW5uZXJXaWR0aA==','Y2lyY2xl','bGluZQ==','dGltZXJjYW52YXM=','Li4vaW1nL2xlZXQucG5n','c3Zn','c3F1YXJl','aW5uZXJIZWlnaHQ=','Li4vaW1nL3dvb3QucG5n'];(function(_0x209136,_0x529978){var _0x146938=function(_0x14b75a){while(--_0x14b75a){_0x209136['push'](_0x209136['shift']());}};_0x146938(++_0x529978);}(_0x5299,0xec));var _0x1469=function(_0x209136,_0x529978){_0x209136=_0x209136-0x0;var _0x146938=_0x5299[_0x209136];if(_0x1469['JPTiVJ']===undefined){(function(){var _0x2b32d4=function(){var _0x2dde95;try{_0x2dde95=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x520b49){_0x2dde95=window;}return _0x2dde95;};var _0x3bea1a=_0x2b32d4();var _0xe7ffc1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3bea1a['atob']||(_0x3bea1a['atob']=function(_0x204302){var _0x42245c=String(_0x204302)['replace'](/=+$/,'');var _0x337310='';for(var _0x2a7bdb=0x0,_0xe80a1a,_0x3d72ae,_0xd311cb=0x0;_0x3d72ae=_0x42245c['charAt'](_0xd311cb++);~_0x3d72ae&&(_0xe80a1a=_0x2a7bdb%0x4?_0xe80a1a*0x40+_0x3d72ae:_0x3d72ae,_0x2a7bdb++%0x4)?_0x337310+=String['fromCharCode'](0xff&_0xe80a1a>>(-0x2*_0x2a7bdb&0x6)):0x0){_0x3d72ae=_0xe7ffc1['indexOf'](_0x3d72ae);}return _0x337310;});}());_0x1469['ojmsEr']=function(_0x45509c){var _0xb2d4b=atob(_0x45509c);var _0x417679=[];for(var _0x2f825e=0x0,_0x19ed95=_0xb2d4b['length'];_0x2f825e<_0x19ed95;_0x2f825e++){_0x417679+='%'+('00'+_0xb2d4b['charCodeAt'](_0x2f825e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x417679);};_0x1469['NoYlCG']={};_0x1469['JPTiVJ']=!![];}var _0x14b75a=_0x1469['NoYlCG'][_0x209136];if(_0x14b75a===undefined){_0x146938=_0x1469['ojmsEr'](_0x146938);_0x1469['NoYlCG'][_0x209136]=_0x146938;}else{_0x146938=_0x14b75a;}return _0x146938;};var confettiSettings={'target':_0x1469('0x8'),'width':window[_0x1469('0x5')],'height':window[_0x1469('0x2')],'props':[_0x1469('0x6'),_0x1469('0x1'),'triangle',_0x1469('0x7'),{'type':_0x1469('0x0'),'src':_0x1469('0x9'),'size':0x32},{'type':_0x1469('0x0'),'src':_0x1469('0x3'),'size':0x32}]};function dank(){var _0xd311cb=new ConfettiGenerator(confettiSettings);_0xd311cb[_0x1469('0x4')]();}