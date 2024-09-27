
let array = [{

    FirstName: 'kuldeep',
    MiddleName: 'Singh',
    LastName: 'Rajpoot'
}, {
    College: 'MITS',
    Branch: 'Computer Science',
    Year: '3rd'
}
];

let joint = array.map(FullDetails);
console.log(joint)

function FullDetails(item) {
    return[item.FirstName,item.MiddleName,item.LastName,item.College,item.Branch,item.Year].join(" ");
}

