class Stack {

  constructor(){
    this._store = {}
    this._length = 0
  }

  /***
    * Adds {value} at the end of the store
    * Increased the capacity of the store by     * *
  */
  push(value){
    this._store[this._length] = value;
    this._length++
  }

  /***
    * Removes the value at the end of the store.
    * @return {*} the last and newest value in the stack
    * *
  */
  pop(){
    if(this._length){
        const lastValue = this._store[this._length - 1]
        delete this._store[this._length - 1]
        return lastValue

      }
  }

  /***
    * Returns the value at the end of the stack without removing it.
    * @return {*} the last and newest value in the stack
    * *
  */
  peek(){
    if(this._length){
      return this._store[this._length -1]
    }
  }
}
