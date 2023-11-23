
 // Lista de palabras prohibidas
  var palabrasProhibidas = ['forocoches', 'odio'];
console.log("hola");
  function validarMensaje() {
      // Obtener el valor del campo de texto
      var mensaje = document.getElementById('titulo').value;

      // Construir la expresión regular con las palabras prohibidas
      var patron = new RegExp('\\b(?:' + palabrasProhibidas.map(function(palabra) {
          return palabra.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
      }).join('|') + ')\\b', 'i');

      // Validar si el mensaje contiene palabras prohibidas
      if (patron.test(mensaje)) {
          document.getElementById('mensajeError').textContent = 'El mensaje contiene palabras ofensivas!'
          ;
      } else {
          document.getElementById('mensajeError').textContent = '';
      }
  }

  function toggleMenu() {
    var menu = document.querySelector('.mobile-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function insertText(startTag, endTag = '') {
    const textarea = document.getElementById('post-text');
    const { selectionStart, selectionEnd, value } = textarea;

    const textBefore = value.substring(0, selectionStart);
    const selectedText = value.substring(selectionStart, selectionEnd);
    const textAfter = value.substring(selectionEnd);

    const newText = `${textBefore}${startTag}${selectedText}${endTag}${textAfter}`;
    textarea.value = newText;

    // Coloca el cursor después del texto insertado
    textarea.selectionStart = selectionStart + startTag.length;
    textarea.selectionEnd = textarea.selectionStart + selectedText.length;
}

function publicarPost() {
    const postText = document.getElementById('post-text').value;
    // Aquí puedes enviar el contenido del post al servidor o realizar otras acciones
    console.log('Contenido del post:', postText);
}