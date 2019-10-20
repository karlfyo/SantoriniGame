let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let k = 0;
const tile = 128;
//let floors=[floorImg0,floorImg1,floorImg2,floorImg3,floorImg4];
let arr = [];
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        k += 1;
        if(k % 2 == 0) ctx.fillStyle = "#00DD00";
        else ctx.fillStyle = "#55FF55";
        ctx.fillRect(tile*i, tile*j, tile*i+tile, tile*j+tile);
    }
}
for(let i = 0; i < 5; i++) {
    arr.push([]);
    for(let j = 0; j < 5; j++) {

        arr[i][j] = 0;

    }
}

console.log(arr);

/* idk assssss

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = "images/floorImg0";
    img.width = 64;
    img.height = 64;
    img.alt = "kys";

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

show_image("images/floorImg0",64,64,"kys")*/
