
let hospitalName = "Toronto Hospital"
let patients = [
    {
        id: "001",
        fullName: "Natalie Lew",
        dateOfBirth: new Date (1995,3,10),
        symptoms: 
            [
                {cough: "cough"},
                {sneeze: "sneeze"},
                {rash: "rash"}
            ]
    },
    {
        id: "002",
        fullName: "Ben Ten",
        dateOfBirth: new Date (1992,12,3),
        symptoms: 
            [
                {fever: "fever"},
                {swelling: "swelling"},
                {nausea: "nausea"}
            ]
    },
    {
        id: "003",
        fullName:"Chris Mas",
        dateOfBirth: new Date (1970,12,31),
        symptoms:
            [
                {highTemperature: "high temperature"},
                {cough: "cough"},
                {increaseApetite: "increase in apetite"}
            ]
    },
   
]

function showPatients() {
     let hospital = "<h1>"+ hospitalName + "</h1>";

     for (let i = 0; i<patients.length; i++){

      

        let header2 = "<h2>"+ patients[i].fullName + patients[i].dateOfBirth.toString + "</h2>";
        let ul = "<ul>";
        let line = "<li>"; + patients[i].symptoms[i] + "</li>";
        let line2 = "<li>"; + patients[i].symptoms[i] + "</li>";
        let line3 = "<li>"; + patients[i].symptoms[i] + "</li>";
        let closeul = "</ul>";

    }
    return header2;
}

showPatients();
console.log(header2)
