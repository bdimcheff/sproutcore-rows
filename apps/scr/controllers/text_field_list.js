// ==========================================================================
// Project:   Scr.textFieldListController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Scr */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/

sc_require('views/text_field_row');

Scr.textFieldListController = SC.ArrayController.create(
/** @scope Scr.textFieldListController.prototype */ {

  addRow: function() {
    var rec;

    rec = Scr.store.createRecord(Scr.StringRecord, {});
    this.selectObject(rec);

    return YES;
  }

}) ;
