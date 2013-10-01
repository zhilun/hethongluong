dojo.declare("Danhsachnhanviendaxoa", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	notificationCall1Ok1: function(inSender, inResult) {
		this.isDeletedEditor1.setDataValue("0");
        this.lastChangeDateEditor1.setDataValue(new Date().getTime());
	},
	_end: 0
});