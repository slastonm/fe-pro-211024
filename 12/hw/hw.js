const countries = [
    {
        name: 'Україна',
        capital: 'Київ',
        population: '41 мільйон'
    },
    {
        name: 'США',
        capital: 'Вашингтон',
        population: '331 мільйон'
    },
    {
        name: 'Канада',
        capital: 'Оттава',
        population: '38 мільйонів'
    }
];

let selectEl = document.querySelector('#countrySelect');
countries.forEach((value, index)=>{
    let option = document.createElement('option');
    option.value = index;
    option.innerHTML = value.name;
    selectEl.appendChild(option);
});

selectEl.onchange = function(){
    let selectIndex = this.value;
    let pEl = document.querySelector('p');
    if(selectIndex !== ""){
        let country = countries[selectIndex];
        pEl.innerHTML = `
            <h4>${country.name}</h4>
            <p>${country.capital}</p>
            <p>${country.population}</p>
        `;
    }
    else{
        pEl.innerHTML = "";
    }
}