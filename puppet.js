const puppeteer = require("puppeteer");
var looksSame = require('looks-same');
var i=0;
var pageArray=["",
];

(async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for(i=0;i<pageArray.length;i++)
	{
	console.log(pageArray[i]);
	await page.goto(pageArray[i]);
  	page.setViewport({width:1920,height:4000,});
   	await page.screenshot({path: 'old/'+i+'.png'});
	}

     await browser.close();
	})();
for(i=0;i<pageArray.length;i++)
// {
// 	looksSame.createDiff({
// 		reference: 'old/'+i+'.png',
// 		current: 'new/'+i+'.png',
// 		diff: 'diff/'+i+'.png',
// 		highlightColor: '#ff00ff', //color to highlight the differences
// 		strict: false,//strict comparsion
// 		tolerance: 2.5
// 	}, function(error) {
// 	});
// }
