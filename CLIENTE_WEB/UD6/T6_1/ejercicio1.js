const select = document.querySelector('#colorSelect');

select.addEventListener('change', () => {
    document.body.style.backgroundColor = select.value;
});
