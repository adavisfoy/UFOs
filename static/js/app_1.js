// Import the data from data.js
const tableData = data;

// Point our JS data to our HTML page using table/tbody HTML tag using d3
var tbody = d3.select("tbody");

// Build table to display all UFO sightings
// Build function to iterate through array of objects in data file and append to table row
function buildTable(data) {
    // clear existing data - basically creating a blank canvas by using empty string when creating table
    tbody.html("");

    // Next, loop through each object in the data
    // html <tr> tags are used for each row in a table
    data.forEach((dataRow) => {
        // and append a table row "tr" and cells for each value in the row
        let row = tbody.append("tr");

    // Set up another function to loop through each field in dataRow
    // Fields will become table data wrapped in html <td> tags
    // Telling code to put each sighting into its own row of data
    Object.values(dataRow).forEach((val) => {
        // append data to the table
        let cell = row.append("td");
        cell.text(val);
        }
    );

  });
}
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entered 
    if (date) {
        // If so, apply Filter to the default data to show only the rows for the date entered
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the filtered data
    // Note: If no date was entered, then filteredData will be original tableData
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
