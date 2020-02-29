
import * as Model from "./redirection.js"

Model.Test1()
Model.Test2()

document.querySelector('.load').onclick = function(){
    import('./dynamic.js').then((Model)=>{
        Model.default()
    })
}