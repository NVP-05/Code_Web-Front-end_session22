let year = +prompt("Nhập 1 năm bất kỳ");
if(year > 0){
    if(year%4 == 0){
        console.log(year + " " + "là năm nhuận.");
    }else{
        console.log(year + " " + "không phải là năm nhuận.");
    }
}else{
    console.log("Năm vừa nhập không hợp lệ");
}