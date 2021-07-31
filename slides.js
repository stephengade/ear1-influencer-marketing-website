// Main Slider Animation
function initSliders() {
  gsap.set(".influencer-images", { autoAlpha: 1 });
  gsap.set(".swipe-images", { opacity: 0, display: "block" });

  let currentStep = 1;
  const totalSlides = document.querySelectorAll(".swipe-images").length;

  createTimelineIn("next", currentStep);

  // Timeline IN Animation
  function createTimelineIn(direction, index) {
    const goPrevious = direction === "previous";

    const element = document.querySelector("div.img0" + index);
    const projectClasses = element.className.split("  ");
    const projectClass = projectClasses[1];

    const tlIn = gsap.timeline({ id: "tlIn", defaults: { duration: 1.34, ease: "myEaseSmooth" } });

    tlIn.fromTo(element, { xPercent: 120, autoAlpha: 0, opacity: 0 }, { xPercent: 0, autoAlpha: 1, opacity: 1, ease: Expo.easeInOut }, "<");

    return tlIn;
  }

  //Timeline OUT Animation
  function createTimelineOut(direction, index) {
    const goPrevious = direction === "previous";
    const element = document.querySelector("div.img0" + index);

    const tlOut = gsap.timeline({ id: "tlOut", defaults: { duration: 0.55, ease: "myEaseSmooth" } });

    tlOut.to(element, { xPercent: -120}, "<");

    return tlOut;
  }

  // Get goTo index
  function getGoToIndex(direction, index) {
    let goToIndex = index;

    if (direction === "next") {
      goToIndex = index < totalSlides ? index + 1 : 1;
    } else {
      goToIndex = index > 1 ? index - 1 : totalSlides;
    }

    return goToIndex;
  }

  // Update Current Step
  function updateCurrentStep(goToIndex) {
    currentStep = goToIndex;
  }

  //Master Timeline
  function transition(direction, index) {
    const goToIndex = getGoToIndex(direction, index);

    const tlTransition = gsap.timeline({
      onStart: () => {
        //console.log({ index }, { goToIndex });
        updateCurrentStep(goToIndex);
      },
    });

    const tlOut = createTimelineOut(direction, index);
    const tlIn = createTimelineIn(direction, goToIndex);

    tlTransition.add(tlOut);
    tlTransition.add(tlIn, "<");

    return tlTransition;
  }

  // Is Tweening
  function isTweening() {
    return gsap.isTweening(".swipe-images");
  }
// autoplay
  setInterval(function () {
	!isTweening() && transition("next", currentStep);
}, 500);
  
  
}

// Window onLoad
window.addEventListener("load", () => {
  initSliders();
});
