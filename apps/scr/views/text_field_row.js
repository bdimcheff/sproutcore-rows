// ==========================================================================
// Project:   Scr.TextFieldRowView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Scr */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Scr.TextFieldRowView = SC.View.extend(
  SC.Control, {
  content: null,

  createChildViews: function() {
    var searchView, childViews = [], thisContext = this;

    searchView = this.createChildView(SC.TextFieldView.design({
      layout: { top: 2, right: 2, bottom: 2, left: 20 },
      hint: 'Search...',
      valueBinding: SC.Binding.from('.content.value',thisContext),
      isTextArea: NO
    }));
    
    childViews.push(searchView);
    
    this.set('childViews',childViews);
  }
});

