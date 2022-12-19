let table=(num,range)=>{
    for(let i=1 ; i<=range ; i++){                
        console.log(`${num} x ${i} = ${num * i}`)

    }
}


export default table // If there is single function then we use default.
// export {table,table1} //If there are more than 1 functions in the
// code then we use this.