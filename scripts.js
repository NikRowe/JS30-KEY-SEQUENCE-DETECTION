const inputs = document.querySelectorAll('.answers input')
const answers = () => inputs.forEach(input => {
    if (input.value != 'wrong') {
        console.log(`%c ${input.id}`, 'color: teal; font-size:15px')
    }
})


function log(joinedPressed) {
    console.log('Congratulations on passing the quiz! The answers: ')
    answers()
    console.log('Can you guess the super secret code?')
    console.log(`%c    l_vet_co_e    `,
        'color: teal; font-size:15px')
    console.log('type it out on your keyboard to find out')
}

const pressed = []
const secretCode = 'lovetocode'
const secretCode2 = ['N', 'I', 'K']

let correct = false

function decode(e) {
    // if key is pressed put values into array and remove excess over length of secret code // 
    if (e.key) {
        pressed.push(e.key)
        pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); // the - before secertCode.length allows the splice to go backwards replacing the first item in the array not the last. 

        let joinedPressed = pressed.join('')
        if (joinedPressed === secretCode) {
            console.log(`Congratulations the answer was: %c ${joinedPressed}`,
                'color: teal; font-size:15px')
        }
    } else {
        if (this.value === 'N' || this.value === 'I' || this.value === 'K') {
            correct = true
        } else {
            correct = false
        }

        if (correct) {
            this.classList.add('correct')
        }

        pressed.push(this.value)
        // pressed.splice(-secretCode2.length - 1, pressed.length - secretCode2.length)

        let joinedPressed = pressed.join('')
        if (secretCode2.every(i => pressed.includes(i))) {
            log(joinedPressed)
        }
    }
}

window.addEventListener('keyup', decode)
inputs.forEach(input => input.addEventListener('click', decode))
