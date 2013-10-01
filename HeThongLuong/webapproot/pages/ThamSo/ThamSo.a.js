dojo.declare("ThamSo", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
saveButton1Click: function(inSender) {
this.lastChangeDateEditor1.setDataValue(new Date().getTime());
},
_end: 0
});

ThamSo.widgets = {
systemparameterLiveVariable1: ["wm.LiveVariable", {"type":"com.payrolldb.data.Systemparameter"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.payrolldb.data.Systemparameter","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"SalaryUnit","sortable":true,"dataIndex":"salaryUnit","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"HealthInsurance","sortable":true,"dataIndex":"healthInsurance","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"SocialInsurance","sortable":true,"dataIndex":"socialInsurance","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"UnemploymentInsurance","sortable":true,"dataIndex":"unemploymentInsurance","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"IgnoreTaxAmount","sortable":true,"dataIndex":"ignoreTaxAmount","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"AmountPerDependent","sortable":true,"dataIndex":"amountPerDependent","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"SickFactor","sortable":true,"dataIndex":"sickFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"OffFactor","sortable":true,"dataIndex":"offFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"WorkingDaysPerMonth","sortable":true,"dataIndex":"workingDaysPerMonth","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"LastChangeDate","sortable":true,"dataIndex":"lastChangeDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"LastChangeUser","sortable":true,"dataIndex":"lastChangeUser","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null}]}, {}]
}],
systemparameterLiveVariable2: ["wm.LiveVariable", {"type":"com.payrolldb.data.Systemparameter"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.payrolldb.data.Systemparameter","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"SalaryUnit","sortable":true,"dataIndex":"salaryUnit","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"HealthInsurance","sortable":true,"dataIndex":"healthInsurance","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"SocialInsurance","sortable":true,"dataIndex":"socialInsurance","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"UnemploymentInsurance","sortable":true,"dataIndex":"unemploymentInsurance","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"IgnoreTaxAmount","sortable":true,"dataIndex":"ignoreTaxAmount","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"AmountPerDependent","sortable":true,"dataIndex":"amountPerDependent","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"SickFactor","sortable":true,"dataIndex":"sickFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"OffFactor","sortable":true,"dataIndex":"offFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"WorkingDaysPerMonth","sortable":true,"dataIndex":"workingDaysPerMonth","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"LastChangeDate","sortable":true,"dataIndex":"lastChangeDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"LastChangeUser","sortable":true,"dataIndex":"lastChangeUser","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
systemparameterLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
systemparameterGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Systemparameter"}, {}, {
systemparameterDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"salaryUnit","title":"SalaryUnit","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"healthInsurance","title":"HealthInsurance","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"socialInsurance","title":"SocialInsurance","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"unemploymentInsurance","title":"UnemploymentInsurance","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"ignoreTaxAmount","title":"IgnoreTaxAmount","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"amountPerDependent","title":"AmountPerDependent","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"sickFactor","title":"SickFactor","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"offFactor","title":"OffFactor","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"workingDaysPerMonth","title":"WorkingDaysPerMonth","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"lastChangeDate","title":"LastChangeDate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"lastChangeUser","title":"LastChangeUser","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>SalaryUnit: \" + ${salaryUnit} + \"</div>\"\n+ \"<div class='MobileRow'>HealthInsurance: \" + ${healthInsurance} + \"</div>\"\n+ \"<div class='MobileRow'>SocialInsurance: \" + ${socialInsurance} + \"</div>\"\n+ \"<div class='MobileRow'>UnemploymentInsurance: \" + ${unemploymentInsurance} + \"</div>\"\n+ \"<div class='MobileRow'>IgnoreTaxAmount: \" + ${ignoreTaxAmount} + \"</div>\"\n+ \"<div class='MobileRow'>AmountPerDependent: \" + ${amountPerDependent} + \"</div>\"\n+ \"<div class='MobileRow'>SickFactor: \" + ${sickFactor} + \"</div>\"\n+ \"<div class='MobileRow'>OffFactor: \" + ${offFactor} + \"</div>\"\n+ \"<div class='MobileRow'>WorkingDaysPerMonth: \" + ${workingDaysPerMonth} + \"</div>\"\n+ \"<div class='MobileRow'>LastChangeDate: \" + wm.List.prototype.dateFormatter({}, null,null,null,${lastChangeDate}) + \"</div>\"\n","mobileColumn":true}],"dsType":"com.payrolldb.data.Systemparameter","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"systemparameterLiveVariable2","targetProperty":"dataSet"}, {}]
}]
}]
}],
systemparameterDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"296px","title":"Details"}, {}, {
systemparameterLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"266px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"systemparameterLiveVariable2"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"systemparameterDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idEditor1: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
salaryUnitEditor1: ["wm.Number", {"caption":"SalaryUnit","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"salaryUnit","height":"26px","readonly":true,"width":"90%"}, {}],
healthInsuranceEditor1: ["wm.Number", {"caption":"HealthInsurance","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"healthInsurance","height":"26px","readonly":true,"width":"90%"}, {}],
socialInsuranceEditor1: ["wm.Number", {"caption":"SocialInsurance","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"socialInsurance","height":"26px","readonly":true,"width":"90%"}, {}],
unemploymentInsuranceEditor1: ["wm.Number", {"caption":"UnemploymentInsurance","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"unemploymentInsurance","height":"26px","readonly":true,"width":"90%"}, {}],
ignoreTaxAmountEditor1: ["wm.Number", {"caption":"IgnoreTaxAmount","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"ignoreTaxAmount","height":"26px","readonly":true,"width":"90%"}, {}],
amountPerDependentEditor1: ["wm.Number", {"caption":"AmountPerDependent","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"amountPerDependent","height":"26px","readonly":true,"width":"90%"}, {}],
sickFactorEditor1: ["wm.Number", {"caption":"SickFactor","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"sickFactor","height":"26px","readonly":true,"width":"90%"}, {}],
offFactorEditor1: ["wm.Number", {"caption":"OffFactor","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"offFactor","height":"26px","readonly":true,"width":"90%"}, {}],
workingDaysPerMonthEditor1: ["wm.Number", {"caption":"WorkingDaysPerMonth","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"workingDaysPerMonth","height":"26px","readonly":true,"width":"90%"}, {}],
lastChangeDateEditor1: ["wm.DateTime", {"caption":"LastChangeDate","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"lastChangeDate","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
lastChangeUserEditor1: ["wm.Text", {"caption":"LastChangeUser","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"lastChangeUser","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
systemparameterLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"systemparameterLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"saveButton1Click","onclick1":"systemparameterLiveForm1.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"systemparameterLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"systemparameterLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","disabled":true,"height":"100%","margin":"4","showing":false}, {"onclick":"systemparameterLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"systemparameterLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"systemparameterLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4","showing":false}, {"onclick":"systemparameterLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"systemparameterLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
};

ThamSo.prototype._cssText = '';
ThamSo.prototype._htmlText = '';