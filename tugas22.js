function cari(){

    var str = "Saya ingin belajar bersama";
    var str_array = str.split(" ");

    str_array.forEach(function (item, index, array){
        console.log("Item :",item, "Index ke ", index);
    });
}

cari();