function completar(materia) {
  if (materia.classList.contains("tachada")) return;
  materia.classList.add("tachada");

  const desbloqueables = document.querySelectorAll('.materia.bloqueada');
  desbloqueables.forEach(m => {
    const reqs = m.getAttribute("data-requiere");
    if (!reqs) return;

    const requisitos = reqs.split(",");
    const completados = requisitos.every(r => {
      const el = document.getElementById(r.trim());
      return el && el.classList.contains("tachada");
    });

    if (completados) {
      m.classList.remove("bloqueada");
    }
  });
}
