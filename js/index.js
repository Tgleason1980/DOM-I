const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerimg = document.getElementById("cta-img");
headerimg.setAttribute('src', siteContent["cta"]["img-src"])

let middleimg = document.getElementById("middle-img");
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const navigation = document.querySelectorAll('a');
navigation[0].textContent = siteContent['nav']['nav-item-1'] ;
navigation[1].textContent = siteContent['nav']['nav-item-2'] ;
navigation[2].textContent = siteContent['nav']['nav-item-3'] ;
navigation[3].textContent = siteContent['nav']['nav-item-4'] ;
navigation[4].textContent = siteContent['nav']['nav-item-5'] ;
navigation[5].textContent = siteContent['nav']['nav-item-6'] ;


navigation[0].style.color = "green";
navigation[1].style.color = "green";
navigation[2].style.color = "green";
navigation[3].style.color = "green";
navigation[4].style.color = "green";
navigation[5].style.color = "green";

const dom = document.querySelector('h1');
dom.innerHTML = "DOM <br> Is <br> Awesome";

const dombtn = document.querySelector('button');
dombtn.textContent = "Get Started";

const contentH4s = document.querySelectorAll('h4');
contentH4s[0].textContent = siteContent['main-content']['features-h4'] ;
contentH4s[1].textContent = siteContent['main-content']['about-h4'] ;
contentH4s[2].textContent = siteContent['main-content']['services-h4'] ;
contentH4s[3].textContent = siteContent['main-content']['product-h4'] ;
contentH4s[4].textContent = siteContent['main-content']['vision-h4'] ;
contentH4s[5].textContent = siteContent['contact']['contact-h4'] ;

const content = document.querySelectorAll('p');
content[0].textContent = siteContent['main-content']['features-content'] ;
content[1].textContent = siteContent['main-content']['about-content'] ;
content[2].textContent = siteContent['main-content']['services-content'] ;
content[3].textContent = siteContent['main-content']['product-content'] ;
content[4].textContent = siteContent['main-content']['vision-content'] ;
content[4].textContent = siteContent['main-content']['vision-content'] ;
const contactSheet = document.querySelectorAll('p');
contactSheet[5].textContent = siteContent['contact']['address'] ;
contactSheet[6].textContent = siteContent['contact']['phone'] ;
contactSheet[7].textContent = siteContent['contact']['email'] ;

const foot = document.querySelector('footer');
foot.textContent = "Copyright Great Idea! 2018";
