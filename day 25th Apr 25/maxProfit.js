var maxProfit = function(prices) {
    // let tmp = [...prices]
    // let reversed = prices.sort((a,b) => b-a)
    // // console.log(reversed, prices, tmp)
    // if(tmp.join("") == reversed.join("")) {
    //     return 0
    // }

    // let maxProfit = 0, lessPrice = 0 
    // for(let i=0; i<prices.length; i++) {
    //     // console.log('yrd')
    //     lessPrice = tmp[i]
    //     for(let j=i+1; j<prices.length; j++) {
    //         if(tmp[i] < tmp[j]) {
    //             // console.log(tmp[i], tmp[j], tmp[j] - lessPrice)
    //             maxProfit = Math.max(maxProfit, tmp[j] - lessPrice)
    //             // console.log('max', maxProfit)
    //         }
    //     }
    // }

    let minPrice = Infinity
    let maxProfit = 0

    for(let price of prices) {
        minPrice = Math.min(minPrice, price)
        maxProfit = Math.max(maxProfit, price - minPrice)
    }
    return maxProfit
};