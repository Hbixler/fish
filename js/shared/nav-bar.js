// NAV BAR
let navBarLinks = [
    {
        name: 'Fish Island',
        link: '../index.html',
        id: 'fish-island-nav',
        visible: false,
    },
    {
        name: 'Habitat',
        link: '/pages/habitat.html',
        id: 'habitat-nav',
        visible: false,
    },
    {
        name: 'Vast Unknown',
        link: '/pages/vast-unknown.html',
        id: 'vast-unknown-nav',
        visible: false,
    },
]
if(!sessionStorage.getItem('navBarLinks')) {sessionStorage.setItem('navBarLinks', JSON.stringify(navBarLinks))}; // initial set

// making nav bar
let navBar = get('navBarLinks');
for(x = 0; x < navBar.length; x++) {
    let navDiv = document.createElement('div');
    navDiv.style.visibility = navBar[x].visible ? "visible" : "hidden";
    navDiv.id = navBar[x].id;
    navDiv.classList = ['row'];
    
    let navButton = document.createElement('a');
    navButton.innerText = navBarLinks[x].name;
    navButton.setAttribute('href', navBarLinks[x].link);
    navButton.className = 'nav-button';
    navDiv.appendChild(navButton);

    document.getElementById('nav-bar-div').appendChild(navDiv);
}