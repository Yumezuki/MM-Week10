function init() {
    var scene = new THREE.Scene();
    var box = getBox(1, 1, 1);
    scene.add(box);
    var camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth/window.innerHeight,
        1,
        2000
    );

    camera.rotation.x = Math.PI * (-22/180);
    camera.rotation.y = Math.PI * (10/180);

    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl').appendChild(renderer.domElement);
    renderer.render(
        scene,
        camera
    );
}

function getBox(w, h, d) {
    var geometry = new THREE.BoxGeometry(w, h, d);
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    return mesh;
}

init();
