const url = 'https://fakestoreapi.com/products';

// https://www.flipkart.com/tyy/4io/~cs-htur2m2l6m/pr?sid=tyy%2C4io&collection-tab-name=realme+13+Pro+5G+Series&pageCriteria=default&param=9079&otracker=clp_bannerads_1_20.bannerAdCard.BANNERADS_realme-13-Pro-Series-5G-Sale%2BIs%2BLive_mobile-phones-store_T3TQV4OHQ3X9&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove
const list = document.getElementById("list");

async function fetchData() {
    const data = await fetch(url)
    .then(data => data.json())
    .then(data => data)
    .catch(err => console.log(err));

    let tag = ""
    for(let i=0;i<data.length ;i++){
        console.log(data[i].title);

        tag += `<div>
        <h3>${data[i].title}</h3>
        <img src="${data[i].image}" />
        </div>`
    }
    list.innerHTML = tag;
}

fetchData()


// Promise

// resolve then
// reject catch

// fullfilled
// pending

// 1/1/2024

// 7/1/2024 - X


// 15/1/2024

// 16 

// function myPromise(res, rej) {
//     // res("Promise is Resolved");

//     setTimeout(() => {
//         res("Resolve after 5 Sec")
//     }, 5000);
    
//     rej("Reject");
// }

// const p = new Promise(myPromise);


// p.then(data => console.log("Then", data)).catch(data => console.log("Catch", data))