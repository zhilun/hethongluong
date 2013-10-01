dojo.declare("MaNgachLuong", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	saveButton1Click: function(inSender) {
		this.lastChangeDateEditor1.setDataValue(new Date().getTime());
	},
	_end: 0
});