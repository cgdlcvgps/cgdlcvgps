function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('LookatImage')
    .addItem('Show Photo', 'showPicture')
    .addToUi();
}

function showPicture() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var cell = sheet.getActiveCell();
  var row = cell.getRow();
  var col = cell.getColumn();
  var dataUri = sheet.getRange(row, col).getValue();
  var htmlOutput = HtmlService.createHtmlOutput("<img src='data:image/jpg;base64," + dataUri + "' />")
                      .setWidth(500)
                      .setHeight(500);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, "Photo from Cell " + cell.getA1Notation());
}

//add from the appscript menu OF SPREADSHEET as it is using getActiveSpreadsheet