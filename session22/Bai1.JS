let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
let c;
if(a % b == 0){
    c = a/b;
    console.log("a chia hết cho b và" + "=" + c);
}else if(b % a == 0){
    c = b/a;
    console.log("b chia hết cho a và" + "=" + c);
}else{
    console.log("Cả a và b đều không chia hết cho nhau.");
}