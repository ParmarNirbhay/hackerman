let a = [
    "Initializing Hack tool...",
    "haking your device...",
    "Connecting to server 1...",
    "Connection failed. Retrying...",
    "Connecting to server 2",
    "Connected Successfully...",
    "Username found...",
    "password found...",
    "all password hack...",
    "Match not found",
    "Another 200K passwords tried...",
    "all data found...",
    "all data hack...",
    "Persnal pasword hack...",
    "All account hack...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful..."
]

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(true) },   50)
    })
}

const showHack = async (message) => {
    await sleep(2)
    // console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"
}

(async () => {
    for (let i = 0; i < a.length; i++) {
            await showHack(a[i])
    }
})()