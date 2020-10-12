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

function handleClick(){
    // Grab the datetime value from the filter
    let date = d3.select("datetime").property("value");
    // Set default filter and save to filteredData
    let filteredData = tableData;
    // Filter data based on date if entered
    if (date) {
        // Apply filter to table data keeping the rows where datetime values match filter
        filteredData = filteredData.filter( row => row.datetime === date);
    }
    // Rebuild the table using filtered data
    buildTable(filteredData);
    // if no date available, all data displayed
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);
