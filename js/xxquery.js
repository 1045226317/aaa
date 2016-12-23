
//注意我的写法
var $$ = function() {};
$$.prototype = {
    $id:function(id){
        return document.getElementById(id)
    },
    //封装成一个函数
    BindTemplate:function (data, divid, Template) {
        var html = template(Template, data);
        document.getElementById(divid).innerHTML = html;
    }
}
//在框架中实例化，这样外面使用的使用就不用实例化了
$$ = new $$();

