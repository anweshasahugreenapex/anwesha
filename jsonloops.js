let data={
    "states":["odisha","rajastan","meghalaya","himachalPradesh"],
    "IDs":["12","13","45","89"],
    "colors":["orange","red","yellow","gray","pink"],//json array
    "records":[//json object array
        {"name":"rohan","city":"kanpur"},
        {"name":"Radhika","city":"Nasik"},
        {"name":"roshan","city":"bhubaneswar"}
    ]
};

let data2=[{
    "id":"1","mail":"hello1@gmail.com"
},
{
    "id":"2","mail":"hello2@gmail.com"
},{
    "id":"3","mail":"hello3@gmail.com"
},{
    "id":"4","mail":"hello4@gmail.com"
},{
    "id":"5","mail":"hello5@gmail.com"
}];
document.write(`<br/>foreach loop output :- <br/>`)
data2.forEach((item)=>{//for each loop
    document.write(`<br/>id : ${item.id}  <br/>`)
    document.write(`email id : ${item.mail}<br/>`)
})


document.write(`<br/>for...in loop output :-<br/>`)
for(index in data.colors){//for...in loop
    document.write(`${data.colors[index]}<br/>`);
}
document.write(`<br/>for loop output :- <br/>`)

for(let index=0 ;index<data.states.length;index++){//for loop
    document.write(`${data.states[index]}<br/>`)
}
document.write(`<br/>for...in loop in json object array output :- <br/>`)//for ...in loop
for(let key in data.records){
    for(let inner_key in data.records[key]){
        document.write(`${data.records[key][inner_key]}<br/>`)
    }
}

document.write(`<br/>for...of loop output :- <br/>`)
for(const value of data.IDs){//for...of loop
    document.write(`${value}<br/>`);
}

document.write(`<br/>map function output :- <br/>`)

const multiple=data.IDs.map(//using map function
    (num)=>{
        return (`${num*10}`)//ids in multiple of 10
    }
)
document.write(multiple)





