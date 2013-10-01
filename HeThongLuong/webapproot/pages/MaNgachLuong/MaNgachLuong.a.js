dojo.declare("MaNgachLuong", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
saveButton1Click: function(inSender) {
this.lastChangeDateEditor1.setDataValue(new Date().getTime());
},
_end: 0
});

MaNgachLuong.widgets = {
salarycodedefLiveVariable1: ["wm.LiveVariable", {"type":"com.payrolldb.data.Salarycodedef"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.payrolldb.data.Salarycodedef","view":[{"caption":"SalaryCodeId","sortable":true,"dataIndex":"salaryCodeId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"SalaryCode","sortable":true,"dataIndex":"salaryCode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"LastChangeDate","sortable":true,"dataIndex":"lastChangeDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"LastChangeUser","sortable":true,"dataIndex":"lastChangeUser","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
salarycodedefLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
salarycodedefGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Salarycodedef"}, {}, {
salarycodedefDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"field":"salaryCodeId","title":"SalaryCodeId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"salaryCode","title":"SalaryCode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"lastChangeDate","title":"LastChangeDate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"lastChangeUser","title":"LastChangeUser","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>SalaryCodeId: \" + ${salaryCodeId} + \"</div>\"\n+ \"<div class='MobileRow'>SalaryCode: \" + ${salaryCode} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.payrolldb.data.Salarycodedef","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"salarycodedefLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
salarycodedefDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"88px","title":"Details"}, {}, {
salarycodedefLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"58px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"salarycodedefLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"salarycodedefDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
salaryCodeIdEditor1: ["wm.Number", {"caption":"SalaryCodeId","captionSize":"140px","changeOnKey":true,"dataValue":0,"emptyValue":"zero","formField":"salaryCodeId","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
salaryCodeEditor1: ["wm.Text", {"caption":"SalaryCode","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"salaryCode","height":"26px","readonly":true,"width":"90%"}, {}],
lastChangeDateEditor1: ["wm.DateTime", {"caption":"LastChangeDate","captionSize":"140px","emptyValue":"zero","formField":"lastChangeDate","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
lastChangeUserEditor1: ["wm.Text", {"caption":"LastChangeUser","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"lastChangeUser","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
salarycodedefLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"salarycodedefLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"saveButton1Click","onclick1":"salarycodedefLiveForm1.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"salarycodedefLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"salarycodedefLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"salarycodedefLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"salarycodedefLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"salarycodedefLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"salarycodedefLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"salarycodedefLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
};

MaNgachLuong.prototype._cssText = '';
MaNgachLuong.prototype._htmlText = '';