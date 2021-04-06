let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*大家好，我是锅锅，来自甘肃
 *2021年我找到了那个让我内心时刻牵挂的女孩，她叫赵珂颖
 *和所有的情侣一样，我们有争吵，也有过开心
 *我从未有想现在这样坚定过，想要她所有的包容和爱
 *社会很现实，只要她不离，以后我定会好好努力去守护她
 *接下来我要演示下我的前端功底 嘻嘻
 *首先我要准备一个div
 **/
#div1{
    border: 1px solid red; 
    width: 200px;
    height: 200px;
}
/*接下来我把div变成一个八卦图
 *注意看好了
 *首先，把 div变成一个圆圈
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba( 0,0,0,0.5);
    border: none;
}
/*八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个乾坤圈**/
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);

}
#div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);

}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    // 如果是回车，就不照搬。
    // 如果不是回车，就照搬。
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 999999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      // 不是最后一个,就继续。
      n += 1;
      step();
    }
  }, 50);
};
step();
