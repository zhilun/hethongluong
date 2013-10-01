dojo.declare("DanhSachPhongBan", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
saveButton1Click: function(inSender) {
this.lastChangeDateEditor1.setDataValue(new Date().getTime());
},
_end: 0
});

DanhSachPhongBan.widgets = {
departmentdefinitionLiveVariable1: ["wm.LiveVariable", {"type":"com.payrolldb.data.Departmentdefinition"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.payrolldb.data.Departmentdefinition","view":[{"caption":"DeptId","sortable":true,"dataIndex":"deptId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"DeptName","sortable":true,"dataIndex":"deptName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"LastChangeDate","sortable":true,"dataIndex":"lastChangeDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"LastChangeUser","sortable":true,"dataIndex":"lastChangeUser","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
departmentdefinitionLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
departmentdefinitionGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Departmentdefinition"}, {}, {
departmentdefinitionDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"field":"deptId","title":"DeptId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"deptName","title":"DeptName","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"lastChangeDate","title":"LastChangeDate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"lastChangeUser","title":"LastChangeUser","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>DeptId: \" + ${deptId} + \"</div>\"\n+ \"<div class='MobileRow'>DeptName: \" + ${deptName} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.payrolldb.data.Departmentdefinition","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"departmentdefinitionLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
departmentdefinitionDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"88px","title":"Details"}, {}, {
departmentdefinitionLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"58px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"departmentdefinitionLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"departmentdefinitionDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
deptIdEditor1: ["wm.Number", {"caption":"DeptId","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"deptId","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
deptNameEditor1: ["wm.Text", {"caption":"DeptName","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"deptName","height":"26px","readonly":true,"width":"90%"}, {}],
lastChangeDateEditor1: ["wm.DateTime", {"caption":"LastChangeDate","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"lastChangeDate","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
lastChangeUserEditor1: ["wm.Text", {"caption":"LastChangeUser","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"lastChangeUser","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
departmentdefinitionLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"departmentdefinitionLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"saveButton1Click","onclick1":"departmentdefinitionLiveForm1.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"departmentdefinitionLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"departmentdefinitionLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"departmentdefinitionLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"departmentdefinitionLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"departmentdefinitionLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"departmentdefinitionLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"departmentdefinitionLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
};

DanhSachPhongBan.prototype._cssText = '';
DanhSachPhongBan.prototype._htmlText = '';