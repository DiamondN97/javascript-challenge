// from data.js
var tableData = data;

// YOUR CODE HERE!

var table = d3.select('table');
var body = d3.select('body');
var tbody=d3.select('tbody')




var form = d3.select('form');
form.on('submit', runEnter);

function runEnter(){
    d3.event.preventDefault();
    var inputElement = d3.select('input');
    var inputValue = inputElement.property('value');
    var filtered = tableData.filter(tableData => tableData.datetime === inputValue);
    // console.log(filtered);
    var table = d3.select('table');
    tbody.html('');
    
for(let i = 0; i < filtered.length; i++){
    var row = tbody.append('tr');
    var cell = tbody.append('td');
    var city = tbody.append('td');
    var state = tbody.append('td');
    var country = tbody.append('td');
    var shape = tbody.append('td');
    var duration = tbody.append('td');
    var comments = tbody.append('td')
    cell.text(tableData[i].datetime);
    city.text(tableData[i].city);
    state.text(tableData[i].state);
    country.text(tableData[i].country);
    shape.text(tableData[i].shape);
    duration.text(tableData[i].durationMinutes);
    comments.text(tableData[i].comments);


    };
}




