///////////////////////////////////////////////////////////
// make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')

btnNavEl.addEventListener('click', () => {
        headerEl.classList.toggle('nav-open')
    })
    ///////////////////////////////////////////////////////////
    // Current year

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear


///////////////////////////////////////////////////////////
// make mobile navigation work

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
        const href = element.getAttribute("href")


        if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" })
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href)
            sectionEl.scrollIntoView({ behavior: "smooth" })
        }
        if (element.classList.contains('main-nav-link')) {
            headerEl.classList.toggle('nav-open')
        }
    })
});


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js