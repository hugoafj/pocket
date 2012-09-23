/*
 * Hugo Flores <harmando@itexico.com>
 * sep, 2012
 */
App.UI.subMenu = {
	/**
	 * Initializes the class
	 **/
	init: function(_data) {
		
	// INSTANTIATION
		var style					= App.UI.subMenu.style;
		var win						= Ti.UI.createWindow(style.win);
		var subMenuTable			= Ti.UI.createTableView(style.subMenuTable);
	
	// STYLING

		
	// ADDITIONS  
		win.add(subMenuTable);

	// CODE

		var subMenuData = [];
		for(var i=0;i<_data.length;i++){
			if(_data[i].submenu)
				subMenuData.push({title:_data[i].title, hasChild:true});
			else
				subMenuData.push({title:_data[i].title, hasChild:false});
		}
		

		
		subMenuTable.setData(subMenuData);
	
	// LISTENERS
	
	
	
	
	
	
	return win;
	
	}
	
};