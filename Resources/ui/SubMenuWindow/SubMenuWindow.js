/*
 * Hugo Flores <harmando@itexico.com>
 * sep, 2012
 */
App.UI.subMenu = {
	/**
	 * Initializes the class
	 **/
	init: function(_data,_title) {
		//Ti.API.info(JSON.stringify(_data));
	// INSTANTIATION
		var style					= App.UI.subMenu.style;
		var win						= Ti.UI.createWindow(style.win);
		var subMenuTable			= Ti.UI.createTableView(style.subMenuTable);
		var yearIndex				= 0;
	
	// STYLING
		var l = Ti.UI.createLabel({
			text:"Ultimo Dato",
			color:'#fff',
			font:{fontSize:16}
		});
		win.rightNavButton = l;
		win.title = _title;
			
	// ADDITIONS  
		win.add(subMenuTable);

	// CODE
		var subMenuData = [];
		for(var i=0;i<_data.length;i++){
			var label 		= Ti.UI.createLabel({text:_data[i].years[_data[i].years.length-1].data,width:70,height:30,top:0,right:0});
			var labelTitle	= Ti.UI.createLabel({text:_data[i].title,height:Ti.UI.SIZE,top:0,right:70,left:0});
			if(_data[i].submenu){
				//subMenuData.push({title:_data[i].title, hasChild:false}); // true if sub menu
				var tempRow = Ti.UI.createTableViewRow();
				tempRow.add(label);
				tempRow.add(labelTitle);
				tempRow.data = _data[i].years;
				subMenuData.push(tempRow);
			}else{
				var tempRow = Ti.UI.createTableViewRow();
				tempRow.add(label);
				tempRow.add(labelTitle);
				tempRow.data = _data[i].years;
				subMenuData.push(tempRow);
			}
		}
		
		subMenuTable.setData(subMenuData);

		

		
		
	// LISTENERS
		subMenuTable.addEventListener("click",function(_event){
			if(_event.index >= 0){
				var dialog = Titanium.UI.createOptionDialog({
		    		options: ['Ver Grafica','Ver Detalles','Ver Tabulado','Cancel'],
		    		cancel:3
		    	});
				dialog.show();
				dialog.addEventListener('click',function(e){
					if(e.index == 0){
						 // Grafica
						 //Ti.API.info(JSON.stringify(_event.row.data));
						 App.UI.navBar.open(App.UI.chart.init(_event.row.data),{animated:true});
						
					}else if(e.index == 1){
						// Comparativo
	
					}else if(e.index == 2){
						// Tabulado
						 App.UI.navBar.open(App.UI.tabulate.init(_event.row.data),{animated:true});
	
					}

				});	
			}
		});
		
	
	
	
	
	return win;
	
	}
	
};