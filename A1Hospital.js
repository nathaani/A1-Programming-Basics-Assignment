let hospital;
let header;
let ul;
let line;
let closeul;


let hospitalName = "Toronto Hospital"
let patients = [
    {
        id: "001",
        fullName: "Natalie Lew",
        dateOfBirth: new Date (1995,3,10).toDateString(),
        symptoms: 
            [
                {symptom: "cough"},
                {symptom: "sneeze"},
                {symptom: "rash"}
            ]
    },
    {
        id: "002",
        fullName: "Ben Ten",
        dateOfBirth: new Date (1992,12,3).toDateString(),
        symptoms: 
            [
                {symptom: "fever"},
                {symptom: "swelling"},
                {symptom: "nausea"}
            ]
    },
    {
        id: "003",
        fullName:"Chris Mas",
        dateOfBirth: new Date (1970,12,31).toDateString(),
        symptoms:
            [
                {symptom: "high temperature"},
                {symptom: "cough"},
                {symptom: "increase in apetite"}
            ]
    },
   
]



function showPatients() {
     hospital= "<h1>"+ hospitalName + "</h1>"
     hospital = console.log(hospital)

     for (let i = 0; i<3; i++){


         header = "<h2>"+ patients[i].fullName + "," +  patients[i].dateOfBirth +"</h2>"
        
         header = console.log(header)
         console.log ("<ul>")

         for(let Y = 0; Y<3; Y++){
         
            line = "<li>" + patients[i].symptoms[Y].symptom + "</li>"
            line = console.log(line)

        }
        console.log ("</ul>")

    }
}


console.log(showPatients());

