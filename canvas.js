alert("Silahkan corat-coret dengan cara drag mouse");
window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    // Resize
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    resizeCanvas();

    // Variable
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    };

    function finishPosition() {
        painting = false;
        ctx.beginPath();
    };

    function draw(e) {
        if(!painting) return;
        // Size pen
        ctx.lineWidth = 10;
        // End of line
        ctx.lineCap = "round";
        // Color pen
        // ctx.strokeStyle = "blue";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }


    // Event
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishPosition);
    canvas.addEventListener("mousemove", draw);
});

function resizeCanvas() {
    window.addEventListener("resize", () => {
        const canvas = document.querySelector("#canvas");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    });
};