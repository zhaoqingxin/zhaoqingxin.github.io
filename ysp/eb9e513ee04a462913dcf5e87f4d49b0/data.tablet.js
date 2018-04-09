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
            "^/adsf": { "modules": [], "template" : "haha.tablet",
"default":function($, context) {
return "<h1>待开发之中</h1>";
}
},"^/study": { "modules": ["list_news", "titlebar", "paragraph"], "template" : "stuty.tablet",
"list_news-18": function($, context) {
return {
__type:"list_news",
widgetId: "WIDGET-5862021cdd6da81115b5ffff",
className:"list_news-18",
theme:"default",
options:{"type":"thumb","thumbPosition":"left","morePosition":"bottom"},
realData:true,
content:(function($, context){
/**
 此模块的使用方法：
 这是AMUI新闻列表模块的数据采集代码（JAVAscript），目的是为了将原PC网页的数据提取出来。
 然后将数据装入新闻列表模块的json数据格式返回，返回的数据将自动显示在模块界面上。
 了解AMUI新闻列表的模块详情，请访问http://ide.yunshipei.com/doc/amui/#list-news。

 示例代码：
 var data = {
     // 列表标题
     "header": {
         "title": $(".newshead").find("h2").html(),
         "link": $(".newshead").find("a").attr("href"),
         "moreText": "更多 >",
         "morePosition": "top" // 更多链接位置 [bottom|top]
     },

     // 列表主要内容
     "main": []
 };

 $(".listpart").eq(0).find("li").each(function(){
     data.main.push({
         "title": $(this).find(".headline").find("a").text(), // 新闻标题
         "link": $(this).find(".headline").find("a").attr("href"),  // 新闻链接
         "date": $(this).find(".news-abstr").find(".date").text(),  // 日期
         "desc": $(this).find(".description").html(),  // 摘要信息，支持html
         "img": $(this).find(".news-pic").find("img").src(), // 缩略图地址

         // 数据接口,没有用到，可删除
         "thumbAddition": "", // 缩略图附加信息，可传 html，thumb 模式下有效，显示在缩略图下面
         "mainAddition": ""  // 附加信息，可传 html，任何模式下都有效
     });
 });

 return data;
 */

var data = {
    // 列表标题
    "header": {
        "title": "最新文章",
        "link": "###",
        "moreText": "更多 >",
        "morePosition": "bottom" // 更多链接位置 [bottom|top]
    },

    // 列表主要内容
    "main": [
        {
            "title": "12313", // 新闻标题
            "link": "",  // 新闻链接
            "date": "",  // 日期
            "desc": "",  // 摘要信息，支持html
            "img": "", // 缩略图地址

            // 数据接口
            "thumbAddition": "", // 缩略图附加信息，可传 html，thumb 模式下有效，显示在缩略图下面
            "mainAddition": ""  // 附加信息，可传 html，任何模式下都有效
        }
    ]
};

return data;

}($, context))
}
},"titlebar-19": function($, context) {
return {
__type:"titlebar",
widgetId: "WIDGET-586202307baa840315487d73",
className:"titlebar-19",
theme:"default",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:true,
content:(function($, context){
/*
 titlebar 1.0
 此模块的使用方法： 将原PC网页的数据提取放在这里，最后显示在模块界面上。

 常用用途：通常用来采放logo图片或者title文字。

  示例代码：
    var data = {
    "title": $("#logopart").html(),
    "nav": [
        {
          "link": $("#logopart").find("a").attr("href"),
          "title": "more >",
          "className": ""
        }
      ]
    };
    return data;

    或者：
    var data = {
        "title": "<img src='"+context.__root+"logo.png'>",
        "link": "http://www.yunshipei.com",
        "nav": [
          {
          "link": "http://amazeui.org",
          "title": "更多 >>",
          "className": ""
        }
      ]
    };
    return data;

 */



var data = {
  "title": "第二个页面",      // 主标题
  "link": "",       // 主标题链接，可选
  "nav": [          // 右侧附加链接，可以为多个
    {
      "link": "",
      "title": "",
      "className": ""
    }
  ]
};
return data;

}($, context))
}
},"paragraph-20": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58620243752152f21491cfd8",
className:"paragraph-20",
theme:"default",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "吃饱了不饿"   //填写paragraph的内容
};
return data;

}($, context))
}
},"blank-31": function($, context) {

var __data = (function(){
var data = {
    title: "HTML模板",
    content: "可以填写自定义的内容!",
    html: "<p><strong>支持html标签</strong></p>"
};
return data;
})($ , context);var __result = $.extend(context.__clone(), __data);if(Object.prototype.toString.call(__data) != "[object Object]" || Object.prototype.toString.call(__data) != "[object Array]"){  __result.toString = function(){return __data};  __result.valueOf = function(){return __data};  }
__result.__type = "blank";
__result.widgetId = "WIDGET-5913fec39b64347dc6989140";
__result.id = "blank-31";
return __result;
}
},"^/": { "modules": ["paragraph", "map", "figure", "menu", "list_news", "footer", "navbar", "titlebar"], "template" : "index.tablet",
"paragraph-6": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-57bbeaed7d2906c06c142ff4",
className:"paragraph-6",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "changdhangdslalsdjfalj"  //填写paragraph的内容
};
return data;

}($, context))
}
},"map-10": function($, context) {
return {
__type:"map",
widgetId: "WIDGET-5810946d0085835dc3e876af",
className:"map-10",
theme:"default",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:"",
content:(function($, context){
var data = {
    // 地图选项
    "options": {
        "name": "云适配", //公司名称
        "address": "北京市海淀区海淀大街27号亿景大厦3层西区" // 公司地址
    }
}

return data;

}($, context))
}
},"figure-30": function($, context) {
return {
__type:"figure",
widgetId: "WIDGET-58f5ca473d939a8d9ef487d0",
className:"figure-30",
theme:"default",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","figcaptionPosition":"bottom","zoomAble":"auto"},
realData:true,
content:(function($, context){
/*
  figure: 1.0
  此模块的使用方法：采集原PC网站目标元素的img路径以及一些简单文字。
  常用用途：这个模块适合填写单张展示图片以及一些简单描述。
  了解AMUI的模块详情，请访问http://ide.yunshipei.com/doc/amui/#figure。

         var data = {
            "img": $("#nav").find("img").src(),
            "rel": "",
            "imgAlt": "",
            "figcaption": ""
         };
         return data;
 */

var data = {
    "img": $("img").eq(1).src(), // 图片（缩略图）路径
    "rel": "", // 大图路径
    "imgAlt": "", // 图片alt描述，如果为空则读取 figcaption
    "figcaption": "" // 图片标题
};

return data;

}($, context))
}
},"menu-29": function($, context) {
return {
__type:"menu",
widgetId: "WIDGET-58dc692f3f6a4d70c2315594",
className:"menu-29",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:"",
content:(function($, context){
/*
 此模块的使用方法：通过循环采集数据，通过json数据返回到手机菜单部分。

 常用用途：通常用来采集导航菜单的所有菜单项，有直接呈现的菜单、有下滑菜单以及侧滑菜单。

 了解AMUI菜单的模块详情，请访问http://ide.yunshipei.com/doc/amui/#menu。

    代码示例   ——  默认主题下:

     var data = [];
     $("#nav").children("li").each(function(){
         data.push({
             "title": $(this).find("a").eq(0).html(),
             "link": $(this).find("a").eq(0).attr("href")
         });
     });
     return data;

    代码示例   ——  s2(下拉菜单)主题：

     var subMenu = [];
     var data = [{
         "title": "",
         "link": "",
         "className": "",

         "subMenu": subMenu,
         "subCols": 3
     }];
     $("#nav").children("li").each(function(i,item){
         subMenu.push({
             "title": $(this).find("a").eq(0).html(),
             "link": $(this).find("a").eq(0).attr("href")
         });
     });
     return data;
 */

var data = [
    {
        "title": "",            // 一级菜单标题
        "link": "",             // 一级菜单链接
        "className": "",
        "subMenu": [
            {                   // 二级菜单
                "title": "",    // 二级菜单标题
                "link": "",     // 二级菜单链接
                "target": ""
            }
        ],
        "subCols": 3            // 设置二级菜单列数
    }
];

return data;

}($, context))
}
},"list_news-12": function($, context) {
return {
__type:"list_news",
widgetId: "WIDGET-581946bc375572bf4b7b4a4f",
className:"list_news-12",
theme:"one",
options:{"type":"thumb","thumbPosition":"left","morePosition":"bottom"},
realData:"",
content:(function($, context){
/**
 此模块的使用方法：
 这是AMUI新闻列表模块的数据采集代码（JAVAscript），目的是为了将原PC网页的数据提取出来。
 然后将数据装入新闻列表模块的json数据格式返回，返回的数据将自动显示在模块界面上。
 了解AMUI新闻列表的模块详情，请访问http://ide.yunshipei.com/doc/amui/#list-news。

 示例代码：
 var data = {
     // 列表标题
     "header": {
         "title": $(".newshead").find("h2").html(),
         "link": $(".newshead").find("a").attr("href"),
         "moreText": "更多 >",
         "morePosition": "top" // 更多链接位置 [bottom|top]
     },

     // 列表主要内容
     "main": []
 };

 $(".listpart").eq(0).find("li").each(function(){
     data.main.push({
         "title": $(this).find(".headline").find("a").text(), // 新闻标题
         "link": $(this).find(".headline").find("a").attr("href"),  // 新闻链接
         "date": $(this).find(".news-abstr").find(".date").text(),  // 日期
         "desc": $(this).find(".description").html(),  // 摘要信息，支持html
         "img": $(this).find(".news-pic").find("img").src(), // 缩略图地址

         // 数据接口,没有用到，可删除
         "thumbAddition": "", // 缩略图附加信息，可传 html，thumb 模式下有效，显示在缩略图下面
         "mainAddition": ""  // 附加信息，可传 html，任何模式下都有效
     });
 });

 return data;
 */

var data = {
    // 列表标题
    "header": {
        "title": "最新文章",
        "link": "###",
        "moreText": "更多 >",
        "morePosition": "bottom" // 更多链接位置 [bottom|top]
    },

    // 列表主要内容
    "main": [
        {
            "title": "", // 新闻标题
            "link": "",  // 新闻链接
            "date": "",  // 日期
            "desc": "",  // 摘要信息，支持html
            "img": "", // 缩略图地址

            // 数据接口
            "thumbAddition": "", // 缩略图附加信息，可传 html，thumb 模式下有效，显示在缩略图下面
            "mainAddition": ""  // 附加信息，可传 html，任何模式下都有效
        }
    ]
};

return data;

}($, context))
}
},"paragraph-21": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-587c3bb00b94bd30fd3a617f",
className:"paragraph-21",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "wodeadfafass"   //填写paragraph的内容
};
return data;

}($, context))
}
},"footer-28": function($, context) {
return {
__type:"footer",
widgetId: "WIDGET-58d8ae4b15a3c9e41f3dbe19",
className:"footer-28",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:"",
content:(function($, context){
/*
 此模块的使用方法：直接书写需要填写的公司字号，地址等内容。
 
 常用用途：放在页面底部，书写公司的名称或者地址等信息。
 
 了解AMUI模块详情，请访问http://ide.yunshipei.com/doc/amui/#footer。

         示例代码：
         var data = {
             "lang"      : context.__lang, 
             "owner"     : "xxx",      
             "companyInfo": [{       
                  "detail": "xxx"   
                 },{
                 "detail": "<a href = 'www.xxx.com' > xxx </a>"  
                 }]
         };
         return data;
 */

var data = {
    "lang": context.__lang,     // 默认，无需改动。若改动赋值为“en”则为英文，否则为中文！
    "owner": "",                // 网站名字 可以填写公司名称或者其他内容。
    "companyInfo": [
        {                       // 网站信息
            "detail": ""        // 必要时可加 a 标签跳转到某个页面，网站的详细信息，在页面中的footer部分就可以看到这里的文字
        },
        {
            "detail": ""        // 必要时可加 a 标签跳转到某个页面，网站的详细信息，在页面中的footer部分就可以看到这里的文字
        }
    ]
};
return data;

}($, context))
}
},"navbar-22": function($, context) {
return {
__type:"navbar",
widgetId: "WIDGET-58aaaa5dd99e805ea2d2b9ef",
className:"navbar-22",
theme:"default",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","cols":4},
realData:true,
content:(function($, context){
var data = [
    {
        "title": "二维码",        // title 值：要显示的文本

        "link": "",         // link 值 ：如果是电话则写"tel:0101245678"

        "customIcon": "",   // customIcon与下边的icon选用其中之一，customIcon用于上传自定义的小图标，写法："customIcon": context.__root + "xxx.png"

        "icon": "qrcode",         //icon 值,例如：分享的图标在AMUI中是am-icon-share ，则此时的icon写法为： "icon": "share" 

        "dataApi": "data-am-navbar-qrcode"       //dataApi 值可以填写"data-am-navbar-share"（用于分享模块） 或者"data-am-navbar-qrcode"(用于二维码模块)。若要使用自己上传的二维码 'data-am-navbar-qrcode = 二维码地址' 即可
    },
    {
        "title": "tel",        // title 值：要显示的文本

        "link": "tel:0101245678",         // link 值 ：如果是电话则写"tel:0101245678"

        "customIcon": "",   // customIcon与下边的icon选用其中之一，customIcon用于上传自定义的小图标，写法："customIcon": context.__root + "xxx.png"

        "icon": "phone",         //icon 值,例如：分享的图标在AMUI中是am-icon-share ，则此时的icon写法为： "icon": "share" 

        "dataApi": ""       //dataApi 值可以填写"data-am-navbar-share"（用于分享模块） 或者"data-am-navbar-qrcode"(用于二维码模块)。若要使用自己上传的二维码 'data-am-navbar-qrcode = 二维码地址' 即可
    },
    {
        "title": "分享",        // title 值：要显示的文本

        "link": "",         // link 值 ：如果是电话则写"tel:0101245678"

        "customIcon": "",   // customIcon与下边的icon选用其中之一，customIcon用于上传自定义的小图标，写法："customIcon": context.__root + "xxx.png"

        "icon": "share",         //icon 值,例如：分享的图标在AMUI中是am-icon-share ，则此时的icon写法为： "icon": "share" 

        "dataApi": "data-am-navbar-share"       //dataApi 值可以填写"data-am-navbar-share"（用于分享模块） 或者"data-am-navbar-qrcode"(用于二维码模块)。若要使用自己上传的二维码 'data-am-navbar-qrcode = 二维码地址' 即可
    },
];
return data;
}($, context))
}
},"map-17": function($, context) {
return {
__type:"map",
widgetId: "WIDGET-58614429dd6da81115b5fffe",
className:"map-17",
theme:"default",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:"",
content:(function($, context){
var data = {
    // 地图选项
    "options": {
        "name": "云适配", //公司名称
        "address": "北京市海淀区海淀大街27号亿景大厦3层西区" // 公司地址
    }
}

return data;

}($, context))
}
},"map-15": function($, context) {
return {
__type:"map",
widgetId: "WIDGET-586142ab752152f21491cfd4",
className:"map-15",
theme:"default",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:"",
content:(function($, context){
var data = {
    // 地图选项
    "options": {
        "name": "云适配", //公司名称
        "address": "北京市海淀区海淀大街27号亿景大厦3层西区" // 公司地址
    }
}

return data;

}($, context))
}
},"paragraph-14": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-586141f0dd6da81115b5fffd",
className:"paragraph-14",
theme:"default",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom","imgLightbox":false,"tableScrollable":false},
realData:true,
content:(function($, context){
/*
 此模块的使用方法： 将原PC网页的数据（dom结构）提取放在这里，最后显示在模块界面上。
 
 常用用途：通常用来采放整个的dom内容（在有数据交互的页面中使用较多）。
 
 了解AMUI段落的模块详情，请访问http://ide.yunshipei.com/doc/amui/#paragraph。

         示例代码：
        
         var data = {
            "content": $(".xxx").html()
         };
         return data;
    
*/

var data = {
    "content": "哈哈哈哈"   //填写paragraph的内容
};
return data;

}($, context))
}
},"titlebar-13": function($, context) {
return {
__type:"titlebar",
widgetId: "WIDGET-58613fa6dd6da81115b5fffc",
className:"titlebar-13",
theme:"default",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:true,
content:(function($, context){
/*
 titlebar 1.0
 此模块的使用方法： 将原PC网页的数据提取放在这里，最后显示在模块界面上。

 常用用途：通常用来采放logo图片或者title文字。

  示例代码：
    var data = {
    "title": $("#logopart").html(),
    "nav": [
        {
          "link": $("#logopart").find("a").attr("href"),
          "title": "more >",
          "className": ""
        }
      ]
    };
    return data;

    或者：
    var data = {
        "title": "<img src='"+context.__root+"logo.png'>",
        "link": "http://www.yunshipei.com",
        "nav": [
          {
          "link": "http://amazeui.org",
          "title": "更多 >>",
          "className": ""
        }
      ]
    };
    return data;

 */



var data = {
  "title": "zhaoqingxin",      // 主标题
  "link": "",       // 主标题链接，可选
  "nav": [          // 右侧附加链接，可以为多个
    {
      "link": "",
      "title": "",
      "className": ""
    }
  ]
};
return data;

}($, context))
}
}
},"^/test": { "modules": ["paragraph"], "template" : "mg.tablet",
"paragraph-24": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58ad26e2aae1fe0363d6ca43",
className:"paragraph-24",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:"true",
content:(function($, context){
$("body").find("script").remove();
var data = {};
data.content = $(".tdBorder").eq(2).outerHTML();
return data;
}($, context))
}
},"paragraph-25": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58ad26eaaae1fe0363d6ca44",
className:"paragraph-25",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:"true",
content:(function($, context){
$("body").find("script").remove();
var data = {};
data.content = $(".tdBorder").eq(4).outerHTML();
return data;
}($, context))
}
},"paragraph-26": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58ad27baaae1fe0363d6ca45",
className:"paragraph-26",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:"true",
content:(function($, context){
$("body").find("script").remove();
var data = {};
data.content = $(".label").eq(2).outerHTML();
return data;
}($, context))
}
},"paragraph-27": function($, context) {
return {
__type:"paragraph",
widgetId: "WIDGET-58ad27c2aae1fe0363d6ca46",
className:"paragraph-27",
theme:"one",
options:{"type":"normal","thumbPosition":"bottom-left","morePosition":"bottom"},
realData:"true",
content:(function($, context){
$("body").find("script").remove();
var data = {};
data.content = $(".verifyCode").eq(0).outerHTML();
return data;
}($, context))
}
}
}
        });
    }
}