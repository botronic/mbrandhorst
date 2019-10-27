let toggleNav = () => {
    console.log("HEJ2")

    let navbar = document.getElementById("navbar-expand");
    let hr = document.getElementById("invis-line");

    navbar.style.height = navbar.style.height === '0px' ? '114px' : '0px';

    // if ( navbar.style.height === '0px') {
    //     navbar.style.height = '125px';
    //     hr.style.display = 'block';
    // } else {
    //     navbar.style.height = '0px';
    //     hr.style.display = 'none';
    // }

}