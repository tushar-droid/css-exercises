const btn = document.getElementById('btn');

btn.addEventListener('mouseover', () =>{
    btn.classList.remove('zoomout')
    btn.classList.add('zoomin')
});

btn.addEventListener('mouseleave', () =>{
    btn.classList.remove('zoomin');
    btn.classList.add('zoomout');
})