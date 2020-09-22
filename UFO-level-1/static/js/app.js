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



var form = d3.select('form');
form.on('submit', runEnter);

function runEnter(){
    d3.event.preventDefault();
    var inputElement = d3.select('input');
    var inputValue = inputElement.property('value');
    var filtered = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filtered);
    for(let i = 0; i < tableData.length; i++){
        cell.text(tableData[i].datetime);
        city.text(tableData[i].city);
        state.text(tableData[i].state);
        country.text(tableData[i].country);
        shape.text(tableData[i].shape);
        duration.text(tableData[i].durationMinutes);
        comments.text(tableData[i].comments);
    
    };
    

};


