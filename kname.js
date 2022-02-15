// 한국어 예쁜 이름 짓기 앱
function randName () {
    const kname = ["예나", "비비", "재재", "도연", "지윤"]
    let index = Math.floor(Math.random()*5)
    return kname[index]
}
const result = randName()
console.log(result)

