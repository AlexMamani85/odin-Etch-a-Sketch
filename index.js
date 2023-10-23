document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById("numeroGrid");
    const sketch = document.getElementById("sketch");

    function agregarCeldas() {
        const selectElementValue = document.getElementById("numeroGrid").value;
        sketch.style.gridTemplateColumns = `repeat(${Math.pow(selectElementValue,0.5)}, 1fr)`;
        sketch.innerHTML = '';
        for(let i=0; i<selectElementValue;i++){
            let grid=document.createElement("div");
            grid.style.width="100px";
            grid.style.height="100px";
            grid.style.backgroundColor="blue";
            grid.setAttribute("id",`grid${i}`);

            grid.addEventListener('mouseover', function(){
                if(document.getElementById('azulColor').checked){
                    colorFondo();
                    this.style.backgroundColor='blue';
                    console.log('azul')
                }
                if(document.getElementById('redColor').checked){
                    colorFondo();
                    document.getElementById('redColor').style.color='red'
                    this.style.backgroundColor='red';
                    console.log('rojo')
                }
                if(document.getElementById('verdeColor').checked){
                    colorFondo();
                    document.getElementById('verdeColor').style.color='green'
                    this.style.backgroundColor='green';
                    console.log('verde')
                }
            })

            document.getElementById("sketch").appendChild(grid);
        }
    }


    function colorFondo(){
        if(document.getElementById('azulColor').checked){
            document.getElementById('azulColor').parentElement.style.backgroundColor = 'blue';
            document.getElementById('azulColor').parentElement.style.color = 'white';
            document.getElementById('redColor').parentElement.style.backgroundColor = '';
            document.getElementById('redColor').parentElement.style.color = 'black';
            document.getElementById('verdeColor').parentElement.style.backgroundColor = '';
            document.getElementById('verdeColor').parentElement.style.color = 'black';
        }
        if(document.getElementById('redColor').checked){
            document.getElementById('redColor').parentElement.style.backgroundColor = 'red';
            document.getElementById('redColor').parentElement.style.color = 'white';
            document.getElementById('azulColor').parentElement.style.backgroundColor = '';
            document.getElementById('azulColor').parentElement.style.color = 'black';
            document.getElementById('verdeColor').parentElement.style.backgroundColor = '';
            document.getElementById('verdeColor').parentElement.style.color = 'black';
        }
        if(document.getElementById('verdeColor').checked){
            document.getElementById('verdeColor').parentElement.style.backgroundColor = 'green';
            document.getElementById('verdeColor').parentElement.style.color = 'white';
            document.getElementById('redColor').parentElement.style.backgroundColor = '';
            document.getElementById('redColor').parentElement.style.color = 'black';
            document.getElementById('azulColor').parentElement.style.backgroundColor = '';
            document.getElementById('azulColor').parentElement.style.color = 'black';
        }

    }

    document.getElementById('azulColor').addEventListener('click', colorFondo);
    document.getElementById('redColor').addEventListener('click', colorFondo);
    document.getElementById('verdeColor').addEventListener('click', colorFondo);

    selectElement.addEventListener('change', agregarCeldas);
    agregarCeldas();


});

