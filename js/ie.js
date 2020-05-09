var isIE = /*@cc_on!@*/false || !!document.documentMode

if (isIE) {
    document.body.removeChild(document.querySelector('.main'))
    document.write('<style>.main{display:flex;align-items:center;justify-content:center;flex-direction:column;height:10vh;}</style><div class="main"><h1>Internet Explorer 는 지원하지 않습니다.<br>Chrome, Firefox, Naver Whale 같은 브라우저를 이용해 주세요.</h1><a href="https://www.google.com/intl/ko/chrome/">Chrome</a><a href="https://www.mozilla.org/ko/firefox/new/">Firefox</a><a href="https://whale.naver.com/ko">Naver Whale</a></div>')
}