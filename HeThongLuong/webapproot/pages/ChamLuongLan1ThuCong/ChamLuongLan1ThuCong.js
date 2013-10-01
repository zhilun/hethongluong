dojo.declare("ChamLuongLan1ThuCong", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",


	saveButton1Click: function(inSender) {
		// get system parameter
        var systemParameter = this.systemParameterLiveVariable.getItem("0");
        var salaryUnit = systemParameter.getValue("salaryUnit");
        var healthInsurance = systemParameter.getValue("healthInsurance");
        var socialInsurance = systemParameter.getValue("socialInsurance");
        var unemploymentInsurance = systemParameter.getValue("unemploymentInsurance");
        var offFactor = systemParameter.getValue("offFactor");
        var sickFactor = systemParameter.getValue("sickFactor");
        var workingDaysPerMonth = systemParameter.getValue("workingDaysPerMonth");
        
        // get static information of employee
        var salaryFactor = this.salaryFactorEditor1.getDataValue();
        var overFrameFactor = this.overFrameFactorEditor1.getDataValue();
        var allowanceFactor = this.allowanceFactorEditor1.getDataValue();
        
        // get number of day off and sick
        var numberOfSickDay = this.numberOfSickDayEditor1.getDataValue();
        var numberOfDayOff = this.numberOfDayOffEditor1.getDataValue();
        
        // calculation base salary
        var overFrameSalary = salaryUnit * overFrameFactor;
        var salary = salaryUnit * salaryFactor;
        var allowance = salaryUnit * allowanceFactor;
        var totalSalary = allowance + salary + overFrameSalary;
        
        // insurance deducted
        var hiDeducted = healthInsurance * totalSalary / 100;
        var siDeducted = socialInsurance * totalSalary / 100;
        var uiDeducted = unemploymentInsurance * totalSalary / 100;
        
        // calculation sick and off
        var sickDeducted = totalSalary * numberOfSickDay * sickFactor / (workingDaysPerMonth * 100);
        var offDeducted = totalSalary * numberOfDayOff * offFactor / (workingDaysPerMonth * 100);
        
        // calculation actual salaty
        var actualSalary = totalSalary - hiDeducted - siDeducted - uiDeducted - sickDeducted - offDeducted;
    
        // set data for update
        this.salaryEditor1.setDataValue(salary);
        this.overFrameSalaryEditor1.setDataValue(overFrameSalary);
        this.allowanceEditor1.setDataValue(allowance);
        this.totalSalaryEditor1.setDataValue(totalSalary);
        this.hideductedEditor1.setDataValue(hiDeducted);
        this.sideductedEditor1.setDataValue(siDeducted);
        this.uideductedEditor1.setDataValue(uiDeducted);
        this.sickDeductedEditor1.setDataValue(sickDeducted);
        this.dayOffDeductedEditor1.setDataValue(offDeducted);
        this.actualSalaryEditor1.setDataValue(actualSalary);
        this.lastChangeDateEditor1.setDataValue(new Date().getTime());     
        
	},
	_end: 0
});