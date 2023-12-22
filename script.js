// select all small cups
const smallCups = document.querySelectorAll('.cup-small');
// grab element 'liters'
const liters = document.getElementById('liters');
// grab element 'percentage'
const percentage = document.getElementById('percentage');
// grab element 'remaining'
const remaining = document.getElementById('remaining');

// looping through small cups, getting indexes from 0 to 7
smallCups.forEach((cup, index) => {
// click event listener applies highlight function on clicked cups
    cup.addEventListener('click', () => highlightCups(index))
})

// highlight adds 'full' class to clicked cup 
function highlightCups(index) {
    // let user un-highlight a cup...
    if(smallCups[index].classList.contains('full') && !smallCups
    [index].nextElementSibling.classList.contains('full')) {
        // ...by decreasing the index by one
        index--
    }

    smallCups.forEach((cup, index2) => {
        // highlight all previous cups up to the index of the clicked one too
        if(index2 <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
}