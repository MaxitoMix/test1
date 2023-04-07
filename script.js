// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((x) => {

  // and for each one we add a 'click' listener
  x.addEventListener('click', () => {
    alert(x.id);
  });
});