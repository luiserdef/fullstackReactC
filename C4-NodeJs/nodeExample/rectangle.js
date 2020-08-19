module.exports = (x,y,callback)=>{
    if(x<=0 || x<= 0){
        setTimeout(()=>callback(new Error("cant operate: "+x+ "and " +y)), null,2000);
    }else{
        setTimeout(()=>callback(null,{
            perimeter:()=> (2*(x+y)),
            area:()=> (x*y)
        }),2000)
    }
}




