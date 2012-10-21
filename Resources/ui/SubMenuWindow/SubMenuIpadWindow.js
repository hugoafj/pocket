/*
 * Hugo Flores <harmando@itexico.com>
 * oct, 2012
 */
App.UI.subMenu = {
	/**
	 * Initializes the class
	 **/
	init: function(_data,_title) {
		
	// INSTANTIATION
		var style					= App.UI.subMenu.style;
		var win						= Ti.UI.createWindow(style.win);
		var mainScrollView			= Ti.UI.createWindow(style.mainScrollView);

	
	// STYLING
		var saveBtn = Ti.UI.createButton({
			title:"Guardar",
			color:'blue',
			font:{fontSize:20}
		});
		win.rightNavButton = saveBtn;
		win.title = _title;
			
	// ADDITIONS  
		win.add(mainScrollView);

	// CODE
		var leftColumn 		= Ti.UI.createView({layout:"vertical",width:300,left:0});
		var titleLabel 		= Ti.UI.createLabel({text:"INDICADORES",width:299});
		leftColumn.add(titleLabel);
		mainScrollView.add(leftColumn);
		var yearsScrollView = Ti.UI.createScrollView({layout:"vertical", backgroundColor:"red", left:300});
		mainScrollView.add(yearsScrollView);
			
		for(var i=0;i<_data.length;i++){
			//alert(i)
			var titleTemp 		= Ti.UI.createLabel({text:_data[i].title,width:299});
			leftColumn.add(titleTemp);
		}
		
		
	// LISTENERS
		
	
	
	
	
	return win;
	
	}
	
};