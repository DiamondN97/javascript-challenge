// from data.js
var tableData = data;

// YOUR CODE HERE!

var table = d3.select('table');
var body = d3.select('body');

var row = body.append('tr');
var cell = body.append('td');
var city = body.append('td');
var state = body.append('td');
var country = body.append('td');
var shape = body.append('td');
var duration = body.append('td');
var comments = body.append('td');

for(let i = 0; i < tableData.length; i++){
    cell.text(tableData[i].datetime);
    city.text(tableData[i].city);
    state.text(tableData[i].state);
    country.text(tableData[i].country);
    shape.text(tableData[i].shape)
    duration.text(tableData[i].durationMinutes);
    comments.text.text(tableData[i].comments)

}
