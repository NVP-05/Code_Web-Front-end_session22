let a = +prompt("Nhập cạnh 1");
let b = +prompt("Nhập cạnh 2");
let c = +prompt("Nhập cạnh 3");
if(a, b, c > 0){
    if(a+b>c && a+c>b && b+c>a){
        console.log("3 cạnh có thể tạo thành 1 tam giác");
    }else{
        console.log("3 cạnh không thể tạo thành 1 tam giác");
    }
}