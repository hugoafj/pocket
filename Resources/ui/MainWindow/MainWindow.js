/*
 * Hugo Flores <harmando@itexico.com>
 * sep, 2012
 */
App.UI.app = {
	/**
	 * Initializes the class
	 **/
	init: function() {
		
	// INSTANTIATION
		var style					= App.UI.app.style;
		App.UI.app.mainWin			= Ti.UI.createWindow(style.mainWin);
		App.UI.navBar				= Ti.UI.iPhone.createNavigationGroup();
		var win						= Ti.UI.createWindow(style.win);
		App.UI.app.menuTable		= Ti.UI.createTableView(style.menuTable);
		App.UI.app.data				= [];
		
	// STYLING
		App.UI.navBar.window = win;
		
	// ADDITIONS  
		App.UI.app.mainWin.add(App.UI.navBar);
		win.add(App.UI.app.menuTable);
		
	// CODE
		
		
		var anXhr = Ti.Network.createHTTPClient();
		
		anXhr.onload = function(e) {
			if (e.error){
				alert('error ' + JSON.stringify(e.error));
				alert('The HTTP request failed');
				App.API.DB.getRecords(function(_data){
					//Ti.API.info(_data);
					 _data = JSON.parse(_data[0].data);
					App.UI.app.data = _data;
					App.UI.app.mainWin.open();
					var menuData = [];
					for(var i=0;i<_data.length;i++){
						menuData.push({title:_data[i].title, hasChild:true});
					}
					
					App.UI.app.menuTable.setData(menuData);
				});
				return;
			}
			//Ti.API.info("1 -> "+JSON.stringify(this.responseText));
			//data = JSON.parse(this.responseText);
			
			// LOGIN
			
			var data = [
			{
				id:1,
				title:"Empleo",
				submenu:[
						{
							id:1,
							title:"Poblacion ocupada Naciona vs Jalisco",
							years:	[{
										year:"2005",
										data:"150"
									},{
										year:"2006",
										data:"30"
									},{
										year:"2007",
										data:"10"
									},{
										year:"2008",
										data:"5"
									}],
							submenu:[
									{	
										id:1,
										title:"asegurados"
									},
									{	
										id:2,
										title:"no asegurados"
									},
									]
						},
						{
							id:2,
							title:"Trabajadores Asegurados Jalisco",
							years:	[{
										year:"2005",
										data:"10,000",
										percent:"100",
										abs:"15,000"
									},{
										year:"2006",
										data:"8,000",
										percent:"50",
										abs:"15,000"
									},{
										year:"2007",
										data:"0",
										percent:"100",
										abs:"27,000"
									},{
										year:"2008",
										data:"4,000",
										percent:"50",
										abs:"45,000"
									}],
						},
						{
							id:3,
							title:"Tasa de desocupación",
							years:	[{
										year:"2005",
										data:"10,000",
										percent:"50",
										abs:"15,000"
									},{
										year:"2006",
										data:"0",
										percent:"50",
										abs:"15,000"
									},{
										year:"2007",
										data:"6,000",
										percent:"50",
										abs:"15,000"
									},{
										year:"2008",
										data:"4,000",
										percent:"50",
										abs:"15,000"
									}],
						}
						
						]
			},
			{
				id:2,
				title:"Inversiòn",
				submenu:[
						{
							id:1,
							title:"Inversion Jalisco"
						}
						]
			}
			];
		
			var insert = {
					data:JSON.stringify(data),
					id:1
				};
			var lastID = App.API.DB.updateRecord(insert,function(){
				
				App.API.DB.getRecords(function(_data){
					//Ti.API.info(_data);
					_data = JSON.parse(_data[0].data);
					App.UI.app.data = _data;
					App.UI.app.mainWin.open();
					var menuData = [];
					for(var i=0;i<_data.length;i++){
						menuData.push({title:_data[i].title, hasChild:true});
					}
					
					App.UI.app.menuTable.setData(menuData);
				});
				
			});
			
			// LOGIC END
			
		}
		anXhr.onerror = function() {
			alert('The HTTP request failed');
			App.API.DB.getRecords(function(_data){
				//Ti.API.info(_data);
				_data = JSON.parse(_data[0].data);
				App.UI.app.data = _data;
				App.UI.app.mainWin.open();
				var menuData = [];
				for(var i=0;i<_data.length;i++){
					menuData.push({title:_data[i].title, hasChild:true});
				}
				
				App.UI.app.menuTable.setData(menuData);
			});
		}
		
		anXhr.open("GET","http://www.seijal.gob.mx/p/salidajson_pocket.php");
		anXhr.send();
	
		
	// LISTENERS
		App.UI.app.menuTable.addEventListener('click',function(e){
			Ti.API.info(JSON.stringify(e));
			App.UI.navBar.open(App.UI.subMenu.init(App.UI.app.data[e.index].submenu,App.UI.app.data[e.index].title),{animated:true});
			
		});
	
	
	}
};