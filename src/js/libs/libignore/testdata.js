var testData = {
	testCmps: [{
		text: 'button',
		url: 'test/components/button.html'
	}, {
		text: 'switcher',
		url: 'test/components/switcher.html'
	}, {
		text: 'checkbox',
		url: 'test/components/checkbox.html'
	}, {
		text: 'select',
		url: 'test/components/select.html'
	}, {
		text: 'titlebar',
		url: 'test/components/titlebar.html'
	}, {
		text: 'list & subtitle',
		url: 'test/components/list.html'
	}, {
		text: 'navlist',
		url: 'test/components/navlist.html'
	}, {
		text: 'collalist',
		url: 'test/components/collalist.html'
	}, {
		text: 'dialog',
		url: 'test/components/dialog.html'
	}, {
		text: 'tab',
		url: 'test/components/tab.html'
	}, {
		text: 'imgslider',
		url: 'test/components/imgslider.html'
	}, {
		id: 'cmp3',
		text: 'actionsheet',
		url: 'test/components/actsheet.html'
	}, {
		id: 'cmp4',
		text: 'tab',
		url: 'test/components/tab.html'
	}],

	list: {
		list1: [{
			text: '动态绑定1'
		}, {
			text: '动态绑定2'
		}, {
			text: '动态绑定3'
		}, {
			text: '动态绑定4'
		}],
		list2: [{
			name: '123',
			bigtext: '列表第3项我的内容比较多，但也不会超过两行，因为加了.rbk-ellipsis-2,mui会自动截断，变成省略号'
		}, {
			name: '123',
			bigtext: '列表第3项我的内容比较多，但也不会超过两行，因为加了.rbk-ellipsis-2,mui会自动截断，变成省略号'
		}, {
			name: '123',
			bigtext: '列表第3项我的内容比较多，但也不会超过两行，因为加了.rbk-ellipsis-2,mui会自动截断，变成省略号'
		}, {
			name: '123',
			bigtext: '列表第3项我的内容比较多，但也不会超过两行，因为加了.rbk-ellipsis-2,mui会自动截断，变成省略号'
		}]
	},

	navlist: {
		test1: [{
			text: '首页1',
			url: '/index.html'
		}, {
			text: '首页2',
			url: '/index.html'
		}, {
			text: '首页3',
			url: '/index.html'
		}],
		test2: [{
			firstName: '三',
			lastName: '李',
			src: '/index.html'
		}, {
			firstName: '小东',
			lastName: '王',
			src: '/index.html'
		}, {
			firstName: '相顾',
			lastName: '宇',
			src: '/index.html'
		}]
	},

	collalist: {
		test1: [{
			text: '动态导航',
			cldCtype: 'navlist',
			clsData: [{
				text: '普通内科',
				url: '/index.html'
			}, {
				text: '普通外科',
				url: '/index.html'
			}]
		}, {
			text: '动态列表',
			cldCtype: 'clist',
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
				src: '/index.html'
			}, {
				name1: '普通外科',
				src: '/index.html'
			}]
		}, {
			name: '动态模板导航',
			cldCtype: 'navlist',
			clsData: [{
				name1: '普通内科',
				src: '/index.html'
			}, {
				name1: '普通外科',
				src: '/index.html'
			}]
		}]
	},

	imgsliderDatas: [{
		img: 'http://dcloudio.github.io/mui/assets/img/yuantiao.jpg',
		url: '#',
		text: '静静看这世界'
	}, {
		img: 'http://dcloudio.github.io/mui/assets/img/shuijiao.jpg',
		url: '#',
		text: '幸福就是可以一起睡觉'
	}, {
		img: 'http://dcloudio.github.io/mui/assets/img/muwu.jpg',
		url: '#',
		text: '想要一间这样的木屋，静静的喝咖啡'
	}],
	tab: {
		test1: [{
			text: 'bind测试',
			cldCtype: 'clist',
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
				url: '/index.html'
			}, {
				text: '普通外科sdfsdf',
				url: '/index.html'
			}]
		}],
		test2: [{
			text: 'bind测试',
			cldCtype: 'navlist',
			data: [{
				text1: '普通内科sdfsdf',
				url: '/index.html'
			}, {
				text1: '普通外科sdfsdf',
				url: '/index.html'
			}]
		}, {
			text: 'bind测试1',
			cldCtype: 'navlist',
			data: [{
				text1: '普通内科',
				url: '/index.html'
			}, {
				text1: '普通外科',
				url: '/index.html'
			}]
		}]
	},

	fpDescArr: [{
		id: 'desc1',
		text: '<p>1 、预约说明                         <br>预约挂号是医院为不同就诊人群提供的一项便民措施，预约原则是"先预约，先确认"。 目前医院可预约的专家号或普通号，以服务电话查询或网站公示为准。                     </p>                     <p> ',
	}, {
		id: 'desc2',
		text: '<p>                         2、 实名制预约                         <br>采用“实名制”，患者须提供真实姓名及身份证号、年龄、性别和手机号等信息。用户就诊当天取号时出示的身份证与健康卡信 息必须与预约时提供的一致，否则医院有权不予办理挂号业务。                     </p> ',
	}, {
		id: 'desc3',
		text: '<p>3、 预约时段                         <br>您可以选择自已就诊的时段，提前15分钟到达医院确认身份。按时就诊时一般可以享有优先就诊的便利，具体规定由医院制定。<p> ',
	}, {
		id: 'desc4',
		text: '<p>4、 预约挂号费用                         <br>作为医院的一项便民措施，预约挂号暂时不收取预约费用，具体费用由医院自行制定。<p> ',
	}],



	sectionList: [{
		id: 'section1',
		text: '普通内科',
		url: 'doctorlist.html'
	}, {
		id: 'section2',
		text: '普通外科',
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
		id: 'bookFee',
		labelName: '费用',
		ctype: 'frmlbl',
		defValue: '', //11
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
//		options: [{
//			text: '上午',
//			value: '1'
//		}, {
//			text: '下午',
//			value: '2'
//		}, {
//			text: '全天',
//			value: '3'
//		}, {
//			text: '夜晚',
//			value: '4'
//		}],
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
		labelName: '省份证号',
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

    orderConfirmLayout2:[{
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
	}],

	orderConfirmVal: {
		sectionName: '肿瘤外科',
		doctorName: '席广君',
		bookFee: '11',
		medicalDate: '2015-8-3',
		medicalTime: {
			text: '全天',
			value: '3'
		},
		sex: 1,
		patientName: '张三',
		idCardNo: '330623198902030036',
		phoneNum: '15825548386'
	}
};