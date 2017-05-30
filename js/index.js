var works=[
	{
		title: "",
		description: "熱辣辣的夏日，來杯沁涼的水果冰沙吧！",
		url: "https://scontent.xx.fbcdn.net/v/t1.0-9/13166092_1080364368690129_3228428343252982017_n.jpg?oh=d87388818b164762ff4697b9c06a89e6&oe=59B987FA"
	},
	{
		title: "",
		description: "想提早準備考試的同學一樣可以來店裡看書喔～",
		url: "http://tkunetnews.tku.edu.tw/wp-content/uploads/2017/03/226C1-2.jpg"
	},
	{
		title: "",
		description: "沒出遠門的朋友們來夜巴黎喝杯下午茶吧～",
		url: "https://scontent.xx.fbcdn.net/v/t1.0-9/12931231_1063359240390642_8421467820778690925_n.png?oh=cf76938e715ca3ede2c5b6c9d1aa6c5a&oe=59B9B731"
	},
	{
		title: "",
		description: "還沒喝過的趕快『揪朋友一起來喝吧』～",
		url: "https://scontent.xx.fbcdn.net/v/t1.0-9/13254343_1095166470543252_5615570401783750659_n.png?oh=b28b2e8033e10681796bc3514134701b&oe=59C11A7F"
	},
	{
		title: "",
		description: "上等愛文芒果，衝擊你的味蕾!",
		url: "https://scontent.xx.fbcdn.net/v/t1.0-9/13232876_1086535584739674_7371925912503205009_n.jpg?oh=87a7ad11d730a43de0dad6939cd0cabd&oe=59B3F7F2"
	}
];
var vm =new Vue({
	el: "#app",
	data: {
		now_index: 0,
		span: 1150,
		works: works
	},
	computed:{
		compute_left(){
			var result={
				"left": (this.now_index*-this.span)+"px"
			};
			return result;
		}
	},
	methods: {
		delta(d){
			this.now_index=(this.now_index + d + this.works.length)%this.works.length
			console.log(this.now_index)
		},
		bg_css(url){
			return{
				"background-image":"url("+url+")"
			}
		}
}
})



$(document).ready(function() {

  $('.slideshow').cycle({
  
    fx:'fade',      /* type of transition */
    timeout: 2000,  /* time between transitions */
    pause:1,        /* allows mouse hover to pause */
    speed: 800     /* how fast to transition */
   
  });

});