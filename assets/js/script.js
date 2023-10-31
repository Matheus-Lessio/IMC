const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = "";

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5){
        description = 'CUIDADO! Você está magro!'
    } else if (bmi >= 18.5 && bmi <= 25 ) {
        description = "Você está no peso ideal, só continuar e vai virar o SUPER XANDÃO!";
    } else if (bmi > 25 && bmi <=30) {
        description = "VOCÊ ESTÁ FOFINHO MAS TEM COMO MELHORAR";
    } else if (bmi > 30 && bmi <=35) {
        description = "CUIDADO! Você está Gordo"
    } else if (bmi > 35 && bmi <=40) {
        description = "CUIDADO! Você está fofinho!"
    } else {
        description = "VOCÊ ESTÁ ACIMA DO PESO!!!"
    }

    

    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;

});  