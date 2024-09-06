// NAV BAR
let navBarLinks = [
    {
        name: 'Fish Island',
        link: 'index.html',
        id: 'fish-island-nav',
        visible: false,
    },
    {
        name: 'Habitat',
        link: 'habitat.html',
        id: 'habitat-nav',
        visible: false,
    },
    {
        name: 'Vast Unknown',
        link: 'vast-unknown.html',
        id: 'vast-unknown-nav',
        visible: false,
    },
]
if(!sessionStorage.getItem('navBarLinks')) {sessionStorage.setItem('navBarLinks', JSON.stringify(navBarLinks))}; // initial set

// making nav bar
for(x = 0; x < navBarLinks.length; x++) {
    let navDiv = document.createElement('div');
    navDiv.style.visibility = "hidden";
    navDiv.id = navBarLinks[x].id;
    
    let navButton = document.createElement('a');
    navButton.innerText = navBarLinks[x].name;
    navButton.setAttribute('href', navBarLinks[x].link);
    navButton.className = 'nav-button';
    navDiv.appendChild(navButton);

    document.getElementById('nav-bar-div').appendChild(navDiv);
}