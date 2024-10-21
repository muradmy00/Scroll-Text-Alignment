let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let textItems = document.querySelectorAll('.text-item');

    if (scrollTop > lastScrollTop) {

        textItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.textAlign = 'right';
            }, index * 200);
        });
    } else {

        textItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.textAlign = 'left';
            }, index * 200);
        });
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);