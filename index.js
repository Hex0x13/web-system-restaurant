
const homeClassList = ['d-flex', 'flex-column', 'home'];
const menuClassList = ['menu-body'];
const contactClassList = menuClassList;

const homeContent = document.querySelector('.home-content');
const contactContent = document.querySelector('.contact-us');
const menuContent = document.querySelector('.menu-content');

const homeBtn = document.querySelector('.home-btn');
const contactBtn = document.querySelector('.contact-btn');
const menuBtn = document.querySelector('.menu-btn');
const orderBtn = document.querySelector('.order-now-btn');

homeBtn.onclick = loadContent.bind(homeBtn, homeContent, homeClassList);
contactBtn.onclick = loadContent.bind(contactBtn, contactContent, contactClassList);
menuBtn.onclick = loadContent.bind(menuBtn, menuContent, menuClassList);
orderBtn.onclick = loadContent.bind(menuBtn, menuContent, menuClassList);

function replaceClassList(newlist) {
    document.body.className = '';
    newlist.forEach(classItem => {
        document.body.classList.add(classItem);
    });
}

function hideElement(list) {
    list.forEach(element => {
        if (!element.classList.contains('hidden')) {
            element.classList.add('hidden');
        }
    });
}

function loadContent(content, contentClass) {
    if (!this.classList.contains('active')) {
        replaceClassList(contentClass);
        hideElement([contactContent, homeContent, menuContent]);
        content.classList.remove('hidden');
        [homeBtn, menuBtn, contactBtn].forEach(element => {
            element.classList.remove('active');
            console.log(element.classList);
        })
        this.classList.add('active');
    }
}

window.onload = () => {
    document.addEventListener('click', () => {
        document.getElementById('disclaimer-msg').remove();
    }, {once: true});
};
