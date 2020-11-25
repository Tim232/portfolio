document.body.addEventListener('dragstart', event => event.preventDefault())

new fullpage('#fullpage', {
    licenseKey: null,
    navigation: true,
    navigationTooltips: ['Main', 'Info', 'Projects'],
    scrollingSpeed: 1000,
    verticalCentered: false,
})


const settings = document.getElementById('settings')
const settingsContainer = document.getElementById('settings-container')
const settingReset = document.getElementById('setting-reset')
const backgroundSetting = document.getElementById('background-setting')

settingsContainer.style.display = 'none'

settings.addEventListener('click', () => settingsContainer.style.display = settingsContainer.style.display === 'none' ? 'flex' : 'none')

settingReset.addEventListener('click', () => localStorage.clear())


particlesJS.load('canvas', 'particles.json', () => console.log('loaded'))