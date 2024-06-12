function joinSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName('Sheet2'); // replace with your sheet name
  var sheet2 = ss.getSheetByName('Sheet3'); // replace with your sheet name

  // Create a new sheet for the result
  var resultSheet = ss.insertSheet('Result');

  var data1 = sheet1.getDataRange().getValues();
  var data2 = sheet2.getDataRange().getValues();

  var map = new Map();
  data1.forEach(function(row) {
    var key = row[3]; // adjust the key column index
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(row);
  });

  data2.forEach(function(row) {
    var key = row[1]; // adjust the key column index
    if (map.has(key)) {
      map.get(key).forEach(function(rowInMap) {
        var joinedRow = rowInMap.concat(row);
        resultSheet.appendRow(joinedRow);
      });
    }
  });
}
//ga to ro mapping