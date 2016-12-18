var MyController = {};
 
MyController.init = function (id, debugging) {
    // turn on all LEDs
    for (var i = 1; i <= 40; i++) { // Repeat the following code for the numbers 1 through 40
                                // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
        midi.sendShortMsg(0x90, 11, 0x7f);
        midi.sendShortMsg(0x91, 11, 0x7f);
        midi.sendShortMsg(0x90, 51, 0x7f);
        midi.sendShortMsg(0x91, 51, 0x7f);
    }
    midi.sendShortMsg(0x95, 52, 0x7f);
    midi.sendShortMsg(0x96, 52, 0x7f);
}
 
MyController.shutdown = function() {
   // turn off all LEDs
   for (var i = 1; i <= 40; i++) {
        midi.sendShortMsg(0x90, i, 0x00);
    }
}
