dojo.declare("ChamLuongLan1", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	saveButton1Click: function(inSender) {
	           
        var systemParameter = this.systemparameterLiveVariable1.getItem(0);
        //get system parameters
        var sickFactor = systemParameter.getValue("sickFactor");
        var wd = systemParameter.getValue("workingDaysPerMonth");    
        var offFactor = systemParameter.getValue("offFactor");  
        
        //get input for calculation
        var salary = this.totalSalaryEditor1.getDataValue();        
        var dayOff = this.numberOfDayOffEditor1.getDataValue();        
        var daySick = this.numberOfSickDayEditor1.getDataValue();      
        var hideducted = this.hideductedEditor1.getDataValue();    
        var sideducted = this.sideductedEditor1.getDataValue();        
        var uidedected = this.uideductedEditor1.getDataValue();
              
            
        //calculation logic
        var sickDeducted = salary*daySick*sickFactor/(wd*100);       
        var offDeducted = salary*dayOff*offFactor/(wd*100);    
        var actualSalary = salary - sickDeducted - offDeducted - hideducted - sideducted - uidedected;        
        
        //set data to update
        this.sickDeductedEditor1.setDataValue(sickDeducted);
        this.dayOffDeductedEditor1.setDataValue(offDeducted);
        this.actualSalaryEditor1.setDataValue(actualSalary);
        this.lastChangeDateEditor1.setDataValue(new Date().getTime());
        
	},
	updateButton1Click: function(inSender) {
		this.monthlypayrollLiveForm1.beginDataUpdate();
        this.employeeinfoLookup1.setReadonly(true);
	},
	_end: 0
});