const sairinLeftBtn = document.getElementById('sairin-left');
const selectValue = document.getElementById('sairin-value');
const sairinRightBtn = document.getElementById('sairin-right');

// Set event listener to buttons and select bar
sairinLeftBtn.addEventListener('click', () => {
  selectValue.value =  (parseInt(selectValue.value) - 1).toString();
  adjustSaiRinButtonStyle();
});

sairinRightBtn.addEventListener('click', () => {
  selectValue.value =  (parseInt(selectValue.value) + 1).toString();
  adjustSaiRinButtonStyle();
});

selectValue.addEventListener('change', adjustSaiRinButtonStyle);

// set initial style classes
sairinLeftBtn.classList.toggle('disabled', true);
sairinRightBtn.classList.toggle('disabled', false);

/**
 * @description Set the left right button's style and change the character's picture based on the sairin status
 */
function adjustSaiRinButtonStyle() {
  setPic(servantID, selectValue.value);
}