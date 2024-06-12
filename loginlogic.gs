function doGet(e) {
  var username = e.parameter.username;
  var password = e.parameter.password;
  var result = checkCredentials(username, password);
  return ContentService.createTextOutput(result.toString());
}

function checkCredentials(username, password) {
  var id = "1ErlUf4OEb93A6udXRpH4dBXbihm7bxTg5RY9FZsmI98"; // Your Google Spreadsheet ID
  var sheet = SpreadsheetApp.openById(id).getSheetByName("Sheet1");
  var data = sheet.getDataRange().getValues();
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] == username && data[i][1] == password) {
      // If the user is authenticated and the value in the next column is true, return the rocodes
      if (data[i][3] == true) {
        return data[i][2];
      } else {
        return false;
      }
    }
  }
  // If no match is found, return false
  return false;
}

//remember to upload as api and not webapp