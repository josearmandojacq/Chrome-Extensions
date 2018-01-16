
let anchors = document.querySelectorAll('h3 a');
let searchPattern = /https?\:\/\/(www.)(goertz|schuhcenter)\.(de)/g;



anchors.forEach((anchor)=>{
    
    const anchorUrls  = anchor.getAttribute('href');
    console.log(anchorUrls, anchor);
    let searched = anchorUrls.search(searchPattern);

    //check if the url matched which the one searched
    if (searched !== -1){
        const topParent = anchor.closest('div');
        
        //Creating the icon
        let icon = document.createElement('img');
        icon.setAttribute('src', 'https://cdn1.iconfinder.com/data/icons/smiley-8/512/1_smiley-64.png');
        
        //adding the icon to the target 
        topParent.appendChild(icon);
        

        
    }
});

