let template = 
{
	"panels": [{
		"index": 0,
		"height": 297,
		"width": 210,
		"paperHeader": 45,
		"paperFooter": 780,
		"printElements": [{
			"options": {
				"left": 191,
				"top": 37.5,
				"height": 16.5,
				"width": 213,
				"formatter": "function(value, options, templateData){if(templateData.main.template2==0) return '<p class=\"MsoNormal\" align=\"center\" style=\"text-align:center;color:black;\"><span style=\"font-size:10.5pt;font-family:黑体;mso-hansi-font-family:&quot;Times New Roman&quot;\">中国农业大学体育馆管理中心</span></p>'; return '<p class=\"MsoNormal\" align=\"center\" style=\"text-align:center;color:black;\"><span style=\"font-size:10.5pt;font-family:黑体;mso-hansi-font-family:&quot;Times New Roman&quot;\">共青团中国农业大学委员会</span></p>' }",
				"right": 432,
				"bottom": 40.5,
				"vCenter": 325.5,
				"hCenter": 32.25,
				"coordinateSync": false,
				"widthHeightSync": false
			},
			"printElementType": {
				"title": "html",
				"type": "html"
			}
		}, {
			"options": {
				"left": 85,
				"top": 54,
				"height": 9,
				"width": 425,
				"coordinateSync": false,
				"widthHeightSync": false
			},
			"printElementType": {
				"title": "横线",
				"type": "hline"
			}
		}, {
			"options": {
				"left": 82,
				"top": 55.5,
				"height": 421.5,
				"width": 425,
				"title": "主要内容",
				"field": "main",
				"coordinateSync": false,
				"widthHeightSync": false,
				"hideTitle": true,
				"lineHeight": 19.5,
				"qrCodeLevel": 0,
				"formatter": "function (value, options, templateData) {if(options.template2==0) return `<div class=\"WordSection1\" style=\"color:#000;word-wrap:break-word\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:18pt;font-family:黑体\">物资借用承诺书<span lang=\"EN-US\"></span></span></p><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span lang=\"EN-US\" style=\"font-family:黑体\"><o:p>&nbsp;</o:p></span></p><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span lang=\"EN-US\" style=\"font-family:黑体\"></span></p><p class=\"MsoNormal\" style=\"text-indent:28pt\"><span style=\"font-size:14pt;font-family:仿宋\">本人确认附表中的物资均为中国农业大学体育馆管理中心所有。我方承诺若物资在使用过程中丢失或者人为损坏，将按物资原价理赔，且借用物资使用完毕后在借用期限内归还。如逾期未还，中国农业大学体育馆管理中心有权要求借用方理赔适当物资消耗损失费。<span lang=\"EN-US\"></span></span></p><p class=\"MsoNormal\" style=\"text-indent:42pt\"><span lang=\"EN-US\" style=\"font-size:14pt;font-family:仿宋\"><o:p>&nbsp;</o:p></span></p><p class=\"MsoNormal\" align=\"right\" style=\"text-align:right\"><span style=\"font-size:14pt;font-family:黑体\">借用单位签字：<span lang=\"EN-US\"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>（公章）<span lang=\"EN-US\"></span></span></p><p align=\"right\" style=\"text-align:right\"><span style=\"font-size:14pt;font-family:黑体\">${options.y}&nbsp;年&nbsp;${options.m}&nbsp;月&nbsp;${options.d}&nbsp;日&nbsp;&nbsp;&nbsp;</span></p><p><span style=\"font-size:14pt;font-family:仿宋\">附借用物资清单：</span></p></div><style>p.MsoNormal{margin:0 auto}</style><table class=\"MsoNormalTable\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse:collapse;border:none;word-wrap:break-word;line-height:20pt\"><tbody><tr><td width=\"127\" style=\"width:95.4pt;border:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">借用单位<span></span></span></p></td><td width=\"441\" colspan=\"3\" style=\"width:330.7pt;border:solid windowtext 1pt;border-left:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">共青团中国农业大学委员会(${options.stname})</span></p></td></tr><tr><td width=\"127\" style=\"width:95.4pt;border:solid windowtext 1pt;border-top:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">活动名称<span></span></span></p></td><td width=\"441\" colspan=\"3\" style=\"width:330.7pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">${options.hdname}</span></p></td></tr><tr><td width=\"127\" style=\"width:95.4pt;border:solid windowtext 1pt;border-top:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">借用期限<span></span></span></p></td><td width=\"441\" colspan=\"3\" style=\"width:330.7pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">${options.jysj}</span></p></td></tr><tr><td width=\"127\" style=\"width:95.4pt;border:solid windowtext 1pt;border-top:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">借用人<span></span></span></p></td><td width=\"144\" style=\"width:108pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">${options.zrr}</span></p></td><td width=\"132\" style=\"width:99pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">联系方式<span></span></span></p></td><td width=\"165\" style=\"width:123.7pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">${options.zrrdh}</span></p></td></tr><tr><td width=\"127\" style=\"width:95.4pt;border:solid windowtext 1pt;border-top:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">物资名称<span></span></span></p></td><td width=\"144\" style=\"width:108pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">数量（单位）<span></span></span></p></td><td width=\"132\" style=\"width:99pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" style=\"text-indent:18pt\"><span style=\"font-size:12pt;font-family:仿宋\">规格型号<span></span></span></p></td><td width=\"165\" style=\"width:123.7pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">单价<span></span></span></p></td></tr>${options.list.map((item) => { return `<tr><td width=\"127\" style=\"width:95.4pt;border:solid windowtext 1pt;border-top:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">${item.name}</span></p></td><td width=\"144\" style=\"width:108pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">${item.num}</span></p></td><td width=\"132\" style=\"width:99pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">&nbsp;</span></p></td><td width=\"165\" style=\"width:123.7pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">&nbsp;</span></p></td></tr>`; }).join(\"\")}<tr><td width=\"127\" style=\"width:95.4pt;border:solid windowtext 1pt;border-top:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\"><span style=\"font-size:12pt;font-family:仿宋\">&nbsp;</span></p></td><td width=\"144\" style=\"width:108pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">&nbsp;</span></p></td><td width=\"132\" style=\"width:99pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">&nbsp;</span></p></td><td width=\"165\" style=\"width:123.7pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">&nbsp;</span></p></td></tr><tr><td width=\"568\" colspan=\"4\" style=\"width:426.1pt;border:solid windowtext 1pt;border-top:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">备注：如活动中使用物资过多，表格不够，请另附清单！<span></span></span></p></td></tr></tbody></table>`; return `<div class=\"WordSection1\" style=\"color:#000;word-wrap:break-word\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:18pt;font-family:黑体\">物资借用承诺书<span lang=\"EN-US\"></span></span></p><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span lang=\"EN-US\" style=\"font-family:黑体\"><o:p>&nbsp;</o:p></span></p><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span lang=\"EN-US\" style=\"font-family:黑体\"></span></p><p class=\"MsoNormal\" style=\"text-indent:28pt\"><span style=\"font-size:14pt;font-family:仿宋\">本人确认附表中的物资均为共青团中国农业大学委员会所有。我方承诺若物资在使用过程中丢失或者人为损坏，将按物资原价理赔，且借用物资使用完毕后在借用期限内归还。如逾期未还，共青团中国农业大学委员会有权要求借用方理赔适当物资消耗损失费。<span lang=\"EN-US\"></span></span></p><p class=\"MsoNormal\" style=\"text-indent:42pt\"><span lang=\"EN-US\" style=\"font-size:14pt;font-family:仿宋\"><o:p>&nbsp;</o:p></span></p><p class=\"MsoNormal\" align=\"right\" style=\"text-align:right\"><span style=\"font-size:14pt;font-family:黑体\">指导单位意见：<span lang=\"EN-US\"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>（公章）<span lang=\"EN-US\"></span></span></p><p align=\"right\" style=\"text-align:right\"><span style=\"font-size:14pt;font-family:黑体\">${options.y}&nbsp;年&nbsp;${options.m}&nbsp;月&nbsp;${options.d}&nbsp;日&nbsp;&nbsp;&nbsp;</span></p><p><span style=\"font-size:14pt;font-family:仿宋\">附借用物资清单：</span></p></div><style>p.MsoNormal{margin:0 auto}</style><table class=\"MsoNormalTable\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse:collapse;border:none;word-wrap:break-word;line-height:20pt\"><tbody><tr><td width=\"127\" style=\"width:95.4pt;border:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">借用单位<span></span></span></p></td><td width=\"441\" colspan=\"3\" style=\"width:330.7pt;border:solid windowtext 1pt;border-left:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">共青团中国农业大学委员会(${options.stname})</span></p></td></tr><tr><td width=\"127\" style=\"width:95.4pt;border:solid windowtext 1pt;border-top:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">活动名称<span></span></span></p></td><td width=\"441\" colspan=\"3\" style=\"width:330.7pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">${options.hdname}</span></p></td></tr><tr><td width=\"127\" style=\"width:95.4pt;border:solid windowtext 1pt;border-top:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">借用期限<span></span></span></p></td><td width=\"441\" colspan=\"3\" style=\"width:330.7pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">${options.jysj}</span></p></td></tr><tr><td width=\"127\" style=\"width:95.4pt;border:solid windowtext 1pt;border-top:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">借用人<span></span></span></p></td><td width=\"144\" style=\"width:108pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">${options.zrr}</span></p></td><td width=\"132\" style=\"width:99pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">联系方式<span></span></span></p></td><td width=\"165\" style=\"width:123.7pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">${options.zrrdh}</span></p></td></tr><tr><td width=\"127\" style=\"width:95.4pt;border:solid windowtext 1pt;border-top:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">物资名称<span></span></span></p></td><td width=\"144\" style=\"width:108pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">数量（单位）<span></span></span></p></td><td width=\"132\" style=\"width:99pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" style=\"text-indent:18pt\"><span style=\"font-size:12pt;font-family:仿宋\">规格型号<span></span></span></p></td><td width=\"165\" style=\"width:123.7pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">单价<span></span></span></p></td></tr>${options.list.map((item) => { return `<tr><td width=\"127\" style=\"width:95.4pt;border:solid windowtext 1pt;border-top:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">${item.name}</span></p></td><td width=\"144\" style=\"width:108pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">${item.num}</span></p></td><td width=\"132\" style=\"width:99pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">&nbsp;</span></p></td><td width=\"165\" style=\"width:123.7pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">&nbsp;</span></p></td></tr>`; }).join(\"\")}<tr><td width=\"127\" style=\"width:95.4pt;border:solid windowtext 1pt;border-top:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\"><span style=\"font-size:12pt;font-family:仿宋\">&nbsp;</span></p></td><td width=\"144\" style=\"width:108pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">&nbsp;</span></p></td><td width=\"132\" style=\"width:99pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">&nbsp;</span></p></td><td width=\"165\" style=\"width:123.7pt;border-top:none;border-left:none;border-bottom:solid windowtext 1pt;border-right:solid windowtext 1pt;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">&nbsp;</span></p></td></tr><tr><td width=\"568\" colspan=\"4\" style=\"width:426.1pt;border:solid windowtext 1pt;border-top:none;padding:0 5.4pt 0 5.4pt\"><p class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-size:12pt;font-family:仿宋\">备注：如活动中使用物资过多，表格不够，请另附清单！<span></span></span></p></td></tr></tbody></table>` }",
				"right": 506.75,
				"bottom": 337.5,
				"vCenter": 294.25,
				"hCenter": 197.25
			},
			"printElementType": {
				"title": "自定义文本",
				"type": "text"
			}
		}],
		"paperNumberLeft": 565.5,
		"paperNumberTop": 819,
		"paperNumberDisabled": true
	}]
}