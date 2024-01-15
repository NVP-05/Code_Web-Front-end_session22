let a = +prompt("Nhập 1 số bất kỳ");
a = a/1000;
for(let i = 0; i < 4; i++){
    let returnn = a%10;
    console.log(Math.floor(returnn));
    a = a*10;
}