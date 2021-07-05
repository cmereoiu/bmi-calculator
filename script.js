function auswertung() {
    var gewicht = document.getElementsByName('gewicht')[0].value;
    var groesse = document.getElementsByName('groesse')[0].value;

    var bmi = 0;

    bmi = (gewicht / ((groesse * groesse) / 10000)).toFixed(1);

    if (bmi < 18.5) {
        var html1 = `Ihre BMI ist:
       ${bmi}
       Sie haben Untergewicht und sollten zunehmen.`;
        document.getElementById('ausgabe').innerHTML = html1;
    } else if (bmi > 18.5 && bmi < 25) {
        var html2 = `Ihre BMI ist:
       ${bmi}
        Herzlichen Glückwunsch! Ihr Gewicht ist genau richtig.`;
        document.getElementById('ausgabe').innerHTML = html2;
    } else if (bmi >= 25 && bmi < 30) {
        var html3 = `Ihre BMI ist:  ${bmi}  Wenn Sie gesund sind und sich wohl fühlen, können,
 aber müssen Sie nicht unbedingt abnehmen. Sprechen Sie im Zweifel mit Ihrem Arzt.`;

        document.getElementById('ausgabe').innerHTML = html3;
    } else if (bmi >= 30 && bmi < 40) {
        var html4 = `Ihre BMI ist:  ${bmi}  Achtung, das ist zu viel. Sie sollten Ihre Ernährung
auf jeden Fall umstellen oder sich mehr bewegen.`;

        document.getElementById('ausgabe').innerHTML = html4;
    } else if (bmi > 40) {
        var html4 = `Ihre BMI ist:  ${bmi}  Sie haben extremes Übergewicht und müssen unbedingt abnehmen.`;

        document.getElementById('ausgabe').innerHTML = html4;
    }
    return false;
}