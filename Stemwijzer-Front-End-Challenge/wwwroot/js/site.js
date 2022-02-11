
var ButtonStart = document.getElementById("ButtonStart");
var Buttoneens = document.getElementById("Buttoneens");
var Buttononeens = document.getElementById("Buttononeens");
var Geenmening = document.getElementById("Geenmening");
var ButtonsDiv = document.getElementById("ButtonsDiv");
var Vraag = document.getElementById("Vraag");
var Statement = document.getElementById("Statement");
var NummerVraag = document.getElementById("Uitleg");
var Uitklappen = document.getElementById("Uitklappen");
var Meningen = document.getElementById("meningen");
var PVVP = document.getElementById("PVVP");
var PVVM = document.getElementById("PVVM");
var SPP = document.getElementById("SPP");
var SPM = document.getElementById("SPM");
var D66P = document.getElementById("D66P");
var D66M = document.getElementById("D66M");
var CUP = document.getElementById("CUP");
var CUM = document.getElementById("CUM");
var uitleg = 0;

var parties = [
    {
        name: "PVV",
        secular: true,
        size: 20,
        long: "Partij voor de Vrijheid"
    },
    {
        name: "D66",
        secular: true,
        size: 19,
        long: "Democratie 66"
    },
    {
        name: "CU",
        secular: false,
        size: 6,
        long: 'Christen Unie'
    },
    {
        name: "SP",
        secular: true,
        size: 14,
        long: "Socialistische Partij"
    }
];


// functie voor de eens oneens en geen mening knoppen voor te laten komen en voor de eerste vraag en statement
function AlterButtons()
{
    uitleg = 1;
    ButtonsDiv.style.visibility = "visible"
    ButtonStart.style.visibility = "hidden"
    Vraag.innerHTML = "Er moet een bindend referendum komen, waarmee burgers door het parlement aangenomen wetten kunnen tegenhouden."
    Statement.innerHTML = "Bindend referendum"
    NummerVraag.innerHTML = "Vraag 1"


    };
// functie voor de tweede vraag en statement
function vraag2()
{
    uitleg = 2;
    Vraag.innerHTML = "Er moet een maatschappelijke dienstplicht voor jongeren komen. Zij kunnen dan dienen in het leger, bij de politie of in de zorg."
    Statement.innerHTML = "Maatschappelijke dienstplicht"
    NummerVraag.innerHTML = "Vraag 2"
    Meningen.style.visibility = "hidden"


    }
//functie voor de derde vraag en statement
function vraag3()
{
    uitleg = 3;
    Vraag.innerHTML = "Om discriminatie op basis van de naam te voorkomen, moet anoniem solliciteren bij de overheid en bij openbare instellingen de regel worden."
    Statement.innerHTML = "Anoniem solliciteren"
    NummerVraag.innerHTML = "Vraag 3"
    Meningen.style.visibility = "hidden"


    }
//functie voor de vierde vraag en statement
function vraag4()
{
    uitleg = 4;
    Vraag.innerHTML = "Belediging van groepen op grond van ras, godsdienst of geaardheid moet niet langer strafbaar zijn."
    Statement.innerHTML = "Groepsbelediging"
    NummerVraag.innerHTML = "Vraag 4"
    Meningen.style.visibility = "hidden"
}

    // uitleg partij
