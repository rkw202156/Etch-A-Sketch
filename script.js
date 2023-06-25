const resizeButton = document.querySelector(".resize-button")
const container = document.querySelector(".tiles")
let numRowAndCol = 16
const CONTAINER_SPACE = 640

const drawCanvas = num => {
    
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const tile = document.createElement("div");
            tile.classList.add("tile")
            tile.style.width = CONTAINER_SPACE / num + "px"
            tile.style.height = CONTAINER_SPACE / num + "px"
            container.appendChild(tile);
            tile.addEventListener("mouseover", e => {
                const tile = e.target
                let colorValR = Math.floor(Math.random() * 256)
                let colorValG = Math.floor(Math.random() * 256)
                let colorValB = Math.floor(Math.random() * 256)

                console.log(colorValR)
                tile.style.backgroundColor = `rgb(${colorValR}, ${colorValG}, ${colorValB})`
                
            })
        } 
    }
}

const clearCanvas = () => {
    console.log(typeof document.querySelector(".tile"))
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
}

resizeButton.addEventListener("click", () => {
    let num = NaN;

    do {
        num = parseInt(prompt("Resize Grid(Max 100x100)"));
        console.log(typeof num + ": " + num);
        console.log(num)
    } while (!num || num > 100)

    clearCanvas()
    drawCanvas(num)
})


drawCanvas(numRowAndCol)
