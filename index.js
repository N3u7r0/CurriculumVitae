function presentacion() {
  Swal.fire({
    title: "Presentacion",
    html: `
                    <p class="presentacion">
                        <strong>Hola!!!</strong>
                        Soy Brian y estoy buscando profundizarme como developer front.<br>
                        Inicie mis pasos de la mano de Coder house cursando el programa de desarrollo web en el cual
                        aprendi a usar el lenguje de etiquetas <strong>HTML</strong> con su correspondiente
                        semantica.<br>
                        Tambien en dicho programa aprendi a implemntar <strong>CSS</strong> para darle estilos, un poco
                        de animacion, trasformaciones y sobretdo para que todo trabaje de una manera responsiva,
                        ultilizando herramientas como flexbox , grid mediaquery entre otros. En el mismo trabaje con
                        framewoks y librerias como <strong>BootsTrap, Sass,
                        SweetAlert2.</strong><br>
                        En cuanto finalizo con el ciclo de desarrollo web, continue con el modulo de
                        <b>JavaScript</b> y aprendi mi primer lenguaje de programacion orientado a objetos. En
                        el mismo puse en practica su sintaxis con uso de ciclos, iteraciones, control de flujo,
                        funciones, objetos, arrays, clases, entre otros.<br>
                        tambien aprendi a manejar el DOM por medio del lenguaje, dando paso a los eventos, al uso de
                        storage y el parseo con el formato json, uso de operadores ternarios y el jugar syntax. por
                        ultimo pude ver y utilizar en mis proyectos el uso de promesas y el asincronismo.<br>
                        Todo estos nuevos conocimientos adquiridos fueron en su gran mayoria utilizados en un nuevo
                        proyecto para el ultimo modulo de cursada de Coder house, en el cual fue <b>React
                            js</b> uno de los freamworks mas potentes.
                        En el ultimo curso implemente la habilidad de instalar y configurar adecuadamente el entorno, la
                        sintaxys de jsx, el uso de los componentes, y el consumo de apis mediante el uso de la promesa
                        fech, el uso de algunos hooks, callbacks entre otros.
                        Me gusta trabajar en equipo, escucho aspectos a mejorar como tambien, nuevos metodos para sumar
                        a mis skills ya que para mi, siempre se puede aprender.<br>
                        Me concidero ocurrente y dedicado con las cosas que me gustan, y esta profesion es una de
                        ellas.<br>
                        <br>
                        <div>
                        Atte:<strong> Brian fabian Sabtini.</strong>
                        </div>
                    </p>`,
    confirmButtonText: "Continuar",
    position: "center",
    width: "100vh",
  });
}

function cv() {
  Swal.fire({
    title: "Curriculum vitae",
    text: "Está a punto de descargar el curriculum vitae en formato PDF",
    position: "center",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Descargar",
    cancelButtonText: "Cancelar",
    toast: true,
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(
        "https://drive.google.com/file/d/1imMbymdUlBSPGRx2_N95kJ2j1rAiuQZg/view?usp=drive_link",
        "_blank"
      );
    }
  });
}

function porfolio() {
  Swal.fire({
    title: "Porfolio",
    text: "Esta a punto de aceder al porfolio",
    position: "center",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ir",
    cancelButtonText: "Cancelar",
    toast: true,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href =
        "https://drive.google.com/file/d/1imMbymdUlBSPGRx2_N95kJ2j1rAiuQZg/view?usp=drive_link";
    }
  });
}
