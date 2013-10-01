dojo.declare("Quanlynguoidung", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	encryptServiceVariableResult: function(inSender, inDeprecated) {
		console.log("Bat dau");
        var encText = inSender.getData().dataValue;
        
        console.log("Chuoi ma hoa la: " + encText);
        this.passwordEditor1.setDataValue(encText);
        
        this.userLiveForm1.saveData();
	},
	saveButton1Click: function(inSender) {
		this.encryptServiceVariable.input.setValue("text", this.passwordEditor1.getDataValue());
        
        this.encryptServiceVariable.update();
	},
	_end: 0
});