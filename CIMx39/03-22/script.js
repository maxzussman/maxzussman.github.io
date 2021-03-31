/ 6. wrap it all in a big function so it runs and life is good

(function () {
  // 1. create a link in our page

  let newLink = document.createElement('a');
  // make our link have useful stuff inside. setAttribute works for any attribute
  newLink.setAttribute('href', '#');

  // We can style an element by doing element.style and then a CSS property.
  // newLink.style.display = 'inline-block';
  // newLink.style.color = 'red';
  // newLink.style.fontSize = '20px';

  // much easier to style things by adding and removing classes.
  newLink.setAttribute('class', 'readMore');

  // innerHTML is for the text people see.
  newLink.innerHTML = 'Read more';
  // console.log(newLink);

  // 2. find the first paragraph
  // allParagraphs is a "list" of every p tag on the page
  let allParagraphs = document.getElementsByTagName('p');
  // firstParagraph gets that first item. In JS the first-item is positioned at 0.
  const firstParagraph = allParagraphs[0];
  // console.log(allParagraphs);

  // 3. add the link to that paragraph
  // We made the link. It has all the good info. Now we need to attach it to that first paragraph. Appending it as a good for this.
  firstParagraph.appendChild(newLink);

  // 4. hide all but first paragraph

  // read about for loops in ch.4 of JS For Web Designers
  // I make a slight modification from their sample. If we want all but the first paragraph to be hidden, let's just start with the second paragraph. Since JavaScript starts counting things in a list from 0 we can skip to starting from 1 (second item in the list).
  for (let i = 1; i < allParagraphs.length; i++) {
    allParagraphs[i].style.display = 'none';
  }

  // 5. When you click on the link, show the paragraphs

  // the line that follows says: when you click on newLink, run the function revealCopy.
  newLink.addEventListener('click', toggleCopy);

  // let's define revealCopy
  function toggleCopy(e) {
    // let's get all our paragraphs and change their display to block.
    // we did this before, just get all the paragraphs. Since we're in a new scope we can reuse this variable name
    let allParagraphs = document.getElementsByTagName('p');

    // change things to display block
    for (let i = 1; i < allParagraphs.length; i++) {
      allParagraphs[i].style.display = 'block';
    }

    // remove the link we clicked on
    this.remove();
    // this prevents the link from doing its usual link thing of taking us somewhere on the page.
    e.preventDefault();
  }
})();

// the chapter does go on to add some extra fallbacks and fixes to the code, but this is a good starting point of where we want things to be.