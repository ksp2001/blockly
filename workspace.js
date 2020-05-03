/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = { 
	toolbox : toolbox, 
	collapse : false, 
	comments : false, 
	disable : false, 
	maxBlocks : Infinity, 
	trashcan : false, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : '../../media/', 
	rtl : false, 
	scrollbars : false, 
	sounds : true, 
	oneBasedIndex : true, 
	grid : {
		spacing : 20, 
		length : 1, 
		colour : '#888', 
		snap : false
	}
};


/* Inject your workspace */ 
var workspace = Blockly.inject('blocklyDiv', options);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks"); 

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

function showCode() {
  Blockly.Javascript.INFINITE_LOOP_TRAP = null;
  var code = Blockly.Javascript.workspaceToCode(workspace);
  alert(code);
}

function runCode() {
  window.LoopTrap = 1000;
  Blockly.Javascript.INFINITE_LOOP_TRAP = 
    'if (--window.LoopTrap == 0) throw "Infinite Loop."\n';
  var code = Blockly.Javascript.workspaceToCode(workspace);
  Blockly.Javascript.INFINITE_LOOP_TRAP = null;
  try {
    eval(code);
  }
  catch(e){
    alert(e);
  }
}