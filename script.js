const url = window.location.href;
const length = url.charAt(url.length-1) == '/' ? url.length-1 : url.length;

alert(length || 0);