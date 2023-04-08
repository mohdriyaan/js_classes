import lodash from "lodash"
import cowsay from "cowsay"

const arr = [0,1,2,3,4,5,6,7]
console.log(lodash.chunk(arr))
console.log(lodash.last(arr))
console.log(
    cowsay.say({
        text:"I am learning NPM packages",
        e:"00",
        t:"U"
    }
    )
)

