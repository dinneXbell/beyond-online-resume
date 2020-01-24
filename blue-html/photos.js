let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

let p1p = document.getElementById("p1p");
let p2p = document.getElementById("p2p");
let p3p = document.getElementById("p3p");

p1.addEventListener("click",function() {
    if (p1p.className="hide") {
        p1p.className="";
        p2p.className="hide";
        p3p.className="hide";
    } else {
        p1p.className="hide";
    }
}
);

p2.addEventListener("click",function() {
    if (p2p.className="hide") {
        p2p.className="";
        p1p.className="hide";
        p3p.className="hide";
    } else {
        p2p.className="hide";
    }
}
);

p3.addEventListener("click",function() {
    if (p3p.className="hide") {
        p3p.className="";
        p1p.className="hide";
        p2p.className="hide";
    } else {
        p2p.className="hide";
    }
}
);