gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.fromTo('.mainText', {
    opacity: 0,
    x: 200,
    duration: 1
}, {
    opacity: 1,
    x: 0,
    duration: 1
}).fromTo('.mainNav', {
    opacity: 0,
    duration: 1
}, {
    opacity: 1,
    duration: 2
});

gsap.from('.card_1', {
    scrollTrigger: {
        trigger: '.card_1',
        start: 'top center'
    },

    opacity: 0,
    x: -1000,
    duration: 1
});
gsap.from('.card_2', {
    scrollTrigger: {
        trigger: '.card_2',
        start: 'top center'
    },

    opacity: 0,
    x: 1000,
    duration: 1
});
gsap.from('.card_3', {
    scrollTrigger: {
        trigger: '.card_3',
        start: 'top center'
    },

    opacity: 0,
    x: -1000,
    duration: 1
});
gsap.from('.card_4', {
    scrollTrigger: {
        trigger: '.card_4',
        start: 'top center'
    },

    opacity: 0,
    x: 1000,
    duration: 1
});