let limitValue = document.querySelector('#limit');
let saveLimit = document.querySelector('#saveLimit');
let resetTotal = document.querySelector('#resetTotal');

saveLimit.addEventListener('click', ()=>{
    chrome.storage.sync.get('total', (budget)=>{
        let newLimit
    })
})
