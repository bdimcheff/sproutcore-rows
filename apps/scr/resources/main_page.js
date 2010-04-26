// ==========================================================================
// Project:   Scr - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Scr */

// This page describes the main user interface for your application.  
Scr.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'listView addButton'.w(),
    
    listView: SC.ListView.design({
      layout: { top: 0, right: 0, bottom: 34, left: 0 },
      contentBinding: 'Scr.textFieldListController.arrangedObjects',
      selectionBinding: 'Scr.textFieldListController.selection',
      exampleView: Scr.TextFieldRowView
    }),
    
    addButton: SC.ButtonView.design({
      layout: { height: 24, right: 5, bottom: 5, left: 5 },
      title: 'Add',
      action: 'addRow',
      target: 'Scr.textFieldListController'
    })
  })

});
