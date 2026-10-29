const numero1 = document.getElementById("num1");
const numero2 = document.getElementById("num2");
const operacion = document.getElementById("operaciones");
const boton = document.getElementById("resultado");
const salida = document.getElementById("salida");
const imagen = document.getElementById("imagen");


boton.addEventListener("click", function() {

    const num1 = Number(numero1.value);
    const num2 = Number(numero2.value);

    let total;

    if (operacion.value == "suma") {
        imagen.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX///8UFBT+/v4AAACkpKTs7OxPT08ICAgWFhb7+/sSEhILCwunp6fq6uqioqKqqqqysrJJSUkaGhpDQ0P09PS2trZsbGxTU1NnZ2dMTEzWE/CVAAACpUlEQVR4nO3dwXKbMBRGYRAxIMAYx61p3v9FK9lZZFHbt1ed8tOeb5LJInikY5GsJFxVAAAAAAAAAACUCSF9ZZ8/HrhfuUMxhPg58efzj7e34C/M6I9Lfd8OVnHr2TrkBfx+XrP2qfz787L1dF1iNTdj1j01dmPTTFtP1iGmG29uaoO+r5u3rafrkf57TKbCuh52WRgopFAehRTqo5BCfRRSqI9CCvVRSKE+CinURyGF+iikUB+FFOqjkEJ9FFKoj0IK9VFIoT4KKdRHIYX6KKRQH4UU7kCo9Atj9eLY2XPRVtgP/dBMJQOFfDrMdTYsvTJG59C3I2mmMzNDikxrWFIYKt/xtzTLyl14O5tnK3wfCgvzPKvoWUTXi76y/R2m27Q5lQ2U3k/X+b4Ql3l+85qm6dqZ7tK+7q6Te5xsia7VCOF4bspYljAVDnXhOJej8+/w0Ha9ZZJb69oDhRSKo5BCfRRSqI9CCvVRSKE+CinURyGF+iikUB+FFOqjkEJ9FFKoj8JnhaN/2GGwvzuF72O3Hl48cPph4dq4xx7q934YLFf2te26x7qPo6MvFx7b0V2Y592bXt3/1nL/SpPvUseGmlS4jmkdXOr83VvWJo1gXOyH0l3q2tcW46F0P42tMN3SY/l+GkdhSlwm/56oeT5dTfva0hKOP04lW6JOi3dzYqmTeX/pHp9YHv75PcIUUqiPQgr1UUihPgop1EchhfoopFAfhRTqo5BCfRRSqI9CCvVRSKE+CinURyGF+iikUB+FFOqjkEJ9FFKoj0IK9VFIob7/oXAHz9Uvcn+ufmezz5NdVRWXS/va+tGul2Xr6TrkB+vH48EgXXR0PTN+a/mTFYwXBt8J0K1Zn+Z//3iDHbrP2vTpDXGfSwgAAAAAAAAAe/MTVwZesLTO3AkAAAAASUVORK5CYII="
        imagen.style.width="100px"
        total = num1 + num2;

    } else if (operacion.value == "resta") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuq91oM5XkBkiNbn-FZ5Eqbvaz4QKrD1xsL5zI0oA7w&s=10"
        imagen.style.width="100px"
        total = num1 - num2;

    } else if (operacion.value == "multi") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76KXbHZf-4c39mM2sMPyAlndj6FSuCmTNy3XuksvF6Q&s=10"
        imagen.style.width="100px"
        total = num1 * num2;

    } else if (operacion.value == "division") {

        if (num2 == 0) {
            imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4RdlrmczWMOgDUDqDysx0uR6XkupwPQqeF9f1Hl4iqw&s=10"
            imagen.style.width="100px"
            total = "No se puede dividir entre cero";
        } else {
            imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZu93IxLo_c0rEy3Vr5543zwJaAr8Sj3io1rccSo9MCw&s=10"
            imagen.style.width="100px"
            total = num1 / num2;
        }


    } else {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrFMOmqxkOiaq8W_DQ8BXRdXRe4GuLeuUbqBY-59l434v5E7WLwZqkzW-&s=10"
        imagen.style.width="100px"
        total = "Selecciona una operacion";

    }

    salida.textContent = "Resultado: " + total;

});