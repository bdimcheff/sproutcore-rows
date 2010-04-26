// ==========================================================================
// Project:   Scr.textFieldListController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Scr */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Scr.textFieldListController = SC.ArrayController.create(
/** @scope Scr.textFieldListController.prototype */ {

  addRow: function() {
    var rec;
    console.log('yup');
    rec = Scr.store.createRecord(Scr.StringRecord, {});
    this.selectObject(rec);

    return YES;
  }

}) ;
