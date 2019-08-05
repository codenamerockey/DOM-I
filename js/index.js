const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
// let logo = document.getElementById('logo-img');
// logo.setAttribute('src', siteContent['nav']['img-src']);

// *******Task 1: Create selectors to point your data into elements****

//Navigation
const navigation = document.querySelectorAll('a');
console.log(navigation);

let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

//CTA section
const ctaHeading = document.querySelector('.cta-text h1');
console.log(ctaHeading);

const ctaBtn = document.querySelector('.cta-text button');
console.log(ctaBtn);

const ctaImage = document.querySelector('#cta-img');
console.log(ctaImage);

//Main Content Top Section
const topContentHeading = document.querySelectorAll('.top-content h4');
console.log(topContentHeading);

const topContentPara = document.querySelectorAll('.top-content p');
console.log(topContentPara);

//Middle Image
const middleImage = document.querySelector('#middle-img');
console.log(middleImage);

//Bottom Content
const bottomContentHeading = document.querySelectorAll('.bottom-content h4');
console.log(bottomContentHeading);

const bottomContentPara = document.querySelectorAll('.bottom-content p');
console.log(bottomContentPara);

//Contact Section
const contactHeading = document.querySelector('.contact h4');
console.log(contactHeading);

const contactPara = document.querySelectorAll('section.contact p');
console.log(contactPara);

//footer
const footer = document.querySelector('footer p');
console.log(footer);

/*********************************************************************/

// ****Task 2: Update the HTML with the JSON data****

//Navigation
navigation[0].textContent = siteContent.nav['nav-item-1'];
navigation[1].textContent = siteContent.nav['nav-item-2'];
navigation[2].textContent = siteContent.nav['nav-item-3'];
navigation[3].textContent = siteContent.nav['nav-item-4'];
navigation[4].textContent = siteContent.nav['nav-item-5'];
navigation[5].textContent = siteContent.nav['nav-item-6'];

//CTA section
ctaHeading.textContent = siteContent.cta.h1;
ctaBtn.textContent = siteContent.cta.button;
ctaImage.setAttribute('src', siteContent.cta['img-src']);

//CTA Button Event stretch goal
ctaBtn.addEventListener('click', () => {
  ctaHeading.textContent =
    "If You're Reading This Then You have Been Clicking Around!! Nice Job";
});

//Main Content Top Section
topContentHeading[0].textContent = siteContent['main-content']['features-h4'];

topContentHeading[1].textContent = siteContent['main-content']['about-h4'];

topContentPara[0].textContent = siteContent['main-content']['features-content'];

topContentPara[1].textContent = siteContent['main-content']['about-content'];

//Middle Image
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Bottom Content

bottomContentHeading[0].textContent =
  siteContent['main-content']['services-h4'];

bottomContentHeading[1].textContent = siteContent['main-content']['product-h4'];

bottomContentHeading[2].textContent = siteContent['main-content']['vision-h4'];

bottomContentPara[0].textContent =
  siteContent['main-content']['services-content'];

bottomContentPara[1].textContent =
  siteContent['main-content']['product-content'];

bottomContentPara[2].textContent =
  siteContent['main-content']['vision-content'];

//Contact Section

// contactPara.forEach((location, index) => {
//   location.textContent = siteContent.contact[index];
// });

const newPara = document.createElement('p');
newPara.textContent = contactPara[0].textContent = siteContent.contact.address.slice(
  19
);
console.log(newPara);
contactHeading.textContent = siteContent.contact['contact-h4'];
contactPara[0].textContent = siteContent.contact.address.slice(0, 19);
contactPara[0].append(newPara);
contactPara[1].textContent = siteContent.contact.phone;
contactPara[2].textContent = siteContent.contact.email;

//footer
footer.textContent = siteContent.footer.copyright;

/**********************************************************************/

//Task 3: Add new content

//Change the color of the navigation text to be green.
navigation.forEach(link => {
  link.style.color = 'lawngreen';
});

//Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.

//Reference to navbar
const navbar = document.querySelector('nav');
console.log(navbar);

//First new link
const homeLink = document.createElement('a');
homeLink.textContent = 'Home';
homeLink.setAttribute('href', '#');
homeLink.style.color = 'lawngreen';
console.log(homeLink);

//Second new link
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.setAttribute('href', '#');
blogLink.style.color = 'lawngreen';
console.log(blogLink);

// Append and Prepend links to Navbar
navbar.prepend(homeLink);
navbar.append(blogLink);
