var testData = {
	testCmps:[{
		id:'button',
		text: 'button',
		url: 'components/button.html'
	},{
		id:'switcher',
		text: 'switcher',
		url: 'components/switcher.html'
	},{
		id:'checkbox',
		text: 'checkbox',
		url: 'components/checkbox.html'
	},{
		id:'titlebar',
		text: 'titlebar',
		url: 'components/titlebar.html'
	},{
		id:'list',
		text: 'list & subtitle',
		url: 'components/list.html'
	},{
		id:'navlist',
		text: 'navlist',
		url: 'components/navlist.html'
	},{
		id:'cmp1',
		text: '折叠控件',
		url: 'components/collalist.html'
	},{
		id:'cmp2',
		text: '图片轮播控件',
		url: 'components/imgslider.html'
	},{
		id:'cmp3',
		text: 'actionsheet',
		url: 'components/actsheet.html'
	},{
		id:'cmp4',
		text: 'tap',
		url: 'components/tab.html'
	}],
	
	list:{
		list1:[{
			text: '动态绑定1',
			data: '22222'
		},{
			text: '动态绑定2',
			data:null
		},{
			text: '动态绑定3'
		},{
			text: '动态绑定4'
		}],
		list2:[{
			fee:'20元',
			date: '左侧内容',
			bigtext: '下午'
		},{
			fee:'25元',
			date: '左侧内容',
			bigtext: '下午'
		},{
			fee:'22元',
			date: '左侧内容',
			bigtext: '下午'
		},{
			fee:'21元',
			date: '左侧内容',
			bigtext: '下午'
		}]
	},
	
	navlist:{
		test1:[{
			text: '首页1',
			url: ''
		},{
			text: '首页2',
			url: ''
		},{
			text: '首页3',
			url: ''
		}],
		test2:[{
			firstName: '三',
			lastName: '李',
			src: 'http://www.baidu.com'
		},{
			firstName: '小东',
			lastName: '王',
			src: 'http://www.baidu.com'
		},{
			firstName: '相顾',
			lastName: '宇',
			src: 'http://www.baidu.com'
		}]
	},
	
	fpDescArr: [{
		id: 'desc1',
		text: '<p>1 、预约说明 <br>预约挂号是医院为不同就诊人群提供的一项便民措施，预约原则是"先预约，先确认"。 目前医院可预约的专家号或普通号，以服务电话查询或网站公示为准。</p><p>2、 实名制预约 <br>采用“实名制”，患者须提供真实姓名及身份证号、年龄、性别和手机号等信息。用户就诊当天取号时出示的身份证与健康卡信 息必须与预约时提供的一致，否则医院有权不予办理挂号业务。</p><p>3、 预约时段<br>您可以选择自已就诊的时段，提前15分钟到达医院确认身份。按时就诊时一般可以享有优先就诊的便利，具体规定由医院制定。</p><p>4、 预约挂号费用 <br>作为医院的一项便民措施，预约挂号暂时不收取预约费用，具体费用由医院自行制定。</p>'
	}],

	tab: {
		test1: [{
			text: 'bind测试',
			cldCtype: 'list',
			data: [{
				text: '普通内科二'
			}, {
				text: '普通外科二'
			}]
		}, {
			text: 'bind测试1',
			cldCtype: 'navlist',
			data: [{
				text: '普通内科sdfsdf',
				url: ''
			}, {
				text: '普通外科sdfsdf',
				url: ''
			}]
		}],
		test2: [{
			text: 'bind测试',
			cldCtype: 'navlist',
			data: [{
				text1: '普通内科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}]
		}, {
			text: 'bind测试1',
			cldCtype: 'navlist',
			data: [{
				text1: '普通内科',
				url: ''
			}, {
				text1: '普通外科',
				url: ''
			}]
		}],
		test3: [{
			text: '周一01',
			cldCtype: 'navlist',
			data: [{
				text1: '普通内科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}]
		}, {
			text: '周二02',
			cldCtype: 'navlist',
			data: [{
				text1: '普通内科',
				url: ''
			}, {
				text1: '普通外科',
				url: ''
			}]
		},{
			text: '周一01',
			cldCtype: 'navlist',
			data: [{
				text1: '普通内科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}]
		},{
			text: '周一01',
			cldCtype: 'navlist',
			data: [{
				text1: '普通内科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}]
		}, {
			text: '周二02',
			cldCtype: 'navlist',
			data: [{
				text1: '普通内科',
				url: ''
			}, {
				text1: '普通外科',
				url: ''
			}]
		},{
			text: '周一01',
			cldCtype: 'navlist',
			data: [{
				text1: '普通内科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}]
		}, {
			text: '周二02',
			cldCtype: 'navlist',
			data: [{
				text1: '普通内科',
				url: ''
			}, {
				text1: '普通外科',
				url: ''
			}]
		},{
			text: '周一01',
			cldCtype: 'navlist',
			data: [{
				text1: '普通内科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}, {
				text1: '普通外科sdfsdf',
				url: ''
			}]
		}]
	},

	sectionList: [{
		id: 'section1',
		text: '肝炎门诊',
		url: 'doctorlist.html'
	}, {
		id: 'section2',
		text: '消化内科门诊',
		url: 'doctorlist.html'
	}, {
		text: '普内科门诊',
		url: 'doctorlist.html'
	}, {
		text: '内分泌门诊',
		url: 'doctorlist.html'
	}, {
		text: '心血管内科门诊',
		url: 'doctorlist.html'
	}, {
		text: '感染门诊',
		url: 'doctorlist.html'
	}, {
		text: '中医伤科门诊',
		url: 'doctorlist.html'
	}],



	doctorList: [{
		id: 'doctor1',
		doctorName: '曾文杰',
		position: '主任医师',
		url: 'orderlist.html'
	}, {
		id: 'doctor2',
		doctorName: '严冬',
		position: '住院医师',
		url: 'orderlist.html'
	}, {
		id: 'doctor3',
		doctorName: '陈莉',
		position: '实习医师',
		url: 'orderlist.html'
	}],



	orderList: [{
		id: 'order1',
		bookTime: '2015-8-02',
		timeInterval: '上午',
		bookFee: 10,
		url: 'orderconfirm.html'
	}, {
		id: 'order2',
		bookTime: '2015-7-15',
		timeInterval: '下午',
		bookFee: 10,
		url: 'orderconfirm.html'
	}, {
		id: 'order3',
		bookTime: '2015-7-30',
		timeInterval: '全天',
		bookFee: 15,
		url: 'orderconfirm.html'
	}],


	orderConfirmLayout: [{
		id: 'sectionName',
		labelName: '科室名称',
		ctype: 'frmlbl',
		defVal: '',
		options: [],
		//所在容器控件ID 默认可以忽略默认直接在form下
		ctnCmpID: 'reserveinfo'
	}, {
		id: 'doctorName',
		labelName: '医生姓名',
		ctype: 'frmlbl',
		defVal: '',
		options: [],
		ctnCmpID: 'reserveinfo'
	}, {
		id: 'medicalDate',
		labelName: '就诊日期',
		ctype: 'frmlbl',
		defVal: '', //
		options: [],
		ctnCmpID: 'reserveinfo'
	}, {
		id: 'medicalTime',
		labelName: '就诊时间',
		ctype: 'frmsel',
		defVal: '3',
		options: [{
			name: '上午',
			val: '1'
		}, {
			name: '下午',
			val: '2'
		}, {
			name: '全天',
			val: '3'
		}],
		ctnCmpID: 'reserveinfo'
	}, {
		id: 'bookFee',
		labelName: '费用',
		ctype: 'frmlbl',
		defVal: '', //11
		options: [],
		ctnCmpID: 'reserveinfo'
	}, {
		id: 'patientName',
		labelName: '患者姓名',
		ctype: 'frmtxt',
		defVal: '',
		options: [],
		ctnCmpID: 'reserveuser',
	}, {
		id: 'sex',
		labelName: '性别',
		ctype: 'frmrdgrp',
		defVal: '3',
		options: [{
			name: '男',
			val: '1'
		}, {
			name: '女',
			val: '0'
		}, {
			name: '其他',
			val: '2'
		}],
		ctnCmpID: 'reserveuser'
	}, {
		id: 'idCardNo',
		labelName: '身份证号',
		ctype: 'frmtxt',
		defVal: '',
		options: [],
		ctnCmpID: 'reserveuser'
	}, {
		id: 'bookIDNo',
		labelName: '就诊卡号',
		ctype: 'frmtxt',
		defVal: '4642465476',
		options: [],
		ctnCmpID: 'reserveuser'
	}, {
		id: 'phoneNum',
		labelName: '就诊卡号',
		ctype: 'frmtxt',
		defVal: '4642465476',
		options: [],
		ctnCmpID: 'reserveuser'
	}],


	orderConfirmVal: {
		sectionName: '肿瘤外科',
		doctorName: '席广君',
		bookFee: '11',
		medicalDate: '2015-8-3',
		medicalTime: '2',
		patientName: '张三',
//		sex: '0',
		idCardNo: '330623198902030036',
		phoneNum: '15825548386'
	},
	UI2doclist:[{
		id: 'doctor1',
		doctorName: '曾文杰',
		dept: '主任医师',
		imgurl:'http://resources.rubik-x.ucmed.cn/v1.3.0/images/example/head01.png'
	}, {
		id: 'doctor2',
		doctorName: '陈赫',
		dept: '住院医师',
		imgurl:'http://resources.rubik-x.ucmed.cn/v1.3.0/images/example/head02.png'
	}, {
		id: 'doctor3',
		doctorName: '欧阳娜娜',
		dept: '实习医师',
		imgurl:'http://resources.rubik-x.ucmed.cn/v1.3.0/images/example/head03.png'
	}, {
		id: 'doctor4',
		doctorName: '赵日天',
		dept: '实习医师'
	}],
	UI2orderList:[
		{
			text:'2015-8-02  上午',
			cldCtype:'navlist',
			clsData:[{
				text:'9:00~9:20',
				url:'orderconfirm.html'
			},{
				text:'9:00~9:20',
				url:'orderconfirm.html'
			}]
		},{
			text:'2015-8-02  下午',
			cldCtype:'navlist',
			clsData:[{
				text:'13:00~13:20',
				url:''
			},{
				text:'15:00~15:20',
				url:''
			}]
		},{
			text:'2015-8-02  上午',
			cldCtype:'navlist',
			clsData:[{
				text:'9:00~9:20',
				url:''
			},{
				text:'9:00~9:20',
				url:''
			}]
		},{
			text:'2015-8-02  上午',
			cldCtype:'navlist',
			clsData:[{
				text:'9:00~9:20',
				url:''
			},{
				text:'9:00~9:20',
				url:''
			}]
		},{
			text:'2015-8-02  上午',
			cldCtype:'navlist',
			clsData:[{
				text:'9:00~9:20',
				url:''
			},{
				text:'9:00~9:20',
				url:''
			}]
		},{
			text:'2015-8-02  上午',
			cldCtype:'navlist',
			clsData:[{
				text:'9:00~9:20',
				url:''
			},{
				text:'9:00~9:20',
				url:''
			}]
		},{
			text:'2015-8-02  上午',
			cldCtype:'list',
			clsData:[{
				text:'9:00~9:20',
				url:''
			},{
				text:'9:00~9:20',
				url:''
			}]
		},{
			text:'2015-8-02  上午',
			cldCtype:'list',
			clsData:[{
				text:'9:00~9:20',
				url:''
			},{
				text:'9:00~9:20',
				url:''
			}]
		}
	],
	collalistTestData:[
		{
			text: '示例页面',
			cldCtype: 'navlist',
			clsData:[{
				text: '登陆',
				url: 'UI3.0/login.html'
			},{
				text: '预约挂号',
				url: 'UI3.0/orderInfo.html'
			},{
				text: '查报告单',
				url: 'UI3.0/reportDefault.html'
			},{
				text: '楼层导航',
				url: 'UI3.0/floorList.html'
			},{
				text: '聊天',
				url: 'components/chat.html'
			}]
		},{
			text: '标题组件',
			cldCtype: 'navlist',
			clsData:[{
				text: '基本的标题组件',
				url: 'components/titlebar.html'
			},{
				text: '动态绑定标题组件',
				url: 'components/titlebarbind.html'
			}]
		},{
			text: '列表组件(list)',
			cldCtype: 'navlist',
			clsData:[{
				text: '普通文字列表',
				url: 'components/list.html'
			}, {
				text: '可展开折叠的文字列表',
				url: 'components/collalist.html'
			}, {
				text: '圆角卡片列表(带箭头)',
				url: 'components/cardlist.html'
			}]
		},{
			text: '面板组件',
			cldCtype: 'navlist',
			clsData:[{
				text: '普通面板',
				url: 'demo/demo1(simple panel).html'
			},{
				text: '折叠面板（openbox）',
				url: 'UI3.0/openbox.html'
			},{
				text: '提示面板（tips）',
				url: 'UI3.0/tips.html'
			},{
				text: '底部固定面板（fixbtn）',
				url: 'UI3.0/fixbtn.html'
			},{
				text: '信息展示面板（shrinkpanel）',
				url: 'demo/demo5(shrinkpanel).html'
			},{
				text:'结果信息提示面板（resultinfo）',
				url: 'UI3.0/resultinfo.html'
			},{
				text:'详细信息展示面板（infopanel）',
				url: 'UI3.0/infopanel.html'
			}]
		},{
			text: '开关组件',
			cldCtype: 'navlist',
			clsData:[{
				text: '开关组件',
				url: 'components/switcher.html'
			}]
		},{
			text: '下拉选择器组件',
			cldCtype: 'navlist',
			clsData:[{
				text: '下拉选择器组件',
				url: 'components/select.html'
			}]
		},{
			text: 'checkbox radio组件',
			cldCtype: 'navlist',
			clsData:[{
				text: 'checkbox radio组件',
				url: 'components/checkbox.html'
			}]
		},{
			text: '表单',
			cldCtype: 'navlist',
			clsData:[{
				text: '完整表单demo',
				url: 'components/form.html'
			}]
		},{
			text: '按钮组件（button）',
			cldCtype: 'navlist',
			clsData:[{
				text: '基本按钮组件',
				url: 'components/button.html'
			}]
		},{
			text: '切换项组件（tab）',
			cldCtype: 'navlist',
			clsData:[{
				text: '切换项组件',
				url: 'components/tab.html'
			},{
				text: '时间切换',
				url: 'UI3.0/datetab.html'
			}]
		},{
			text: '弹出功能组件',
			cldCtype: 'navlist',
			clsData:[{
				text: '弹出功能组件',
				url: 'components/actsheet.html'
			}]
		},{
			text: '客户端组件',
			cldCtype: 'navlist',
			clsData:[{
				text: '客户端组件',
				url: 'components/platform.html'
			}]
		}
	],
	tabTestDatas:[{
		id: 'bindtab',
		text: 'bind测试',
		cldCtype: 'list',
		clsData:[{
			id: 'section1',
			text: '普通内科二',
			url: ''
		}, {
			id: 'section2',
			text: '普通外科二',
			url: ''
		}]
	},{
		id: 'bindtab1',
		text: 'bind测试1',
		cldCtype: 'list',
		clsData:[{
			id: 'section3',
			text: '普通内科1',
			url: ''
		}, {
			id: 'section4',
			text: '普通外科2',
			url: ''
		}]
	}],
	imgsliderDatas:[{
		img: '../../../images/pics/pic1.png',
		url: '',
		text: '静静看这世界'
	},{
		img: '../../../images/pics/pic2.png',
		url: '',
		text: '幸福就是可以一起睡觉'
	},{
		img: '../../../images/pics/pic3.png',
		url: '',
		text: '想要一间这样的木屋，静静的喝咖啡'
	}],
	/*折叠框测试*/
	collalistDatas:[{
		text: 'collalist测试1',
		cldCtype: 'list',
		clsData:[{
			id: 'section1',
			text: 'list标签1',
			url: ''
		}, {
			id: 'section2',
			text: 'list标签2',
			url: ''
		}]
	},{
		text: 'collalist测试2',
		cldCtype: 'navlist',
		clsData:[{
			id: 'section3',
			text: 'navlist标签1',
			url: ''
		}, {
			id: 'section4',
			text: 'navlist标签2',
			url: ''
		}]
	}],
	collalist: {
		test1: [{
			text: '动态导航',
			cldCtype: 'navlist',
			clsData: [{
				text: '普通内科',
				url: ''
			}, {
				text: '普通外科',
				url: ''
			}]
		}, {
			text: '动态列表',
			cldCtype: 'list',
			clsData: [{
				text: '普通内科'
			}, {
				text: '普通外科'
			}]
		}],
		test2: [{
			name: '动态模板导航',
			cldCtype: 'navlist',
			clsData: [{
				name1: '普通内科',
				src: ''
			}, {
				name1: '普通外科',
				src: ''
			}]
		}, {
			name: '动态模板导航2',
			cldCtype: 'navlist',
			clsData: [{
				name1: '普通内科',
				src: ''
			}, {
				name1: '普通外科',
				src: ''
			}]
		}]
	},
	orderConfirmLayout: [{
		id: 'sectionName',
		labelName: '科室名称',
		ctype: 'frmlbl',
		defValue: '',
		options: [],
		//所在容器控件ID 默认可以忽略默认直接在form下
		ctnCmpID: 'reserveinfo'
	}, {
		id: 'doctorName',
		labelName: '医生姓名',
		ctype: 'frmlbl',
		defValue: '',
		options: [],
		ctnCmpID: 'reserveinfo'
	}, {
		id: 'medicalDate',
		labelName: '就诊日期',
		ctype: 'frmlbl',
		defValue: '', //
		options: [],
		ctnCmpID: 'reserveinfo'
	}, {
		id: 'medicalTime',
		labelName: '就诊时间',
		ctype: 'frmsel',
		defValue: {
			text: '全天',
			value: '3'
		},
		options: [{
			text: '上午',
			value: '1'
		}, {
			text: '下午',
			value: '2'
		}, {
			text: '全天',
			value: '3'
		}, {
			text: '夜晚',
			value: '4'
		}],
		ctnCmpID: 'reserveinfo'
	}, {
		id: 'bookFee',
		labelName: '费用',
		ctype: 'frmlbl',
		defValue: '', //11
		options: [],
		ctnCmpID: 'reserveinfo'
	}, {
		id: 'patientName',
		labelName: '患者姓名',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		ctnCmpID: 'reserveuser',
	}, {
		id: 'sex',
		labelName: '性别',
		ctype: 'frmrdgrp',
		defValue: '3',
		options: [{
			name: '男',
			val: '1'
		}, {
			name: '女',
			val: '0'
		}, {
			name: '其他',
			val: '2'
		}],
		ctnCmpID: 'reserveuser'
	}, {
		id: 'idCardNo',
		labelName: '身份证号',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		ctnCmpID: 'reserveuser'
	}, {
		id: 'bookIDNo',
		labelName: '就诊卡号',
		ctype: 'frmtxt',
		defValue: '4642465476',
		options: [],
		ctnCmpID: 'reserveuser'
	}, {
		id: 'phoneNum',
		labelName: '手机号',
		ctype: 'frmtxt',
		defValue: '1582544783',
		options: [],
		ctnCmpID: 'reserveuser'
	}],
	UI2orderConfirmLayout: [{
		id: 'sectionName',
		labelName: '科室名称',
		ctype: 'frmlbl',
		defValue: '',
		//所在容器控件ID 默认可以忽略默认直接在form下
		ctnCmpID: 'reserveinfo'
	}, {
		id: 'doctorName',
		labelName: '医生姓名',
		ctype: 'frmlbl',
		defValue: '',
		ctnCmpID: 'reserveinfo'
	}, {
		id: 'medicalDate',
		labelName: '就诊日期',
		ctype: 'frmlbl',
		defValue: '', //
		ctnCmpID: 'reserveinfo'
	}, {
		id: 'medicalTime',
		labelName: '就诊时间',
		ctype: 'frmsel',
		defValue: {
			text: '全天',
			value: '3'
		},
		options: [{
			text: '上午',
			value: '1'
		}, {
			text: '下午',
			value: '2'
		}, {
			text: '全天',
			value: '3'
		}, {
			text: '夜晚',
			value: '4'
		},{
			text: '上午',
			value: '5'
		}, {
			text: '下午',
			value: '6'
		}, {
			text: '全天',
			value: '7'
		}, {
			text: '夜晚',
			value: '8'
		}],
		ctnCmpID: 'reserveinfo'
	}, {
		id: 'bookFee',
		labelName: '费用',
		ctype: 'frmlbl',
		defValue: '', //11
		ctnCmpID: 'reserveinfo',
		color:'orange'
	}, {
		id: 'patientName',
		labelName: '患者姓名',
		ctype: 'frmtxt',
		defValue: '',
		ctnCmpID: 'reserveuser',
		placeholder:"请输入姓名"
	}/*, {
		id: 'sex',
		labelName: '性别',
		ctype: 'frmrdgrp',
		defValue: '3',
		options: [{
			name: '男',
			val: '1'
		}, {
			name: '女',
			val: '0'
		}, {
			name: '其他',
			val: '2'
		}],
		ctnCmpID: 'reserveuser',
		role:'outline'
	}*/, {
		id: 'sex',
		labelName: '性别',
		ctype: 'frmrdgrp',
		defValue: '3',
		options: [{
			name: '男',
			val: '1'
		}, {
			name: '女',
			val: '0'
		}],
		ctnCmpID: 'reserveuser'
	}, {
		id: 'idCardNo',
		labelName: '身份证号',
		ctype: 'frmtxt',
		defValue: '',
		ctnCmpID: 'reserveuser',
		placeholder:"请输入身份证号"
	}, {
		id: 'bookIDNo',
		labelName: '就诊卡号',
		ctype: 'frmtxt',
		defValue: '',
		ctnCmpID: 'reserveuser',
		placeholder:"请输入就诊卡号"
	}, {
		id: 'phoneNum',
		labelName: '手机号',
		ctype: 'frmtxt',
		defValue: '',
		ctnCmpID: 'reserveuser',
		placeholder:"请输入手机号"
	}],
	UI2medicine: [{
		id: 'name',
		labelName: '药名',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		placeholder:"请输入药名"
	}, {
		id: 'starttime',
		labelName: '开始日期',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		placeholder:"请选择开始时间",
		timetext:"true"
	}, {
		id: 'endtime',
		labelName: '结束日期',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		placeholder:"请选择结束时间",
		timetext:"true"
	}, {
		id: 'clocktime',
		labelName: '选择时间',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		placeholder:"请选择时间",
		clocktext:"true"
	}, {
		id: 'pl',
		labelName: '服药频率',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		placeholder:"如每天3次、3次/天"
	}, {
		id: 'yl',
		labelName: '每次用量',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		placeholder:"如每次1片、1片/次"
	}, {
		id: 'gg',
		labelName: '药物规格',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		placeholder:"0.5mg/片、5克/包"
	},{
		id: 'way',
		labelName: '给药方式',
		ctype: 'frmsel',
		defValue: {
			text: '请选择',
			value: '1'
		},
		options: [{
			text: '口服',
			value: '1'
		}, {
			text: '注射',
			value: '2'
		}, {
			text: '表皮',
			value: '3'
		}, {
			text: '吸入',
			value: '4'
		}, {
			text: '灌肠',
			value: '5'
		}]
	}],
/*    orderConfirmLayout2:[{
		id: 'medicalTime',
		options: [{
			text: '上午',
			value: '1'
		}, {
			text: '下午',
			value: '2'
		}, {
			text: '全天',
			value: '3'
		}, {
			text: '夜晚',
			value: '4'
		}]
	}],*/

	orderConfirmVal: {
		sectionName: '肿瘤外科',
		doctorName: '席广君',
		bookFee: '11',
		medicalDate: '2015-8-3',
		medicalTime: {
			text: '全天',
			value: '3'
		},
		sex: 1/*,
		patientName: '张三',
		idCardNo: '330623198902030036',
		phoneNum: '15825548386'*/
	},
	
	successData:[{
		name : "预约科室",
		value : "内科"
	},{
		name : "预约医生",
		value : "张三"
	},{
		name : "就诊日期",
		value : "2015-2-31"
	},{
		name : "就诊时段",
		value : "9:00 - 11:00"
	},{
		name : "患者姓名",
		value : "李四"
	},{
		name : "就诊序号",
		value : "20"
	},{
		name : "就诊费用",
		value : "50元"
	}],
	formDemo:[{
		id: 'sectionName1',
		labelName: '科室名称',
		ctype: 'frmtxt',
		defValue: '666',
		options: [],
		//所在容器控件ID 默认可以忽略默认直接在form下
		ctnCmpID: 'userinfo'
	}, {
		id: 'docName',
		labelName: 'label组件',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		//所在容器控件ID 默认可以忽略默认直接在form下
		ctnCmpID: 'docinfo'
	}, {
		id: 'username222',
		labelName: '姓名',
		ctype: 'frmtxtarea',
		defValue: '',
		options: [],
		//所在容器控件ID 默认可以忽略默认直接在form下
		ctnCmpID: 'docinfo',
		placeholder: "输入姓名000"
	}, {
		id: 'username',
		labelName: '患者姓名',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		//所在容器控件ID 默认可以忽略默认直接在form下
		ctnCmpID: 'userinfo'
	}, {
		id: 'code',
		labelName: '验证码',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		//所在容器控件ID 默认可以忽略默认直接在form下
		ctnCmpID: 'userinfo',
		hasBtn:'获取验证码'
	}, {
		id: 'code2',
		labelName: '验证码',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		//所在容器控件ID 默认可以忽略默认直接在form下
		ctnCmpID: 'userinfo',
		codeLabel:'获取验证码',
		placeholder: "验证码"
	}, {
		id: 'times',
		labelName: '选时间',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		//所在容器控件ID 默认可以忽略默认直接在form下
		ctnCmpID: 'userinfo',
		timetext : true,
		placeholder: "点击选择时间"
	}, {
		id: 'times1',
		labelName: '选时间1',
		ctype: 'frmtxt',
		defValue: '2012-12-11',
		options: [],
		//所在容器控件ID 默认可以忽略默认直接在form下
		ctnCmpID: 'userinfo',
		timetext : true,
		placeholder: "点击选择时间"
	}, {
		id: 'times2',
		labelName: '选时间2',
		ctype: 'frmtxt',
		defValue: '',
		options: [],
		//所在容器控件ID 默认可以忽略默认直接在form下
		ctnCmpID: 'userinfo',
		clocktext : true,
		placeholder: "点击选择时间"
	}, {
		id: 'times3',
		labelName: '选时间3',
		ctype: 'frmtxt',
		defValue: '15:30',
		options: [],
		//所在容器控件ID 默认可以忽略默认直接在form下
		ctnCmpID: 'userinfo',
		clocktext : true,
		placeholder: "点击选择时间"
	}, {
		id: 'sex2',
		labelName: '性别2',
		ctype: 'frmrdgrp',
		defValue: '1',
		options: [{
			name: '其他',
			val: '0'
		}, {
			name: '女',
			val: '-1'
		}, {
			name: '男',
			val: '1'
		}],
		ctnCmpID: 'userinfo'
	}, {
		id: 'cardinfo',
		labelName: '卡类型',
		ctype: 'frmrdgrp',
		defValue: '0',
		options: [{
			name: '门诊卡',
			val: '1'
		}, {
			name: '住院卡',
			val: '0'
		}, {
			name: '医保卡',
			val: '2'
		}],
		ctnCmpID: 'userinfo',
		role:'outline'
	}, {
		id: 'time',
		labelName: '就诊时间',
		ctype: 'frmsel',
		defValue: {
			text: '上午',
			value: '1'
		},
		options: [{
			text: '上午',
			value: '1'
		}, {
			text: '下午',
			value: '2'
		}, {
			text: '全天',
			value: '3'
		}, {
			text: '夜晚',
			value: '4'
		}],
		ctnCmpID: 'docinfo'
	}, {
		id: 'time2',
		labelName: '时间',
		ctype: 'frmact',
		defValue: {
			text: '上',
			value: '1'
		},
		options: [{
			text: '上',
			value: '1'
		}, {
			text: '全',
			value: '2'
		}, {
			text: '夜',
			value: '3'
		}, {
			text: '夜',
			value: '4'
		}, {
			text: '夜',
			value: '5'
		}],
		ctnCmpID: 'docinfo'
	}, {
		id: 'usernamex2',
		labelName: '我的评价',
		ctype: 'frmtxtarea',
		defValue: '',
		options: [],
		//所在容器控件ID 默认可以忽略默认直接在form下
		ctnCmpID: 'userinfo',
		placeholder: "输入你的评价"
	}],
	formDemoVal:{
		sectionName: '这是label组件',
		docName: '这是label组件',
		time: {
			text: '全天',
			value: '3'
		},
		sex: 0,
		username: '这是输入框组件',
		bookfree: '20元'
	},
	reportlist:{
		test1:[{
			name:"血常规",
			time:"2015-01-05",
			src:"examInfo.html"
		},{
			name:"B超",
			time:"2015-05-05",
			src:"examInfo.html"
		}],
		test2:[{
			name:"腹膜（彩超）",
			time:"2015-05-05",
			src:"checkInfo.html"
		},{
			name:"腹膜（彩超）",
			time:"2015-05-10",
			src:"checkInfo.html"
		}]
	},
	UI2checkInfo:{
		base:[{
			name:'报告单号',
			value:"GDC5643242"
		},{
			name:'报告名称',
			value:"后腹膜（彩超）"
		},{
			name:'检查日期',
			value:"2015-09-20"
		}],
		info:[{
			text:'十二指肠球部：粘膜粗糙，见较多浅凹样糜烂。幽门：幽门孔圆，收缩好，无反流。'
		}],
		jg:[{
			text:'左卵巢旁不均回声包块（宫外孕可能）'
		}]
	},
	UI2reportlist:{
		test1:[{
			name:"血常规（检查单详情）",
			time:"2015-01-05",
			src:"checkinfo.html"
		},{
			name:"血常规（检验单详情）",
			time:"2015-01-05",
			src:"examInfo.html"
		},{
			name:"服药记录",
			time:"2015-01-05",
			src:"medicine.html"
		},{
			name:"血常规",
			time:"2015-01-05",
			src:""
		},{
			name:"B超",
			time:"2015-05-05",
			src:""
		},{
			name:"腹膜（彩超）",
			time:"2015-05-05",
			src:""
		}]
	},
	UI2reporttable:[{
		name:"白细胞计数",
		value:"2.6",
		unit:"10E9/L",
		state:'<span class="rbk-icon rbk-icon icon--01"></span>',
		rang:'64.0-83.4'
	},{
		name:"白细胞计数白细胞计数白细胞计数白细胞计数",
		value:"2.6",
		unit:"10E9/L",
		state:'<span class="rbk-icon icon-uniE909"></span>',
		rang:'64.0-83.4'
	},{
		name:"白细胞计数",
		value:"2.6",
		unit:"10E9/L",
		state:'<span class="rbk-icon rbk-icon icon--01"></span>',
		rang:'64.0-83.4'
	},{
		name:"白细胞计数白细胞计数白细胞计数白细胞计数",
		value:"2.6",
		unit:"10E9/L",
		state:"",
		rang:'64.0-83.4'
	},{
		name:"白细胞计数",
		value:"2.6",
		unit:"10E9/L",
		state:'<span class="rbk-icon icon-uniE90A"></span>',
		rang:'64.0-83.4'
	},{
		name:"白细胞计数",
		value:"2.6",
		unit:"10E9/L",
		state:'<span class="rbk-icon icon-uniE907"></span>',
		rang:'64.0-83.4'
	}],
	reportEnd:{
		test1:[{
			name:"报告单号",
			value:"GDC5687876"
		},{
			name:"报告名称",
			value:"后腹膜（彩超）其他，肝胆脾胰（彩超）"
		},{
			name:"检查日期",
			value:"2015-07-01"
		},{
			name:"结果",
			value:"肝外形正常大小范围，表面光滑，肝实质回声分布均匀，血管网清晰，左右肝内胆未见扩张。"
		},{
			name:"结论",
			value:"肝胆脾胰、后腹膜未见明显异常。"
		}],
		test2:[{
			name:"报告单号",
			value:"GDC5687876"
		},{
			name:"审核医生",
			value:"张三"
		},{
			name:"送检日期",
			value:"2015-07-01"
		},{
			name:"审核日期",
			value:"2015-07-02"
		}]
	},
	reporttable:[{
		name:"白细胞计数",
		value:"2.6",
		unit:"10E9/L",
		state:'<span class="rbk-icon rbk-icon-arrowthinup"></span>'
	},{
		name:"白细胞计数白细胞计数白细胞计数白细胞计数",
		value:"2.6",
		unit:"10E9/L",
		state:'<span class="rbk-icon rbk-icon-plus"></span>'
	},{
		name:"白细胞计数",
		value:"2.6",
		unit:"10E9/L",
		state:'<span class="rbk-icon rbk-icon-arrowthindown"></span>'
	},{
		name:"白细胞计数白细胞计数白细胞计数白细胞计数",
		value:"2.6",
		unit:"10E9/L",
		state:""
	},{
		name:"白细胞计数",
		value:"2.6",
		unit:"10E9/L",
		state:'<span class="rbk-icon rbk-icon-arrowthindown"></span>'
	},{
		name:"白细胞计数",
		value:"2.6",
		unit:"10E9/L",
		state:'<span class="rbk-icon rbk-icon-minus"></span>'
	}]
};

var UI2floorList = [{
	"floor": "-2F",
	"obj_arr": [{
		"floor": "-2F",
		"faculty_name": "核医学科",
		"faculty_region": "B2"
	}, {
		"floor": "-2F",
		"faculty_name": "车库",
		"faculty_region": "B2"
	}]
}, {
	"floor": "-1F",
	"obj_arr": [{
		"floor": "-1F",
		"faculty_name": "家属患者休息区",
		"faculty_region": "B1"
	}, {
		"floor": "-1F",
		"faculty_name": "高低配电室",
		"faculty_region": "B1"
	}, {
		"floor": "-1F",
		"faculty_name": "中心吸引机房",
		"faculty_region": "B1"
	}, {
		"floor": "-1F",
		"faculty_name": "冷冻机房",
		"faculty_region": "B1"
	}, {
		"floor": "-1F",
		"faculty_name": "物流传输机房",
		"faculty_region": "B1"
	}, {
		"floor": "-1F",
		"faculty_name": "车库",
		"faculty_region": "B1"
	}]
}, {
	"floor": "1F",
	"obj_arr": [{
		"floor": "1F",
		"faculty_name": "出院处",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "信息中心",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "消控中心",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "保安室",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "监控室",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "星巴克",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "全家超市",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "杏一医疗用品店",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "休闲吧",
		"faculty_region": ""
	}]
}, {
	"floor": "2F",
	"obj_arr": [{
		"floor": "2F",
		"faculty_name": "检验中心",
		"faculty_region": ""
	}, {
		"floor": "2F",
		"faculty_name": "消毒供应室",
		"faculty_region": ""
	}]
}, {
	"floor": "3F",
	"obj_arr": [{
		"floor": "3F",
		"faculty_name": "重症监护室（ICU）",
		"faculty_region": ""
	}, {
		"floor": "3F",
		"faculty_name": "病理科",
		"faculty_region": ""
	}, {
		"floor": "3F",
		"faculty_name": "检验中心",
		"faculty_region": ""
	}]
}, {
	"floor": "4F",
	"obj_arr": [{
		"floor": "4F",
		"faculty_name": "手术室",
		"faculty_region": ""
	}, {
		"floor": "4F",
		"faculty_name": "麻醉科",
		"faculty_region": ""
	}]
}, {
	"floor": "5F",
	"obj_arr": [{
		"floor": "5F",
		"faculty_name": "技术层",
		"faculty_region": ""
	}]
}, {
	"floor": "6F",
	"obj_arr": [{
		"floor": "6F",
		"faculty_name": "产科",
		"faculty_region": ""
	}]
}, {
	"floor": "7F",
	"obj_arr": [{
		"floor": "7F",
		"faculty_name": "妇科",
		"faculty_region": ""
	}]
}, {
	"floor": "8F",
	"obj_arr": [{
		"floor": "8F",
		"faculty_name": "手外科",
		"faculty_region": ""
	}, {
		"floor": "8F",
		"faculty_name": "骨科",
		"faculty_region": ""
	}]
}, {
	"floor": "9F",
	"obj_arr": [{
		"floor": "9F",
		"faculty_name": "骨科",
		"faculty_region": ""
	}, {
		"floor": "9F",
		"faculty_name": "运动医学及关节外科",
		"faculty_region": ""
	}]
}, {
	"floor": "10F",
	"obj_arr": [{
		"floor": "10F",
		"faculty_name": "骨科（脊柱中心）",
		"faculty_region": ""
	}]
}, {
	"floor": "11F",
	"obj_arr": [{
		"floor": "11F",
		"faculty_name": "甲状腺乳腺外科",
		"faculty_region": ""
	}, {
		"floor": "11F",
		"faculty_name": "整形外科",
		"faculty_region": ""
	}]
}, {
	"floor": "12F",
	"obj_arr": [{
		"floor": "12F",
		"faculty_name": "肛肠外科",
		"faculty_region": ""
	}]
}, {
	"floor": "13F",
	"obj_arr": [{
		"floor": "13F",
		"faculty_name": "肝胆胰外科 微创外科 一部",
		"faculty_region": ""
	}, {
		"floor": "13F",
		"faculty_name": "疝腹壁外科中心",
		"faculty_region": ""
	}]
}, {
	"floor": "14F",
	"obj_arr": [{
		"floor": "14F",
		"faculty_name": "肝胆胰外科 微创外科 二部",
		"faculty_region": ""
	}]
}, {
	"floor": "15F",
	"obj_arr": [{
		"floor": "15F",
		"faculty_name": "胃肠外科",
		"faculty_region": ""
	}, {
		"floor": "15F",
		"faculty_name": "疝腹壁外科中心",
		"faculty_region": ""
	}]
}, {
	"floor": "16F",
	"obj_arr": [{
		"floor": "16F",
		"faculty_name": "血管外科",
		"faculty_region": ""
	}, {
		"floor": "16F",
		"faculty_name": "胃肠外科",
		"faculty_region": ""
	}]
}, {
	"floor": "17F",
	"obj_arr": [{
		"floor": "17F",
		"faculty_name": "神经外科",
		"faculty_region": ""
	}]
}, {
	"floor": "18F",
	"obj_arr": [{
		"floor": "18F",
		"faculty_name": "神经外科",
		"faculty_region": ""
	}, {
		"floor": "18F",
		"faculty_name": "泌尿外科",
		"faculty_region": ""
	}]
}, {
	"floor": "19F",
	"obj_arr": [{
		"floor": "19F",
		"faculty_name": "泌尿外科（泌尿腔镜中心、泌尿系结石诊疗中心）",
		"faculty_region": ""
	}]
}, {
	"floor": "20F",
	"obj_arr": [{
		"floor": "20F",
		"faculty_name": "血液内科",
		"faculty_region": ""
	}, {
		"floor": "20F",
		"faculty_name": "造血干细胞移植中心",
		"faculty_region": ""
	}, {
		"floor": "20F",
		"faculty_name": "核辐射防治基地",
		"faculty_region": ""
	}]
}, {
	"floor": "21F",
	"obj_arr": [{
		"floor": "21F",
		"faculty_name": "呼吸内科",
		"faculty_region": ""
	}]
}, {
	"floor": "22F",
	"obj_arr": [{
		"floor": "22F",
		"faculty_name": "心脏中心",
		"faculty_region": ""
	}, {
		"floor": "22F",
		"faculty_name": "心胸外科",
		"faculty_region": ""
	}, {
		"floor": "22F",
		"faculty_name": "心血管内科",
		"faculty_region": ""
	}]
}, {
	"floor": "23F",
	"obj_arr": [{
		"floor": "23F",
		"faculty_name": "心脏中心",
		"faculty_region": ""
	}, {
		"floor": "23F",
		"faculty_name": "心血管内科",
		"faculty_region": ""
	}]
}, {
	"floor": "24F",
	"obj_arr": [{
		"floor": "24F",
		"faculty_name": "干部病房",
		"faculty_region": ""
	}]
}, {
	"floor": "25F",
	"obj_arr": [{
		"floor": "25F",
		"faculty_name": "干部病房",
		"faculty_region": ""
	}]
}, {
	"floor": "26F",
	"obj_arr": [{
		"floor": "26F",
		"faculty_name": "病案与统计科",
		"faculty_region": ""
	}, {
		"floor": "26F",
		"faculty_name": "电梯机房",
		"faculty_region": ""
	}]
}];
test1: [{
	text: 'bind测试',
	cldCtype: 'list',
	data: [{
		text: '普通内科二'
	}, {
		text: '普通外科二'
	}]
}, {
	text: 'bind测试1',
	cldCtype: 'navlist',
	data: [{
		text: '普通内科sdfsdf',
		url: ''
	}, {
		text: '普通外科sdfsdf',
		url: ''
	}]
}]

var UI2floorList2 = [{
	"cldCtype": "navlist",
	"text": "-2F",
	"data": [{
		"floor": "-2F",
		"faculty_name": "核医学科",
		"faculty_region": "B2",
		type:"专家"
	}, {
		"floor": "-2F",
		"faculty_name": "车库",
		"faculty_region": "B2"
	}]
}, {
	"cldCtype": "navlist",
	"text": "-1F",
	"data": [{
		"floor": "-1F",
		"faculty_name": "家属患者休息区",
		"faculty_region": "B1",
		type:"专家"
	}, {
		"floor": "-1F",
		"faculty_name": "高低配电室",
		"faculty_region": "B1",
		type:"专家"
	}, {
		"floor": "-1F",
		"faculty_name": "中心吸引机房",
		"faculty_region": "B1",
		type:"普通"
	}, {
		"floor": "-1F",
		"faculty_name": "冷冻机房",
		"faculty_region": "B1"
	}, {
		"floor": "-1F",
		"faculty_name": "物流传输机房",
		"faculty_region": "B1"
	}, {
		"floor": "-1F",
		"faculty_name": "车库",
		"faculty_region": "B1"
	},{
		"floor": "-1F",
		"faculty_name": "家属患者休息区",
		"faculty_region": "B1"
	}, {
		"floor": "-1F",
		"faculty_name": "高低配电室",
		"faculty_region": "B1"
	}, {
		"floor": "-1F",
		"faculty_name": "中心吸引机房",
		"faculty_region": "B1"
	}, {
		"floor": "-1F",
		"faculty_name": "冷冻机房",
		"faculty_region": "B1"
	}, {
		"floor": "-1F",
		"faculty_name": "物流传输机房",
		"faculty_region": "B1"
	}, {
		"floor": "-1F",
		"faculty_name": "车库",
		"faculty_region": "B1"
	}]
}, {
	"cldCtype": "navlist",
	"text": "1F",
	"data": [{
		"floor": "1F",
		"faculty_name": "出院处",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "信息中心",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "消控中心",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "保安室",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "监控室",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "星巴克",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "全家超市",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "杏一医疗用品店",
		"faculty_region": ""
	}, {
		"floor": "1F",
		"faculty_name": "休闲吧",
		"faculty_region": ""
	}]
}, {
	"cldCtype": "navlist",
	"text": "2F",
	"data": [{
		"floor": "2F",
		"faculty_name": "检验中心",
		"faculty_region": ""
	}, {
		"floor": "2F",
		"faculty_name": "消毒供应室",
		"faculty_region": ""
	}]
}, {
	"cldCtype": "navlist",
	"text": "3F",
	"data": [{
		"floor": "3F",
		"faculty_name": "重症监护室（ICU）",
		"faculty_region": ""
	}, {
		"floor": "3F",
		"faculty_name": "病理科",
		"faculty_region": ""
	}, {
		"floor": "3F",
		"faculty_name": "检验中心",
		"faculty_region": ""
	}]
}];