function clipboard(button) {
   let copyClipboard = document.getElementById('input');
  
   copyClipboard.select();
   copyClipboard.setSelectionRange(0, 99999);
  
   document.execCommand('copy');
   alert('Text copyed is:' + copyClipboard.value);
}
