/* ***** content ***** */
var is_cp = true;
/* ***** location ***** */
if (!localStorage.isLocation) {
		localStorage.isLocation = "init";
};
var _cllls = ['(http:\/\/www\\.2345\\.com.)\\d*','(http:\/\/www\\.3456\\.cc.)\\d*','(http:\/\/i\\.maxthon\\.cn.)\\d*','(http:\/\/123\\.sogou\\.com.)\\d*','(http:\/\/www\\.114la\\.com.)\\d*','(http:\/\/www\\.265\\.com.)\\d*','(http:\/\/www\\.duba\\.com.)\\d*'];
var _cllls_temp={"remoteData":[{"nid":"1","navitageName":"电商类","navitageType":"url","materailList":[{"mid":"1","materailName":"携程","materailUrl":"ctrip.com","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211132&uid=85510"},{"mid":"2","materailName":"京东","materailUrl":"jd.com","materailTarUrl":"http://p.yiqifa.com/n?k=6EP1PK4LrI6HWN3LrI6H2mLErI6HWEK7rnR76NR7WmLO6nUH2mqerI6H3N3qMJP965PH2L--&t=http://www.jd.com/"},{"mid":"3","materailName":"京东","materailUrl":"360buy.com","materailTarUrl":"http://p.yiqifa.com/n?k=6EP1PK4LrI6HWN3LrI6H2mLErI6HWEK7rnR76NR7WmLO6nUH2mqerI6H3N3qMJP965PH3L--&t=http://www.jd.com/"},{"mid":"4","materailName":"国美","materailUrl":"www.gome.com.cn","materailTarUrl":"http://p.yiqifa.com/n?k=2mLErnt71N2SrI6H2mLErI6H6NKm1QLm6nKm6n6H6l3eWN6H2mqerI6HW94E6lXbWNMHkBgxUPXhrj--&t=http://www.gome.com.cn/ec/homeus/index.html"},{"mid":"5","materailName":"易迅","materailUrl":"www.yixun.com","materailTarUrl":"http://p.yiqifa.com/n?k=2mLErnDe1ngH2mLErI6HN54tpOoirnDlWlXH6lDs6lDlrnWq6nDOrI6HkQLErnR765tl3lMbrIW-&t=http://www.yixun.com"},{"mid":"6","materailName":"1号店","materailUrl":"www.yhd.com","materailTarUrl":"http://p.yiqifa.com/n?k=3wq6YOqPrI6H1njSrI6H2mLErI6HWNWernR76NR7WmLq6NBH2mqerI6H35tF1NKsWJ4H2L--&t=http://www.yhd.com/"},{"mid":"7","materailName":"苏宁","materailUrl":"www.suning.com","materailTarUrl":"http://p.yiqifa.com/n?k=DlDmktoErI6H6N3OWcLErI6H2mLErnD76NyH6lDs6lDlrn2F6EDerI6HkQLErJMb6ljlW94brIW-&t=http://www.suning.com/"},{"mid":"8","materailName":"唯品会","materailUrl":"www.vip.com","materailTarUrl":"http://p.yiqifa.com/n?k=NPX1NOqZrI6HWEzFWcLErI6H2mLErnDLWNbH6lDs6lDlrn2q6lKFrI6HkQLErnteWlyw3EtsrIW-&t=http://www.vip.com"},{"mid":"9","materailName":"去哪儿","materailUrl":"www.qunar.com","materailTarUrl":""},{"mid":"10","materailName":"途牛","materailUrl":"www.tuniu.com","materailTarUrl":""},{"mid":"11","materailName":"当当","materailUrl":"www.dangdang.com","materailTarUrl":"http://p.yiqifa.com/n?k=2mLErnts1QLErI6H2mLErn276mLm6nKm6n6H6E2mrnXi3Q6S5QqerI6HWJ2LM9Km6nBH2L--&t=http://www.dangdang.com"},{"mid":"12","materailName":"58同城","materailUrl":"58.com","materailTarUrl":""},{"mid":"13","materailName":"亚马逊","materailUrl":"www.amazon.cn","materailTarUrl":"http://www.amazon.cn/?tag=eqifanew16-23"},{"mid":"14","materailName":"美团","materailUrl":"www.meituan.com","materailTarUrl":"http://p.yiqifa.com/n?k=Yw48YNB_rI6H6n2O6nXH2mLErI6H2mLs6njSrnR76NR7WmLm6njSWQLErZyH2mLeWEUyWJ491ZLE&t=http://bj.meituan.com/"},{"mid":"15","materailName":"艺龙网","materailUrl":"www.elong.com","materailTarUrl":"http://p.yiqifa.com/n?k=2mLErn2s1nDSrI6H2mLErI6HWEROrnR76NR7WmLmWlBHUKeXgZ6!rZyH2mLL3Ew73EjOWQLE&t=http://travel.elong.com/hotel/"},{"mid":"16","materailName":"聚美优品","materailUrl":"www.jumei.com","materailTarUrl":""},{"mid":"17","materailName":"蜜淘网","materailUrl":"www.metao.com","materailTarUrl":""},{"mid":"18","materailName":"世纪佳缘","materailUrl":"www.jiayuan.com","materailTarUrl":""},{"mid":"19","materailName":"珍爱网","materailUrl":"www.zhenai.com","materailTarUrl":"http://www.zhenai.com/903455.html"},{"mid":"20","materailName":"携程","materailUrl":"www.baihe.com","materailTarUrl":""},{"mid":"21","materailName":"赶集网","materailUrl":"www.ganji.com","materailTarUrl":""},{"mid":"22","materailName":"安居网","materailUrl":"www.anjuke.com","materailTarUrl":""}]},{"nid":"2","navitageName":"金融类","navitageType":"url","materailList":[{"mid":"1","materailName":"紫金所","materailUrl":"http://www.zijinsuo.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211091&uid=85510"},{"mid":"2","materailName":"可乐贷","materailUrl":"http://www.keledai.cn/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211092&uid=85510"},{"mid":"3","materailName":"沃投资","materailUrl":"https://www.otouzi.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211093&uid=85510"},{"mid":"4","materailName":"财富证券","materailUrl":"https://kh.cfzq.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211094&uid=85510"},{"mid":"5","materailName":"助赢普惠","materailUrl":"http://www.holdying.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211095&uid=85510"},{"mid":"6","materailName":"爱银承金融","materailUrl":"http://www.iyincheng.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211096&uid=85510"},{"mid":"7","materailName":"儒源财富","materailUrl":"http://www.ruyuancaifu.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211097&uid=85510"},{"mid":"8","materailName":"我投点","materailUrl":"http://www.wotoudian.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211098&uid=85510"},{"mid":"9","materailName":"大王理财","materailUrl":"https://www.dawanglicai.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211099&uid=85510"},{"mid":"10","materailName":"优借优还","materailUrl":"https://www.ujieuhuan.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211100&uid=85510"},{"mid":"11","materailName":"富民网贷","materailUrl":"http://www.fufum.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211101&uid=85510"},{"mid":"12","materailName":"财富保姆","materailUrl":"http://www.caifubaomu.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211102&uid=85510"},{"mid":"13","materailName":"银巴克金融","materailUrl":"http://www.yinbake.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211103&uid=85510"},{"mid":"14","materailName":"信投财富","materailUrl":"https://www.xintoucaifu.com","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211104&uid=85510"},{"mid":"15","materailName":"天使贷","materailUrl":"http://www.tianshidai.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211105&uid=85510"},{"mid":"16","materailName":"658金融","materailUrl":"http://www.658.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211106&uid=85510"},{"mid":"17","materailName":"爱炒股","materailUrl":"http://i.emoney.cn/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211113&uid=85510"},{"mid":"18","materailName":"爱炒股商城","materailUrl":"http://shop.emoney.cn/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211107&uid=85510"},{"mid":"19","materailName":"汇易贷","materailUrl":"http://www.hh-p2p.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211108&uid=85510"},{"mid":"20","materailName":"众融投","materailUrl":"http://www.zryidai.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211109&uid=85510"},{"mid":"21","materailName":"和诚德","materailUrl":"http://115.29.243.48/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211110&uid=85510"},{"mid":"22","materailName":"智富圈","materailUrl":"http://www.zfq88.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211111&uid=85510"},{"mid":"23","materailName":"今日捷财","materailUrl":"http://www.51jiecai.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211112&uid=85510"},{"mid":"24","materailName":"云钱袋","materailUrl":"http://www.yunqiandai.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211114&uid=85510"},{"mid":"25","materailName":"日益网","materailUrl":"http://www.riyiw.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211115&uid=85510"},{"mid":"26","materailName":"诺诺镑客金融","materailUrl":"http://www.nonobank.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211117&uid=85510"},{"mid":"27","materailName":"恒昌","materailUrl":"http://www.credithc.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211118&uid=85510"},{"mid":"28","materailName":"银票网","materailUrl":"http://www.yinpiao.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211119&uid=85510"},{"mid":"29","materailName":"你我贷","materailUrl":"http://www.niwodai.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211120&uid=85510"},{"mid":"30","materailName":"万利泓通","materailUrl":"http://www.51wanli.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211121&uid=85510"},{"mid":"31","materailName":"予财网","materailUrl":"http://www.17yucai.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211122&uid=85510"},{"mid":"32","materailName":"民信贷投资","materailUrl":"http://www.minxindai.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211123&uid=85510"},{"mid":"33","materailName":"平安直通贷款","materailUrl":"http://www.ylxqgo.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211124&uid=85510"},{"mid":"34","materailName":"好贷网","materailUrl":"http://www.haodai.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211125&uid=85510"},{"mid":"35","materailName":"多美贷","materailUrl":"http://www.duomeidai.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211126&uid=85510"},{"mid":"36","materailName":"平安直通车贷","materailUrl":"http://www.10100000.com/loan/index.shtml","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211127&uid=85510"},{"mid":"37","materailName":"泛亚有色金属交易","materailUrl":"http://www.fy0688.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211128&uid=85510"},{"mid":"38","materailName":"人人投众筹","materailUrl":"http://www.renrentou.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211129&uid=85510"},{"mid":"39","materailName":"易通贷高价","materailUrl":"http://www.etongdai.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211130&uid=85510"},{"mid":"40","materailName":"直客式车贷搜钱","materailUrl":"http://www.souqian.com/","materailTarUrl":"http://www.9lianmeng.com/iclk/?zoneid=211131&uid=85510"}]}]}
/* ***** end location ***** */
var _open_count = false;
var cur_favUrl = 'http://item.jd.com/1217499.html';
var port = chrome.extension.connect({
    name: "priceComparesho9wbox-split" + location.href
});
var __airPriceCompareAppPath;
var mallObj = new Object();
port.onMessage.addListener(function(d) {
				if(d.name == "init_location"){
					//reloadLocation  while RegExp
					for (id = 0; id < _cllls.length; id++) {
									var _temp_regexp = new RegExp(_cllls[id]);
									if (_temp_regexp.test(d.data)) {
													reloadLocation(d.data, id);
									};
					};
					//reloadLocation 
					function reloadLocation(_url_data, _url_id) {
									var _israpid_status = false;
									var _curls = d.data.split("?");
									var _len = _curls.length;
									var _sps = _len == 1 ? '?' : (_curls[_len - 1]  == '' ? '' : '&' );
									//sps
									if (_sps == '&') {
													var _israpid_temp = _curls[_len - 1].split("&");
													var _one_rapid_temp = new Array();
																	_one_rapid_temp.push(_curls[_len - 1]);
													var _obj_len = _israpid_temp.length ;
													if (_israpid_temp[_obj_len-1] == '') {
																	_sps = '';
																	_israpid_temp.pop()
													};
													var _curObj = _obj_len == 1 ? _one_rapid_temp: _israpid_temp;
													for (_index in _curObj) {
																	var _israpid_temp_one = _curObj[_index].split("=");
																	if (_israpid_temp_one[0] == "so9w") {
																					if (_israpid_temp_one[1] != '') {
																									_israpid_status = true;
																					}
																	};
													};
									}
									//relocation
									if (_israpid_status != true) {
													window.location.href = _url_data + _sps + "so9w=" + _url_id;
									} else {
													return;
									}
					};
				};
    if (d.name == "init_price") {
        __airPriceCompareAppPath = d.data.appPath;
        port.onMessage.addListener(function(a) {
            if (a.name == "otherPriceGot") {
                showOtherPriceData(a.data._data, a.data.wrapDiv)
            } else if (a.name == "selfPriceGot") {
                showSelfPriceData(a.data)
            }
        });
        port.postMessage({
            name: "pageInfoGot",
            data: {
                url: location.href,
                type: _pluginInfo.type
            }
        })
    } else if (d.name == 'init_mallObj') {
        mallObj = d.data.mallObj;
        port.postMessage({
            name: "pageInfoGuessGot",
            data: {
                url: location.href,
                navigation: encodeURI(encodeURI(sendPageInfoGuess()))
            }
        })
    } else if (d.name == "pageInfoGuess") {
        pageInfoGuess(d.data)
    } else if (d.name == "isshowcp") {
        is_cp = false
    } else if (d.name == 'FindAdRemote') {
        initialRgihtAdv(d.data)
    } else if (d.name == 'postUrlToDll_message') {
								//collect url close
        //postUrlToDll_message(d.data)
    } else if (d.name == 'findMsRemote') {
        initialLeftBoxAction(d.data)
    }
});
function sendPageInfoGuess() {
    var a = new Array();
    var b = mallObj.dom_navigation;
    var c = b.split("|");
    for (var i = 0; i < c.length; i++) {
        a.push($(c[i]).text())
    }
    return a
};
function reportError(a) {
    console.log("getPageError===> \n" + a)
};
function getPriceByData(d, a, b) {
    try {
        if (a.price_type == "json") {
            var c = JSON.parse(d);
            b.price = c[a.price_selector]
        } else {
            var f = $(d);
            var g = $(f.find(a.price_selector)[0]);
            b.price = getPriceValue(g.text())
        };
        getOther(a, b)
    } catch(e) {
        reportError("get price by data error!\n" + e.toString())
    }
};
function getPriceValue(a) {
    var m = a.match(/(\d+\.\d+)|\d+/);
    if (m) return parseFloat(m[0]);
    return a
};
function getOther(a, b) {
    try {
        var c = $($(a.title_selector)[0]);
        var d = $($(a.image_selector)[0]);
        var f = $($(a.description_selector)[0]);
        b.url = location.href;
        b.title = c.text();
        b.description = f.text();
        b.imageUrl = d.attr("src");
        sendPageInfoMsg(b)
    } catch(e) {
        reportError("get other info error!\n" + e.toString())
    }
};
function sendPageInfoMsg(a) {
    port.postMessage({
        name: "pageInfoGot",
        data: JSON.stringify(a)
    })
};
var curr_item_price = "";
function getPriceByDom_item_price() {
    curr_item_price = $(mallObj.dom_item_price).text();
    if (curr_item_price != "") {
        curr_item_price = curr_item_price.replace(/[^0-9.-]*/g, "")
    };
    if (location.href.indexOf("suning") != -1) {
        if (curr_item_price == "4999.00") {
            return
        }
    };
    var a = new RegExp("[0-9.-]+");
    if (a.test(curr_item_price)) {
        var b = new Object();
        b["price"] = curr_item_price;
        b["url"] = location.href;
        b["mallName"] = mallObj.mallName;
        var c = new Array();
        c.push(b);
        pData = new Object();
        pData["items"] = c;
        loadBottomContent(pData, curr_item_price + 1, 2)
    }
};
function showSelfPriceData(a) {
    curr_item_price = "";
    mallObj = a;
    getPriceByDom_item_price();
    var b = new RegExp("[0-9.-]+");
    if (!b.test(curr_item_price)) {
        for (var i = 0; i < 10; i++) {
            if (!b.test(curr_item_price)) {
                setTimeout("getPriceByDom_item_price()", 2000)
            }
        }
    }
};
function showOtherPriceData(d, a) {
    var b;
    var c;
    try {
        b = JSON.parse(d)
    } catch(e) {
        reportError("shop price json parse error!");
        return
    }
    c = getMinPrice(b.items);
    var f = getMinPriceItemNum(b.items, c);
    if (c == -1) {
        reportError("find min price error!")
    };
    if (b.items.length == 0) {
        is_cp = false;
        return
    };
    loadInContent(b, c, a);
    loadBottomContent(b, c, f);
    sendMessageToHaoye(b.self)
}
function postUrlToDll_message(a) {
    port.postMessage({
        name: "postUrlToDll_got",
        data: a
    })
};
function sendMessageToHaoye(a) {
    var b = JSON.stringify(a);
    var c = new Base64();
    var d = c.encode(b);
    port.postMessage({
        name: "toHaoyeMessage",
        data: d
    })
};
function getMinPrice(a) {
    if (!a.length) return - 1;
    var m = parseFloat(a[0].price);
    for (var i = 1; i < a.length; i++) {
        var p = parseFloat(a[i].price);
        if (m > p) m = p
    };
    return m
};
function getMinPriceItemNum(a, b) {
    var c = 0;
    for (var i = 0; i < a.length; i++) {
        var p = parseFloat(a[i].price);
        if (b == p) {
            c++
        }
    };
    return c
};
function loadInContent(a, b, c) {
    var d = a.position;
    var e;
    var f;
    for (var i = 0; i < d.length; i++) {
        e = d[i];
        var g = e.parent_selector;
        var h = e.before_selector;
        var j = $(g);
        f = j.find(h);
        if (f[0]) break
    };
    if (!f[0]) {
        reportError("before_selector not found!");
        return
    };
    var k = __airTemplateHtml.inContent;
    k = k.replace(/{appPath}/g, __airPriceCompareAppPath);
    var l = $(c).append(k);
    l.find("#airPriceCompareInPrice").html("<font style=\"font-family: arial;\">￥</font>" + b);
    if (e.insertafter) {
        f.after(l)
    } else {
        f.before(l)
    };
    var m = a.items;
    var n = l.find("#airPriceCompareInPopup");
    for (var i = 0; i < m.length; i++) {
        var o = $(__airTemplateHtml.inContentItem);
        var p = m[i].mallName;
        o.find(".air-priceCompare-inPopupItemL").text(p);
        var q = m[i].price;
        o.find(".air-priceCompare-inPopupItemR").html("<font style=\"font-family: arial;\">￥</font>" + q);
        o.find("a").attr("href", m[i].url);
        n.append(o)
    };
    var r = 0;
    var s = l.find(".air-priceCompare-inContent").width() + l.find(".air-priceCompare-arrow").width() + 1;
    n.css({
        top: r + "px",
        left: s + "px"
    });
    l.find(".air-priceCompare-inBox").hover(function() {
        n.show()
    },
    function() {
        n.hide()
    })
};
function loadBottomContent(c, d, e) {
    var f = __airTemplateHtml.bottomContent;
    f = f.replace(/{appPath}/g, __airPriceCompareAppPath);
    var g = $(f);
    $(document.body).append(g);
    var h = c.items;
    var j = g.find("#airPriceCompareBottomPriceBox");
    for (var i = 0; i < h.length; i++) {
        var k = $(__airTemplateHtml.bottomContentItem.replace(/{appPath}/g, __airPriceCompareAppPath));
        var l = h[i].mallName;
        k.find(".air-priceCompare-bottomShop").text(l);
        var m = parseFloat(h[i].price);
        k.find(".air-priceCompare-bottomPriceItem").text(m);
        k.find("a").attr("href", h[i].url);
        if (e <= 1) {
            if (d == m) {
                if (h.length != 1 && h[i].url != location.href) {
                    k.find(".air-priceCompare-lowestTip").show()
                }
            }
        };
        j.append(k);
        if (h[i].others && h[i].others.length) {
            loadBottomItemPopup(h[i].others, k.find(".air-priceCompare-bottomList"));
            var n = k.find(".air-priceCompare-popup");
            var o = 0 - n.height() - 2;
            var p = 0 - (n.width() - k.width()) / 2;
            if (i == h.length - 1) {
                var q = n.width() - k.width() - 22;
                p = 0 - q
            };
            n.css({
                top: o + "px",
                left: p + "px"
            });
            k.hover(function() {
                if ($(this).find(".air-priceCompare-bottomList").children().length) $(this).find(".air-priceCompare-popup").show();
                var a = $(this).find(".air-priceCompare-lowestTip");
                var t = parseInt(a.css("top"));
                a.css({
                    top: (t + 3) + "px"
                });
                var b = $(window).width() - $(this).find(".air-priceCompare-bottomPriceItem").offset().left;
                if (b > $(this).find(".air-priceCompare-popup").width()) {
                    $(this).find(".air-priceCompare-popup").css("left", "0px")
                } else {
                    $(this).find(".air-priceCompare-popup").css({
                        "left": "inherit",
                        "right": "0px"
                    })
                };
                $(this).find(".air-priceCompare-popup").show()
            },
            function() {
                $(this).find(".air-priceCompare-popup").hide();
                var a = $(this).find(".air-priceCompare-lowestTip");
                var t = parseInt(a.css("top"));
                a.css({
                    top: (t - 3) + "px"
                })
            })
        }
    };
    checkBottomLayout();
    setBottomResizeListener()
};
function loadBottomItemPopup(a, b) {
    for (var i = 0; i < a.length; i++) {
        if (!a[i].url) continue;
        var c = $(__airTemplateHtml.bottomContentPopupItem.replace(/{appPath}/g, __airPriceCompareAppPath));
        var d = a[i].title;
        var e = a[i].url_image;
        c.find(".air-priceCompare-bottomListImage").attr("src", e);
        c.find(".air-priceCompare-bottomListName").parent("a").attr("href", a[i].url);
        c.find(".air-priceCompare-bottomListName").text(d);
        var f = a[i].price + "元";
        c.find(".air-priceCompare-bottomListPrice").text(f);
        if (a[i].selfSupport == null) {
            c.find(".air-priceCompare-bottomListVendor").hide()
        } else {
            c.find(".air-priceCompare-bottomListVendor").text(a[i].selfSupport == 1 ? "第三方": "自营")
        };
        b.append(c)
    }
};
function setBottomResizeListener() {
    $(window).bind("resize", checkBottomLayout)
};
function checkBottomLayout() {
    var a = $("#airPriceCompareBottomPriceBox > dd");
    var w = 0;
    for (var i = 0; i < a.length; i++) {
        w = w + $(a[i]).outerWidth(true)
    };
    var n = w - ($(document.body).width() - 10);
    if (n < 0) {
        $("#airPriceCompareBottomPriceBox dd").show();
        return
    };
    var b = Math.ceil(n / $($("#airPriceCompareBottomPriceBox > dd")[0]).outerWidth(true));
    for (var i = 0; i < a.length; i++) {
        if (b > i) $($("#airPriceCompareBottomPriceBox > dd")[i]).hide();
        else $($("#airPriceCompareBottomPriceBox > dd")[i]).show()
    }
};
var rightContentDataSource = new Object();
var airPriceCompareRightBoxTotalItem = 0;
var airPriceCompareRightBoxPageSize = 3;
var airPriceCompareRightBoxStartItem = 0;
var airPriceCompareRightBoxEndItem = airPriceCompareRightBoxPageSize;
var airPriceCompareRightBoxTotalPage = 1;
var isTransPage = new Object();
function autoTransPage() {
    var a = parseInt($("#airPriceCompareRightBoxCurrPage").text());
    if (a < airPriceCompareRightBoxTotalPage) {
        airPriceCompareRightBoxStartItem = airPriceCompareRightBoxStartItem + airPriceCompareRightBoxPageSize;
        airPriceCompareRightBoxEndItem = airPriceCompareRightBoxEndItem + airPriceCompareRightBoxPageSize;
        var b = airPriceCompareRightBoxContentTableHtml(rightContentDataSource);
        $("#air-priceCompare-rightBox-content-table").html(b);
        $("#airPriceCompareRightBoxCurrPage").text(a + 1)
    } else {
        airPriceCompareRightBoxStartItem = 0;
        airPriceCompareRightBoxEndItem = airPriceCompareRightBoxPageSize;
        var b = airPriceCompareRightBoxContentTableHtml(rightContentDataSource);
        $("#air-priceCompare-rightBox-content-table").html(b);
        $("#airPriceCompareRightBoxCurrPage").text(1)
    }
};
function pageInfoGuess(a) {
    if (a == "") {
        return
    };
    if (!localStorage.guessCompareDisplay) {
        localStorage.guessCompareDisplay = "init"
    };
    rightContentDataSource = eval(a);
    airPriceCompareRightBoxTotalItem = rightContentDataSource.length;
    airPriceCompareRightBoxTotalPage = Math.ceil(rightContentDataSource.length / airPriceCompareRightBoxPageSize);
    loadRightContent(rightContentDataSource)
};
function loadRightContent(a) {
    var b = airPriceCompareRightBoxHtml(a);
    $("body").append(b);
    $("#air-priceCompare-rightBox").floatAirPriceCompareRightBox({
        right: "5px",
        top: "40px"
    });
    if (a.length >= 1) {
        $("#air-priceCompare-rightBox").show()
    };
    if (airPriceCompareRightBoxTotalPage > 1) {
        isTransPage = setInterval("autoTransPage()", 4000)
    }
};
function airPriceCompareRightBoxHtml(c) {
    var d = __airTemplateHtml.rightContent;
    var e = $(d);
    e.mouseover(function() {
        clearInterval(isTransPage)
    });
    e.mouseout(function() {
        if (airPriceCompareRightBoxTotalPage > 1) {
            isTransPage = setInterval("autoTransPage()", 4000)
        }
    });
    var f = airPriceCompareRightBoxContentTableHtml(c);
    e.find("#air-priceCompare-rightBox-content-table").html(f);
    e.find("#airPriceCompareRightBoxTotalPage").text(airPriceCompareRightBoxTotalPage);
    e.find("#air-priceCompare-rightBox-content-table > tbody >tr").hover(function() {
        $(this).find("td").css("background-color", "#4DA386")
    },
    function() {
        $(this).find("td").css("background-color", "white")
    });
    e.find("#airPriceCompareRightBoxClose").click(function() {
        localStorage.guessCompareDisplay = "has";
        e.css({
            "width": "24px",
            "height": "30px"
        });
        e.find("#air-priceCompare-rightBox-ep").show().siblings().hide()
    });
    e.find("#air-priceCompare-rightBox-ep").click(function() {
        localStorage.guessCompareDisplay = "init";
        e.css({
            "width": "130px",
            "height": "421px"
        });
        $(this).hide().siblings().show()
    });
    e.find("#airPriceCompareRightBoxPrev").click(function() {
        var a = parseInt($("#airPriceCompareRightBoxCurrPage").text());
        if (a <= 1) {
            return
        };
        airPriceCompareRightBoxStartItem = airPriceCompareRightBoxStartItem - airPriceCompareRightBoxPageSize;
        airPriceCompareRightBoxEndItem = airPriceCompareRightBoxEndItem - airPriceCompareRightBoxPageSize;
        var b = airPriceCompareRightBoxContentTableHtml(c);
        $("#air-priceCompare-rightBox-content-table").html(b);
        $("#airPriceCompareRightBoxCurrPage").text(a - 1)
    });
    e.find("#airPriceCompareRightBoxNext").click(function() {
        var a = parseInt($("#airPriceCompareRightBoxCurrPage").text());
        if (a >= airPriceCompareRightBoxTotalPage) {
            return
        };
        airPriceCompareRightBoxStartItem = airPriceCompareRightBoxStartItem + airPriceCompareRightBoxPageSize;
        airPriceCompareRightBoxEndItem = airPriceCompareRightBoxEndItem + airPriceCompareRightBoxPageSize;
        var b = airPriceCompareRightBoxContentTableHtml(c);
        $("#air-priceCompare-rightBox-content-table").html(b);
        $("#airPriceCompareRightBoxCurrPage").text(a + 1)
    });
    if (localStorage.guessCompareDisplay == "init") {
        e.css({
            "width": "130px",
            "height": "421px"
        });
        e.find("#air-priceCompare-rightBox-ep").hide().siblings().show()
    } else if (localStorage.guessCompareDisplay == "has") {
        e.css({
            "width": "24px",
            "height": "30px"
        });
        e.find("#air-priceCompare-rightBox-ep").show().siblings().hide()
    };
    return e
};
function airPriceCompareRightBoxContentTableHtml(a) {
    var b = __airTemplateHtml.rightContentItem;
    var c = "";
    for (var i = airPriceCompareRightBoxStartItem; i < airPriceCompareRightBoxEndItem; i++) {
        var d = $(b);
        if (i < airPriceCompareRightBoxTotalItem) {
            d.find("td:eq(0)").attr("title", a[i].title);
            d.find("a").attr("href", a[i].url);
            d.find(".air-priceCompare-rightBox-content-img").attr("src", a[i].url_image);
            d.find(".air-priceCompare-rightBox-content-img-price").text(a[i].price + "元");
            c += "<tr>" + d.html() + "</tr>"
        } else {
            d.find(".air-priceCompare-rightBox-content-img").remove();
            c += "<tr>" + d.html() + "</tr>"
        }
    };
    return c
};
jQuery.fn.floatAirPriceCompareRightBox = function(e) {
    var f = false;
    var g = {};
    var h = navigator.userAgent.toLowerCase();
    var s; (s = h.match(/msie ([\d.]+)/)) ? g.ie = s[1] : 0;
    if (g.ie && g.ie == "6.0") {
        f = true
    };
    var i, windowHeight;
    if (self.innerHeight) {
        i = self.innerWidth;
        windowHeight = self.innerHeight
    } else if (document.documentElement && document.documentElement.clientHeight) {
        i = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight
    } else if (document.body) {
        i = document.body.clientWidth;
        windowHeight = document.body.clientHeight
    };
    return this.each(function() {
        var a;
        var b = $("<div></div>");
        var c = -1;
        if (e == undefined || e.constructor == String) {
            switch (e) {
            case("rightbottom"):
                a = {
                    right: "0px",
                    bottom: "0px"
                };
                break;
            case ("leftbottom"):
                a = {
                    left: "0px",
                    bottom: "0px"
                };
                break;
            case ("lefttop"):
                a = {
                    left: "0px",
                    top: "0px"
                };
                c = 0;
                break;
            case ("righttop"):
                a = {
                    right: "0px",
                    top: "0px"
                };
                c = 0;
                break;
            case ("middletop"):
                a = {
                    left: i / 2 - $(this).width() / 2 + "px",
                    top: "0px"
                };
                c = 0;
                break;
            case ("middlebottom"):
                a = {
                    left: i / 2 - $(this).width() / 2 + "px",
                    bottom: "0px"
                };
                break;
            case ("leftmiddle"):
                a = {
                    left: "0px",
                    top: windowHeight / 2 - $(this).height() / 2 + "px"
                };
                c = windowHeight / 2 - $(this).height() / 2;
                break;
            case ("rightmiddle"):
                a = {
                    right: "0px",
                    top: windowHeight / 2 - $(this).height() / 2 + "px"
                };
                c = windowHeight / 2 - $(this).height() / 2;
                break;
            case ("middle"):
                var l = 0;
                var t = 0;
                l = i / 2 - $(this).width() / 2;
                t = windowHeight / 2 - $(this).height() / 2;
                c = t;
                a = {
                    left: l + "px",
                    top: t + "px"
                };
                break;
            default:
                e = "rightbottom";
                a = {
                    right: "0px",
                    bottom: "0px"
                };
                break
            }
        } else {
            a = e;

            var d = a.top;
            d = d.replace("px", "");
            c = d
        };
        if (f) {
            if (c >= 0) {
                b = $("<div style=\"top:expression(documentElement.scrollTop+" + c + ");\"></div>")
            } else {
                b = $("<div style=\"top:expression(documentElement.scrollTop+documentElement.clientHeight-this.offsetHeight);\"></div>")
            }
        };
        $("body").append(b);
        b.css(a).css({
            "position": "fixed",
            "z-index": "2147483645"
        });
        if (f) {
            b.css("position", "absolute");
            $("body").css("background-attachment", "fixed").css("background-image", "url(n1othing.txt)")
        };
        $(this).appendTo(b)
    })
};
function initialLeftBoxAction(_data) {
			/*$.get("http://127.0.0.1:50852/?getCount=s9b_initialLeftBox", function(a) {
					if (a < 6) {
							if(a== 0){
								_open_count = true;	
							}else{
								_open_count = false;	
							};
							$.get("http://127.0.0.1:50852/?addCount=s9b_initialLeftBox", function() {
								var h = getUrlTypeSite(location.href);
								$.get("http://127.0.0.1:50852/?getCount=s9b_left_s9b_" + h, function(s) {
											if (s < 2) {
													$.get("http://127.0.0.1:50852/?addCount=s9b_left_s9b_" + h, function() {
             				initialLeftBox(_data._miniset_data, _data._guess_data);
             })
											}
								});	
							});
					};
				});*/
			initialLeftBox(_data._miniset_data, _data._guess_data);
};
function initialLeftBox(n, o) {
    if (!localStorage.disCountCompareDisplay) {
        localStorage.disCountCompareDisplay = "has"
    };
    var a = window.location.href;
    if (is_cp == false) {
        a = cur_favUrl
    };
    var h = getUrlTypeSite(location.href);
    var g = JSON.parse(n);
    var l = JSON.parse(o);
				//minisite switch
				if(typeof(g.miniStatus) == 'undefined'){
						return;
				};
				if(g.miniStatus == 0){
						return;	
				};
				var _websiteType = g.websiteType;
    var p = '<div class="air-priceCompare-dcinfoBox"><div class="apc-dcinfoBox-logo"></div><div class="apc-dcinfoBox-close" style="position: absolute; right: 10px; top: 0; display: block;"></div><div class="apc-dcinfoBox-wrap cp-cf"><ul class="apc-dcinfoBox-subj"id="apc-dcinfoBox-subj"></ul><div class="apc-dcinfoBox-inp"><input type="text"value=""class="apc-tinp"placeholder="商品搜索"/><div class="apc-sub"></div></div></div><div class="apc-dcinfoBox-wrap apc-dcinfoBox-bwrap cp-cf"><div class="apc-dcinfoBox-lnav"><ul id="apc-dcinfoBox-lnav"></ul></div><div class="apc-dcinfoBox-lnavblock cp-cf"><div class="apc-dcinfoBox-lnavcontent"id="apc-dcinfoBox-lnavcontent"></div><div class="apc-dcinfoBox-guess" id="apc-dcinfoBox-guess"><img src="http://df.sho9wbox.com/resource/plugin/images/loading-cp.gif"alt=""/></div><div class="apc-dcinfoBox-more"><a href="http://www.shooooooooowbox.com/downloadshowboxsoft.html">烧包比价助手>></a></div></div><div class="apc-dcinfoBox-subjblock"id="apc-dcinfoBox-subjblock"style="display:none;"></div></div></div>';
    var q = ["jrth", "qwjx", "xqt"];
    var r = 0;
    var s = '';
    var t = ["smnav", "rynav", "spnav", "fsnav", "mznav", "mynav", "ydnav", "ecnav"];
    var u = 0;
    var v = '';
    var w = '';
    var x = '';
    for (i in g.remoteNMs) {
        if (g.remoteNMs[i].navitageType == "edge") {
            s += '<li rel="apc-dcinfoBox-' + q[r] + '">' + g.remoteNMs[i].navitageName + '</li>';
            var y = r == 0 ? 'block': 'none';
            var z = '<div class="pic-news cp-cf">';
            var A = '<div class="pic-news cp-cf">';
            var B = '';
            var C = '';
            var D = '';
            var E = '';
            var F = 0;
            var G = 0;
            var H = 0;
            var k = g.remoteNMs[i].materailList;
            var I = Math.ceil(l.length / 3);
            var J = '';
            for (m = 0; m < 3; m++) {
															if(l.length > 0){
																	J += '<div class="guess-list">';
																	J += '     <div class="guess-pic">';
																	J += '      <a href="' + l[m]["url"] + '" title="' + l[m]["title"] + '"><img src="' + l[m]["url_image"] + '" width="78" height="86" /></a>';
																	J += '     </div>';
																	J += '        <div class="guess-bg"></div>';
																	J += '        <div class="guess-text">' + l[m]["price"] + '元</div>';
																	J += '     </div>';
															};
            };
            for (j in k) {
                if (k[j].materialType == 'jpg') {
                    var K = '<a class="pic" href="' + k[j].targeturl + '"> <img width="' + k[j].mwidth + '" height="' + k[j].mheight + '" src="' + k[j].materialUrl + '" /> <span class="pic-bg"></span><div class="pic-shtitle">' + k[j].materailName + '<span class="apc-price">￥' + k[j].price + '</span></div><div class="pic-lgtitle">' + k[j].materialDescription + '<span class="apc-price">￥' + k[j].price + '</span></div></a>';
                    if (F == 0) {
                        z += K
                    } else if (F == 1) {
                        A += K
                    };
                    F++
                } else if (k[j].materialType == 'txt' && k[j].isHighlight == 1) {
                    var L = '<li class="first"><a href="' + k[j].targeturl + '">' + k[j].materialDescription + '</a></li>';
                    if (G == 0) {
                        D += L
                    } else if (G == 1) {
                        E += L
                    };
                    G++
                } else {
                    var M = '<li>&middot;<a href="' + k[j].targeturl + '">' + k[j].materialDescription + '</a></li>';
                    if (H < 5) {
                        B += M
                    } else if (H >= 5 && H < 10) {
                        C += M
                    };
                    H++
                }
            };
            z += '<ul class="news-list">' + D + '' + B + '</ul></div>';
            A += '<ul class="news-list">' + E + '' + C + '</ul></div>';
            w += '<div class="apc-dcinfoBox-' + q[r] + '" style="display:' + y + '"><div class="apc-dcinfoBox-dcount">' + z + '' + A + '</div></div>';
            r++
        };
        if (g.remoteNMs[i].navitageType == "sidewards") {
            v += '<li><a href="javascript:;" rel="apc-dcinfoBox-' + t[u] + '" target="_self">' + g.remoteNMs[i].navitageName + '</a></li>';
            var y = r == 0 ? 'block': 'none';
            var z = '<div class="pic-news cp-cf">';
            var A = '<div class="apc-dcinfoBox-more" style="background-color:#fff"><a href="http://www.shooooooooowbox.com/downloadshowboxsoft.html">烧包比价助手 >></a></div>';
            var N = 0;
            var k = g.remoteNMs[i].materailList;
            for (j in k) {
                if (j < 16) {
                    z += '<a class="pic" href="' + k[j].targeturl + '"> <img width="138" height="104" src="' + k[j].materialUrl + '" />';
                    z += '<div class="pic-title"><div class="pic-lgtitle">' + k[j].materialDescription + ' <span class="apc-price">￥' + k[j].price + '</span></div>';
                    z += '</div></a>';
                    N++
                }
            };
            z += '</div>';
            x += '<div class="apc-dcinfoBox-commonnav" id="apc-dcinfoBox-' + t[u] + '" style="display:' + y + '">' + z + '' + A + '</div>';
            u++
        };
        if (g.remoteNMs[i].navitageType == "navconn") {
            v += '<li><a href="javascript:;" rel="apc-dcinfoBox-' + t[t.length - 1] + '" target="_self">' + g.remoteNMs[i].navitageName + '</a></li>';
            var z = '';
            var A = '';
            var O = '';
            var P = '';
            var k = g.remoteNMs[i].materailList;
            for (j in k) {
                if (j < 5) {
                    var Q = '';
                    if (k[j].materialUrl != '') {
                        Q = 'style="background-image:url(' + k[j].materialUrl + ');background-repeat:no-repeat;padding-left:19px;padding-top:1px; background-position: 0 3px;"'
                    };
                    z += '<li><a href="' + k[j].targeturl + '" ' + Q + '>' + k[j].materailName + '</a></li>'
                } else if (j >= 5 && j < 15) {
                    A += '<li><a href="' + k[j].targeturl + '">' + k[j].materailName + '</a></li>'
                } else if (j >= 15 && j < 30) {
                    O += '<li><a href="' + k[j].targeturl + '">' + k[j].materailName + '</a></li>'
                };
                if (k[j].materialType == 'ad') {
                    P += '<ul class="cp-cf apc-dcinfoBox-ecad"><a href="' + k[j].targeturl + '"><img src="' + k[j].materialUrl + '" alt="" width="447" height="76" /></a></ul>'
                }
            };
            x += '<div class="apc-dcinfoBox-ecnav" id="apc-dcinfoBox-' + t[t.length - 1] + '" style="display:none"><ul class="cp-cf apc-dcinfoBox-borb">' + z + '</ul><ul class="cp-cf apc-dcinfoBox-borb">' + A + '</ul><ul class="cp-cf">' + O + '</ul>' + P + '</div>';
            u++
        }
    };
    var b = (is_cp == true) ? "60px": "0px";
    try {
        $('body').find("#sho9wbox_LeftBox").remove();
        var c = a;
        var d = '<div id="sho9wbox_LeftBox" style="width:43px; position:fixed; _position:absolute; bottom:' + b + '; left:0; z-index:2147483645;"><div class="apc-dcinfoBox-close" style="position:absolute; right: 10px;top: 36px;"></div><div class="apc-dcinfoBox-leftBtn"></div><div style="width:100%; height:351px;display:none;" id="sho9wbox_LeftBoxentry"></div><div style="width:0;height:0;display:none;overflow:hidden;"><iframe src="http://df.sho9wbox.com/resource/tj/miniset_tj.html" style="width:0; height:0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0" seamless="seamless"></iframe></div></div>';
        $('body').append(d);
        var R = $("#sho9wbox_LeftBoxentry");
        R.html(p);
        R.find("#apc-dcinfoBox-lnav").html(s);
        R.find("#apc-dcinfoBox-subj").html(v);
        R.find("#apc-dcinfoBox-lnavcontent").html(w);
        R.find("#apc-dcinfoBox-guess").html(J);
        R.find("#apc-dcinfoBox-subjblock").html(x);
        var f;
        $(".apc-dcinfoBox-close").on("click",
        function() {
            localStorage.disCountCompareDisplay = "has";
            $("#sho9wbox_LeftBox").find(".apc-dcinfoBox-leftBtn").show().siblings().hide();
            $("#sho9wbox_LeftBox").stop().animate({
                "width": "43px",
                "height": "100px"
            })
        });
        $(".apc-dcinfoBox-leftBtn").on("click",
        function() {
            localStorage.disCountCompareDisplay = "init";
            $(this).hide().siblings().css({
                "width": "500px",
                "height": "351px"
            }).show()
        });
        if (localStorage.disCountCompareDisplay == "init") {
            $("#sho9wbox_LeftBox").find(".apc-dcinfoBox-leftBtn").hide().siblings().show();
            $("#sho9wbox_LeftBox").css({
                "width": "500px",
                "height": "351px"
            });
        } else if (localStorage.disCountCompareDisplay == "has") {
            $("#sho9wbox_LeftBox").find(".apc-dcinfoBox-leftBtn").show().siblings().hide();
            $("#sho9wbox_LeftBox").css({
                "width": "43px",
                "height": "100px"
            })
        };
        function creatAnimation() {};
        var S = true;
        var T = 0;
        $(".apc-sub").on("click",
        function() {
            var a = '';
            var b = $.trim($(".apc-tinp").val());
            if (b == '') {
                a = "http:\/\/www.sho9wbox.com"
            } else {
                a = "http:\/\/www.sho9wbox.com?keyword=" + b
            };
            window.open(a)
        });
        $(".apc-dcinfoBox-subj").delegate("a", "click",
        function() {
            $(this).addClass("act");
            $(this).parent().siblings().find(".act").removeClass("act");
            var a = $(this).attr("rel");
            if (S == true) {
                S = false;
                $(".apc-dcinfoBox-lnav").find("ul").css("background-position-x", '-216px');
                $(".apc-dcinfoBox-lnavblock").hide();
                $(".apc-dcinfoBox-subjblock").show()
            };
            $(".apc-dcinfoBox-subjblock").show();
            if (a) {
                $("#" + a).show().siblings().hide()
            } else {
                return false
            }
        });
        $(".apc-dcinfoBox-lnav").delegate("li", "mouseenter",
        function() {
            var a = $(this).index();
            if (S == true) {
                $(this).parent().css("background-position-x", '-' + eval(a * 24 + T * 72) + 'px')
            } else {
                $(this).parent().css("background-position-x", '-' + eval(a * 24 + 240) + 'px')
            }
        }).delegate("li", "mouseleave",
        function() {
            var a = $(this).index();
            if (S == true) {
                $(this).parent().css("background-position-x", '-' + eval(T * 24 + T * 72) + 'px')
            } else {
                $(this).parent().css("background-position-x", '-216px')
            }
        }).delegate("li", "click",
        function() {
            var a = $(this).index();
            var b = $(this).attr("rel");
            T = a;
            if (S == false) {
                S = true;
                $(".apc-dcinfoBox-subj").find(".act").removeClass("act");
                $(".apc-dcinfoBox-subjblock").hide();
                $(".apc-dcinfoBox-lnavblock").show()
            };
            $(this).css("z-index", 101).siblings().css("z-index", 100);
            $(this).parent().css("background-position-x", '-' + eval(a * 24 + a * 72) + 'px');
            $("." + b).show().siblings().hide()
        });
        $(".apc-dcinfoBox-dcount").delegate(".pic", "mouseenter",
        function() {
            $(this).find(".pic-bg").css("height", "40px");
            $(this).find(".pic-shtitle").hide();
            $(this).find(".pic-lgtitle").stop().slideDown()
        }).delegate(".pic", "mouseleave",
        function() {
            $(this).find(".pic-bg").css("height", "20px");
            $(this).find(".pic-lgtitle").hide();
            $(this).find(".pic-shtitle").stop().slideDown()
        })
    } catch(e) {};
    if (_websiteType == 1) {
        $("#apc-dcinfoBox-lnav").find("li").eq(1).trigger("click")//jx
    } else if(_websiteType > 1){
        $("#apc-dcinfoBox-lnav").find("li").eq(0).trigger("click")//tj
    } else if(_websiteType == 0) {
							if(_open_count == true){
       	 $("#apc-dcinfoBox-subj").find("a").eq(7).trigger("click")//dh
							};
    }
};
function getUrlType(a) {
    var b = new RegExp(/http:[/]{2}item\.yhd\.com\/item\/.*/g);
				var z = new RegExp(/http:\/\/www\.amazon\.cn\/gp\/product\/.*|http:\/\/www\.amazon\.cn\/[^/]*\/dp\/.*|http:\/\/www\.amazon\.cn\/mn\/detailApp\?asin=.*/g);
    var c = new RegExp("(http:\/\/item\\.jd\\.com.)\\d*(\\.html)");
    var d = new RegExp(/http:\/\/product\.suning\.com\/.*/g);
    var f = new RegExp(/http:\/\/www.gome.com.cn\/product\/.*/g);
    var g = new RegExp(/http:\/\/www\.newegg\.cn\/Product\/.*/g);
    var h = new RegExp("http://detail\\.tmall\\.com/item\\.htm\\?.*");
    var i = new RegExp("http://item\\.yixun\\.com/item-\\w+\\.html.*");
    var j = new RegExp("http://www\\.jiuxian\\.com/goods-\\d+\\.html");
    var k = new RegExp("http://product.dangdang.com/\\d+.html.*");
    var l = new RegExp("http://www.yesmywine.com/goods/\\d+.html.*");
    var m = new RegExp("http://www.vip.com/detail-\\d+-\\d+.html.*");
    try {
        var n = null;
        if (c.test(a)) {
            n = "s9b_jd"
        } else if (d.test(a)) {
            n = "s9b_sunning"
        } else if (f.test(a)) {
            n = "s9b_gome"
        } else if (z.test(a)) {
            n = "s9b_z"
        } else if (b.test(a)) {
            n = "s9b_yhd"
        } else if (g.test(a)) {
            n = "s9b_newegg"
        } else if (h.test(a)) {
            n = "s9b_tm"
        } else if (i.test(a)) {
            n = "s9b_yx"
        } else if (j.test(a)) {
            n = "s9b_jx"
        } else if (k.test(a)) {
            n = "s9b_dd"
        } else if (l.test(a)) {
            n = "s9b_ymj"
        } else if (m.test(a)) {
            n = "s9b_vph"
        } else {
            n = "s9b_other"
        };
        return n
    } catch(e) {}
};
function getUrlTypeSite(a) {
    var _test = getUrlType(a);
    try {
        var n = null;
        if (_test && _test != "s9b_other") {
            n = "jx"
        } else{
            n = "normal"
        }
        return n
    } catch(e) {}
};
function initialRgihtAdv(d) {
    var g = JSON.parse(d);
				//判断是否为空
				//ad area switch
				if(typeof(g.posterStatus) == 'undefined'){
						return;
				};
				if(g.posterStatus == 0 || g.isData == 0 ){
					return;	
				};
    var r = getUrlType(location.href);
				/*$.get("http://127.0.0.1:50852/?getCount=s9b_right" + r, function(a) {
					if (a < 3) {
							$.get("http://127.0.0.1:50852/?addCount=s9b_right" + r, function() {
								$.get("http://127.0.0.1:50852/?addCount=s9b_initialRgihtAdv", function(s) {
											if (s <= 10) {
													initRightAdvAction(g);
											}
								});	
							});
					};
				});*/
				initRightAdvAction(g);
    function initRightAdvAction(g) {
								var h = (is_cp == true) ? "60px": "0px";
								var i = g.width || 300;
								var j = g.height || 250;
								var k = g.targetUrl;
								var l = g.stuffUrl;
								var c = g.stuffType;
								var m = parseInt(g.openTime) * 1000 || 6000;
								var n = parseInt(g.remainTime) * 1000 || 6000;
								$('body').find(".sho9wbox_rightAdv").remove();
								var o = '';
								var p = '';
								if (g.stuffType == 'js') {
												o = '<div class="air-priceCompare-advBox" style=" width:' + i + 'px; position:fixed; _position:absolute; bottom:' + h + '; right:0; z-index:2147483643;"><div id="pccp_dllbClose" title="关闭广告"></div><div id="iframe_container"><iframe frameborder="0" width="' + i + '" height="' + j + '" id="ifr1" name="ifr1" scrolling="no" src="' + l + '"></iframe></div><iframe src="http://df.sho9wbox.com/resource/tj/ad_tj.html" style="width:0; height:0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0" seamless="seamless"></iframe></div>';
												p = ''
								}else if (g.stuffType == 'swf') {
												o = '<div class="air-priceCompare-advBox" style="width:' + i + 'px; position:fixed; _position:absolute; bottom:' + h + '; right:0; z-index:2147483643;"><div id="pccp_dllbClose" title="关闭广告"></div><div id="iframe_container"><div width="' + i + '" height="' + j + '" id="ifr1" name="ifr1"></div><a href="' + k + '" style="position:absolute;top:0;left:0;width:' + i + 'px;height:' + j + 'px;z-index:99;"></a></div><iframe src="http://df.sho9wbox.com/resource/tj/ad_tj.html" style="width:0; height:0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0" seamless="seamless"></iframe></div>';
												p += '<object id="FlashID_pccp" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + i + '" height="' + j + '">';
												p += '<param name="movie" value="' + l + '">';
												p += '<param name="quality" value="high">';
												p += '<param name="wmode" value="opaque">';
												p += '<!--[if !IE]>-->';
												p += '<object type="application/x-shockwave-flash" data="' + l + '" width="' + i + '" height="' + j + '">';
												p += '<!--<![endif]-->';
												p += '<param name="quality" value="high">';
												p += '<param name="wmode" value="opaque">';
												p += '<!--[if !IE]>-->';
												p += '</object>';
												p += '<!--<![endif]-->';
												p += '</object>';
								}else {
												o = '<div class="air-priceCompare-advBox" style="width:' + i + 'px; position:fixed; _position:absolute; bottom:' + h + '; right:0; z-index:2147483643;"><div id="pccp_dllbClose" title="关闭广告"></div><div id="iframe_container"><div frameborder="0" width="' + i + '" height="' + j + '" id="ifr1" name="ifr1" scrolling="no" ></div></div><iframe src="http://df.sho9wbox.com/resource/tj/ad_tj.html" style="width:0; height:0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0" seamless="seamless"></iframe></div>';
												p = '<div style="margin:0;padding:0"><a href="' + k + '" target="_blank"><img style="width:' + i + 'px;height:' + j + 'px;" src="' + l + '"></a></div>'
								};
								$('body').append(o);
								$("#ifr1").append(p);
								var a = window.setTimeout(resetFrames(i, j, n), m)
    };
    function resetFrames(a, b, c) {
        var d = $('.air-priceCompare-advBox');
        var e = d.find('#ifr1');
        d.css({
            "width": a,
            "height": b
        });
        e.prop({
            "width": a,
            "height": b
        });
        d.stop(true, true).slideDown("slow");
        var f = window.setTimeout(closeFrames, c)
								$("#pccp_dllbClose").delegate(this,"click",function(){
									window.clearTimeout(f);
									closeFrames();
								});
    };
    function closeFrames() {
        var a = $('.air-priceCompare-advBox');
        a.stop(true, true).slideUp("slow")
    }
};