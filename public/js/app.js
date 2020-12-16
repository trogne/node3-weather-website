const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     // console.log(response) // Response { type: "cors", url: ... }
//     // console.log(response.body) // ReadableStream
//     // const reader = response.body.getReader() // ReadableStreamDefaultReader
//     // reader.read().then((data) => {
//     //     // console.log(data.value) // Uint8Array(25) [ 123, 34, 112, ...
//     //     console.log(JSON.parse(new TextDecoder('utf-8').decode(data.value)))
//     // })
//     // response.text().then((data) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })
