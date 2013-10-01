dojo.declare("PhanQuyen", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	userLookup1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		this.userIdEditor1.setDataValue(this.userLookup1.getDataValue());
        this.roleIdEditor1.setDataValue(this.roledefinitionLookup1.getDataValue());
	},
	_end: 0
});