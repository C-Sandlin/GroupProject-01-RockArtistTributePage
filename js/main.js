const header = document.querySelector('header'),
  footer = document.querySelector('footer'),
  discography = document.getElementById('discography'),
  navItems = [{
      "href": "/",
      "title": "Home"
    },
    {
      "href": "career.html",
      "title": "Career"
    },
    {
      "href": "personal.html",
      "title": "Personal"
    },
    {
      "href": "newsfeed.html",
      "title": "News Feed"
    }
  ];

const socialItems = [{
  "href": "https://www.facebook.com/carlossantana/",
    "iconName": "logo-facebook"
  },
  {
    "href": "https://twitter.com/santanacarlos?lang=en",
    "iconName": "logo-twitter"
  },
  {
    "href": "https://www.santana.com/",
    "iconName": "cloudy"
  },
  {
    "href": "https://www.youtube.com/user/santanaofficial",
    "iconName": "logo-youtube"
  }
  
];


//  Create the Header
var div = addHTMLElement('div', header, '', ['flex-container', 'header-container']);
addHTMLElement('h1', div, "Carlos Santana");
var nav = addHTMLElement('nav', div, '', ["topNav"]);
navItems.forEach(item => {
  addLink(item, nav);
});



//  Create the footer
footer.classList.add('flex-container');
addHTMLElement('span', footer, '&copy; 2019 Software School of Rock!');
addHTMLElement('h4', footer, 'Connect with Carlos:');
var ul = addHTMLElement('ul', footer, '', ['flex-container']);
socialItems.forEach(item => {
  addSocialLink(item, ul);
})

addAlbum("Santana",1969,"Double Platinum",'./img/albums/santana-1969.png');





function addLink(linkObject, parent) {
  var link = document.createElement('a');
  link.href = linkObject.href;
  link.text = linkObject.title;
  parent.appendChild(link);
  return link;
}


function addHTMLElement(htmlTag, parent, htmlContent, classArray) {
  htmlElement = document.createElement(htmlTag);
  htmlElement.textContent = htmlContent;
  if (classArray !== undefined) {
    classArray.forEach(htmlClass => {
      htmlElement.classList.add(htmlClass);
    });
  }

  parent.appendChild(htmlElement);
  return htmlElement;
}


function addSocialLink(linkObject, parent) {
  var li = addHTMLElement('li', parent);
  var anchor = document.createElement('a');
  anchor.href = linkObject.href;
  li.appendChild(anchor);
  var icon = addHTMLElement('ion-icon',anchor);
  icon.setAttribute('name',linkObject.iconName);


}


function addAlbum(albumTitle,releaseYear,sales,imgUrl) {
  let div = addHTMLElement('div',discography,'',['disc-item']);
  let imgDiv = addHTMLElement('div',div,'',['disc-img']);
  let img = document.createElement('img');
  img.src = imgUrl;
  img.alt = `Santana Album: ${albumTitle} (${releaseYear})`;
  imgDiv.appendChild(img);
  addHTMLElement('h4',div,albumTitle,[]);
  addHTMLElement('p',div,`Released: ${releaseYear}`);
  addHTMLElement('p',div,`Album Status: ${sales}`);
  

}