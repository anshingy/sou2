$(document).ready(function() {
    //判断窗口大小，添加输入框自动完成
    var wid = $("body").width();
    if (wid < 640) {
        $(".wd").attr('autocomplete', 'off');
    }else{
        $(".wd").focus();
    }
    //按钮
    $(".sou li").click(function() {
        var dt = $(this).attr('data-s');
        wd = $(".wd").val();
        if (dt == "google") {
            if (wd == "" || wd == null) {
                window.location.href = "https://www.google.com/?hl=zh";
            } else {
                $(".t").val("g");
                $("form").submit();
            }
        } else {
            if (wd == "" || wd == null) {
                window.location.href = "https://www.baidu.com/?tn=simple";
            } else {
                $(".t").val("b");
                $("form").submit();
            }
        }

    });
    //菜单点击
    $("#menu").click(function(event) {
        $(this).toggleClass('on');
        $(".list").toggleClass('closed');
        //$(".mywth").toggleClass('hidden');
    });
    $("#content").click(function(event) {
        $(".on").removeClass('on');
        $(".list").addClass('closed');
        //$(".mywth").removeClass('hidden');
    });

});
