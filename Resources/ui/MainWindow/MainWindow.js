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
		var mainWin					= Ti.UI.createWindow(style.mainWin);
		var navBar					= Ti.UI.iPhone.createNavigationGroup();
		var win						= Ti.UI.createWindow(style.win);
		var menuTable				= Ti.UI.createTableView(style.menuTable);
		var data					= [];
		
	// STYLING
		navBar.window = win;
		
	// ADDITIONS  
		mainWin.add(navBar);
		win.add(menuTable);
		
	// CODE
		
		
		var anXhr = Ti.Network.createHTTPClient();
		
		anXhr.onload = function(e) {
			if (e.error){
				alert('error ' + JSON.stringify(e.error));
				alert('The HTTP request failed');
				return;
			}
			//Ti.API.info("1 -> "+JSON.stringify(this.responseText));
			//var data = JSON.parse(this.responseText);
			
			// LOGIN
			
			data = [
			{
				id:1,
				title:"Empleo",
				submenu:[
						{
							id:1,
							title:"Poblacion ocupada Naciona vs Jalisco",
							years:	[{
										year:"2005",
										data:"10,000"
									},{
										year:"2006",
										data:"8,000"
									},{
										year:"2007",
										data:"6,000"
									},{
										year:"2008",
										data:"4,000"
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
										data:"10,000"
									},{
										year:"2006",
										data:"8,000"
									},{
										year:"2007",
										data:"N/A"
									},{
										year:"2008",
										data:"4,000"
									}],
						},
						{
							id:3,
							title:"Tasa de desocupación",
							years:	[{
										year:"2005",
										data:"10,000"
									},{
										year:"2006",
										data:"N/A"
									},{
										year:"2007",
										data:"6,000"
									},{
										year:"2008",
										data:"4,000"
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
		
			mainWin.open();
			var menuData = [];
			for(var i=0;i<data.length;i++){
				menuData.push({title:data[i].title, hasChild:true});
			}
			
	
			
			menuTable.setData(menuData);
			// LOGIC END
			
		}
		anXhr.onerror = function() {
			alert('The HTTP request failed');
		}
		
		anXhr.open("GET","http://www.seijal.gob.mx/p/salidajson.php");
		anXhr.send();
	
		
	// LISTENERS
		menuTable.addEventListener('click',function(e){
			Ti.API.info(JSON.stringify(e));
			navBar.open(App.UI.subMenu.init(data[e.index].submenu,data[e.index].title),{animated:true});
			
		});
	
	
	}
};