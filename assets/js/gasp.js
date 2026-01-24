gsap.to(".layer-dark", {
    x: 80,
    y: 60,
    duration: 22,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".layer-blue", {
    x: -120,
    y: 90,
    duration: 26,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".layer-light", {
    x: -80,
    y: -100,
    duration: 24,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".layer-yellow", {
    x: -60,
    y: -70,
    duration: 18,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.registerPlugin(ScrollTrigger);

/* Header */
gsap.from(".maf-header > *", {
    scrollTrigger: {
        trigger: ".maf-section",
        start: "top 80%",
    },
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: "power3.out"
});

/* Cards */
gsap.from(".maf-card", {
    scrollTrigger: {
        trigger: ".maf-grid",
        start: "top 85%",
    },
    y: 60,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: "power3.out"
});

/* Price */
gsap.from(".maf-price", {
    scrollTrigger: {
        trigger: ".maf-price",
        start: "top 85%",
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".maf-overview", {
    scrollTrigger: {
        trigger: ".maf-overview",
        start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});


gsap.from(".community-line", {
    y: 50,          // Start 50px below
    opacity: 0,     // Start invisible
    duration: 1,    // Animation duration
    ease: "power3.out",
    stagger: 0.3    // Animate each line one after another
});