let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
let c = +prompt("Nhập c");
if(a==0){
    if(b==0){
        if(c==0){
            console.log("Phường trình có vô số nghiệm.");
        }else{
            console.log("Phường trình vô nghiệm.");
        }
    }else{
        if(c==0){
            console.log("x = 0");
        }else{
            let ketqua = -c / b;
            console.log("x =" + " " + ketqua);
        }
    }
}else{
    if(b==0){
        if(a > 0 && c < 0 || a < 0 && c > 0){
            let end  = Math.sprt(-c/a);
            console.log("x =" + " " + end);
        }else{
            console.log("Phương trình vô nghiệm.")
        }
    }else{
        dt = b*b - 4*a*c;
		if(dt < 0) {
			console.log('Phương trình vô nghiệm.')
		} else if(dt == 0) {
			x = -b/(2*a);
			console.log('Phương trình có nghiệm kép là: x1 = x2 = ' + x);
		} else {
			x1 = (-b + Math.sqrt(dt))/(2*a);
			x2 = (-b - Math.sqrt(dt))/(2*a);
			console.log(`Nghiem x1 = ${x1}, x2 = ${x2}`)
		}
    }
}