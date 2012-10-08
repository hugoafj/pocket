/*
 * Hugo Flores <harmando@itexico.com>
 * sep, 2012
 */
App.UI.subMenu = {
	/**
	 * Initializes the class
	 **/
	init: function(_data,_title) {
		
	// INSTANTIATION
		var style					= App.UI.subMenu.style;
		var win						= Ti.UI.createWindow(style.win);
		var subMenuTable			= Ti.UI.createTableView(style.subMenuTable);
		var yearIndex				= 0;
	
	// STYLING
		var l = Ti.UI.createLabel({
			text:_data[0].years[yearIndex].year,
			color:'#fff',
			font:{fontSize:20}
		});
		win.rightNavButton = l;
		win.title = _title;
			
	// ADDITIONS  
		win.add(subMenuTable);

	// CODE
		var subMenuData = [];
		for(var i=0;i<_data.length;i++){
			var label 		= Ti.UI.createLabel({text:_data[i].years[yearIndex].data,width:70,height:30,top:0,right:0});
			var labelTitle	= Ti.UI.createLabel({text:_data[i].title,height:Ti.UI.SIZE,top:0,right:70,left:0});
			if(_data[i].submenu){
				//subMenuData.push({title:_data[i].title, hasChild:false}); // true if sub menu
				var tempRow = Ti.UI.createTableViewRow();
				tempRow.add(label);
				tempRow.add(labelTitle);
				subMenuData.push(tempRow);
			}else{
				var tempRow = Ti.UI.createTableViewRow();
				tempRow.add(label);
				tempRow.add(labelTitle);
				subMenuData.push(tempRow);
			}
		}
		
		subMenuTable.setData(subMenuData);
		
		var b = Titanium.UI.createButton({
			title:_data[0].years[yearIndex+1].year,
			style:Titanium.UI.iPhone.SystemButtonStyle.DONE
		});
		b.addEventListener("click",function(){
			if(_data[0].years[yearIndex+1]){
				yearIndex = yearIndex+1;
				b2.title = _data[0].years[yearIndex-1].year;
				
				subMenuData = [];
				for(var i=0;i<_data.length;i++){
					var label 		= Ti.UI.createLabel({text:_data[i].years[yearIndex].data,width:70,height:30,top:0,right:0});
					var labelTitle	= Ti.UI.createLabel({text:_data[i].title,height:Ti.UI.SIZE,top:0,right:70,left:0});
					if(_data[i].submenu){
						//subMenuData.push({title:_data[i].title, hasChild:false}); // true if sub menu
						var tempRow = Ti.UI.createTableViewRow();
						tempRow.add(label);
						tempRow.add(labelTitle);
						subMenuData.push(tempRow);
					}else{
						var tempRow = Ti.UI.createTableViewRow();
						tempRow.add(label);
						tempRow.add(labelTitle);
						subMenuData.push(tempRow);
					}
				}
				subMenuTable.setData(subMenuData);
				
				l.text = _data[0].years[yearIndex].year;
				if(_data[0].years[yearIndex+1])
					b.title = _data[0].years[yearIndex+1].year;
				else
					b.title = "N/A";
			}
		});
		var b2 = Titanium.UI.createButton({
			title:"N/A",
			style:Titanium.UI.iPhone.SystemButtonStyle.DONE
		});
		b2.addEventListener("click",function(){
			if(_data[0].years[yearIndex-1]){
				yearIndex = yearIndex-1;
				b2.title = "N/A";
				
				subMenuData = [];
				for(var i=0;i<_data.length;i++){
					var label 		= Ti.UI.createLabel({text:_data[i].years[yearIndex].data,width:70,height:30,top:0,right:0});
					var labelTitle	= Ti.UI.createLabel({text:_data[i].title,height:Ti.UI.SIZE,top:0,right:70,left:0});
					if(_data[i].submenu){
						//subMenuData.push({title:_data[i].title, hasChild:false}); // true if sub menu
						var tempRow = Ti.UI.createTableViewRow();
						tempRow.add(label);
						tempRow.add(labelTitle);
						subMenuData.push(tempRow);
					}else{
						var tempRow = Ti.UI.createTableViewRow();
						tempRow.add(label);
						tempRow.add(labelTitle);
						subMenuData.push(tempRow);
					}
				}
				subMenuTable.setData(subMenuData);
				
				l.text = _data[0].years[yearIndex].year;
				
				b.title = _data[0].years[yearIndex+1].year;
			}
		});
		var flexSpace = Titanium.UI.createButton({
			systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		});

		win.setToolbar([b2,flexSpace,b]);

		
		
	// LISTENERS
	
	
	
	
	
	
	return win;
	
	}
	
};