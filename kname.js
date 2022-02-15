// 한국어 예쁜 이름 짓기 앱
function randName () {
    let firstname = "김이박최정"
    let lastname = "가강건경고관광구규"

    let aIndex = Math.floor(Math.random()*firstname.length)
    let first = firstname[aIndex]
    let bIndex = Math.floor(Math.random()*lastname.length)
    let middle1 = lastname[bIndex]
    let cIndex = Math.floor(Math.random()*lastname.length)
    let middle2 = lastname[cIndex]

    return first+middle1+middle2
}
let korean_name = randName()
console.log(korean_name)

