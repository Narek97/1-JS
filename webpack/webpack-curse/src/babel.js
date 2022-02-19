async function start(){
   return await Promise.resolve("asynq is working")
}

start().then(console.log)

class Util{
    static id = Date.now()
}

console.log("Util id", Util.id)