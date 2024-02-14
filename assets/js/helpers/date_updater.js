function updateCopyrightYear() {
  const currentYear = new Date().getFullYear(); // 2024
  const copyrightElement = document.querySelector('.footer__copy');

  if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear}, Todos los derechos reservados.`
  }
}
updateCopyrightYear()
export default updateCopyrightYear