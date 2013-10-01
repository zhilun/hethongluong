dojo.declare("PhanQuyen", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
userLookup1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.userIdEditor1.setDataValue(this.userLookup1.getDataValue());
this.roleIdEditor1.setDataValue(this.roledefinitionLookup1.getDataValue());
},
_end: 0
});

PhanQuyen.widgets = {
userroleLiveVariable1: ["wm.LiveVariable", {"type":"com.payrolldb.data.Userrole"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.payrolldb.data.Userrole","related":["id","roledefinition","user"],"view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"com.payrolldb.data.UserroleId","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"UserId","sortable":true,"dataIndex":"id.userId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"RoleId","sortable":true,"dataIndex":"id.roleId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"RoleId","sortable":true,"dataIndex":"roledefinition.roleId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"RoleName","sortable":true,"dataIndex":"roledefinition.roleName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Userid","sortable":true,"dataIndex":"user.userid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Username","sortable":true,"dataIndex":"user.username","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Password","sortable":true,"dataIndex":"user.password","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Lastchangedate","sortable":true,"dataIndex":"user.lastchangedate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Lastchangeuser","sortable":true,"dataIndex":"user.lastchangeuser","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Status","sortable":true,"dataIndex":"user.status","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
userroleLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
userroleGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Userrole"}, {}, {
userroleDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"id","title":"Id","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"id.userId","title":"UserId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"id.roleId","title":"RoleId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"roledefinition.roleId","title":"RoleId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"user.username","title":"Username","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"roledefinition.roleName","title":"RoleName","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"user.userid","title":"Userid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"user.password","title":"Password","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"user.lastchangedate","title":"Lastchangedate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"user.lastchangeuser","title":"Lastchangeuser","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"user.status","title":"Status","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>UserId: \" + ${id.userId} + \"</div>\"\n+ \"<div class='MobileRow'>RoleId: \" + ${id.roleId} + \"</div>\"\n+ \"<div class='MobileRow'>Username: \" + ${user.username} + \"</div>\"\n+ \"<div class='MobileRow'>RoleName: \" + ${roledefinition.roleName} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.payrolldb.data.Userrole","height":"100%","localizationStructure":{},"margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"userroleLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
userroleDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"116px","title":"Details"}, {}, {
userroleLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"84px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"userroleLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userroleDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"idRelatedEditor1.dataOutput","targetProperty":"dataOutput.id"}, {}]
}],
idRelatedEditor1: ["wm.RelatedEditor", {"changeOnKey":true,"editingMode":"editable subform","fitToContentHeight":true,"formField":"id","height":"15px","showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userroleDojoGrid.selectedItem.id","targetProperty":"dataSet"}, {}]
}],
userIdEditor1: ["wm.Number", {"caption":"UserId","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"userId","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userLookup1.selectedItem.userid","targetProperty":"dataValue"}, {}]
}]
}],
roleIdEditor1: ["wm.Number", {"caption":"RoleId","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"roleId","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"roledefinitionLookup1.selectedItem.roleId","targetProperty":"dataValue"}, {}]
}]
}]
}],
userLookup1: ["wm.Lookup", {"caption":"User","captionSize":"140px","dataType":"com.payrolldb.data.User","desktopHeight":"26px","displayField":"username","formField":"user","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
roledefinitionLookup1: ["wm.Lookup", {"caption":"Role","captionSize":"140px","dataType":"com.payrolldb.data.Roledefinition","dataValue":undefined,"displayField":"roleName","formField":"roledefinition","readonly":true,"required":true,"width":"90%"}, {}],
userroleLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"userroleLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"userroleLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userroleLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"userroleLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"userroleLiveForm1EditPanel.beginDataInsert"}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"userroleLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userroleLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
};

PhanQuyen.prototype._cssText = '';
PhanQuyen.prototype._htmlText = '';