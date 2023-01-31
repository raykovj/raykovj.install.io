define(["jquery","jqueryui","jqueryuictxm","knockout","modules/server/ioHandler","modules/fs/directories","modules/html/toolbar","modules/settings/config","modules/actions/frameActions","modules/graph/graphConstants","modules/gallery/components","modules/gallery/iconOptionsPicker","modules/gallery/portIconPicker","modules/gallery/cardinalityPicker","modules/gallery/decisionEnds","modules/gallery/dbTable","modules/flow/flowManager","modules/fs/fsBrowser","modules/diagram/mouseInteractor","modules/dialogs/newFlowDialog","modules/dialogs/newFolderDialog","modules/dialogs/openFlowDialog","modules/dialogs/createNodeDialog","modules/dialogs/nodePropsDialog","modules/dialogs/findDialog","modules/dialogs/linkPropsDialog","modules/dialogs/aboutDialog","modules/dialogs/infoDialog","modules/dialogs/confirmDialog","modules/dialogs/thumbnailDialog","modules/settings/settingsDialog","modules/dialogs/text1ViewDialog","modules/dialogs/text2ViewDialog","modules/geometry/point","modules/util/utils","modules/draw/draw","modules/controller/flowCache","modules/exportLayout/exportManager","modules/exportLayout/demoFlow","modules/util/integrationText"],function(e,t,n,i,o,a,s,r,l,d,u,c,g,p,m,b,f,v,w,I,h,N,D,T,y,M,C,L,x,E,k,F,P,S,O,A,R,V,B,H){function K(e){e===d.flow().VERTICAL?(fe.removeClass("block-extendV"),fe.addClass("block-extendH"),ve.removeClass("block-extendH"),ve.addClass("block-extendV"),we.removeClass("block-shrinkV"),we.addClass("block-shrinkH"),Ie.removeClass("block-shrinkH"),Ie.addClass("block-shrinkV")):e===d.flow().HORIZONTAL&&(fe.removeClass("block-extendH"),fe.addClass("block-extendV"),ve.removeClass("block-extendV"),ve.addClass("block-extendH"),we.removeClass("block-shrinkH"),we.addClass("block-shrinkV"),Ie.removeClass("block-shrinkV"),Ie.addClass("block-shrinkH"))}function z(e){e===d.flow().VERTICAL?(De.removeClass("block-extendV"),De.addClass("block-extendH"),Te.removeClass("block-shrinkV"),Te.addClass("block-shrinkH")):e===d.flow().HORIZONTAL&&(De.removeClass("block-extendH"),De.addClass("block-extendV"),Te.removeClass("block-shrinkH"),Te.addClass("block-shrinkV"))}function _(e){if(J.selectedFileType()===d.fileTypes().ALL)return e;var t=[],n=J.selectedFileType().split(".").pop();return e.forEach(function(e){e.split(".").pop()===n&&t.push(e)}),t}function W(){return He?He.getName():"[none]"}function U(e){r.setFlowDirection(e),J.setFlowDirectionChange(),K(e),z(e),J.getFlowManager().hasDiagramOpen()&&J.flowManager.setDirty(!0),J.setConfirmFlag(d.bValue().FALSE),J.getFlowManager().setSettingsChanged(!0),setTimeout(function(){J.getFlowManager().refreshDiagramOnEdit()},200)}function Z(){e("#settingsDialogId").dialog({position:{my:"right top+10",at:"right top",of:"#topContainerId"}}),e("#nodePropsDialogId").dialog({position:{my:"right top+10",at:"right top",of:"#topContainerId"}}),e("#linkPropsDialogId").dialog({position:{my:"right top+10",at:"right top",of:"#topContainerId"}}),e("#thumbnailDialogId").dialog({position:{my:"right bottom",at:"right-17 bottom-4",of:window}}),e("#findDialogId").dialog({position:{my:"right top",at:"right-4 top-4",of:window}}),j(),J.repaintDiagram()}function j(){var t=e(window).height();e(window).scrollTop();lt.height(t-rt)}var J=this,X=document.getElementById("canvasId"),q=document.getElementById("canvasThId"),Q=X.getContext("2d"),$=document.getElementById("containerId"),Y=document.getElementById("topContainerId"),G=(document.getElementById("containerId"),e("#topContainerId"),e("#openFlowDialogId")),ee=e("#spinnerLevelsId"),te=e("#spinnerLanesId"),ne=e("#spinnerSpaceId"),ie=e("#confirmDialogId"),oe=(e("#thumbnailDialogId"),"[select 'New' or 'Open' from menus]"),ae=!1,se=!1,re=!1;J.accHdrDemoTitle=i.observable(d.appTitles().FLOW_TITLE),J.accHdrPagesTitle=i.observable(d.appTitles().PAGES_TITLE),J.accHdrBpelTitle=i.observable(d.appTitles().BPEL_TITLE),J.accHdrK8sTitle=i.observable(d.appTitles().K8S_TITLE),J.getCanvas=function(){return X},J.getCanvasTh=function(){return q},J.getCanvasContext=function(){return Q},J.getCanvasContainer=function(){return $},J.getTopContainer=function(){return Y},J.flowManager=new f(J),J.interactor=J.flowManager.getMouseInteractor(),J.dndHandler=J.flowManager.getDnDHandler(),J.updateTrigger=i.observable(!1);var le=new v(J);J.getFlowManager=function(){return J.flowManager};var de=new V(J),ue=Date.now(),ce=!1,ge=!!r.isDemoOnly();J.isConnectionOK=i.observable(ce),J.cnxResultOK=function(){console.log("*** connection OK!!!")},J.cnxResultFAIL=function(e){console.log("*** connection FAIL: "+e.readyState+", __cnxOK="+ce),Date.now()-ue<3e3?(ce=!1,J.showOverlayMessage("No server connection",500)):(ce=!0,J.showOverlayMessage("Connected",500)),J.isConnectionOK(ce),ge=!0,setTimeout(function(){console.log("*** connection: "+ce),J.updateWindow()},200)},J.initOK=function(){return ge},e(document).ready(function(){function t(t){return e("<img>",{style:"margin: 0 6px -2px -22px;",src:c.getIconURL(t.value)})}function n(t){return e("<img>",{style:"margin: 0 6px -2px 0;",src:c.getIconURL(t.value)})}function i(t){return e("<img>",{style:"margin: 0px 6px 2px 10px; ",src:g.getPortIconURL(t.value)})}function o(t){return e("<img>",{style:"margin: 0 6px -2px 6px; background-color: white; }",src:g.getPortIconURL(t.value)})}function a(t){return e("<img>",{style:"margin: 0 6px -2px -22px;",src:p.getCardinalityURL(t.value)})}function r(t){return e("<img>",{style:"margin: 0 6px -2px 0;",src:p.getCardinalityURL(t.value)})}Q.canvas.width=0,Q.canvas.height=0,I.initDialog(J.flowManager),h.initDialog(J.flowManager),N.initDialog(J.flowManager),k.initDialog(J.flowManager),F.initDialog(J.flowManager),P.initDialog(J.flowManager),D.initDialog(J.flowManager),T.initDialog(J.flowManager),y.initDialog(J.flowManager),M.initDialog(J.flowManager),C.initDialog(J.flowManager),L.initDialog(J.flowManager),x.initDialog(J.flowManager),E.initDialog(J.flowManager),s.initButtons(J),l.initActions(J),e("#canvasId").contextmenu(J.interactor.getContextMenu()),Y.addEventListener("mousemove",function(t){J.interactor.isOverCanvas(t)||(e("#canvasId").contextmenu("close"),J.flowManager.getFlowDiagram().setMousePoint(void 0))}),Y.addEventListener("mousedown",function(e){}),e("#paletteCtrId").show(),e("#paletteAccordionId").accordion({heightStyle:"fill",collapsible:!0,activate:function(e,t){J.updateWindow()}}),e("#settingsTabId").tabs({}),e("#integrationTabId").tabs({}),e("#nodePropsTabId").tabs({activate:function(t,n){1===n.newTab.index()?e("#nodePropsTabId").css({overflow:"auto"}):e("#nodePropsTabId").css({overflow:"hidden"})}}),e("#infoTextId").attr("visibility","hidden"),ee.spinner({step:1,min:d.canvasRange().MIN,max:d.canvasRange().MAX,numberFormat:"n"}),ee.spinner("value",d.initial().LEVELS),ee.spinner("enable"),te.spinner({step:1,min:d.canvasRange().MIN,max:d.canvasRange().MAX,numberFormat:"n"}),te.spinner("value",d.initial().LANES),te.spinner("enable"),ne.spinner({step:1,min:d.canvasRange().MIN,max:d.canvasRange().MAX,numberFormat:"n"}),ne.spinner("value",d.initial().LEVELS),ne.spinner("enable");var u=e("#progressBarId");u.progressbar({value:!1}),u.height(14),e.widget("nodeIcons.iconselectmenu",e.ui.selectmenu,{_renderButtonItem:function(t){var i=e("<div>",{text:c.getIconLabel(t.value)});return n(t).prependTo(i),i},_renderItem:function(n,i){var o=e("<li>"),a=e("<div>",{text:c.getIconLabel(i.value)});return t(i).prependTo(a),o.append(a).appendTo(n)},_renderMenu:function(t,n){var i=this,o=c.getOptionItems(n);e.each(o,function(e,n){i._renderItemData(t,n)})},refreshButtonItem:function(e,t){var n=c.getIndexValue(e,t);this.element[0].selectedIndex=n,this.refresh()}}),e("#nodeIconItemsId").iconselectmenu().iconselectmenu("menuWidget").addClass("ui-menu-icons customicons"),e("#settingIconItemsId").iconselectmenu().iconselectmenu("menuWidget").addClass("ui-menu-icons customicons"),e.widget("portImages.porticonmenu",e.ui.selectmenu,{_renderButtonItem:function(t){var n=e("<div>",{style:"padding-left: 16px; height: 16px; width: 100px; background-color: white"});return i(t).prependTo(n),n},_renderItem:function(t,n){var i=e("<li>"),a=e("<div>",{style:"height: 16px; width: 120px"});return o(n).prependTo(a),i.append(a).appendTo(t)},_renderMenu:function(t,n){var i=this,o=g.getPortOptionItems(n);e.each(o,function(e,n){i._renderItemData(t,n)})},refreshButtonItem:function(e,t){var n=g.getPortIndexValue(e);this.element[0].selectedIndex=n,this.refresh()}}),e("#selectPortIconsId").porticonmenu().porticonmenu("menuWidget").addClass("ui-menu-icons porticons"),e.widget("ports.portcardinalitymenu",e.ui.selectmenu,{_renderButtonItem:function(t){var n=e("<div>",{text:p.getCardinalityLabel(t.value)});return r(t).prependTo(n),n},_renderItem:function(t,n){var i=e("<li>"),o=e("<div>",{text:p.getCardinalityLabel(n.value)});return a(n).prependTo(o),i.append(o).appendTo(t)},_renderMenu:function(t,n){var i=this,o=p.getCardinalityItems(n);e.each(o,function(e,n){i._renderItemData(t,n)})},refreshButtonItem:function(e,t){var n=p.getCardinalityIndex(e,t);this.element[0].selectedIndex=n,this.refresh()}}),e.widget("settings.schememenu",e.ui.selectmenu,{_renderButtonItem:function(t){return e("<div>",{text:"Default"})}}),e("#settingSchemesId").schememenu({width:240}).schememenu("menuWidget").addClass("ui-menu-icons schememenu"),e("#selectPartitionId").selectmenu({select:function(e,t){if(e.currentTarget){var n=e.currentTarget.textContent;console.log("$$$ disk select: "+n),J.selectedPartition(n)}},change:function(e,t){var n=e.currentTarget.textContent;console.log("### disk change: "+n)},create:function(e,t){setTimeout(function(){J.flowManager.getDiskNames()},1e3)}}).addClass("settingsDiskMenu").css("fontSize","16px"),e("#selectFileTypeId").selectmenu({create:function(t,n){setTimeout(function(){J.selectedFileType(d.fileTypes().JSON),e("#selectFileTypeId").selectmenu("refresh")},1e3)},select:function(e,t){if(e.currentTarget){var n=e.currentTarget.textContent;J.selectedFileType(n),J.flowManager.getDirContent()}}}).addClass("settingsDiskMenu"),e.widget("demomenu.demofilesmenu",e.ui.selectmenu,{_renderButtonItem:function(t){return e("<div>",{text:t.label?t.label:J.flowManager.getDemoList()[0].label})}}),e("#selectFileId").demofilesmenu().demofilesmenu("menuWidget").addClass("ui-menu-icons demofiles")}),J.isAutoLayoutAllowed=i.observable(r.isAllowAuto()),J.forceTestAutoMode=function(e){r.setLayoutMode(d.layoutMode().AUTO),J.flowManager.getSelectionManager().clearSelections(),J.flowManager.resetScale(),J.runTestAutoMode()},J.resetTestAutoMode=function(){J.flowManager.clearDiagram(),r.setLayoutMode(d.layoutMode().MANUAL)},J.runTestAutoMode=function(){J.flowManager.createDiagram("ReactDemo");var e=B.getJSONFile(),t={title:"React Demo",direction:2,startEnd:!0,swimLanes:!1},n=de.createLayout(e,t);console.log("Demo Flow: "+JSON.stringify(n,null,2)),J.flowManager.adjustCanvas(),J.flowManager.paintDiagram()},J.nodeEmojiItems=i.pureComputed(function(){return c.getNodeIconOptions()}),J.portIcons=i.pureComputed(function(){return g.getPortIconOptions()}),J.cardinalityItems=i.pureComputed(function(){return p.getCardinalityList()}),J.enableShowCardinality=i.observable(!1),J.setEnableShowCardinality=function(e){J.enableShowCardinality(e)},J.enableShowDB=i.observable(!1),J.setEnableShowDB=function(e){J.enableShowDB(e)},J.demoFilesItems=i.pureComputed(function(){return J.flowManager.getDemoList()}),J.nodeActionsList=i.pureComputed(function(){return T.getActionsList()}),J.nodeOperationsList=i.pureComputed(function(){return T.getOperationsList()}),J.nodeServicesList=i.pureComputed(function(){return T.getServicesList()}),J.nodePublishList=i.pureComputed(function(){return T.getPublishList()}),J.nodeSubscribeList=i.pureComputed(function(){return T.getSubscribeList()}),J.onOpsActionChange=function(e){},J.isProgressBarVisible=i.observable(!1),J.isProgressBarVisible.extend({notify:"always"}),J.setProgressBarVisible=function(e){J.isProgressBarVisible(e)},setTimeout(function(){e("#paletteAccordionId").accordion("option","icons",{header:"ui-icon-triangle-1-e",activeHeader:"ui-icon-triangle-1-s"})},100),J.showPageMode=i.observable(r.hasPageMode()),J.isCanvasVisible=i.observable(!1),J.setCanvasVisible=function(e){J.isCanvasVisible(e)},J.scaleValue=i.observable(r.getScale());var pe=document.getElementById("scaleId");pe.oninput=function(){r.setScale(this.value/d.scale().FACTOR),J.scaleValue(r.getScale()),J.flowManager.clearClipboard(),J.flowManager.getFlowDiagram().clearCanvas(),J.flowManager.paintDiagram()},pe.onchange=function(){J.flowManager.refreshDiagramOnEdit()},J.editModeText=i.observable(r.isEditMode()?d.editModeText().EDIT:d.editModeText().VIEW),J.setEditModeText=function(e){e===d.editMode().EDIT_ALL?J.editModeText(d.editModeText().EDIT):J.editModeText(d.editModeText().VIEW)},J.setTooltipBox=function(e,t){e.length>0&&r.isEditMode()&&A.drawTooltip(Q,X.getBoundingClientRect(),t,e)},J.showTooltipBox=function(e){},J.getCurrentFileName=function(){var e=J.flowManager.getFileName(),t=e.indexOf(".json");return e.substring(0,t)};var me,be=document.getElementById("blockResizeId"),fe=e("#extendBlockAcrossId"),ve=e("#extendBlockAlongId"),we=e("#shrinkBlockAcrossId"),Ie=e("#shrinkBlockAlongId");J.showBlockResizeBar=function(e){var t=e.getExpandedShape(),n=r.getScale();be.style.left=X.getBoundingClientRect().left+t.x*n+"px",be.style.top=X.getBoundingClientRect().top+t.y*n-24+"px",fe.attr("disabled",!r.isEditMode()||!e.canExtendAcross()),ve.attr("disabled",!r.isEditMode()||!e.canExtendAlong()),we.attr("disabled",!r.isEditMode()||!e.canShrinkAcross()),Ie.attr("disabled",!r.isEditMode()||!e.canShrinkAlong()),be.style.visibility="visible"},J.doResizeContainer=function(e){var t=J.getFlowManager().getSelectionManager().getSelections();t[0].getFlowType()===d.flowType().CONTAINER&&t[0].resizeOutline(e),be.style.visibility="hidden",me=!1},J.isBlockResizeBarVisible=function(){return me},J.hideContainerBar=function(){be.style.visibility="hidden"};var he,Ne=document.getElementById("switchResizeId"),De=e("#extendSwitchAcrossId"),Te=e("#shrinkSwitchAcrossId");J.showSwitchResizeBar=function(e){var t=e.getMenuBarPosition(),n=r.getScale();Ne.style.left=X.getBoundingClientRect().left+t.x*n+"px",Ne.style.top=X.getBoundingClientRect().top+t.y*n-24+"px",De.attr("disabled",!r.isEditMode()||!e.canExtendAcross()),Te.attr("disabled",!r.isEditMode()||!e.canShrinkAcross()),Ne.style.visibility="visible"},J.doResizeSwitch=function(e){var t=J.getFlowManager().getSelectionManager().getSelections();t[0].getFlowType()===d.flowType().SWITCH&&t[0].resizeOutline(e),Ne.style.visibility="hidden",he=!1},J.isSwitchResizeBarVisible=function(){return he},J.hideSwitchBar=function(){Ne.style.visibility="hidden"},J.showSearchList=i.observable(!1),J.showFindOptions=i.observable(!0),J.searchContentList=i.observableArray(),J.foundMatches=i.observable(),J.onFindTableClick=function(e){var t=e.target.innerText;y.selectedNewDisk(t)},J.onFindTableDblClick=function(e){J.onFindTableClick(e)},J.onPasteSearchText=function(e){y.selectedNewDisk(label)},J.currentPath=i.observable(),J.fsContentList=i.observableArray(),J.selectedPath=i.observable(),J.isOpenMode=i.observable(),J.isSaveMode=i.observable(),J.showPartitions=i.observable(!1),J.partitionsList=i.observableArray([""]),J.selectedPartition=i.observable("D:"),J.filesTypes=i.observableArray([d.fileTypes().JSON,d.fileTypes().ALL]),J.selectedFileType=i.observable(d.fileTypes().JSON);J.callOpenFlowDialog=function(){J.isConnectionOK()?G.dialog({height:440}):G.dialog({height:180}),G.dialog("open")},J.onDiskTableClick=function(e){var t=e.target.innerText;N.selectedNewDisk(t)},J.setFSDialogMode=function(e){le.setFSDialogMode(e)},J.getFSDialogMode=function(){return le.getFSDialogMode()},J.restoreWorkDir=function(){le.restoreWorkDir()},J.setWorkDir=function(e){le.setWorkDir(e)},J.getWorkDir=function(){return le.getWorkDir()},J.getSelectedFSDir=function(){return le.getSelectedFSDir()},J.getSelectedFSFile=function(){return le.getSelectedFSFile()},J.onDirTableClick=function(e){le.onDirTableClick(e)},J.deleteFSItem=function(){le.deleteFSItem()},J.onDirTableDblClick=function(e){le.onDirTableDblClick(e)},J.updateMainFSLocation=function(){le.updateMainFSLocation()},J.goOneDirBack=function(){le.goOneDirBack()},J.setDirsList=function(e,t){le.setDirsList(e,t)},J.setFolderContent=function(e,t){le.setFolderContent(e,t)},J.onFileTypeChange=function(e){le.onFileTypeChange(e)},J.showBackgroundSelection=i.observable(!0),J.settingsSchemes=i.observableArray(["Default"]),J.selectedScheme=i.observable("Default"),J.onSchemeChange=function(e){J.selectedScheme().split(".").pop()};var ye;J.setNewAction=function(e){ye=e},J.isNewAction=function(){return ye},J.filesList=i.observableArray();var Me=[];J.setFilesList=function(t){if(Me=t,J.filesList(t),J.filesList(_(t)),ye)e("#newFlowDialogId").dialog("open");else;},J.selectedFile=i.observable(),J.getSelectedFile=function(){return J.isConnectionOK()?_selectedFile:J.selectedFile()},J.isInputInvalid=i.observable(!1),J.validateMessage=i.observable(""),J.newFSNameValue=i.observable(""),J.nameValueEmpty=i.observable(""),J.validateFSName=function(t,n){var i=J.newFSNameValue().trim(),o=n?a.getDirectoriesLabels():J.filesList();J.nameValueEmpty(0===i.length);var s=J.isInputInvalid(),r=O.containsFSName(o,i),l=O.isFSNameValid(J.newFSNameValue()),d=i.length>0&&(!l||r);J.isInputInvalid(d),s&&!d&&(e("#newFileNameId").blur(),e("#newFileNameId").focus()),e("#newFlowButtonOK").button("option","disabled",J.isInputInvalid()||J.nameValueEmpty()),e("#newFolderButtonOK").button("option","disabled",J.isInputInvalid()||J.nameValueEmpty()),l?r?J.validateMessage("Duplicate name"):J.validateMessage(""):J.validateMessage("Only alphanumeric characters, dots, dashes, and underscores"),t&&i.length>0&&l&&"Enter"===t.code&&(ye?(I.createNewDiagram(J.flowManager),e("#newFlowDialogId").dialog("close")):(h.createNewFolder(J.flowManager),e("#newFolderDialogId").dialog("close")))},e("#newFlowDialogId").on("dialogopen",function(e,t){J.validateFSName()}),e("#newFlowDialogId").on("dialogclose",function(e,t){J.newFSNameValue("")}),J.saveAsInputInvalid=i.observable(!1),J.saveAsMessage=i.observable(""),J.saveAsFileNameValue=i.observable(""),J.saveAsNameEmpty=i.observable(""),J.validateSaveAsFileName=function(t){var n=J.saveAsFileNameValue().trim();J.saveAsNameEmpty(0===n.length);var i=J.saveAsInputInvalid(),o=n!==J.getCurrentFileName()&&O.containsFSName(J.filesList(),n),a=O.isFSNameValid(J.saveAsFileNameValue()),s=n.length>0&&(!a||o);J.saveAsInputInvalid(s),i&&!s&&(e("#saveAsFileNameId").blur(),e("#saveAsFileNameId").focus()),e("#saveAsButtonSave").button("option","disabled",J.saveAsInputInvalid()||J.saveAsNameEmpty()),a?o?J.saveAsMessage("Duplicate name"):J.saveAsMessage(""):J.saveAsMessage("Only alphanumeric characters, dots, dashes, and underscores"),n.length>0&&a&&t.code};var Ce=i.observable();J.propsLinkSourceName=i.observable(),J.propsLinkSourceLabel=i.observable(),J.propsLinkTargetName=i.observable(),J.propsLinkTargetLabel=i.observable(),J.propsLinkLabel=i.observable(),J.getPropsLink=function(){return Ce()},J.getPropsLinkLabelValue=function(){return J.propsLinkLabel()},J.showLinkProps=function(t){Ce(t),J.propsLinkSourceName(Ce().getLinkSourcePortName()),J.propsLinkSourceLabel(Ce().getLinkSourcePortLabel()),J.propsLinkTargetName(Ce().getLinkTargetPortName()),J.propsLinkTargetLabel(Ce().getLinkTargetPortLabel()),J.propsLinkLabel(Ce().getLinkLabel()),e("#linkPropsDialogId").dialog("open")},J.editPropsLinkLabel=function(e){J.propsLinkLabel(document.getElementById("propsLinkLabelId").value)},J.propsNodeInputs=i.observableArray();var Le,xe;J.getPropsNodeInputsIdx=function(){return Le},J.getPropsNodeInputsValue=function(){return xe},J.propsNodeOutputs=i.observableArray();var Ee,ke;J.getPropsNodeOutputsIdx=function(){return Ee},J.getPropsNodeOutputsValue=function(){return ke},J.propsNodeRefInputs=i.observableArray();var Fe,Pe;J.getPropsNodeRefInputsIdx=function(){return Fe},J.getPropsNodeRefInputsValue=function(){return Pe},J.propsNodeRefOutputs=i.observableArray();var Se,Oe;J.getPropsNodeRefOutputsIdx=function(){return Se},J.getPropsNodeRefOutputsValue=function(){return Oe},J.isCardinalitySelected=i.observable(!0);var Ae=i.observable();J.getPropsNode=function(){return Ae()},J.showNodeProps=function(t){Ae(t),c.setNodeCategory(t.getNodeCategory()),J.propsNodeInputs(Ae().getInputPortsProperties()),J.propsNodeOutputs(Ae().getOutputPortsProperties()),J.propsNodeRefInputs(Ae().getRefInPortsProperties()),J.propsNodeRefOutputs(Ae().getRefOutPortsProperties()),J.dbNodeRecords(Ae().getDBRecords()),e("#nodePropsDialogId").dialog("open")},J.editPropsNodeInputLabel=function(e){Le=e.target.parentNode.parentNode.rowIndex;var t=document.getElementById("nodeInputsTableId"),n=t.getElementsByTagName("tr");xe=n[Le].cells[2].getElementsByTagName("input")[0].value},J.checkPortInputCardinality=function(e){T.editPortInputCardinality(e)},J.editPropsNodeOutputLabel=function(e){Ee=e.target.parentNode.parentNode.rowIndex;var t=document.getElementById("nodeOutputsTableId"),n=t.getElementsByTagName("tr");ke=n[Ee].cells[2].getElementsByTagName("input")[0].value},J.checkPortOutputCardinality=function(e){T.editPortOutputCardinality(e)},J.editPropsNodeRefInputLabel=function(e){Fe=e.target.parentNode.parentNode.rowIndex;var t=document.getElementById("nodeRefInputsTableId"),n=t.getElementsByTagName("tr");Pe=n[Fe].cells[2].getElementsByTagName("input")[0].value},J.checkPortRefInputCardinality=function(e){T.editPortRefInputCardinality(e)},J.editPropsNodeRefOutputLabel=function(e){Se=e.target.parentNode.parentNode.rowIndex;var t=document.getElementById("nodeRefOutputsTableId"),n=t.getElementsByTagName("tr");Oe=n[Se].cells[2].getElementsByTagName("input")[0].value},J.checkPortRefOutputCardinality=function(e){T.editPortRefOutputCardinality(e)},J.dbNodeRecords=i.observableArray();J.editNodeTableKey=function(e){T.processTableClickKey(e)},J.editNodeTableField=function(e){T.processTableClickField(e)},J.editNodeTableType=function(e){T.processTableClickType(e)},J.editNodeTableLength=function(e){T.processTableClickLength(e)},J.isEditNameInvalid=i.observable(!1),J.editNameValue=i.observable(""),J.validateNameMessage1=i.observable(""),J.validateNameMessage2=i.observable("");var Re;J.setOldName=function(e){Re=e},J.validateEditName=function(e){var t=J.editNameValue().trim();if(t.length>0){var n=O.getAllNames(J.flowManager.getNodeNamesMap()),i=t===Re||O.isNewNodeNameValid(t,n);J.isEditNameInvalid(!i)}else J.isEditNameInvalid(!0);i?(J.validateNameMessage1(""),J.validateNameMessage2("")):(J.validateNameMessage1("Only alphanumericals, dots, dashes "),J.validateNameMessage2("and underscores"))},J.isLinkLabelInvalid=i.observable(!1),J.validateLinkMessage=i.observable("");var Ve;J.setOldLinkLabel=function(e){Ve=e},J.validateLinkLabel=function(e){var t=J.propsLinkLabel().trim();if(t.length>0){var n=O.getAllLinkLabels(J.flowManager.getLinkLabelsMap()),i=t===Ve||O.isNewLinkLabelValid(t,n);J.isLinkLabelInvalid(!i)}else J.isLinkLabelInvalid(!1);i?J.validateLinkMessage(""):J.validateLinkMessage("Only alphanumericals, dots, dashes, underscores and spaces")},J.pictureURLValue=i.observable(""),J.isPictureURLInvalid=i.observable(!1),J.validatePictureURL=function(e){J.isPictureURLInvalid(!1)};var Be=d.decisionRun().NONE,He=void 0;J.showNewFileName=i.observable(),J.showEditedInfo=i.observable(),J.showDecisionInfo=i.observable(),J.decisionInputPicture=i.observable(),J.decisionEndsPicture=i.observable(),J.isNodeNameInvalid=i.observable(!1),J.newNodeNameValue=i.observable(""),J.invalidNameMessage=i.observable(""),J.newDecisionInput=i.observable(m.getCurrentDecisionInput()),J.newDecisionEnds=i.observable(m.getCurrentDecisionEnds()),J.editedDecisionNodeName=i.observable("???"),J.setDecisionRun=function(e,t){if(Be=t,t===d.decisionRun().CREATE){var n=R.getSelectedFlowType();J.showNewFileName(!0),J.showEditedInfo(!1),J.showDecisionInfo(n===d.flowType().DECISION)}else t===d.decisionRun().EDIT&&(He=e,m.setCurrentInput(e.getInput()),m.setCurrentEnds(e.getEnds()),J.editedDecisionNodeName(e.getName()),J.newDecisionInput(m.getCurrentDecisionInput()),J.newDecisionEnds(m.getCurrentDecisionEnds()),J.decisionInputPicture(m.getCurrentInputPicture()),J.decisionEndsPicture(m.getCurrentEndsPicture()),J.showNewFileName(!1),J.showEditedInfo(!0),J.showDecisionInfo(!0))},J.getEditedDecisionNode=function(){return He},J.getDecisionRun=function(){return Be},J.validateNodeName=function(t){var n=J.newNodeNameValue().trim();R.getSelectedFlowType();if(n.length>0){var i=O.isNodeNameValid(n),o=O.getAllNames(J.flowManager.getNodeNamesMap()),a=O.isNodeNameDuplicate(n,o);if(J.isNodeNameInvalid(!i||a),i&&!a&&"Enter"===t.code)return D.proceed(J.flowManager),void e("#newNodeDialogId").dialog("close")}e("#newNodeButtonOK").button("option","disabled",J.isNodeNameInvalid()||0==n.length),i?a?J.invalidNameMessage("Duplicate name"):J.invalidNameMessage(""):J.invalidNameMessage("Only alphanumeric characters, dots, dashes, and underscores")},J.getDecisionIcon=function(){return J.updateTrigger(!J.updateTrigger()),m.getDecisionIcon()},J.resetDecisionIndices=function(){J.updateTrigger(!J.updateTrigger()),m.resetCurrentInputIndex(),m.resetCurrentEndsIndex(),J.decisionInputPicture(m.getCurrentInputPicture()),J.decisionEndsPicture(m.getCurrentEndsPicture()),J.newDecisionInput(m.getCurrentDecisionInput()),J.newDecisionEnds(m.getCurrentDecisionEnds())},J.moveDecisionInputNext=function(){J.updateTrigger(!J.updateTrigger()),m.moveInputNext(),J.newDecisionInput(m.getCurrentDecisionInput()),J.decisionInputPicture(m.getCurrentInputPicture()),J.decisionEndsPicture(m.getCurrentEndsPicture());var t=J.newNodeNameValue().trim();J.editedDecisionNodeName(W()),e("#newNodeButtonOK").button("option","disabled",J.getDecisionRun()!==d.decisionRun().EDIT&&(J.isNodeNameInvalid()||0==t.length))},J.moveDecisionInputPrev=function(){J.updateTrigger(!J.updateTrigger()),m.moveInputPrevious(),J.newDecisionInput(m.getCurrentDecisionInput()),J.decisionInputPicture(m.getCurrentInputPicture()),J.decisionEndsPicture(m.getCurrentEndsPicture());var t=J.newNodeNameValue().trim();J.editedDecisionNodeName(W()),e("#newNodeButtonOK").button("option","disabled",J.getDecisionRun()!==d.decisionRun().EDIT&&(J.isNodeNameInvalid()||0==t.length))},J.moveDecisionEndsNext=function(){J.updateTrigger(!J.updateTrigger()),m.moveEndsNext(),J.newDecisionEnds(m.getCurrentDecisionEnds()),J.decisionEndsPicture(m.getCurrentEndsPicture());var t=J.newNodeNameValue().trim();J.editedDecisionNodeName(W()),e("#newNodeButtonOK").button("option","disabled",J.getDecisionRun()!==d.decisionRun().EDIT&&(J.isNodeNameInvalid()||0==t.length))},J.moveDecisionEndsPrev=function(){J.updateTrigger(!J.updateTrigger()),m.moveEndsPrevious(),J.newDecisionEnds(m.getCurrentDecisionEnds()),J.decisionEndsPicture(m.getCurrentEndsPicture());var t=J.newNodeNameValue().trim();J.editedDecisionNodeName(W()),e("#newNodeButtonOK").button("option","disabled",J.getDecisionRun()!==d.decisionRun().EDIT&&(J.isNodeNameInvalid()||0==t.length))},J.btnFlowH2click=function(){J.changeFlowDirection(d.flow().VERTICAL)},J.btnFlowV2click=function(){J.changeFlowDirection(d.flow().HORIZONTAL)},J.changeFlowDirection=function(e){U(e)},J.isHorizontal=i.observable(!1),J.layoutModeText=i.observable(r.getLayoutModeText()),J.diagramModeText=i.observable(r.getDiagramModeText());var Ke=e("#newId"),ze=e("#openId"),_e=e("#undoId"),We=e("#redoId"),Ue=e("#findId"),Ze=e("#refreshId"),je=e("#clearId"),Je=e("#leftId"),Xe=e("#rightId"),qe=e("#deleteId"),Qe=e("#copyId"),$e=e("#pasteId"),Ye=e("#saveId"),Ge=e("#saveAsId"),et=e("#btnFlowVId");e("#btnThumbnailId");J.updateWindow=function(t){J.updateTrigger(!J.updateTrigger()),J.isHorizontal(r.getFlowDirection()===d.flow().HORIZONTAL),J.layoutModeText(r.getLayoutModeText()),J.diagramModeText(r.getDiagramModeText());var n=!r.isEditMode();s.updateMenus(J),Ke.attr("disabled",n||!J.isConnectionOK()&&!J.initOK()),ze.attr("disabled",!J.isConnectionOK()&&!J.initOK()),_e.attr("disabled",n||!J.flowManager.canUndo()).attr("title",J.flowManager.getUndoName()),We.attr("disabled",n||!J.flowManager.canRedo()).attr("title",J.flowManager.getRedoName()),qe.attr("disabled",n||!J.flowManager.getSelectionManager().hasSelections()),Qe.attr("disabled",n||!J.flowManager.canCopy()),$e.attr("disabled",n||!J.flowManager.readyToPaste()),Ye.attr("disabled",n||!J.isConnectionOK()||!J.flowManager.isDirty()),Ge.attr("disabled",n||!J.isConnectionOK()||J.flowManager.getModelHandler().isDiagramEmpty()),Ze.attr("disabled",!J.isCanvasVisible()),Ue.attr("disabled",!J.isCanvasVisible()),je.attr("disabled",n||!J.isCanvasVisible()),Je.attr("disabled",!J.flowManager.hasPreviousDiagram()),Xe.attr("disabled",!J.flowManager.hasNextDiagram()),et.attr("disabled",r.getAppMode()!==d.appMode().FLOW_MODE),e("#btnFlowHId").attr("disabled",n),e("#btnFlowVId").attr("disabled",n),"visible"!==document.getElementById("blockResizeId").style.visibility||me?me&&(document.getElementById("blockResizeId").style.visibility="hidden",me=!1):me=!0,"visible"!==document.getElementById("switchResizeId").style.visibility||he?he&&(document.getElementById("switchResizeId").style.visibility="hidden",he=!1):he=!0,J.flowManager.isInitialResizeMode()&&J.flowManager.getModelHandler().isDiagramEmpty()?(ee.spinner("enable"),te.spinner("enable")):(ee.spinner("disable"),te.spinner("disable"))};var tt=!1;J.hasFlowDirectionChange=function(){return tt},J.setFlowDirectionChange=function(){tt=!0},J.resetFlowDirectionChange=function(){tt=!1},J.initData=function(){J.updateWindow()},J.gallerySENodes=i.pureComputed(function(){return J.updateTrigger(),r.getFlowDirection()===d.flow().HORIZONTAL?u.getSENodesH():u.getSENodesV()}),J.galleryFlowNodes=i.pureComputed(function(){return J.updateTrigger(),r.getFlowDirection()===d.flow().HORIZONTAL?u.getFlowNodesH():u.getFlowNodesV()}),J.gallerySwimNodes=i.pureComputed(function(){return J.updateTrigger(),r.getFlowDirection()===d.flow().HORIZONTAL?u.getSwimNodesH():u.getSwimNodesV()}),J.galleryQuizNodes=i.pureComputed(function(){return J.updateTrigger(),r.getFlowDirection()===d.flow().HORIZONTAL?u.getQuizNodesH():u.getQuizNodesV()}),J.galleryMiscNodes=i.pureComputed(function(){return J.updateTrigger(),r.getFlowDirection()===d.flow().HORIZONTAL?u.getMiscNodesH():u.getMiscNodesV()}),J.pageNodes=i.pureComputed(function(){J.updateTrigger();for(var e=[],t=r.getFlowDirection()===d.flow().HORIZONTAL?u.getHPageItems():u.getVPageItems(),n=0;n<t.length;n++)e.push(t[n]);return e}),J.diagramDisplayName=i.observable(oe),J.setDiagramDisplayName=function(e){e&&e.length>0?J.diagramDisplayName(e):J.diagramDisplayName(oe)},J.aboutTitle=i.observable(""),J.aboutVersion=i.observable(""),J.aboutText=i.observable(""),J.aboutSources=i.observable(""),J.aboutCopyright=i.observable(""),J.showAboutBox=function(t,n,i,o,a){J.aboutTitle(t),J.aboutVersion(n),J.aboutText(i),J.aboutSources(o),J.aboutCopyright(a),e("#aboutDialogId").dialog("open")},J.integrationTitle=i.observable(H.getTopTitle()),J.integrationTopNotes=i.observable(H.getTopNotes()),J.integrationReactTitle=i.observable(H.getReactTitle()),J.integrationReactNotesTop=i.observable(H.getReactNotesTop()),J.integrationReactNotesBottom=i.observable(H.getReactNotesBottom()),J.integrationAngularTitle=i.observable(H.getAngularTitle()),J.integrationAngularNotesTop=i.observable(H.getAngularNotesTop()),J.infoMessage=i.observable(""),J.infoMessageVisible=i.observable(),J.showInfoMessage=function(t,n){J.infoMessage(t),J.infoMessageVisible(!1),e("#infoDialogId").dialog("open"),n&&e("#infoDialogId").dialog("option","title",n)},e("#infoDialogId").on("dialogopen",function(t,n){setTimeout(function(){J.infoMessageVisible(!0),e("#infoTextId").scrollTop(0)},200)});var nt=e("#text1ViewDialogId");J.viewMessage1=i.observable(""),J.viewMessage1Visible=i.observable(),J.showText1ViewMessage=function(e,t){nt.dialog("isOpen")&&nt.dialog("close"),J.viewMessage1(e),J.viewMessage1Visible(!1),nt.dialog("open"),t&&nt.dialog("option","title",t)},nt.on("dialogopen",function(t,n){
setTimeout(function(){J.viewMessage1Visible(!0),e("#text1ViewId").scrollTop(0)},100)});var it=e("#text2ViewDialogId");J.viewMessage2=i.observable(""),J.viewMessage2Visible=i.observable(),J.showText2ViewMessage=function(e,t){it.dialog("isOpen")&&it.dialog("close"),J.viewMessage2(e),J.viewMessage2Visible(!1),it.dialog("open"),t&&it.dialog("option","title",t)},it.on("dialogopen",function(t,n){setTimeout(function(){J.viewMessage2Visible(!0),e("#text2ViewId").scrollTop(0)},100)});var ot;J.getConfirmFlag=function(){return ot},J.setConfirmFlag=function(e){ot=e},J.confirmMessage=i.observable(""),J.showConfirmMessage=function(t,n,i){x.initDialog(J.flowManager),J.confirmMessage(t),n&&ie.dialog("option","title",n),i&&(e(e("button",ie.parent())[1]).text(i.first),e(e("button",ie.parent())[2]).text(i.second)),ie.dialog("open")},J.isShowThumbnail=i.observable(),J.btnThumbnailShow=function(){J.isShowThumbnail(!0),e("#thumbnailDialogId").dialog("open"),J.repaintDiagram()},J.btnThumbnailHide=function(){J.isShowThumbnail(!1),J.repaintDiagram()},J.overlayText=i.observable("");var at=e("#saveOverlayId");J.showOverlayMessage=function(e,t){var n=t||400;J.overlayText(e),at.show(),setTimeout(function(){at.fadeOut(n)},n+200)};var st;J.getDraggedPaletteId=function(){return st},J.setDraggedPaletteId=function(e){st=e},J.onPaletteDragStart=function(e){st=e.target.id,e.dataTransfer.setData("text",e.target.id)},J.onPaletteDragEnd=function(e){var t=X.getBoundingClientRect();e.clientX>t.left&&e.clientX<t.right&&e.clientY>t.top&&e.clientY<t.bottom||J.flowManager.getDnDHandler().resetDrag()},J.requestFocus=function(){},J.isControlPressed=function(){return ae},J.setControlPressed=function(e){ae=e},J.isEditControlPressed=function(){return re},J.setEditControlPressed=function(e){re=e},J.isShiftPressed=function(){return se},J.setShiftPressed=function(e){se=e},window.onresize=Z,window.onscroll=function(){e("#thumbnailDialogId").dialog({position:{my:"right bottom",at:"right-17 bottom-4",of:window}}),e("#findDialogId").dialog({position:{my:"right top",at:"right-4 top-4",of:window}}),J.repaintDiagram()};var rt=0,lt=e("#containerId");return J.repaintDiagram=function(){J.hideContainerBar(),J.hideSwitchBar(),J.flowManager.paintDiagram()},i.applyBindings(J),J.initData(),{initFlowDemo:function(){window.scrollTo(0,0),e(window).trigger("resize"),J.setProgressBarVisible(!1),r.isDemoOnly()?(J.isConnectionOK(!1),J.showOverlayMessage("No server connection",500),J.updateWindow()):r.isDevMode()?(J.isConnectionOK(!0),J.updateWindow()):(J.showOverlayMessage("Connecting to server...",3e3),o.checkMyConnection(J.flowManager))}}});