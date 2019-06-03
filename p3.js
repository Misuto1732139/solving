const EPS = 0.0001;    // 許容誤差

function main() {
    console.log("x^3 + x - 1 のニュートン法による数値計算");

    var a = 1.0;
    console.log("初期値 a=" + a);

    var b;

    // ここにニュートン法による演算の主要部分を記述する

function nibun(a, b) {
    var c;
    var output=document.querySelector("#output");
    do {
        c = (a + b) / 2.0;  // 2分計算
        let str=document.createTextNode(c);
        let p =document.createElement("p");
        p.appendChild(str);
        output.appendChild(p);
        if ((func_y(c) * func_y(a)) < 0) b = c;  // 式(1.2)
        else a = c;  // 式(1.3)
    } while (Math.abs(a - b) > EPS);  // 収束判別　式(1.4)の変形
    return c;
    console.log("近似解 x = " + b);
}
