function abrirNuevoTab(url) {
    // Abrir nuevo tab
    var win = window.open(url, '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
    win.focus();
  }
  $('#open').click(function(){
    abrirNuevoTab('https://programacionextrema.com')
  })