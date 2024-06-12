function createTrigger() {
  // Create a trigger for the sumRows function
  ScriptApp.newTrigger('sumRows')
    .timeBased()
    .everyMinutes(5) // Frequency can be changed as needed
    .create();
}

function sumRows() {
  var urls = ['https://docs.google.com/spreadsheets/d/1QEk0lLUq0zYCjye_4sCQDV7XbNlCPcK2iPGRyYaVvFg/edit#gid=1987666637', 'https://docs.google.com/spreadsheets/d/1Lj8ESl3nbX9RPQN6ulxbuMDUCnCA3KyVxDtC06bDtvo/edit#gid=532110980', 'https://docs.google.com/spreadsheets/d/1bS3V9etdyg2wH8K0ZnhvhAOMlTulwmT1giiOAQ51q7Q/edit#gid=0', 'https://docs.google.com/spreadsheets/d/18TfUOktscWbSAZjRRRA6V54rhLYfMMdURoE6jEgunOs/edit#gid=52973505']; // replace with your Google Sheets URLs
  var data = {};
  
  urls.forEach(function(url) {
    var ss = SpreadsheetApp.openByUrl(url);
    var sheets = ss.getSheets();
    
    sheets.forEach(function(sheet) {
      var rangeC = sheet.getRange('C:C').getValues();
      var rangeH = sheet.getRange('H:H').getValues();
      
      for (var i = 0; i < rangeC.length; i++) {
        var key = rangeC[i][0];
        var value = rangeH[i][0];
        
        if (key && value) {
          if (data[key]) {
            data[key] += value;
          } else {
            data[key] = value;
          }
        }
      }
    });
  });
  
  // Display the results in a new sheet
  var resultSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Results');
  if (!resultSheet) {
    resultSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Results');
  } else {
    resultSheet.clear(); // Clear the existing results
  }
  
  var rowIndex = 1;
  
  for (var key in data) {
    resultSheet.getRange(rowIndex, 1).setValue(key);
    resultSheet.getRange(rowIndex, 2).setValue(data[key]);
    rowIndex++;
  }
}


//remember to open the spreadsheet and open the appscripts option and set the trigger and go to add triggers and run from createtrigger everything else is same


//new code ADD TRIGGER ON EDIT AND DON'T EDIT OTHERWISE THE TRIGGER WOULD RESET
function createTrigger() {
  // Delete all existing triggers for the sumRows function
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'sumRows') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  // Create a new trigger for the sumRows function
  ScriptApp.newTrigger('sumRows')
    .timeBased()
    .everyMinutes(5) // Frequency can be changed as needed
    .create();
}

function sumRows() {
  var urls = ['https://docs.google.com/spreadsheets/d/1QEk0lLUq0zYCjye_4sCQDV7XbNlCPcK2iPGRyYaVvFg/edit#gid=1987666637', 'https://docs.google.com/spreadsheets/d/1Lj8ESl3nbX9RPQN6ulxbuMDUCnCA3KyVxDtC06bDtvo/edit#gid=532110980', 'https://docs.google.com/spreadsheets/d/1bS3V9etdyg2wH8K0ZnhvhAOMlTulwmT1giiOAQ51q7Q/edit#gid=0', 'https://docs.google.com/spreadsheets/d/18TfUOktscWbSAZjRRRA6V54rhLYfMMdURoE6jEgunOs/edit#gid=52973505']; // replace with your Google Sheets URLs
  var data = {};
  
  urls.forEach(function(url) {
    var ss = SpreadsheetApp.openByUrl(url);
    var sheets = ss.getSheets();
    
    sheets.forEach(function(sheet) {
      var rangeC = sheet.getRange('C:C').getValues();
      var rangeH = sheet.getRange('H:H').getValues();
      
      for (var i = 0; i < rangeC.length; i++) {
        var key = rangeC[i][0];
        var value = rangeH[i][0];
        
        if (key && value) {
          if (data[key]) {
            data[key] += value;
          } else {
            data[key] = value;
          }
        }
      }
    });
  });
  
  // Display the results in a new sheet
  var resultSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Results');
  if (!resultSheet) {
    resultSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Results');
  } else {
    resultSheet.clear(); // Clear the existing results
  }
  
  var rowIndex = 1;
  
  for (var key in data) {
    resultSheet.getRange(rowIndex, 1).setValue(key);
    resultSheet.getRange(rowIndex, 2).setValue(data[key]);
    rowIndex++;
  }
}
