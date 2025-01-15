var a = new Promise((x, y) => {
    if (0) {
        x("product assigned")
    } else {
        y("order not picked up")
    }
})
a.then((res) => {
    console.log(res)
    return b.then((res) => {
        console.log(res)
        return c.then((res) => {
            console.log(res)
        })
    })

})
    .catch(err => {
        console.log(err);

    })


var b = new Promise((z, w, k) => {
    if (0) {
        z("buy1 get 1 for free by purchasing 3jeans")
    } else if (1) {
        w("limited deal for 1 week")
    } else {
        k("offer end soon")
    }

})
b.then((res) => {
    console.log(res)
    return w.then((res) => {
        console.log(res)
        return k.then((res) => {
            console.log(res)
        })
    })
})
    .catch(err => {
        console.log(err)
    })