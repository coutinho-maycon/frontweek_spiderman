document.addEventListener('DOMContentloaded', () => {

    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 1,
        { width: '100%' },
        { width: '0%', ease: Expo.easeInOut })
}
)