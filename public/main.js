const faqItems = document.querySelectorAll('.faq');

faqItems.forEach(faq => {
    faq.querySelector('.faq-heading').addEventListener('click', () => {
        const icon = faq.querySelector('.faq-heading i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up')
        faqItems.forEach(faq2 => {
            const content = faq2.querySelector('.faq-content');
            const icon = faq2.querySelector('.faq-heading i');
            if (!content.classList.contains('hidden') && faq2 != faq) {
                content.classList.add('hidden')
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up')   
            }
        })
        faq.querySelector('.faq-content').classList.toggle('hidden')
    })
});

document.querySelector('#color_modes').addEventListener('click', () => {
    document.querySelector('html').classList.toggle('dark')

    const logo = document.querySelector('header nav div img');
    const arr = logo.src.split('/')
    const newArr = arr.splice(arr.length - 1);
    const src = newArr[0];

    if (src == "logo-bookmark.svg") {
        logo.src = './img/logo-bookmark-white.png';
    }
    else {
        logo.src = './img/logo-bookmark.svg';
    }
})