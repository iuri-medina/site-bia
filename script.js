const wrapper = document.querySelector('.wrapper');
const sim = document.querySelector('.sim');
const nao = document.querySelector('.nao');
const containerButton = document.querySelector('body');

const wrapperSim = document.querySelector('.wrapper-sim');
const gato = document.querySelector('.gato');
const amaSim = document.querySelector('.ama-sim');

nao.addEventListener('click', change);

function change() {
    let i = Math.abs(Math.floor(Math.random() * window.innerWidth - 120));
    let j = Math.abs(Math.floor(Math.random() * window.innerHeight - 40));
    nao.style.position = 'absolute';
    nao.style.transition = '.2s';
    nao.style.left = i + 'px';
    nao.style.top = j + 'px';
}

sim.addEventListener('click', accept);

function accept() {
    wrapper.style.display = 'none';
    wrapperSim.style.display = 'flex';


}