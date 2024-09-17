
let header = {
  logo: {
    url: '/home',
    text: 'logo',
  },
  nav: {
    1: {
      url: '/home',
      text: 'Home',
    },
    2: {
      url: '/about',
      text: 'About',
    },
    3: {
      url: '/portfolio',
      text: 'Portfolio',
    },
    4: {
      url: '/contacts',
      text: 'Contacts',
    }
  },
  btn: ['LogIn', 'LogOut'],
}
let headerElement = document.createElement('header');
headerElement.style.backgroundColor = 'red';
headerElement.style.display = 'flex';
headerElement.style.flexDirection = 'space-between';
headerElement.style.alignItems = 'center';
headerElement.style.gap = '70px';
headerElement.style.height = '100px';


let logoElement = document.createElement('a');
logoElement.href = header.logo.url;
logoElement.textContent = header.logo.text;
logoElement.style.textDecoration = 'none';
logoElement.style.color = 'white';
logoElement.style.fontSize = '30px';
logoElement.style.marginLeft = '50px';
headerElement.appendChild(logoElement);

let navElement = document.createElement('nav')
for (let key in header.nav) {
    let navItem = header.nav[key];
    let navLink = document.createElement('a');
    navLink.href = navItem.url;
    navLink.textContent = navItem.text;
    navElement.appendChild(navLink);
    navLink.style.textDecoration = 'none';
    navLink.style.color = 'black';
}
navElement.style.display = 'flex';
navElement.style.gap = '20px';
navElement.style.margin = '0 auto';
headerElement.appendChild(navElement);


let btnElement = document.createElement ('div');
for (let btnText of header.btn) {
  let btn = document.createElement ('button');
  btn.textContent = btnText;
  btnElement.appendChild(btn);
}
btnElement.style.display = 'flex';
btnElement.style.gap = '20px';
btnElement.style.marginRight = '30px';

headerElement.appendChild(btnElement);
document.body.appendChild(headerElement);
console.log (headerElement);