//https://script.google.com/macros/s/AKfycbyeZFIRFR46sStegX1ZvXzDj11HvhhIc0G-bLodUpKPuGJ4VaBC1hSxl508FNd2_oevcg/exec

//loadingRo: ro1,ro2,ro3,ro4, unloadingRo: ro5,ro6,ro7,ro8


function doGet() {
  var ss = SpreadsheetApp.openById('1ErlUf4OEb93A6udXRpH4dBXbihm7bxTg5RY9FZsmI98');
  var sheet = ss.getSheetByName('Sheet2');
  
  var loadingRoRange = sheet.getRange('B1');
  var unloadingRoRange = sheet.getRange('B2');
  
  var loadingRoValues = loadingRoRange.getValue();
  var unloadingRoValues = unloadingRoRange.getValue();
  
  var result = 'loadingRo: ' + loadingRoValues + ', unloadingRo: ' + unloadingRoValues;
  
  return ContentService.createTextOutput(result);
}
