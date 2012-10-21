/*
 * Hugo Flores <harmando@itexico.com>
 * oct, 2012
 */
App.UI.chart = {
	/**
	 * Initializes the class
	 **/
	init: function(data) {
		
	// INSTANTIATION
		var style					= App.UI.chart.style;
		var win						= Ti.UI.createWindow(style.win);
		var chartWView				= Ti.UI.createWebView(style.chartWView);

	
	// STYLING
		var saveBtn = Ti.UI.createButton({
			title:"Guardar",
			color:'#fff',
			font:{fontSize:20}
		});
		win.rightNavButton = saveBtn;
		//win.title = _title;
			
	// ADDITIONS  
		win.add(chartWView);

	// CODE
		var years = "";
		var values = "";
		for(var i=0;i<data.length;i++){
			if(i==0){
				years = data[i].year;
				values = data[i].data.replace(",","");
			}else{
				years = years+"%7C"+data[i].year;
				values = values+","+data[i].data.replace(",","");
			}
		}
		//alert(values);
		chartWView.url = "https://chart.googleapis.com/chart?chs=250x250&chd=t:"+values+"&cht=lc&chl="+years+"&chco=4D89F9";

		
		
	// LISTENERS
	
	return win;
	
	}
	
};