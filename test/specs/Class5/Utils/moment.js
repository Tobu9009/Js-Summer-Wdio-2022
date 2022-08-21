const moment = require("moment")

describe('learning moment library',() => {
    it('Basic moment library', async () => {
        const now = moment()
        console.log(`\n\n${now.format()}\n\n`);

        //date()
        console.log(`\n\nnow.date() -> ${now.date()}\n\n`)

        //month()
        console.log(`\n\nnow.month() -> ${now.month()}\n\n`)
        //year()
        console.log(`\n\nnow.year() -> ${now.year()}\n\n`)
        //hour()
        console.log(`\n\nnow.hour() -> ${now.hour()}\n\n`)
        //minute()
        console.log(`\n\nnow.minute() -> ${now.minute()}\n\n`)
        //second()
        console.log(`\n\nnow.second() -> ${now.second()}\n\n`)
        //millisecond()
        console.log(`\n\nnow.millisecond() -> ${now.millisecond()}\n\n`)
       
    })
})