let singleton = Symbol();
let singletonEnforcer = Symbol();

class ModelTest{
  constructor(enforcer){
  	this.val = {
  	  NUM: 0
  	};
  	this.events = {
  	  COUNT_UP: 'COUNT_UP'
  	};
  	if(enforcer != singletonEnforcer) throw 'Cannot construct singleton';
  }
  static get instance(){
  	if(!this[singleton]){
  	  this[singleton] = new ModelTest(singletonEnforcer);
  	}
  	return this[singleton];
  }
  setCount(n){
    var me = this;
    me.val.NUM += 1;
  	var ev = new Event(me.events.COUNT_UP);
  	window.dispatchEvent(ev);
  }
}

export default ModelTest;