function uitleggen()
{
    if (uitleg == 1) {
        Meningen.style.visibility = "visible"
        PVVP.innerHTML = "Contra"
        PVVM.innerHTML = "Geen toelichting gegeven"

        SPP.innerHTML = "Pro"
        SPM.innerHTML = "Directe inspraak en zeggenschap van mensen maakt onze democratie sterker en de besluiten beter. In plaats van een raadgevend referendum willen we zo snel mogelijk een correctief referendum, zodat de bevolking ook tussen de verkiezingen door de gekozen vertegenwoordigers kan corrigeren, zowel bij lokale, nationale als Europese onderwerpen."

        D66P.innerHTML = "Pro"
        D66M.innerHTML = "D66 wil de democratische controle moderniseren. Daarom wil D66 kiezers een noodrem geven met de mogelijkheid om via een correctief bindend referendum wetsvoorstellen tegen te houden, nadat het parlement deze heeft aangenomen. Dit correctief bindend referendum omvat geen internationale verdragen."

        CUP.innerHTML = "Pro"
        CUM.innerHTML = "Wij willen experimenteren met nieuwe vormen van directe democratie. Wij werken daarom aan alternatieve modellen om burgers te betrekken en hechten vooral aan het uitwisselen van argumenten en samen zoeken naar oplossingen. Tot dan steunen wij het referendum om burgers meer invloed te geven."
    }
    if (uitleg == 2) {
        Meningen.style.visibility = "visible"
        PVVP.innerHTML = "Pro"
        PVVM.innerHTML = "Geen toelichting gegeven"

        SPP.innerHTML = "Contra"
        SPM.innerHTML = "De SP is voorstander van een maatschappelijke stage voor jongeren binnen het onderwijs om kennis te maken met de maatschappij, bijvoorbeeld in zorg of onderwijs. Een maatschappelijke dienstplicht voor langere tijd buiten het onderwijs gaat echter veel te ver, zal veel kosten en weinig opleveren. Belangrijke maatschappelijke taken moeten worden verricht door mensen die daar gemotiveerd en goed opgeleid voor zijn,"

        D66P.innerHTML = "Contra"
        D66M.innerHTML = "Natuurlijk is het mooi als jongeren zich willen inzetten voor de maatschappij, maar dat is het juist als zij er zÃ©lf voor kiezen. Daarom wil D66 dit niet verplicht stellen. Scholen kunnen kiezen voor het aanbieden van een maatschappelijke stage, maar dat moet niet door de overheid worden opgelegd."

        CUP.innerHTML = "Pro"
        CUM.innerHTML = "Mensen nemen op allerlei manieren deel aan de samenleving: door te werken, te leren, vrijwilligerswerk te doen, buren of familie te helpen.Een maatschappelijke dienstplicht doet geen recht aan de verschillende manieren waarop mensen participeren en beperkt de individuele vrijheid te veel."
    }
    if (uitleg == 3) {
        Meningen.style.visibility = "visible"
        PVVP.innerHTML = "Contra"
        PVVM.innerHTML = "Geen toelichting gegeven"

        SPP.innerHTML = "Pro"
        SPM.innerHTML = "Discriminatie  moet fel bestreden worden in alle delen van de maatschappij. Experimenten met anoniem solliciteren uitbreiden is daarom een goed idee. Dit algeheel doorvoeren gaat nu echter een stap te ver. Bovendien zit anoniem solliciteren ook een actief diversiteitsbeleid juist in de weg."

        D66P.innerHTML = "Pro"
        D66M.innerHTML = "Nederlanders met een niet - westerse achtergrond zijn drie keer vaker werkloos dan Nederlanders met een westerse achtergrond.D66 wil dit verschil terugdringen.EÃ©n van de maatregelen die D66 wil nemen is het opzetten van experimenten met neutrale sollicitatie - en promotieprocedures."

        CUP.innerHTML = "Pro"
        CUM.innerHTML = "Waar het gaat om vacatures van de overheid wordt anoniem solliciteren de norm. GroenLinks wil dat de overheid een goede afspiegeling vormt van de samenleving, zeker bij publieke topfuncties. "

    }

    if (uitleg == 4) {

        Meningen.style.visibility = "visible"
        PVVP.innerHTML = "Pro"
        PVVM.innerHTML = "Geen toelichting gegeven"

        SPP.innerHTML = "Contra"
        SPM.innerHTML = "De strafbaarheid op belediging van groepen blijkt in de praktijk een nuttig middel om bijvoorbeeld antisemitisme of religieuze haatoproepen tegen homoseksuelen tegen te gaan."

        D66P.innerHTML = "Contra"
        D66M.innerHTML = "D66 is voor vrije meningsuiting maar vindt dat het opzettelijk beledigen, discrimineren en haat zaaien tegen mensen vanwege het behoren tot een bepaalde bevolkingsgroep, niet past in onze samenleving."

        CUP.innerHTML = "Contra"
        CUM.innerHTML = "Onze samenleving is de afgelopen vijftien jaar verruwd. Respectloos gedrag lijkt normaal te zijn geworden. GroenLinks stelt een harde grens: we pakken racisme en discriminatie keihard aan, zeker als het gekoppeld wordt aan geweld of het oproepen tot geweld, intimidatie en bedreigingen."

    }
}
