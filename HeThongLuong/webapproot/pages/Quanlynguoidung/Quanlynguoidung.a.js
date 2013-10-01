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

Quanlynguoidung.widgets = {
userLiveVariable1: ["wm.LiveVariable", {"type":"com.payrolldb.data.User"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.payrolldb.data.User","view":[{"caption":"Userid","sortable":true,"dataIndex":"userid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Username","sortable":true,"dataIndex":"username","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Password","sortable":true,"dataIndex":"password","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Lastchangedate","sortable":true,"dataIndex":"lastchangedate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Lastchangeuser","sortable":true,"dataIndex":"lastchangeuser","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Status","sortable":true,"dataIndex":"status","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
}],
encryptServiceVariable: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"encryptService","service":"encryptService"}, {"onResult":"encryptServiceVariableResult"}, {
input: ["wm.ServiceInput", {"type":"encryptServiceInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"passwordEditor1.dataValue","targetProperty":"text"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
userLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
userGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"User"}, {}, {
userDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"userid","title":"Userid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"username","title":"Username","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"password","title":"Password","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"lastchangedate","title":"Lastchangedate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"lastchangeuser","title":"Lastchangeuser","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"status","title":"Status","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Username: \" + ${username} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${status} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.payrolldb.data.User","height":"100%","localizationStructure":{},"margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"userLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
userDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"144px","title":"Details"}, {}, {
userLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"112px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"userLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
useridEditor1: ["wm.Number", {"caption":"Userid","captionSize":"140px","changeOnKey":true,"dataValue":6,"desktopHeight":"26px","emptyValue":"zero","formField":"userid","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
usernameEditor1: ["wm.Text", {"caption":"Username","captionSize":"140px","changeOnKey":true,"dataValue":"trankynam","desktopHeight":"26px","emptyValue":"emptyString","formField":"username","height":"26px","readonly":true,"width":"90%"}, {}],
passwordEditor1: ["wm.Text", {"caption":"Password","captionSize":"140px","changeOnKey":true,"dataValue":"$2a$12$0ROanpCwzakf5aqiSwbPBOOPRsN9cDu3QPyf9CjfihmThHY5r9m6S","desktopHeight":"26px","emptyValue":"emptyString","formField":"password","height":"26px","password":true,"readonly":true,"width":"90%"}, {}],
lastchangedateEditor1: ["wm.DateTime", {"caption":"Lastchangedate","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"lastchangedate","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
lastchangeuserEditor1: ["wm.Text", {"caption":"Lastchangeuser","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"lastchangeuser","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
statusEditor1: ["wm.Text", {"caption":"Status","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"status","height":"26px","readonly":true,"width":"90%"}, {}],
userLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"userLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"saveButton1Click"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"userLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"userLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"userLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"userLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
};

Quanlynguoidung.prototype._cssText = '';
Quanlynguoidung.prototype._htmlText = '';