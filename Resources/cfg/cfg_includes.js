Ti.include(
	DIR + "ui/MainWindow/MainWindow.js",
	DIR + "ui/MainWindow/MainWindowStyle.js",
	DIR + "ui/ChartWindow/ChartWindow.js",
	DIR + "ui/ChartWindow/ChartWindowStyle.js"
	
);
if(Titanium.Platform.osname == "ipad"){
	Ti.include(
		DIR + "ui/SubMenuWindow/SubMenuIpadWindow.js",
		DIR + "ui/SubMenuWindow/SubMenuIpadWindowStyle.js"
		
	);
}else{
	Ti.include(
		DIR + "ui/SubMenuWindow/SubMenuWindow.js",
		DIR + "ui/SubMenuWindow/SubMenuWindowStyle.js"
		
	);
}
