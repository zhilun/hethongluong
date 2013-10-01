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

Javaservice_ChamLuongLan1ThuCong.widgets = {
monthlypayrollLiveVariable1: ["wm.LiveVariable", {"type":"com.payrolldb.data.Monthlypayroll"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.payrolldb.data.Monthlypayroll","related":["payrollstatusdef","id","employeeinfo"],"view":[{"caption":"Eid","sortable":true,"dataIndex":"id.eid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Id","sortable":true,"dataIndex":"id","type":"com.payrolldb.data.MonthlypayrollId","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"SalaryFactor","sortable":true,"dataIndex":"salaryFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Month","sortable":true,"dataIndex":"id.month","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Year","sortable":true,"dataIndex":"id.year","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Salary","sortable":true,"dataIndex":"salary","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"OverFrameFactor","sortable":true,"dataIndex":"overFrameFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"OverFrameSalary","sortable":true,"dataIndex":"overFrameSalary","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"AllowanceFactor","sortable":true,"dataIndex":"allowanceFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Allowance","sortable":true,"dataIndex":"allowance","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"TotalSalary","sortable":true,"dataIndex":"totalSalary","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"PaidBySi","sortable":true,"dataIndex":"paidBySi","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Hideducted","sortable":true,"dataIndex":"hideducted","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Sideducted","sortable":true,"dataIndex":"sideducted","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"Uideducted","sortable":true,"dataIndex":"uideducted","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},{"caption":"NumberOfSickDay","sortable":true,"dataIndex":"numberOfSickDay","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},{"caption":"SickDeducted","sortable":true,"dataIndex":"sickDeducted","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},{"caption":"NumberOfDayOff","sortable":true,"dataIndex":"numberOfDayOff","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},{"caption":"DayOffDeducted","sortable":true,"dataIndex":"dayOffDeducted","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":15,"subType":null},{"caption":"ActualSalary","sortable":true,"dataIndex":"actualSalary","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16,"subType":null},{"caption":"LastChangeUser","sortable":true,"dataIndex":"lastChangeUser","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":17,"subType":null},{"caption":"LastChangeDate","sortable":true,"dataIndex":"lastChangeDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":18,"subType":null},{"caption":"PayrollStatusId","sortable":true,"dataIndex":"payrollstatusdef.payrollStatusId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"PayrollStatusName","sortable":true,"dataIndex":"payrollstatusdef.payrollStatusName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Eid","sortable":true,"dataIndex":"employeeinfo.eid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"employeeinfo.name","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"SalaryFactor","sortable":true,"dataIndex":"employeeinfo.salaryFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"OverFrameFactor","sortable":true,"dataIndex":"employeeinfo.overFrameFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"AllowanceFactor","sortable":true,"dataIndex":"employeeinfo.allowanceFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"AdditionalFactor","sortable":true,"dataIndex":"employeeinfo.additionalFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"HarmFactor","sortable":true,"dataIndex":"employeeinfo.harmFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Email","sortable":true,"dataIndex":"employeeinfo.email","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Dependents","sortable":true,"dataIndex":"employeeinfo.dependents","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"IsDeleted","sortable":true,"dataIndex":"employeeinfo.isDeleted","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"LastChangeUser","sortable":true,"dataIndex":"employeeinfo.lastChangeUser","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"LastChangeDate","sortable":true,"dataIndex":"employeeinfo.lastChangeDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null}]}, {}]
}],
formCalculationVar: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"formCalculation","service":"payrollService"}, {"onResult":"formCalculationVarResult"}, {
input: ["wm.ServiceInput", {"type":"formCalculationInputs"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
monthlypayrollLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
monthlypayrollGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Monthlypayroll"}, {}, {
monthlypayrollDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"field":"id.eid","title":"Eid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"id","title":"Id","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"salaryFactor","title":"SalaryFactor","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"id.month","title":"Month","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"id.year","title":"Year","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"salary","title":"Salary","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"overFrameFactor","title":"OverFrameFactor","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"overFrameSalary","title":"OverFrameSalary","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"allowanceFactor","title":"AllowanceFactor","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"allowance","title":"Allowance","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"totalSalary","title":"TotalSalary","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"paidBySi","title":"PaidBySi","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"hideducted","title":"Hideducted","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"sideducted","title":"Sideducted","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"uideducted","title":"Uideducted","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"numberOfSickDay","title":"NumberOfSickDay","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"sickDeducted","title":"SickDeducted","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"numberOfDayOff","title":"NumberOfDayOff","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"dayOffDeducted","title":"DayOffDeducted","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"actualSalary","title":"ActualSalary","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"lastChangeUser","title":"LastChangeUser","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"lastChangeDate","title":"LastChangeDate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"payrollstatusdef.payrollStatusId","title":"PayrollStatusId","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"payrollstatusdef.payrollStatusName","title":"PayrollStatusName","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"employeeinfo.eid","title":"Eid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"employeeinfo.name","title":"Name","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"employeeinfo.salaryFactor","title":"SalaryFactor","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"employeeinfo.overFrameFactor","title":"OverFrameFactor","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"employeeinfo.allowanceFactor","title":"AllowanceFactor","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"employeeinfo.additionalFactor","title":"AdditionalFactor","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"employeeinfo.harmFactor","title":"HarmFactor","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"employeeinfo.email","title":"Email","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"employeeinfo.dependents","title":"Dependents","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"employeeinfo.isDeleted","title":"IsDeleted","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"employeeinfo.lastChangeUser","title":"LastChangeUser","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"employeeinfo.lastChangeDate","title":"LastChangeDate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Eid: \" + ${id.eid} + \"</div>\"\n+ \"<div class='MobileRow'>Id: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>SalaryFactor: \" + ${salaryFactor} + \"</div>\"\n+ \"<div class='MobileRow'>Month: \" + ${id.month} + \"</div>\"\n+ \"<div class='MobileRow'>Year: \" + ${id.year} + \"</div>\"\n+ \"<div class='MobileRow'>Salary: \" + ${salary} + \"</div>\"\n+ \"<div class='MobileRow'>OverFrameFactor: \" + ${overFrameFactor} + \"</div>\"\n+ \"<div class='MobileRow'>OverFrameSalary: \" + ${overFrameSalary} + \"</div>\"\n+ \"<div class='MobileRow'>AllowanceFactor: \" + ${allowanceFactor} + \"</div>\"\n+ \"<div class='MobileRow'>Allowance: \" + ${allowance} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.payrolldb.data.Monthlypayroll","height":"100%","localizationStructure":{},"margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"monthlypayrollLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
monthlypayrollDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"662px","title":"Details"}, {}, {
monthlypayrollLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"630px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"monthlypayrollLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"monthlypayrollDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"idRelatedEditor1.dataOutput","targetProperty":"dataOutput.id"}, {}]
}],
salaryFactorEditor1: ["wm.Number", {"caption":"SalaryFactor","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"salaryFactor","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"employeeinfoLookup1.selectedItem.salaryFactor","targetProperty":"dataValue"}, {}]
}]
}],
salaryEditor1: ["wm.Number", {"caption":"Salary","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"salary","height":"26px","readonly":true,"width":"90%"}, {}],
overFrameFactorEditor1: ["wm.Number", {"caption":"OverFrameFactor","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"overFrameFactor","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"employeeinfoLookup1.selectedItem.overFrameFactor","targetProperty":"dataValue"}, {}]
}]
}],
overFrameSalaryEditor1: ["wm.Number", {"caption":"OverFrameSalary","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"overFrameSalary","height":"26px","readonly":true,"width":"90%"}, {}],
allowanceFactorEditor1: ["wm.Number", {"caption":"AllowanceFactor","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"allowanceFactor","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"employeeinfoLookup1.selectedItem.allowanceFactor","targetProperty":"dataValue"}, {}]
}]
}],
allowanceEditor1: ["wm.Number", {"caption":"Allowance","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"allowance","height":"26px","readonly":true,"width":"90%"}, {}],
totalSalaryEditor1: ["wm.Number", {"caption":"TotalSalary","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"totalSalary","height":"26px","readonly":true,"width":"90%"}, {}],
paidBySiEditor1: ["wm.Number", {"caption":"PaidBySi","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"paidBySi","height":"26px","readonly":true,"width":"90%"}, {}],
hideductedEditor1: ["wm.Number", {"caption":"Hideducted","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"hideducted","height":"26px","readonly":true,"width":"90%"}, {}],
sideductedEditor1: ["wm.Number", {"caption":"Sideducted","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"sideducted","height":"26px","readonly":true,"width":"90%"}, {}],
uideductedEditor1: ["wm.Number", {"caption":"Uideducted","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"uideducted","height":"26px","readonly":true,"width":"90%"}, {}],
numberOfSickDayEditor1: ["wm.Number", {"caption":"NumberOfSickDay","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"numberOfSickDay","height":"26px","readonly":true,"width":"90%"}, {}],
sickDeductedEditor1: ["wm.Number", {"caption":"SickDeducted","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"sickDeducted","height":"26px","readonly":true,"width":"90%"}, {}],
numberOfDayOffEditor1: ["wm.Number", {"caption":"NumberOfDayOff","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"numberOfDayOff","height":"26px","readonly":true,"width":"90%"}, {}],
dayOffDeductedEditor1: ["wm.Number", {"caption":"DayOffDeducted","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"dayOffDeducted","height":"26px","readonly":true,"width":"90%"}, {}],
actualSalaryEditor1: ["wm.Number", {"caption":"ActualSalary","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"actualSalary","height":"26px","readonly":true,"width":"90%"}, {}],
lastChangeUserEditor1: ["wm.Text", {"caption":"LastChangeUser","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"lastChangeUser","height":"26px","readonly":true,"width":"90%"}, {}],
lastChangeDateEditor1: ["wm.DateTime", {"caption":"LastChangeDate","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"lastChangeDate","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"defaultInsert"}, {}]
}]
}],
payrollstatusdefLookup1: ["wm.Lookup", {"caption":"Payrollstatusdef","captionSize":"140px","dataType":"com.payrolldb.data.Payrollstatusdef","dataValue":undefined,"defaultInsert":"1","displayField":"payrollStatusId","displayType":"Number","formField":"payrollstatusdef","readonly":true,"width":"90%"}, {}],
idRelatedEditor1: ["wm.RelatedEditor", {"changeOnKey":true,"editingMode":"editable subform","fitToContentHeight":true,"formField":"id","height":"80px","width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"monthlypayrollDojoGrid.selectedItem.id","targetProperty":"dataSet"}, {}]
}],
eidEditor1: ["wm.Number", {"caption":"Eid","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"eid","height":"26px","readonly":true,"required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"employeeinfoLookup1.selectedItem.eid","targetProperty":"dataValue"}, {}]
}]
}],
monthEditor1: ["wm.Number", {"caption":"Month","captionSize":"140px","dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"month","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
yearEditor1: ["wm.Number", {"caption":"Year","captionSize":"140px","dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"year","height":"26px","readonly":true,"required":true,"width":"100%"}, {}]
}],
employeeinfoLookup1: ["wm.Lookup", {"caption":"Employeeinfo","captionSize":"140px","dataType":"com.payrolldb.data.Employeeinfo","dataValue":undefined,"displayField":"name","formField":"employeeinfo","readonly":true,"required":true,"width":"90%"}, {}],
monthlypayrollLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"monthlypayrollLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"saveButton1Click"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"monthlypayrollLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"monthlypayrollLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"monthlypayrollLiveForm1EditPanel.beginDataInsert"}]
}]
}]
}]
}]
}]
}]
};

Javaservice_ChamLuongLan1ThuCong.prototype._cssText = '';
Javaservice_ChamLuongLan1ThuCong.prototype._htmlText = '';