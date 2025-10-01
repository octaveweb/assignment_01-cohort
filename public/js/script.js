
// Initialize Lenis
const lenis = new Lenis({ autoRaf: true });
lenis.on("scroll", console.log);

// Initialize GSAP
gsap.registerPlugin(TextPlugin);

