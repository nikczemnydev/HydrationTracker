// select all small cups
const smallCups = document.querySelectorAll('.cup-small');
// grab element 'liters'
const liters = document.getElementById('liters');
// grab element 'percentage'
const percentage = document.getElementById('percentage');
// grab element 'remaining'
const remaining = document.getElementById('remaining');

updateBigCup()

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
    updateBigCup()
}

// function that fills the jug based on glasses consumed
function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    // no full cups = 0 intake so far = dont show percentage
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        // if any cups filled = show percentage
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }
    // all cups full = daily intake goal reached = dont show percentage
    if (fullCups === totalCups) {
        remaining.style.visibility = 'hidden'
        remaining.style.height = 0
    } else {
        // bring percentage and show litres remaining back 
        // if set back to not full jug state
        remaining.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}