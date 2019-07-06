class EventEmitter{
    constructor(){
        this.handler={};
    }
    on(eventName,callback){
        if(!this.handlers){
            this.handlers={};
        }
        if(!this.handlers[eventName]){
            this.handlers[eventName]=[];
        }
        this.handlers[eventName].push(callback);
    }
    emit(eventName,...arg){
        if(this.handlers[eventName]){
            for(var i=0;i<this.handlers[eventName].length;i++){
                this.handlers[eventName][i]
            }
        }
    }
}