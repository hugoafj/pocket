/*
 * Hugo Flores <harmando@itexico.com>
 * oct, 2012
 */
App.UI.tabulate = {
	/**
	 * Initializes the class
	 **/
	init: function(_data) {
		
	// INSTANTIATION
		var style					= App.UI.tabulate.style;
		var win						= Ti.UI.createWindow(style.win);
		var tabulateTable			= Ti.UI.createTableView(style.tabulateTable);

	
	// STYLING

			
	// ADDITIONS  
		win.add(tabulateTable);

	// CODE
		var tabulateTableRows 	= [];
		
		var yearLabel 			= Ti.UI.createLabel({text:"Año",width:40,height:30,left:5, color:"blue"});
		var dataLabel 			= Ti.UI.createLabel({text:"Dato",width:70,height:30,left:80, color:"blue"});
		var absLabel 	    	= Ti.UI.createLabel({text:"Abs",width:40,height:30,left:185, color:"blue"});
		var percentLabel 		= Ti.UI.createLabel({text:"%",width:40,height:30,left:275, color:"blue"});

		var tempRow 			= Ti.UI.createTableViewRow();
		tempRow.add(yearLabel);
		tempRow.add(dataLabel);
		tempRow.add(absLabel);
		tempRow.add(percentLabel);
		tabulateTableRows.push(tempRow);


		for(var i=0;i<_data.length;i++){
			var yearLabel 			= Ti.UI.createLabel({text:_data[i].year,width:40,height:30,left:5});
			var dataLabel 			= Ti.UI.createLabel({text:_data[i].data,width:100,height:30,left:80});
			var absLabel 	    	= Ti.UI.createLabel({text:_data[i].abs,width:100,height:30,left:185});
			var percentLabel 		= Ti.UI.createLabel({text:_data[i].percent,width:40,height:30,left:275});
	
			var tempRow 			= Ti.UI.createTableViewRow();
			tempRow.add(yearLabel);
			tempRow.add(dataLabel);
			tempRow.add(absLabel);
			tempRow.add(percentLabel);
			tabulateTableRows.push(tempRow);
	    }
		
 	   	tabulateTable.setData(tabulateTableRows);
		
	// LISTENERS
	
	return win;
	
	}
	
};