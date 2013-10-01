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

Danhsachnhanviendaxoa.widgets = {
employeeinfoLiveVariable1: ["wm.LiveVariable", {"type":"com.payrolldb.data.Employeeinfo"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"1","targetProperty":"filter.isDeleted"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.payrolldb.data.Employeeinfo","related":["departmentdefinition","salarycodedef"],"view":[{"caption":"Eid","sortable":true,"dataIndex":"eid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"SalaryFactor","sortable":true,"dataIndex":"salaryFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"OverFrameFactor","sortable":true,"dataIndex":"overFrameFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"AllowanceFactor","sortable":true,"dataIndex":"allowanceFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"AdditionalFactor","sortable":true,"dataIndex":"additionalFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"HarmFactor","sortable":true,"dataIndex":"harmFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Email","sortable":true,"dataIndex":"email","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Dependents","sortable":true,"dataIndex":"dependents","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"IsDeleted","sortable":true,"dataIndex":"isDeleted","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"LastChangeUser","sortable":true,"dataIndex":"lastChangeUser","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"LastChangeDate","sortable":true,"dataIndex":"lastChangeDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},{"caption":"DeptId","sortable":true,"dataIndex":"departmentdefinition.deptId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"DeptName","sortable":true,"dataIndex":"departmentdefinition.deptName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"SalaryCodeId","sortable":true,"dataIndex":"salarycodedef.salaryCodeId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"SalaryCode","sortable":true,"dataIndex":"salarycodedef.salaryCode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
notificationCall1: ["wm.NotificationCall", {"operation":"confirm"}, {"onCancel":"employeeinfoLiveForm1.cancelEdit","onClose":"employeeinfoLiveForm1.cancelEdit","onOk":"employeeinfoLiveForm1.beginDataUpdate","onOk1":"notificationCall1Ok1","onOk2":"employeeinfoLiveForm1.saveData"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Ban co chac chan muon khoi phuc lai thong tin cua nhan vien nay?\"","targetProperty":"text"}, {}],
wire1: ["wm.Wire", {"expression":"\"OK\"","targetProperty":"OKButtonText"}, {}],
wire2: ["wm.Wire", {"expression":"\"Cancel\"","targetProperty":"CancelButtonText"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
employeeinfoLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
employeeinfoGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Employeeinfo"}, {}, {
employeeinfoDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"eid","title":"Eid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"salaryFactor","title":"SalaryFactor","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"overFrameFactor","title":"OverFrameFactor","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"allowanceFactor","title":"AllowanceFactor","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"additionalFactor","title":"AdditionalFactor","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"harmFactor","title":"HarmFactor","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"email","title":"Email","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"dependents","title":"Dependents","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"isDeleted","title":"IsDeleted","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"lastChangeUser","title":"LastChangeUser","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"lastChangeDate","title":"LastChangeDate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"departmentdefinition.deptId","title":"DeptId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"departmentdefinition.deptName","title":"DeptName","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"salarycodedef.salaryCodeId","title":"SalaryCodeId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"salarycodedef.salaryCode","title":"SalaryCode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n+ \"<div class='MobileRow'>SalaryFactor: \" + ${salaryFactor} + \"</div>\"\n+ \"<div class='MobileRow'>OverFrameFactor: \" + ${overFrameFactor} + \"</div>\"\n+ \"<div class='MobileRow'>AllowanceFactor: \" + ${allowanceFactor} + \"</div>\"\n+ \"<div class='MobileRow'>AdditionalFactor: \" + ${additionalFactor} + \"</div>\"\n+ \"<div class='MobileRow'>HarmFactor: \" + ${harmFactor} + \"</div>\"\n+ \"<div class='MobileRow'>Email: \" + ${email} + \"</div>\"\n+ \"<div class='MobileRow'>Dependents: \" + ${dependents} + \"</div>\"\n+ \"<div class='MobileRow'>DeptName: \" + ${departmentdefinition.deptName} + \"</div>\"\n+ \"<div class='MobileRow'>SalaryCode: \" + ${salarycodedef.salaryCode} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.payrolldb.data.Employeeinfo","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"employeeinfoLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
employeeinfoDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"344px","title":"Details"}, {}, {
employeeinfoLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"314px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"employeeinfoLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"employeeinfoDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
eidEditor1: ["wm.Number", {"caption":"Eid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"eid","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
nameEditor1: ["wm.Text", {"caption":"Name","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"name","height":"26px","readonly":true,"width":"90%"}, {}],
salaryFactorEditor1: ["wm.Number", {"caption":"SalaryFactor","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"salaryFactor","height":"26px","readonly":true,"width":"90%"}, {}],
overFrameFactorEditor1: ["wm.Number", {"caption":"OverFrameFactor","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"overFrameFactor","height":"26px","readonly":true,"width":"90%"}, {}],
allowanceFactorEditor1: ["wm.Number", {"caption":"AllowanceFactor","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"allowanceFactor","height":"26px","readonly":true,"width":"90%"}, {}],
additionalFactorEditor1: ["wm.Number", {"caption":"AdditionalFactor","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"additionalFactor","height":"26px","readonly":true,"width":"90%"}, {}],
harmFactorEditor1: ["wm.Number", {"caption":"HarmFactor","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"harmFactor","height":"26px","readonly":true,"width":"90%"}, {}],
emailEditor1: ["wm.Text", {"caption":"Email","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"email","height":"26px","readonly":true,"width":"90%"}, {}],
dependentsEditor1: ["wm.Number", {"caption":"Dependents","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"dependents","height":"26px","readonly":true,"width":"90%"}, {}],
isDeletedEditor1: ["wm.Number", {"caption":"IsDeleted","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"isDeleted","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
lastChangeUserEditor1: ["wm.Text", {"caption":"LastChangeUser","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"lastChangeUser","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
lastChangeDateEditor1: ["wm.DateTime", {"caption":"LastChangeDate","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"lastChangeDate","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
departmentdefinitionLookup1: ["wm.Lookup", {"caption":"Departmentdefinition","captionSize":"140px","dataType":"com.payrolldb.data.Departmentdefinition","dataValue":undefined,"displayField":"deptName","formField":"departmentdefinition","readonly":true,"required":true,"width":"90%"}, {}],
salarycodedefLookup1: ["wm.Lookup", {"caption":"Salarycodedef","captionSize":"140px","dataType":"com.payrolldb.data.Salarycodedef","dataValue":undefined,"displayField":"salaryCode","formField":"salarycodedef","readonly":true,"required":true,"width":"90%"}, {}],
employeeinfoLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"employeeinfoLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"employeeinfoLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"employeeinfoLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"employeeinfoLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
updateButton1: ["wm.Button", {"caption":"Restore","height":"100%","margin":"4"}, {"onclick":"notificationCall1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"employeeinfoLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
};

Danhsachnhanviendaxoa.prototype._cssText = '';
Danhsachnhanviendaxoa.prototype._htmlText = '';