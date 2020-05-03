Blockly.Blocks['color'] = {
  init: function() {
    this.appendValueInput("Color")
        .setCheck("String")
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["red","red"], ["yellow","yellow"], ["green","green"], ["all","all"]]), "color")
        .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "status");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.JavaScript['color'] = function(block) {
  var dropdown_color = block.getFieldValue('color');
  var dropdown_status = block.getFieldValue('status');
  var value_color = Blockly.JavaScript.valueToCode(block, 'Color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '...\n';
  if (dropdown_color==='all') {
    if (dropdown_status == 'on') {
      code = "document.getElementById('red').style.backgroundColor='red'; document.getElementById('yellow').style.backgroundColor='yellow'; document.getElementById('green').style.backgroundColor='green';"
    }
    else {
      code = "document.getElementById('red').style.backgroundColor='white'; document.getElementById('yellow').style.backgroundColor='white'; document.getElementById('green').style.backgroundColor='white';"
    }
  }
  else {
    if (dropdown_status == 'on') {
      code = "document.getElementById('"+dropdown_color+"').style.backgroundColor='"+dropdown_color+"';";
    }
    else {
      code = "document.getElementById('"+dropdown_color+"').style.backgroundColor='white';";
    }
  }
  return code;
};
