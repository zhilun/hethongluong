dojo.declare("NhanVien", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	saveButton1Click: function(inSender) {
		this.lastChangeDateEditor1.setDataValue(new Date().getTime());
	},
	deleteButton1Click: function(inSender) {
		this.lastChangeDateEditor1.setDataValue(new Date().getTime());
	},
	notificationCall1Ok1: function(inSender, inResult) {
		this.lastChangeDateEditor1.setDataValue(new Date().getTime());
        this.isDeletedEditor1.setDataValue("1");
	},
	_end: 0
});