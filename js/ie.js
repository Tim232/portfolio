if (!!document.documentMode || eval('let a=()=>{};') instanceof EvalError) {
    document.body.removeChild(document.querySelector('.main'))
    document.write('<style>body{display:flex;align-items:center;justify-content:center;flex-direction:column;}</style><h1>Internet Explorer 는 지원하지 않습니다.<br>Chrome, Firefox 같은 브라우저를 이용해 주세요.</h1>')
}