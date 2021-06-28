const input = document.querySelector('input');
const digitBtns = document.querySelectorAll('.btns')
const clr = document.querySelector('.clear')
const eql = document.querySelector('.equal')
const back = document.querySelector('.bk')
const ans = document.querySelector('span')
const op = document.querySelectorAll('.op')
let bool = false;
let total = 0;
function calAns(){
  if(input.value === "") ans.innerText = "= "+total;
  else ans.innerText = "= " + eval(`${ans.innerText}${input.value}`)
  input.value = "";
}

input.onkeyup = e => {
  (e.key === "Enter")? calAns():undefined
  // console.log(e)
}

// document.onkeydown = e => console.log(e)

digitBtns.forEach( btn => {
  btn.onclick = function (e){
    input.value += this.getAttribute('data-value');
  }
})

clr.onclick = () => {
  input.value = ""
  ans.innerText = "0"
  bool = false;
};

eql.onclick = () => {
  (input.value !== "" || ans.innerText!=='0')? calAns(): undefined
  bool = false
}

back.onclick = () => {
  if(input.value !== "") input.value = input.value.substr(0, input.value.length - 1)
}

op.forEach(btn => {
  btn.onclick = function(){
    let attr = this.getAttribute('data-value');
    if(!bool){
      input.value += attr
      bool = true;
    }else{
      if(ans.innerText !== '0'){
        ans.innerText = eval(`${ans.innerText}${input.value}`) + (attr)? attr : '';
      }
      else ans.innerText = eval(input.value) + attr
      input.value = ''

    }
  }
})
