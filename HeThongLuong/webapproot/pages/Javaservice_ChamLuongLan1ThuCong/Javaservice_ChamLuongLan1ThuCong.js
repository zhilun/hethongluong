dojo.declare("Javaservice_ChamLuongLan1ThuCong", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",



	saveButton1Click: function(inSender) {
		this.formCalculationVar.input.setValue("salaryFactor", this.salaryFactorEditor1.getDataValue());
        this.formCalculationVar.input.setValue("overFrameFactor", this.overFrameFactorEditor1.getDataValue());
        this.formCalculationVar.input.setValue("allowanceFactor", this.allowanceFactorEditor1.getDataValue());
        this.formCalculationVar.input.setValue("dayOff", this.numberOfDayOffEditor1.getDataValue());
        this.formCalculationVar.input.setValue("daySick", this.numberOfSickDayEditor1.getDataValue());
        
            
        this.formCalculationVar.update();
               
                    
        
	},
	formCalculationVarResult: function(inSender, inDeprecated) {
		var result = inSender.getItem("0");
        
        this.salaryEditor1.setDataValue(result.data.salary);
        this.overFrameSalaryEditor1.setDataValue(result.data.overFrameSalary);
        this.allowanceEditor1.setDataValue(result.data.allowance);
        this.totalSalaryEditor1.setDataValue(result.data.totalSalary);
        this.sideductedEditor1.setDataValue(result.data.sideducted);
        this.uideductedEditor1.setDataValue(result.data.uideducted);
        this.hideductedEditor1.setDataValue(result.data.hideducted);
        this.sickDeductedEditor1.setDataValue(result.data.sickDeducted);
        this.dayOffDeductedEditor1.setDataValue(result.data.dayOffDeducted);    
        this.actualSalaryEditor1.setDataValue(result.data.actualSalary);
        
        this.monthlypayrollLiveForm1.saveData();
        
    },

	_end: 0
});