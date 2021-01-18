var verbs = [
    "abitare", "APPARECCHIARE", "ASCOLTARE", "ASPETTARE", "CAMMINARE", "CENARE", 
    "COMINCIARE", "INCONTRARE", "FUMARE", "GUARDARE", "LAVORARE", "MANGIARE", "NUOTARE", 
    "PAGARE", "PARLARE", "PRANZARE", "SALUTARE", "SBAGLIARE", "VIAGGIARE", "CHIEDERE", 
    "CHIUDERE", "CONOSCERE", "CORREGGERE", "CORRERE", "DERIDERE", "LEGGERE", "DERIDERE", 
    "LEGGERE", "METTERE", "PRENDERE", "RIDERE", "RISPONDERE", "SCENDERE", "SCRIVERE", 
    "VEDERE", "VENDERE", "VINCERE", "VIVERE", "APRIRE", "DIVERTIRE", "DORMIRE", "OFFRIRE", 
    "PARTIRE", "SENTIRE", "SERVIRE", "SOFFRIRE", "ARROSSIRE", "CAPIRE", "COLPIRE", 
    "CONDIRE", "FORNIRE", "IMPAZZIRE", "INSERIRE", "INTERFERIRE", "PREFERIRE", "PULIRE", "TOSSIRE"]

var pronouns = ["Io", "Tu", "Lui", "Lei", "Noi", "Voi", "Loro"]

var verb = verbs[Math.floor(Math.random() * 100) % verbs.length]
verb = verb.toLowerCase()

var pronoun = pronouns[[Math.floor(Math.random() * 100) % 7]]

document.getElementById("myText").innerHTML = pronoun;

function conjugate() {

    var termination = verb.length - 3 

    switch(pronoun) {
        case "Io":
            verb = verb.substr(0, termination) + "o";
            break;
        case "Tu":
            verb = verb.substr(0, termination) + "i";
            break;
        case "Lui":
        case "Lei":
            if (verb.charAt(termination) != 'a') {
                verb = verb.substr(0, termination) + "e";
                break;
            } else {
                verb = verb.substr(0, termination) + "a";
                break;
            }
        case "Noi":
            verb = verb.substr(0, termination) + "iamo";
            break;
        case "Voi":
            if (verb.charAt(termination) == 'a') {
                verb = verb.substr(0, termination) + "ate";
                break;
            } else if (verb.charAt(termination) == 'e') {
                verb = verb.substr(0, termination) + "ete";
                break;
            } else {
                verb = verb.substr(0, termination) + "ite";
                break;
            }
        case "Loro":
            if (verb.charAt(termination) != 'a') {
                verb = verb.substr(0, termination) + "ono";
                break;
            } else {
                verb = verb.substr(0, termination) + "ano";
                break;
            }
    }
    return verb;
}

function userGuess(form) {
    var conjugatedVerb = conjugate();
    var TestVar = form.inputbox.value;

    // console.log(Math.floor(Math.random() * 100) % 5)

    var n = conjugatedVerb.toString().localeCompare(TestVar.toString())
    
    if(n == 0)
        alert ("Correct!")
    else 
        alert ("Incorrect! \"" + pronoun + " " + conjugatedVerb + "\" was the correct form")
}

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});
