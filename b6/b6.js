


const lits = [
    { id : 1 , name : "trọng "},
    {id : 2 , name : "hehe" },
]

function xuatlist(lits){
    if(lits.length== 0) return -1;
    let mang = "";
    let i =0 ;
     for( i=0 ; i<lits.length ; i++){
            mang += lits[i].name;
           
        
    }
    return mang;
}
console.log(xuatlist(lits));

function sum(){
    const a =   Number(prompt("nhap thong in b "))
 const b =   Number(prompt("nhap thong in b "));
    const tong = a +b ;
    return tong;
}
console.log(sum());