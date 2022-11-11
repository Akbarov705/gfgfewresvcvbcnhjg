let car = {
    mark: prompt('car mark'),
    color: prompt('color'),
    engine: prompt('engine force'),
    year: prompt('year'),
    hasHatch: confirm('hatch'),
    isBox: confirm('automat or mechanic'),
    price: prompt('price')
}


let cars = [
    {
        mark: "bmw",
        color: "white",
        engine: "1.5",
        year: 2014,
        hasHatch: true,
        isBox: true,
        price: 180000,
        img: 'https://kolesa-uploads.ru/-/24165599-a9d1-4e6d-aeab-6b873972da6c/bmw-i8-1.jpg'
    },
    {
        mark: "camry",
        color: "black",
        engine: "V6",
        year: 2017,
        hasHatch: true,
        isBox: false,
        price: 35000,
        img: 'https://a.d-cd.net/f05f5bes-960.jpg'
    },
    {
        mark: "tesla",
        color: "white",
        engine: "electro",
        year: 2020,
        hasHatch: true,
        isBox: true,
        price: 170000,
        img: 'https://cdna.artstation.com/p/assets/covers/images/014/856/578/large/alberto-luque-c-13-8k-pequena.jpg?1545931509'
    },
    {
        mark: "lamborgini",
        color: "orange",
        engine: "v12",
        year: 2022,
        hasHatch: true,
        isBox: true,
        price: 200000,
        img: "https://i.playground.ru/i/pix/2543123/image.jpg"
    },
    {
        mark: "bmw",
        color: "blue",
        engine: "V10-cylinder engine",
        year: 2014,
        hasHatch: false,
        isBox: true,
        price: 80000,
        img: "https://1gai.ru/uploads/posts/2013-12/1386967351_new-bmw-m3-sedan-192.jpg"
    },
    {
        mark: "lotus",
        color: "red",
        engine: "2ZZ-GE",
        year: 2018,
        hasHatch: false,
        isBox: true,
        price: 100000,
        img: "https://wroom.ru/i2/carpic/10044.jpg"
    },
    {
        mark: "malibu 2",
        color: "black",
        engine: "Facelift 1.5 LT",
        year: 2019,
        hasHatch: true,
        isBox: true,
        price: 24900,
        img: "https://car24.uz/wp-content/uploads/2019/11/photo5238192627768210177.jpg"
    },
    {
        mark: "toyota",
        color: "white",
        engine: "v8",
        year: 2021,
        hasHatch: true,
        isBox: true,
        price: 60000,
        img: "https://motor.ru/thumb/908x0/filters:quality(75):no_upscale()/imgs/2021/01/29/09/4483637/d7be1e5c6dc4ab68c0a16b4e15ffd31364b68e7f.jpg"
    },
    {
        mark: "spark",
        color: "green",
        engine: "M300",
        year: 2018,
        hasHatch: false,
        isBox: true,
        price: 10050,
        img: "https://quto.ru/service-imgs/4c/03/ca/a7/4c03caa704002.jpeg"
    },
    {
        mark: "toyota",
        color: "white",
        engine: "v8",
        year: 2021,
        hasHatch: true,
        isBox: true,
        price: 60000,
        img: "https://motor.ru/thumb/908x0/filters:quality(75):no_upscale()/imgs/2021/01/29/09/4483637/d7be1e5c6dc4ab68c0a16b4e15ffd31364b68e7f.jpg"
    },
    {
        mark: "tico",
        color: "black",
        engine: "suzuki alto",
        year: 1988,
        hasHatch: false,
        isBox: false,
        price: 10000,
        img: "https://s.auto.drom.ru/i24198/c/photos/generations/500x_daewoo_tico_g5931.jpg?559589"
    },
    {
        mark: "matiz",
        color: "yellow",
        engine: "daewoo f8CV",
        year: 2005,
        hasHatch: false,
        isBox: false,
        price: 15000,
        img: "https://autoreview.ru/images/Article/1649/Article_164980_860_575.jpg"
    },
    {
        mark: "Mercedes",
        color: "sky-blue",
        engine: "v10",
        year: 2020,
        hasHatch: false,
        isBox: true,
        price: 107000,
        img: "https://s.auto.drom.ru/i24219/c/photos/generations/500x_mercedes-benz_amg_gt_g8242.jpg?796841"
    },
    {
        mark: "Audi",
        color: "grey",
        engine: "v8",
        year: 2019,
        hasHatch: false,
        isBox: true,
        price: 69000,
        img: "https://s.auto.drom.ru/img4/catalog/photos/generations/500x_audi_r8_g1265.jpg?109709"
    },
    {
        mark: "Nissan",
        color: "black",
        engine: "v100",
        year: 2020,
        hasHatch: false,
        isBox: true,
        price: 156000,
        img: "https://s.auto.drom.ru/i24196/c/photos/generations/500x_nissan_gt-r_g4800.jpg?495634"
    },
    {
        mark: "Kia k5",
        color: "blue",
        engine: "2.6",
        year: 2022,
        hasHatch: true,
        isBox: true,
        price: 30000,
        img: "https://www.autostrada.uz/wp-content/uploads/2020/09/5eddffb2ec05c4da4800002c.jpg"
    },
    {
        mark: "camaro",
        color: "white",
        engine: "v6",
        year: 2015,
        hasHatch: false,
        isBox: true,
        price: 60000,
        img: "  https://autoartmodels.de/wp-content/uploads/2020/04/71207a-scaled.jpg"
    },
    {
        mark: "Tesla Plaid",
        color: "white",
        engine: "electric car",
        year: 2022,
        hasHatch: true,
        isBox: true,
        price: 234233,
        img: "  https://www.ixbt.com/img/n1/news/2022/0/1/5f6c5369ec05c4fe2700000f_large.jpg"
    },
    {

        mark: 'malibu-2-premier',
        color: "white",
        engine: "2.0",
        year: 2022,
        hasHatch: true,
        isBox: true,
        price: 40000,
        img: 'https://apollo-olx.cdnvideo.ru/v1/files/me5ci48ymrec-UZ/image;s=2000x1335'
    },
    {
        mark: 'Mersedes-gelik',
        color: 'black',
        engine: 'v12',
        year: 2020,
        hasHatch: true,
        isBox: true,
        price: 200000,
        img: 'https://krot.info/uploads/posts/2021-10/1634347714_58-krot-mobi-p-mersedes-gelik-mashini-krasivo-foto-58.jpg'
    },
    {
        mark: 'kopeyka',
        color: 'black',
        engine: 1.2,
        year: 1980,
        hasHatch: true,
        isBox: true,
        price: 2000,
        img: 'https://krot.info/uploads/posts/2021-10/1634347714_58-krot-mobi-p-mersedes-gelik-mashini-krasivo-foto-58.jpg'
    }
]



let filtered = cars.filter(item => {



    if (item.mark === car.mark) {
        return item
    }
    if (item.color === car.color) {
        return item
    }
    if (item.engine === car.engine) {
        return item
    }
    if (item.year === car.year) {
        return item
    }
    if (item.hasHatch === car.hasHatch) {
        return item
    }
    if (item.isBox === car.isBox) {
        return item
    }
    if (item.price === car.price) {
        return item
    }
    else {
        console.log('У нас нет такой машины брооооооо')
    }
})


console.log(filtered);



