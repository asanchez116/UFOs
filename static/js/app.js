// import the data from data.js
const tableData = data.js;

// Reference the HTML table using d3
var tbody = d3.select('tbody')

function buildTable(data){
    // First, clear out any existing data
    tbody.html("");
    // Iterate over each row in data
    data.forEach((dataRow) => {
            // For each row append a "tr" tag to table body
            let row = tbody.append("tr");
            // for the Object's values in dataRow, iterate over each value 
            Object.values(dataRow).forEach((val) => {
                // for each value append a rd tag to each row 
                let cell = row.append("td");
                // Store the text only to the td tag
                cell.text(val);
            }
            );
        })
    }
