console.log('list loading...');
$(function () { 
    var ListItem = {
        init: function() { 
            this.getListItem();
        },
        getListItem: function() { 
            $.ajax({
                type: "get",
                url: "http://127.0.0.1:8080/api/list",
                dataType: "json",
                success: function (result) { 
                    console.log(result);
                    if (result && result.code === 200) { 
                        var data = result.data;
                        var listHtml = "";
                        for (var i = 0; i < data.length; i++) { 
                            console.log(data[i]);
                            listHtml += ' <h1 class="money">'
                                + data[i].title + '</h1>'
                                + '<div class="money-type">'
                                + ' <span class="incre">'+data[i].type+'</span> '
                                + ' <span class="invest">'+data[i].invest+'</span>'
                                + '</div>'
                                + '<p class="invest-start">起投金额（元）</p>'
                                + '<p class = "start-detail num">'+data[i].investmoney+'</p>'
                                + '<div class="tab">'
                                + ' <div class="item">'
                                + '  <p class="year">产品期限（年）</p>'
                                + '  <P class="detail num">'+data[i].productyield+'</P>'
                                + '</div>'
                                + '<div class="item">'
                                + ' <p class="increa">递增金额（元）</p>'
                                + ' <p class="detail num">'+data[i].increase+'</p>'
                                + '</div>'
                                + '</div>'
                                + '<a class="order" href="">立即预约</a>'
                                + '<div class="list_b"></div>';
                        }
                        $(".product-item").html(listHtml);
                    }else { 
                        alert("服务器异常");
                    }
                }
            });
        }
    } 
    ListItem.init();
})