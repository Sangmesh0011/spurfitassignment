
var workData=[{
    title: "Senior Full-Stack Engineer",
    d1: "Full Time Position",
    d2:"Berlin or remote",
    d3:"$65-85k, 0.5-1.50% equity share options"
},
]

function setWorkData(newWorkData){
    workData=newWorkData
    console.log(workData)
}

function getWorkData(){
    return workData;
}

export { getWorkData, setWorkData, workData };
