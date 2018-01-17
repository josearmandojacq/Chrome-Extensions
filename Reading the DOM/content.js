let anchors = document.querySelectorAll('h3 a');
let searchPattern = /https?\:\/\/(www.)(goertz|schuhcenter)\.(de)/g;

anchors.forEach((anchor) => {

    const anchorUrls = anchor.getAttribute('href');
    const searched = anchorUrls.search(searchPattern);

    //check if the url matched which the one searched
    if (searched !== -1) {
        const topParent = anchor.closest('div');
        const closestH3 = anchor.closest('h3');

        //creating a new container to put the elements to change
        let elementsContainer = document.createElement('div');
        elementsContainer.style.display = 'flex';
        elementsContainer.style.alignItems = 'center';
        elementsContainer.appendChild(closestH3);

        //Creating and styling the icon
        let icon = document.createElement('img');
        icon.src = 'https://image.flaticon.com/icons/svg/10/10164.svg';
        icon.style.width = '20px';
        icon.style.order = -1;
        elementsContainer.appendChild(icon);

        // inserting the new sturucture to the DOM
        topParent.prepend(elementsContainer);

    }
});