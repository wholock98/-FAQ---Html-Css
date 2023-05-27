window.addEventListener('scroll', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.top = window.pageYOffset + 'px';
  });