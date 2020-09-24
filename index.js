document.body.addEventListener('dragstart', event => event.preventDefault())

new fullpage('#fullpage', {
    licenseKey: 'asdf',
    navigation: true,
    navigationTooltips: ['Main', 'Info', 'Projects'],
    anchors: ['1', '2', '3'],
    scrollingSpeed: 1000
})