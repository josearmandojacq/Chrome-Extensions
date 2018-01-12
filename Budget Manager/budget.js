let button = document.querySelector('#spendAmount');
let input = document.querySelector('#amount');
let total = document.querySelector('#total');


chrome.storage.sync.get('total', (budget)=>{
    total.innerHTML = budget.total;
})


button.addEventListener('click', ()=>{
    chrome.storage.sync.get('total', (budget)=>{
        let newTotal = 0;
        if(budget.total){
            newTotal += parseInt(budget.total);
        }
        let amount = input.value;
        if(amount){
            newTotal += parseInt(amount);
        }
        chrome.storage.sync.set({'total': newTotal});
        total.innerHTML = newTotal;

    })
})