const first = document.getElementById('fetch1')
const second = document.getElementById('fetch2')
const b = document.getElementById('btn')
b.addEventListener('click', BMI)
function BMI(b) {
    const f = first.value
    const s = second.value
    if (f == "") {
        alert('Enter Your weight')
        alert('Enter Your Height')
    }
    else {
        const BMI = ((f / (s * s))
            * 10000).toFixed(2);
        const result = document.getElementById('show')
        result.innerHTML = `${BMI}`
        const suggest = document.getElementById('suggest')
        if (BMI < 18.5) {
            const cw = Math.ceil((18.5*(s*s))/10000)
        // console.log(cw)
        suggest.innerHTML= ` You're underweight you should atleast be ${cw}kg`
        suggest.style.color="#f705ff"
        }
        if (BMI > 18.5 && BMI < 24.9) {
            suggest.innerHTML = "You're Helathy you should maintain this weight"
            suggest.style.color="#1cff03"
        }
        if (BMI > 25.0 && BMI < 29.9) {
            const ow = Math.floor((24.9*(s*s))/10000)
        // console.log(cw)
        suggest.innerHTML= ` You're overweight you should reduce to ${ow}kg`
        suggest.style.color="#ffa200"
        }
        if (BMI > 30) {
            const oow = Math.floor((24.9*(s*s))/10000)
        // console.log(cw)
        suggest.innerHTML= ` You're obese you should reduce to ${oow}kg`
        suggest.style.color="red"
        }
        

    }
}