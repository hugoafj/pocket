/*
 * pocket API DataBase Module
 * Hugo FLores <harmando@itexio.com>
 * April 17, 2012
 */
App.API.DB = {
	/**
	* Initializes the DB
	* @param function [_callback] funtion to execute after call
	**/
	init: function(_callback) {
		
		var db = Ti.Database.open('pocket_DB');
		db.execute('CREATE TABLE IF NOT EXISTS pocket(id INTEGER PRIMARY KEY, data TEXT);');
		db.close();

		_callback();

		App.API.DB.getRecords(function(_data){
			if(_data.length > 0)
				Ti.API.info("data: "+JSON.stringify(_data));
			else{
				//alert("no data");
				var insert = {
					data:"[]"
				};
				var lastID = App.API.DB.insertRecord(insert,function(){});
			}
		});
		
	},
	/**
	 * insertRecord called to insert new members
	 * @param array [_insert] data of the member to insert
	 * @param function [_callback] funtion to execute after call
	 **/
	insertRecord: function(_insert,_callback) {
		
		var db = Ti.Database.open('pocket_DB');
		db.execute('INSERT INTO pocket (data) VALUES (?)', _insert.data);
		var lastID = db.lastInsertRowId;
		db.close();
		
		_callback();
		
		return lastID;
		 
	},
	/**
	 * updateRecord called to update a member
	 * @param array [_insert] data of the member to insert
	 * @param function [_callback] funtion to execute after call
	 **/
	updateRecord: function(_insert,_callback) {
		
		var db = Ti.Database.open('pocket_DB');
		db.execute('UPDATE pocket SET data=? WHERE id=?', _insert.data, _insert.id);

		db.close();
		
		_callback();
		 
	},
	/**
	 * deleteRecord called to delete a member
	 * @param int [_id] member id
	 * @param function [_callback] funtion to execute after call
	 **/
	deleteRecord: function(_id,_callback) {
		
		var db = Ti.Database.open('pocket_DB');
		db.execute('DELETE FROM pocket WHERE id=?', _id);

		db.close();
		
		_callback();
		 
	},
	/**
	 * getRecords called to get the members for an account
	 * @param function [_callback] funtion to execute after call
	 **/
	getRecords: function(_callback) {
		
		var db = Ti.Database.open('pocket_DB');
		var result = db.execute('SELECT id, data FROM pocket');
		var data = [];
		while (result.isValidRow())
		{
			data.push({
	      		id:result.fieldByName('id'),
				data:result.fieldByName('data')
			});
		  
		  	result.next();
		}
		result.close();
		
		db.close();
		
		_callback(data);
		
		return data;
		 
	}
	
};



