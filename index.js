document.body.addEventListener('dragstart', event => event.preventDefault())

new fullpage('#fullpage', {
    licenseKey: null,
    navigation: true,
    navigationTooltips: ['Main', 'Info', 'Projects'],
    anchors: '123'.split(''),
    scrollingSpeed: 1000,
    verticalCentered: false,
})



/*
    https://www.youtube.com/watch?v=Bed1z7f1EI4
*/

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x080513)

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
camera.position.z = 1
camera.rotation.x = Math.PI / 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

document.getElementById('canvas').appendChild(renderer.domElement)

const starGeo = new THREE.Geometry()

for (let i = 0; i < 6000; i++) {
    const star = new THREE.Vector3(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300)
    star.velocity = 0
    star.acceleration = 0.02
    starGeo.vertices.push(star)
}

/*
const geometry = new THREE.SphereGeometry(0.5, 32, 32)
const material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa })
const starMaterial = new THREE.Mesh(geometry, material)

//

const sprite = new THREE.TextureLoader().load('star.png')
const starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
    map: sprite,
})
*/

const starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
})

const stars = new THREE.Points(starGeo, starMaterial)
scene.add(stars)

function animate() {
    starGeo.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity

        if (p.y < -200) {
            p.y = 200
            p.velocity = 0
        }
    })

    starGeo.verticesNeedUpdate = true
    stars.rotation.y += 0.002

    renderer.render(scene, camera)

    window.requestAnimationFrame(animate)
}

animate()

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})


const settings = document.getElementById('settings')
const settingsContainer = document.getElementById('settings-container')
const settingReset = document.getElementById('setting-reset')
const backgroundSetting = document.getElementById('background-setting')

settingsContainer.style.display = 'none'

settings.addEventListener('click', () => settingsContainer.style.display = settingsContainer.style.display === 'none' ? 'flex' : 'none')

settingReset.addEventListener('click', () => localStorage.clear())