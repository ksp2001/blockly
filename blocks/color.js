Blockly.Blocks['color'] = {
  init: function() {
    this.appendValueInput("Color")
        .setCheck("String")
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["red","red"], ["blue","blue"], ["yellow","yellow"], ["all","all"]]), "color")
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
  // TODO: Assemble JavaScript into code variable.
  var code = 'hello!';
  return code;
};
