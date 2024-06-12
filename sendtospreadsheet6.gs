function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  
  var gaName = data.gaName;
  var roCode = data.roCode;
  var lcvRegNum = data.lcvRegNum;
  var date = data.date;
  var time = data.time;
  var initialReading = data.initialReading;
  var finalReading = data.finalReading;
  var quantityLoaded = data.quantityLoaded;
  var startMfmBase64 = data.startMfmBase64;
  var endMfmBase64 = data.endMfmBase64;

  var spreadsheetId = '18TfUOktscWbSAZjRRRA6V54rhLYfMMdURoE6jEgunOs'; // Replace with your Spreadsheet ID
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheetByName(gaName);

  // If the sheet does not exist, create a new one
  if (!sheet) {
    sheet = spreadsheet.insertSheet(gaName);
  }

  sheet.appendRow([gaName, roCode, lcvRegNum, date, time, initialReading, finalReading, quantityLoaded, startMfmBase64, endMfmBase64]);
}

//same for 9.js