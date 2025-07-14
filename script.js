
function completar(materia) {
  if (materia.classList.contains("tachada")) return;
  materia.classList.add("tachada");

  const desbloqueables = document.querySelectorAll('.materia.bloqueada');
  desbloqueables.forEach(m => {
    const requisitos = [...m.attributes]
      .filter(attr => attr.name === "data-requiere")
      .map(attr => attr.value);
    const completados = requisitos.every(r => {
      const el = document.getElementById(r);
      return el && el.classList.contains("tachada");
    });
    if (completados) {
      m.classList.remove("bloqueada");
    }
  });
}
