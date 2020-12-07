/**袁术讨伐战*/

script.stage06 = {
	candidateChara:[
		"caocao",
		"sunce",
		"lvbu",
		"liubei"
	],
	country:{
		our:"other",
		enemy:"other"
	},
	stagePrototype:{
		money:900,
		life:20
	},
	map:{
		imageMap:[
			[55,55,55,55,55,55,55,55,55,55,55,55,20,55,55],
			[55,73,73,73,73,73,73,73,73,73,55,75,74,73,55],
			[55,73,75,75,75,75,75,55,55,55,55,75,74,73,55],
			[55,73,75,75,75,75,75,55,75,74,74,74,74,73,55],
			[55,73,75,75,75,75,74,21,74,74,75,75,75,73,55],
			[55,73,75,75,75,75,74,55,75,75,75,75,75,73,55],
			[55,73,75,75,75,55,20,55,55,55,75,75,75,73,55],
			[55,73,55,55,55,55,64,65,66,55,75,75,75,73,55],
			[55,55,55,75,75,55,67,68,69,55,55,55,55,73,55],
			[55,73,75,75,75,55,55,55,55,20,75,75,55,73,55],
			[55,73,75,75,75,75,75,55,75,74,75,75,55,73,55],
			[55,73,75,75,75,74,74,21,74,74,75,75,55,55,55],
			[55,74,74,74,74,74,75,55,55,55,55,75,75,73,55],
			[55,74,75,75,75,75,75,73,73,73,55,73,73,73,55],
			[55,20,55,55,55,55,55,55,55,55,55,55,55,55,55]
		],
		dataMap:[
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
			[1,1,0,0,0,0,0,1,1,1,1,0,1,1,1],
			[1,1,0,0,0,0,0,1,0,1,1,1,1,1,1],
			[1,1,0,0,0,0,1,1,1,1,0,0,0,1,1],
			[1,1,0,0,0,0,1,1,0,0,0,0,0,1,1],
			[1,1,0,0,0,1,1,1,1,1,0,0,0,1,1],
			[1,1,1,1,1,1,1,1,1,1,0,0,0,1,1],
			[1,1,1,0,0,1,1,1,1,1,1,1,1,1,1],
			[1,1,0,0,0,1,1,1,1,1,0,0,1,1,1],
			[1,1,0,0,0,0,0,1,0,1,0,0,1,1,1],
			[1,1,0,0,0,1,1,1,1,1,0,0,1,1,1],
			[1,1,1,1,1,1,0,1,1,1,1,0,0,1,1],
			[1,1,0,0,0,0,0,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		]
	},
	route0:{
		startLoaction:{
			x:1,
			y:15
		},
		route:[
			{x: 1, y: 12}, {x: 5, y: 12}, {x: 5, y: 11}, {x: 9, y: 11}, {x: 9, y: 9}
		]
	},
	route1:{
		startLoaction:{
			x:12,
			y:-1
		},
		route:[
			{x: 12, y: 3}, {x: 9, y: 3}, {x: 9, y: 4}, {x: 6, y: 4}, {x: 6, y: 6}
		]
	},
	enemyList:{
		wave1:[
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1}
		],
		wave2:[
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1}
		],
		wave3:[
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongnushou",route:1},
			{name:"gongnushou",route:1},
			{name:"gongnushou",route:1},
			{name:"gongnushou",route:1},
			{name:"gongnushou",route:1}
		],
		wave4:[
			{name:"gongnushou",route:1},
			{name:"gongnushou",route:1},
			{name:"gongnushou",route:1},
			{name:"gongnushou",route:1},
			{name:"gongnushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1}
		],
		wave5:[
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1}
		],
		wave6:[
			{name:"hanjin",route:1},
			{name:"yangfeng",route:1},
			{name:"qingqibing",route:1},
			{name:"qingqibing",route:1},
			{name:"qingqibing",route:1},
			{name:"qingqibing",route:1},
			{name:"qingqibing",route:1},
			{name:"qingqibing",route:1},
			{name:"qingqibing",route:1},
			{name:"qingqibing",route:1}
		],
		wave7:[
			{name:"qingqibing",route:0},
			{name:"qingqibing",route:0},
			{name:"qingqibing",route:0},
			{name:"qingqibing",route:0},
			{name:"qingqibing",route:0},
			{name:"gongjianbing",route:0},
			{name:"gongjianbing",route:0},
			{name:"gongjianbing",route:0},
			{name:"gongjianbing",route:0},
			{name:"gongjianbing",route:0}
		],
		wave8:[
			{name:"qiangqibing",route:0},
			{name:"qiangqibing",route:0},
			{name:"qiangqibing",route:0},
			{name:"qiangqibing",route:0},
			{name:"qiangqibing",route:0},
			{name:"qiangqibing",route:0},
			{name:"qiangqibing",route:0},
			{name:"qiangqibing",route:0},
			{name:"qiangqibing",route:0},
			{name:"qiangqibing",route:0}
		],
		wave9:[
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"paonushou",route:1},
			{name:"qiangqibing",route:0},
			{name:"qiangqibing",route:0},
			{name:"qiangqibing",route:0},
			{name:"qiangqibing",route:0},
			{name:"qiangqibing",route:0}
		],
		wave10:[
			{name:"qiaomao",route:1},
			{name:"leibo",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1},
			{name:"gongjianbing",route:1}
		],
		wave11:[
			{name:"shubing",route:0},
			{name:"shubing",route:0},
			{name:"shubing",route:0},
			{name:"shubing",route:0},
			{name:"shubing",route:0},
			{name:"shubing",route:1},
			{name:"shubing",route:1},
			{name:"shubing",route:1},
			{name:"shubing",route:1},
			{name:"shubing",route:1}
		],
		wave12:[
			{name:"huweibing",route:1},
			{name:"huweibing",route:1},
			{name:"huweibing",route:1},
			{name:"huweibing",route:1},
			{name:"huweibing",route:1},
			{name:"daoren",route:1},
			{name:"daoren",route:1},
			{name:"daoren",route:1},
			{name:"daoren",route:1},
			{name:"daoren",route:1}
		],
		wave13:[
			{name:"huweibing",route:0},
			{name:"huweibing",route:0},
			{name:"huweibing",route:0},
			{name:"huweibing",route:0},
			{name:"huweibing",route:0},
			{name:"daoren",route:0},
			{name:"daoren",route:0},
			{name:"daoren",route:0},
			{name:"daoren",route:0},
			{name:"daoren",route:0}
		],
		wave14:[
			{name:"chenlan",route:1},
			{name:"zhangxun",route:1},
			{name:"fashi",route:1},
			{name:"fashi",route:1},
			{name:"fashi",route:1},
			{name:"fashi",route:1},
			{name:"fashi",route:1},
			{name:"fashi",route:1},
			{name:"fashi",route:1},
			{name:"fashi",route:1}
		],
		wave15:[
			{name:"fashi",route:0},
			{name:"fashi",route:0},
			{name:"fashi",route:0},
			{name:"fashi",route:0},
			{name:"fashi",route:0},
			{name:"yangdajiang",route:0},
			{name:"huweibing",route:1},
			{name:"huweibing",route:1},
			{name:"huweibing",route:1},
			{name:"huweibing",route:1},
			{name:"huweibing",route:1},
			{name:"yuanshu",route:1}
		]
	}
}