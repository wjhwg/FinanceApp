console.log('slider loading...');
$(function () { 
    var Slider = {
        //初始化
        init: function () { 
            this.renderSlider();
        },
        //渲染
        renderSlider: function () { 
            console.log("render");
            $.ajax({
                type: "get",
                url: "http://127.0.0.1:8080/api/slider",
                dataType: "json",
                success: function (result) { 
                    console.log(result);
                    if (result && result.code === 200) {
                        console.log(result.data);
                        var data = result.data;
                        var sliderHTML = "";
                        for (var i = 0; i < data.length; i++) {
                            console.log(data[i].imgUrl);
                            sliderHTML += '<div class="swiper-slide">'
                                + '<a href="' + data[i].linkUrl + '">'
                                + '<img src="' + data[i].imgUrl + '" alt="">'
                                + '</a>'
                                + '</div>'
                        }
                        $(".swiper-wrapper").html(sliderHTML);
                    } else { 
                        alert("服务器异常");
                    }
                }
            }).done(function () { 
                var swiper = new Swiper('.swiper-container', {
                    pagination: {
                        el: '.swiper-pagination',
                
                    },
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    }
                });                
                console.log("all over");
            });
        }
    }
    //执行
    Slider.init();
});