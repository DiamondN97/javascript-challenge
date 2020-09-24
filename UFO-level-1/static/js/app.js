// from data.js
var tableData = data;


var table = d3.select('table');
var body = d3.select('body');
var tbody=d3.select('tbody');


var form = d3.select('form');
form.on('submit', runEnter);



function runEnter(){
    d3.event.preventDefault();
    var inputElement = d3.select('input');
    var inputValue = inputElement.property('value');
    var filtered = tableData.filter(tableData => tableData.datetime === inputValue);

    // console.log(filtered);
    tbody.html('');
    tableInfo(filtered);
};




function tableInfo(sightingInfo){
    for(let i = 0; i < sightingInfo.length; i++){
        var row = tbody.append('tr');
        var cell = tbody.append('td');
        var city = tbody.append('td');
        var state = tbody.append('td');
        var country = tbody.append('td');
        var shape = tbody.append('td');
        var duration = tbody.append('td');
        var comments = tbody.append('td')
        cell.text(sightingInfo[i].datetime);
        city.text(sightingInfo[i].city);
        state.text(sightingInfo[i].state);
        country.text(sightingInfo[i].country);
        shape.text(sightingInfo[i].shape);
        duration.text(sightingInfo[i].durationMinutes);
        comments.text(sightingInfo[i].comments);
    };
};

// btn.addEventListener("click", runEnter);

