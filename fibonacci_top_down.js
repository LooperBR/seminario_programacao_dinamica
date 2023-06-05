function fibonacci(n,memo){
    
    if(memo[n] !== undefined){
        return memo[n]
    }
    let result
    if(n==0){
        result = 0
    }else if(n==1){
        result = 1
    }else{
        result = fibonacci(n-1,memo)+ fibonacci(n-2,memo)
    }
    memo[n] = result
    return result
}
let memo = []
console.log(fibonacci(40,memo))