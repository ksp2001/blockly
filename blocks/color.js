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
