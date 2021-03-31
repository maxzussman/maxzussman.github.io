// WE have 2 dots. I want to click on the second dot. When I click on it, I transfer the dot_active class to the second dot. Click dot2, it becomes red.

// 1. get the list of dots
// let allDots = document.getElementsByTagName('li');

let allDots = document.getElementsByClassName('dot');
// 2. add an event listener: when you click on a dot, run a function makeActive
const dots = Array.from(allDots);

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', makeActive2);
}

// An alternative to the above.
// dots.forEach(dot => {
//   dot.addEventListener('click', makeActive2);
// });

// 3. makeActive function-- moves the class
function makeActive() {
  // The "this" object is whatever we just interacted with. this.id gives us the id attribute
  console.log(this.id);
  if (this.id == 'dot2') {
    // CASE where we clicked on dot2, and it doesn't have the active class. Give it the active class
    // step 1 -- remove class "dot_active" from #dot1.
    // *check this out: https://www.w3schools.com/howto/howto_js_remove_class.asp *
    const dot1 = document.getElementById('dot1');
    dot1.classList.remove('dot_active');
    // step 2 -- add the class "dot_active" to #dot2.
    this.classList.add('dot_active');
  } else {
    // Case where we licked on dot1, do nothing.
    console.log('do nothing, this is active');
  }
}

function makeActive2() {
  const aClassList = Array.from(this.classList);
  console.log(aClassList, aClassList.includes('dot_active'));

  if (aClassList.includes('dot_active')) {
    // CASE where dot_active is already on the thing we clicked. Do nothing.
    console.log('nothing to see here.');
  } else {
    // CASE where dot_active is not on the thing we clicked. Move it to that thing.
    // step 1 -- find where the dot_active class is.
    let previouslyActive = document.getElementsByClassName('dot_active');
    // step 2 -- remove it from wherever it is
    previouslyActive[0].classList.remove('dot_active');
    // step 3 -- add it to the thing we clicked on.
    this.classList.add('dot_active');

    // SECONDARY THING -- unhide and hide sections
    // step 1 -- find the thing on the page with the class 'hidden'.
    let hidden = document.getElementsByClassName('hidden');
    console.log(hidden);
    // step 2 -- remove it from there
    hidden[0].classList.remove('hidden');
    // step 3 -- add it to the other section
    if (this.id == 'dot2') {
      let toHide = document.getElementById('content1');
      toHide.classList.add('hidden');
    } else if (this.id == 'dot1') {
      let toHide = document.getElementById('content2');
      toHide.classList.add('hidden');
    }
  }
}

// sdada = "do";

// var x = "re";
// var _x;
// _x = "re";
// let y = "mi";
// let _y;
// y = "midasdasda";

// const z = "fa";

// z = "sol";
