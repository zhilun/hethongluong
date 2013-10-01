NhanVien.widgets = {
	employeeinfoLiveVariable1: ["wm.LiveVariable", {"type":"com.payrolldb.data.Employeeinfo"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":"0","targetProperty":"filter.isDeleted"}, {}]
		}],
		liveView: ["wm.LiveView", {"dataType":"com.payrolldb.data.Employeeinfo","related":["departmentdefinition","salarycodedef"],"view":[{"caption":"Eid","sortable":true,"dataIndex":"eid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7000,"subType":null,"widthUnits":"px"},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7001,"subType":null,"widthUnits":"px"},{"caption":"SalaryFactor","sortable":true,"dataIndex":"salaryFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7002,"subType":null,"widthUnits":"px"},{"caption":"OverFrameFactor","sortable":true,"dataIndex":"overFrameFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7003,"subType":null,"widthUnits":"px"},{"caption":"AllowanceFactor","sortable":true,"dataIndex":"allowanceFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7004,"subType":null,"widthUnits":"px"},{"caption":"AdditionalFactor","sortable":true,"dataIndex":"additionalFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7005,"subType":null,"widthUnits":"px"},{"caption":"HarmFactor","sortable":true,"dataIndex":"harmFactor","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7006,"subType":null,"widthUnits":"px"},{"caption":"Email","sortable":true,"dataIndex":"email","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7007,"subType":null,"widthUnits":"px"},{"caption":"Dependents","sortable":true,"dataIndex":"dependents","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7008,"subType":null,"widthUnits":"px"},{"caption":"IsDeleted","sortable":true,"dataIndex":"isDeleted","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7009,"subType":null,"widthUnits":"px"},{"caption":"LastChangeUser","sortable":true,"dataIndex":"lastChangeUser","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":7010},{"caption":"LastChangeDate","sortable":true,"dataIndex":"lastChangeDate","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":7011},{"caption":"DeptId","sortable":true,"dataIndex":"departmentdefinition.deptId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":8000,"subType":null,"widthUnits":"px"},{"caption":"DeptName","sortable":true,"dataIndex":"departmentdefinition.deptName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8001,"subType":null,"widthUnits":"px"},{"caption":"SalaryCodeId","sortable":true,"dataIndex":"salarycodedef.salaryCodeId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":9000,"subType":null,"widthUnits":"px"},{"caption":"SalaryCode","sortable":true,"dataIndex":"salarycodedef.salaryCode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9001,"subType":null,"widthUnits":"px"}]}, {}]
	}],
	notificationCall1: ["wm.NotificationCall", {"operation":"confirm"}, {"onCancel":"employeeinfoLiveForm1.cancelEdit","onClose":"employeeinfoLiveForm1.cancelEdit","onOk":"employeeinfoLiveForm1.beginDataUpdate","onOk1":"notificationCall1Ok1","onOk2":"employeeinfoLiveForm1.saveData"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Ban co chac chan muon xoa nhan vien nay?\"","targetProperty":"text"}, {}],
				wire1: ["wm.Wire", {"expression":"\"OK\"","targetProperty":"OKButtonText"}, {}],
				wire2: ["wm.Wire", {"expression":"\"Cancel\"","targetProperty":"CancelButtonText"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		employeeinfoLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			employeeinfoGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Employeeinfo"}, {}, {
				employeeinfoDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"eid","title":"Eid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"salaryFactor","title":"SalaryFactor","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"overFrameFactor","title":"OverFrameFactor","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"allowanceFactor","title":"AllowanceFactor","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"additionalFactor","title":"AdditionalFactor","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"harmFactor","title":"HarmFactor","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"email","title":"Email","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"dependents","title":"Dependents","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"isDeleted","title":"IsDeleted","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"departmentdefinition.deptId","title":"DeptId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"departmentdefinition.deptName","title":"DeptName","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"salarycodedef.salaryCodeId","title":"SalaryCodeId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"salarycodedef.salaryCode","title":"SalaryCode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n+ \"<div class='MobileRow'>SalaryFactor: \" + ${salaryFactor} + \"</div>\"\n+ \"<div class='MobileRow'>OverFrameFactor: \" + ${overFrameFactor} + \"</div>\"\n+ \"<div class='MobileRow'>AllowanceFactor: \" + ${allowanceFactor} + \"</div>\"\n+ \"<div class='MobileRow'>AdditionalFactor: \" + ${additionalFactor} + \"</div>\"\n+ \"<div class='MobileRow'>HarmFactor: \" + ${harmFactor} + \"</div>\"\n+ \"<div class='MobileRow'>Email: \" + ${email} + \"</div>\"\n+ \"<div class='MobileRow'>Dependents: \" + ${dependents} + \"</div>\"\n+ \"<div class='MobileRow'>DeptName: \" + ${departmentdefinition.deptName} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"lastChangeUser","title":"LastChangeUser","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"lastChangeDate","title":"LastChangeDate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"}],"dsType":"com.payrolldb.data.Employeeinfo","height":"100%","localizationStructure":{},"margin":"4"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"employeeinfoLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			employeeinfoDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"318px","title":"Details"}, {}, {
				employeeinfoLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"288px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"employeeinfoLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"employeeinfoDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					eidEditor1: ["wm.Number", {"caption":"Eid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"eid","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
					nameEditor1: ["wm.Text", {"caption":"Name","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"name","height":"26px","readonly":true,"width":"90%"}, {}],
					salaryFactorEditor1: ["wm.Number", {"caption":"SalaryFactor","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"salaryFactor","height":"26px","readonly":true,"width":"90%"}, {}],
					overFrameFactorEditor1: ["wm.Number", {"caption":"OverFrameFactor","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"overFrameFactor","height":"26px","readonly":true,"width":"90%"}, {}],
					allowanceFactorEditor1: ["wm.Number", {"caption":"AllowanceFactor","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"allowanceFactor","height":"26px","readonly":true,"width":"90%"}, {}],
					additionalFactorEditor1: ["wm.Number", {"caption":"AdditionalFactor","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"additionalFactor","height":"26px","readonly":true,"width":"90%"}, {}],
					harmFactorEditor1: ["wm.Number", {"caption":"HarmFactor","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"harmFactor","height":"26px","readonly":true,"width":"90%"}, {}],
					emailEditor1: ["wm.Text", {"caption":"Email","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"email","height":"26px","readonly":true,"width":"90%"}, {}],
					dependentsEditor1: ["wm.Number", {"caption":"Dependents","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"dependents","height":"26px","readonly":true,"width":"90%"}, {}],
					isDeletedEditor1: ["wm.Number", {"caption":"IsDeleted","captionSize":"140px","changeOnKey":true,"dataValue":0,"defaultInsert":0,"desktopHeight":"26px","emptyValue":"zero","formField":"isDeleted","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
					departmentdefinitionLookup1: ["wm.Lookup", {"caption":"Departmentdefinition","captionSize":"140px","dataType":"com.payrolldb.data.Departmentdefinition","dataValue":undefined,"displayField":"deptName","formField":"departmentdefinition","readonly":true,"required":true,"width":"90%"}, {}],
					salarycodedefLookup1: ["wm.Lookup", {"caption":"Salarycodedef","captionSize":"140px","dataType":"com.payrolldb.data.Salarycodedef","dataValue":undefined,"displayField":"salaryCode","formField":"salarycodedef","readonly":true,"required":true,"width":"90%"}, {}],
					lastChangeUserEditor1: ["wm.Text", {"caption":"LastChangeUser","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"lastChangeUser","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
					lastChangeDateEditor1: ["wm.DateTime", {"caption":"LastChangeDate","captionSize":"140px","desktopHeight":"26px","formField":"lastChangeDate","formatter":"Date","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
						format: ["wm.DateFormatter", {"formatLength":"short"}, {}]
					}],
					employeeinfoLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"employeeinfoLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"saveButton1Click","onclick1":"employeeinfoLiveForm1.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"employeeinfoLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"employeeinfoLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"employeeinfoLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"employeeinfoLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"employeeinfoLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"notificationCall1"}, {
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
}