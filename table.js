const getDataFromJson = () => {
  //fetch data from the JSON
  fetch("json_data.json")
    .then((response) => response.json())
    .then((data) => {
      take(data);
      // console.log(data);
    });
};
getDataFromJson();

const createHead = (data) => {
  //function to create head for dynamic username
  const tbleHead = ["Date"];
  data.map((obj) => {
    tbleHead.push(obj.name);
  });
  return tbleHead;
};
const container = document.getElementById("container");

let take = (data) => {
  //get the JSON data and make table to display
  let jsonData = data;
  const table = document.createElement("table"); //create table
  table.setAttribute("class", "table"); //set class to the table
  const tableHead = createHead(jsonData); //create tablehead(User) as per the dynamic data
  const thead = document.createElement("thead"); //create table head

  const tr = document.createElement("tr"); ///create table row
  tableHead.forEach((head) => {
    //add data to the table head for each head created by createHead function
    const th = document.createElement("th");
    th.innerText = head; //
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");

  // console.log(jsonData)
  // console.log(JSON.parse(jsonData[0].daily_pnl))
  for (const key in JSON.parse(jsonData[0].daily_pnl)) {
    //iteration for daily_pnl object of JSON_data for first index
    const tr2 = document.createElement("tr"); //create table row
    const td = document.createElement("td"); //create table data
    td.innerText = `${key}`; //assign values to the td
    tr2.appendChild(td); //append in row
    jsonData.map((item) => {
      //mapping through JSON array
      const td2 = document.createElement("td");
      td2.innerText = `${JSON.parse(item.daily_pnl)[key]}`;
      // console.log(`${JSON.parse(item.daily_pnl)[key]}`)
      tr2.appendChild(td2);
    });
    table.appendChild(tr2); //append in table
  }
  container.appendChild(table); //append in container of tbody
};
