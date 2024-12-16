document.getElementById('dataForm').addEventListener('submit', function(e){
    e.preventDefault();
    let dataget = new FormData(e.target);
    let datashow = document.getElementById('dataContent');
        datashow.innerHTML = "";

        dataget.forEach((value, key) => {
            let dataitem = document.createElement('div');
            dataitem.classList.add('data-item');
            dataitem.innerHTML = `<span>${key}:</span>${value}`;
            datashow.appendChild(dataitem);
        });
        document.getElementById('dataDisplay').style.display = 'block';
});