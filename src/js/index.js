$(function () {
    //轮播图
    banner();

    //tab切换
    initTabl();

    //初始化工具提示
    $('[data-toggle="tooltip"]').tooltip();


    //newHand();
});


//轮播图部分
var banner = function () {
    //1 模拟数据
    var data=[
        {
            pcUrl:'images/slide_01_2000x410.jpg',
            mUrl:'images/slide_01_640x340.jpg'

        },
        {
            pcUrl:'images/slide_02_2000x410.jpg',
            mUrl:'images/slide_02_640x340.jpg'
        },
        {
            pcUrl:'images/slide_03_2000x410.jpg',
            mUrl:'images/slide_03_640x340.jpg'
        },
        {
            pcUrl:'images/slide_04_2000x410.jpg',
            mUrl:'images/slide_04_640x340.jpg'
        }
    ];

    //2 动态渲染
    var render= function () {
      //判断当前设备
        var isMobile=$(window).width()<768?true:false;
      //获取动态的点盒子和图片盒子
        var $pointBox=$('.carousel-indicators');
        var $imageBox=$('.carousel-inner');
        //html代码生成
        var pointHtml='';
        var imageHtml='';
        //根据数据和设备，遍历data
        $.each(data, function (i,item) {
            pointHtml += '<li data-target="#carousel-example-generic" data-slide-to="'+i+'" class="'+(i==0?'active':'')+'"></li>';
            imageHtml += '<div class="item '+(i==0?'active':'')+'">';
            if(isMobile){
                //拼接移动端的html
                imageHtml+='<a href="#" class="m_imgBox hidden-lg hidden-md hidden-sm"><img src="'+item.mUrl+'" alt=""></a>';
            }else{
                //拼接pc端的html
               imageHtml+='<a class="pc_imgBox hidden-xs" href="#" style="background-image: url('+item.pcUrl+')"></a>';
            }
            imageHtml+='</div>';
        });
        $pointBox.html(pointHtml);
        $imageBox.html(imageHtml);
    };

    //3 测试功能
    $(window).on('resize', function () {
       render();
    }).trigger('resize');
    //4 手势切换
    var startX=0;
    var distance=0;
    var isMove=false;
    $('.wjs_banner').on('touchstart', function (e) {
        startX= e.originalEvent.touches[0].clientX;
    }).on('touchmove', function (e) {
        var moveX= e.originalEvent.touches[0].clientX;
        distance=moveX-startX;
        isMove=true;
    }).on('touchend', function (e) {
        if(isMove && Math.abs(distance)>50){
            if(distance>0){
                $('.carousel').carousel('prev');
            }else{
                $('.carousel').carousel('next');
            }
        }
        //5 重置
        startX=0;
        distance=0;
        isMove=false;
    });
};

//产品部分table切换
var initTabl= function () {
    var $parent=$('.wjs_product .nav-tabs-parent');
    var $child=$parent.children();
    var width=0;
    $child.find('li').each(function () {
        width+=$(this).outerWidth(true);
    });
    $child.width(width);
    new IScroll('.nav-tabs-parent',{
       scrollX:true,
        scrollY:false
    });
};

//var newHand= function () {
//    var wjs_newHand_new=document.querySelectorAll('.wjs_newHand_new');
//    for (var i = 0; i < wjs_newHand_new.length; i++) {
//        wjs_newHand_new[0].style.backgroundColor='pink';
//        wjs_newHand_new[i].onmouseover= function () {
//            for (var i = 0; i < wjs_newHand_new.length; i++) {
//                wjs_newHand_new[i].style.backgroundColor='';
//            }
//            this.style.backgroundColor='pink';
//        };
//    }
//};



















