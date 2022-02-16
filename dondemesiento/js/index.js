const ubicar = () => {
    const loading = document.getElementById("loading");
    loading.classList.remove("ocultar");

    const table1 = document.getElementById("table1");
    table1.classList.add("ocultar");
    const table2 = document.getElementById("table2");
    table2.classList.add("ocultar");
    const table3 = document.getElementById("table3");
    table3.classList.add("ocultar");
    const encabezado = document.getElementById("encabezado");
    encabezado.classList.add("ocultar");
    const boton = document.getElementById("boton");
    boton.classList.add("ocultar");
    

    const alumnos = [
        "Aaron Feldman",
        "Abraham Trenyan",
        "Alber Maleh",
        "David Schvartz",
        "David Tarrab",
        "Didi Abel",
        "Eitan Toussie",
        "Julián Kaus",
        "Kevin Efraim",
        "Moshi Entebi",
        "Moshe Fuks",
        "Netanel Toussie",
        "Nicolás Joaquín",
        "Ramiro Mijalovich",
        "Shlomo Serber"
    ];

    alumnos.sort(function() { return Math.random() - 0.5 });
    
    document.getElementById('alumno1').innerText = alumnos[0];
    document.getElementById('alumno2').innerText = alumnos[1];
    document.getElementById('alumno3').innerText = alumnos[2];
    document.getElementById('alumno4').innerText = alumnos[3];
    document.getElementById('alumno5').innerText = alumnos[4];
    document.getElementById('alumno6').innerText = alumnos[5];
    document.getElementById('alumno7').innerText = alumnos[6];
    document.getElementById('alumno8').innerText = alumnos[7];
    document.getElementById('alumno9').innerText = alumnos[8];
    document.getElementById('alumno10').innerText = alumnos[9];
    document.getElementById('alumno11').innerText = alumnos[10];
    document.getElementById('alumno12').innerText = alumnos[11];
    document.getElementById('alumno13').innerText = alumnos[12];
    document.getElementById('alumno14').innerText = alumnos[13];
    document.getElementById('alumno15').innerText = alumnos[14];

    setTimeout(function(){
        loading.classList.add("ocultar");
        table1.classList.remove("ocultar");
        table2.classList.remove("ocultar");
        table3.classList.remove("ocultar");
        encabezado.classList.remove("ocultar");
        boton.classList.remove("ocultar");
        const btn = document.getElementById("btn");
        btn.classList.add("disabled");
    }, 2000);
}