const btn = document.getElementById('btn')
let count = 0

function render() {
    btn.innerText = `Count : ${count}`
}

btn.addEventListener('click', () => {
    // Count from 1 to 10
    if (count < 10) {
        count += 1;
        render()
    }
})

function logger(text) {
    console.log(text)
    let myNAme = "Pourya Soleimani"
    console.log(myNAme)
}

function getData() {
    axios.get()
        .then(res => console.log(res.data.data))
        .catch(err => console.error(err))
}