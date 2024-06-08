let I = 0
let Tg = 12589
basic.showIcon(IconNames.Heart)
loops.everyInterval(500, function () {
    I += 1
    Tg = Tg / 3
})
basic.forever(function () {
	
})
loops.everyInterval(5000, function () {
    basic.showNumber(Tg)
})
