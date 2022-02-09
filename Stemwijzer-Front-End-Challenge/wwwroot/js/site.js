
var ButtonStart = document.getElementById("ButtonStart");
var Buttoneens = document.getElementById("Buttoneens");
var Buttononeens = document.getElementById("Buttononeens");
var Geenmening = document.getElementById("Geenmening");
var ButtonsDiv = document.getElementById("ButtonsDiv");
var Vraag = document.getElementById("Vraag");
var Statement = document.getElementById("Statement");

function AlterButtons()
{
    
    ButtonsDiv.style.visibility = "visible"
    ButtonStart.style.visibility = "hidden"
    Vraag.innerHTML = "Er moet een bindend referendum komen, waarmee burgers door het parlement aangenomen wetten kunnen tegenhouden."
    Statement.innerHTML = "Bindend referendum"

};

function vraag2()
{
    Vraag.innerHTML = "Er moet een maatschappelijke dienstplicht voor jongeren komen. Zij kunnen dan dienen in het leger, bij de politie of in de zorg."
    Statement.innerHTML = "Maatschappelijke dienstplicht"
}

function vraag3() {

    Vraag.innerHTML = "Om discriminatie op basis van de naam te voorkomen, moet anoniem solliciteren bij de overheid en bij openbare instellingen de regel worden."
    Statement.innerHTML = "Anoniem solliciteren"
}

function vraag4() {

    Vraag.innerHTML = "Belediging van groepen op grond van ras, godsdienst of geaardheid moet niet langer strafbaar zijn."
    Statement.innerHTML = "Groepsbelediging"
}

