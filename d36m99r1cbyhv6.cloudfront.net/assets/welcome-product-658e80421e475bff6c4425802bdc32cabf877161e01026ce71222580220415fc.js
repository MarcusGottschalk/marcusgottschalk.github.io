document.addEventListener("DOMContentLoaded", function () {
  mixpanel.track("Visit Features Page");
  //flow slider
  const slideLeft = document.querySelector('.js-slide-left');
  const slideRight = document.querySelector('.js-slide-right');
  const slideContainer = document.querySelector('.js-slide-container');
  const slideList = document.querySelectorAll('.js-slide-container li');
  const slideDots = document.querySelectorAll('.js-slide-flowdots li');
  var currentActive = 0;
  slideContainer.style.width = 100 * slideList.length + '%';
  slideList.forEach(slide => {slide.style.width = 100 / slideList.length + '%'});
  function setCurrentActive(index) {
    currentActive = index;
  }
  slideDots.forEach((dot, index) => {
      dot.addEventListener("click", function(){
        setCurrentActive(index);
        slideDots.forEach(actDot => {actDot.classList.contains('FeaturesFlowItemActive') && actDot.classList.remove('FeaturesFlowItemActive')});
        dot.classList.add('FeaturesFlowItemActive');
        slideContainer.style.marginLeft = -100 * index + '%';
      })
  });
  slideRight.addEventListener("click", function(){
    currentActive < slideDots.length - 1 ? slideDots[currentActive + 1].click() : slideDots[0].click();
  });
  slideLeft.addEventListener("click", function(){
    currentActive > 0 ? slideDots[currentActive - 1].click() : slideDots[slideDots.length - 1].click();
  });
  // custom tools tabs
  const toolLinks = document.querySelectorAll('.custom-tool-link');
  const tools = document.querySelectorAll('.custom-tool');
  let toolId;
  function switchActiveClass(id) {
    toolLinks.forEach((toolLink) => {toolLink.classList.remove('active')});
    toolLinks.forEach((toolLink) => {if (toolLink.getAttribute("href") == id) {toolLink.classList.add('active')}});
  }
  toolLinks.forEach((toolLink) => {
    toolLink.addEventListener("click", function(event) {
      event.preventDefault();
      toolId = toolLink.getAttribute("href");
      switchActiveClass(toolId);
      tools.forEach((tool) => {
        if (!tool.classList.contains('hidden')) {tool.classList.add('hidden');}
        if (tool.id == toolId) {tool.classList.remove('hidden');}
      })
    });
  })
});
