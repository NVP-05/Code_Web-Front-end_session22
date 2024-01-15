let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
if(a==0){
    if(b==0){
        console.log("Phường trình có vô số nghiệm.");
    }else{
        console.log("Phường trình vô nghiệm.");
    }
}else{
    if(b==0){
        console.log("x = 0");
    }else{
        let c = -b / a;
        console.log("x =" + " " + c);
    }
}