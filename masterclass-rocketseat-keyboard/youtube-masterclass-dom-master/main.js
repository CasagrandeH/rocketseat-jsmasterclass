// get all keys
const keys = document.querySelectorAll('.key')

// play notes

function playNote(event) {

    let audioKeyCode = getKeyCode(event)

    const dahkey = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    const cantFindThatKey = !dahkey
    
    if (cantFindThatKey) {
        return;
    }
    console.log(event, cantFindThatKey)
}

function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === 'keydown' 
    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}

// click with mouse 
keys.forEach( function(key) {
    key.addEventListener('mousedown', playNote)
})
// keyboard type
window.addEventListener('keydown', playNote)