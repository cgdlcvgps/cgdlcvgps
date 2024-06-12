function doGet(e) {
  // Open the Spreadsheet using its ID
  var spreadsheet = SpreadsheetApp.openById("1ErlUf4OEb93A6udXRpH4dBXbihm7bxTg5RY9FZsmI98");
  
  // Get the sheet named 'Sheet3'
  var sheet = spreadsheet.getSheetByName("Sheet3");
  
  // Get the value of cell F2
  var cellValue = sheet.getRange("F2").getValue();
  
  // Return the value as a plain text response
  return ContentService.createTextOutput(cellValue);
}


//https://script.google.com/macros/s/AKfycbzEiPaWY2Z5SZUkN5ZaNjUpztK_NwLABDdmZnjQ1e3UOpxYvsu4paxMoqdcISbze4Q4/exec