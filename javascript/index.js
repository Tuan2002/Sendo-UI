var navBarContainer = document.getElementById("header");
var navBarItems = navBarContainer.getElementsByClassName("nav-bar__container__item");
navBarItems[0].className += " active";
for (var i = 0; i < navBarItems.length; i++) {
    navBarItems[i].addEventListener("click", function () {
        var currentItem = document.getElementsByClassName("active");
        // If there's no active class
        if (currentItem.length > 0) {
            currentItem[0].className = currentItem[0].className.replace(" active", "");
        }
        // Add the active class to the current/clicked button
        this.className += " active";
    });
}


var header = document.getElementsByClassName("main-header")[0];
var mavBar = document.getElementsByClassName("nav-bar")[0];
var headerSticky = header.offsetTop;
var navBarSticky = mavBar.offsetTop;
var deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
console.log(deviceWidth);
window.onscroll = function () { setStickyHeader() };
function setStickyHeader() {
    if (deviceWidth > 768) {
        if (window.pageYOffset > headerSticky) {
            header.classList.add("header-sticky");
        } else {
            header.classList.remove("header-sticky");
        }
    }
    else {
        if (window.pageYOffset > navBarSticky) {
            mavBar.classList.add("header-sticky");
        }
        else {
            mavBar.classList.remove("header-sticky");
        }
    }
}
const searchBar = document.getElementsByClassName('search-phase__search-bar')[0];
const searchResults = document.getElementsByClassName("search-phase__results")[0];
searchBar.addEventListener('focus', function showResult() {
    searchResults.style.display = 'flex';
});
searchBar.addEventListener('blur', function hideResult() {
    searchResults.style.display = 'none';
});

const loginButton = document.getElementsByClassName('user-action__login-btn')[0];
const loginModal = document.getElementById('modal');
const modalClose = document.getElementsByClassName('exit-btn')[0];
loginButton.addEventListener('click', function showModal() {
    loginModal.style.display = 'block';
});
modalClose.addEventListener('click', function hideModal() {
    loginModal.style.display = 'none';
});

const preHeaderItemBanner = document.getElementsByClassName('pre-header__item--banner')[0];
const preHeaderItemHelp = document.getElementsByClassName('pre-header__item--help')[0];
const preHeaderItemOrder = document.getElementsByClassName('pre-header__item--check-order')[0];
const bannerApp = document.getElementsByClassName('item--banner')[0];
const helpCenter = document.getElementsByClassName('item--help')[0];
const checkOrder = document.getElementsByClassName('item--check-order')[0];
const preHeaderItems = [bannerApp, helpCenter, checkOrder];

function hideOtherMenus(menu) {
    for (var i = 0; i < preHeaderItems.length; i++) {
        if (preHeaderItems[i] != menu) {
            preHeaderItems[i].style.display = 'none';
        }
    }
};
preHeaderItemBanner.addEventListener('click', function showBanner(event) {
    var isShown = bannerApp.style.display == 'block';
    if (!isShown) {
        bannerApp.style.display = 'block';
        hideOtherMenus(bannerApp);
    }
    else {
        bannerApp.style.display = 'none';
    }
    event.stopPropagation();
    document.addEventListener('click', function hideHelp() {
        bannerApp.style.display = 'none';
    }
    );
});
preHeaderItemHelp.addEventListener('click', function showHelp(event) {
    var isShown = helpCenter.style.display == 'block';
    if (!isShown) {
        helpCenter.style.display = 'block';
        hideOtherMenus(helpCenter);
    }
    else {
        helpCenter.style.display = 'none';
    }
    event.stopPropagation();
    document.addEventListener('click', function hideHelp() {
        helpCenter.style.display = 'none';
    }
    );
});
preHeaderItemOrder.addEventListener('click', function showOrder(event) {
    var isShown = checkOrder.style.display == 'block';
    if (!isShown) {
        checkOrder.style.display = 'block';
        hideOtherMenus(checkOrder);
    }
    else {
        if (event.target.className == 'check-order__input' || event.target.className == 'check-order__button') {
            checkOrder.style.display = 'block';
        }
        else {
            checkOrder.style.display = 'none';
        }
    }
    event.stopPropagation();
    document.addEventListener('click', function hideOrder() {
        checkOrder.style.display = 'none';
    }
    );
});

var hour = 12;
var minute = 58;
var seconds = 40;
var hourTimer;
var minuteTimer;
var secondsTimer;
var timer = setInterval(function () {
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minute--;
    }
    if (minute < 0) {
        minute = 59;
        hour--;
    }
    if (hour < 0) {
        hour = 0;
        minute = 0;
        seconds = 0;
    }
    if (hour < 10) {
        hourTimer = "0" + hour;
    }
    else {
        hourTimer = hour;
    }
    if (minute < 10) {
        minuteTimer = "0" + minute;
    }
    else {
        minuteTimer = minute;
    }
    if (seconds < 10) {
        secondsTimer = "0" + seconds;
    }
    else {
        secondsTimer = seconds;
    }
    document.getElementsByClassName("count-down__hours")[0].innerHTML = hourTimer;
    document.getElementsByClassName("count-down__min")[0].innerHTML = minuteTimer;
    document.getElementsByClassName("count-down__sec")[0].innerHTML = secondsTimer;
}
    , 1000);

const listProduct = document.getElementsByClassName('flash-sale__content')[0];
var nextButton = document.getElementsByClassName('flash-sale__next')[0];
var prevButton = document.getElementsByClassName('flash-sale__previous')[0];
// Click next button to scroll horizontally to next product
nextButton.addEventListener('click', function scrollNext() {
    listProduct.scrollBy(1280, 0);
}
);
// Click previous button to scroll horizontally to previous product
prevButton.addEventListener('click', function scrollPrev() {
    listProduct.scrollBy(-1280, 0);
}
);

prevButton.style.display = 'none';
listProduct.addEventListener('scroll', function hidePrev() {
    if (listProduct.scrollLeft == 0) {
        prevButton.style.display = 'none';
    }
    else {
        prevButton.style.display = 'block';
    }
    console.log(listProduct.scrollLeft);
}
);

// Hide next button when scroll to the end of the list
listProduct.addEventListener('scroll', function hideNext() {
    if (listProduct.scrollLeft >= listProduct.scrollWidth - listProduct.clientWidth - 1) {
        nextButton.style.display = 'none';
    }
    else {
        nextButton.style.display = 'block';
    }
}
);

const backTopButton = document.getElementById('scroll-top-btn');

window.addEventListener('scroll', function showBackTopButton() {
    if (window.scrollY > 500) {
        backTopButton.style.display = 'flex';
    }
    else {
        backTopButton.style.display = 'none';
    }
}
);

backTopButton.addEventListener('click', function scrollTop() {
    window.scrollTo(0, 0);
}
);


