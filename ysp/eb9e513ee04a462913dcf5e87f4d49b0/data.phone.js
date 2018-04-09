{
    "_options" : {
        "openLinkInSameWindow" : false,
"removeStyle" : true,
"cleanImg": false,
"cleanTable": false,
"cleanFrame": false,
"cleanEmbed": false
    },
    "_patterns": {},
    "_helpers" : // 自定义API中的函数是在本项目下所有模块中都可以共用。用法如下：
// 在这里定义一个函数，例如 getHost: function() { return window.location.host; } ，
// 在数据采集代码中通过 context._helpers 调用这个函数，例如 context._helpers.getHost()  

{
   getHost: function() {
        return window.location.host;
    },
    pageLoading: function() {
        $("body").append('<div class="pageLoading" style="background:rgba(255,255,255,.9); position:fixed; left:0px; right:0px; top:0px; bottom:0px; margin-bottom:0px; z-index:9999;"><img class="loadingImg" style="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); -webkit-transform:translate(-50%,-50%); z-index:9999; width:75px; height:auto" src="' + context.__root + 'loadingImg1.gif' + '" /></div>');
    }
}

    ,
    "title" : function($, context) {
        return $("title").html();
    },
    "content" : function($, context) {
        return context.select({
            "^/test": { "modules": ["header", "paragraph"], "template" : "mg.phone",
"header-58": function($, context) {
return {
__type:"header",
widgetId: "WIDGET-5a79756970f098f806b8712a",
className:"header-58",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:"true",
content:(function($, context){
$("body").find("script").remove();
var data = {};
data.left = [{
    "link": "/",
    "icon": "home"
}];
data.title = $("title").html();
return data;
}($, context))
}
},"paragraph-59": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5a79756970f098f806b8712b",
className:"paragraph-59",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:"true",
content:(function($, context){
var data = {};
$("body").eq(0).find("form").remove();
data.content = $("body").eq(0).outerHTML();
return data;
}($, context))
}
}
},"^/": { "modules": ["header", "paragraph"], "template" : "index.phone",
"header-53": function($, context) {
return {
__type:"header",
widgetId: "WIDGET-5a7975157ded15fc0681b69b",
className:"header-53",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:"true",
content:(function($, context){
$("body").find("script").remove();
var data = {};
data.left = [{
    "link": "/",
    "icon": "home"
}];
data.title = $("title").html();
return data;
}($, context))
}
},"paragraph-54": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-5a7975157ded15fc0681b69c",
className:"paragraph-54",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
var data = {};
data.content = "ceshiceshi";
return data;
}($, context))
}
}
}
        });
    }
}