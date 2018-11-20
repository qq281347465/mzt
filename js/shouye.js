	<!--自动轮播-->

		var slider = mui("#slider");
                    slider.slider({
                        interval: 2000//自动轮播周期，若为0则不自动播放，默认为0；
                    });
<!--上拉刷新-->
function pullupLoad() {

setTimeout(function() {

var listData = loadList(++currPage);

count += listData.length;

var liHtml = compiler(listData);

$('.mui-table-view').append(liHtml);

mui('#pullrefresh').pullRefresh().endPullupToRefresh((count >= totalCount));

}, 500);

}
