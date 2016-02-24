import ModelTest from '../model/_Model';
let model = ModelTest.instance;

class Btn{
  constructor(o){
  	this.val = {
  	  NUM: 1111
  	};
    this.o = document.getElementsByClassName(o)[0];
    this.init();
  }
  init(){
  	var me = this;
    me.o.addEventListener('click', function(){
      model.setCount(me.val.NUM);
    }, false);

    window.addEventListener(model.events.COUNT_UP, function(){
      alert('count up');
      console.log(model.val.NUM);
    }, false);
  }
}

export default Btn;