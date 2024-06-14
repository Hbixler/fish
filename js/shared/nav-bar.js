makeNavBarVisible();

// nav bar details
let navBarLinks = [
    {
        name: 'Fish Island',
        link: 'index.html',
    },
    {
        name: 'Habitat',
        link: 'habitat.html',
    },
    {
        name: 'Vast Unknown',
        link: 'vast-unknown.html',
    },
    {
        name: 'Wise Old Mage',
        link: 'wise-old-mage.html',
    },
    {
        name: 'Better Oceans',
        link: 'better-oceans.html',
    },
]

// making nav bar
for(x = 0; x < navBarLinks.length; x++) {
    let navDiv = document.createElement('div');
    
    let navButton = document.createElement('a');
    navButton.innerText = navBarLinks[x].name;
    navButton.setAttribute('href', navBarLinks[x].link);
    navButton.className = 'nav-button';
    navDiv.appendChild(navButton);

    document.getElementById('nav-bar').appendChild(navDiv);
}