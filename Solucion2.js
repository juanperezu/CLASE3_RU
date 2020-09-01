

const resp=(x,a,b,z)=>{
    let res="";
    if(a==0 || b==0){ // &&
        res="Tanto A cómo B <> 0";
      return res;
    }else{
    res=2*x + 3*(a*b-z)+(a/b);
    return res;
    }
}
console.log(resp(1,2,6,7));
console.log(resp(0,2,6,0));
console.log(resp(1,0,6,7));
console.log(resp(1,2,0,7));