export function dark(darkmode: boolean) {
    const colorsDark = document.getElementById('darkcolor') as HTMLLinkElement;
    const colorsLight = document.getElementById('ligthcolor') as HTMLLinkElement;

    if (darkmode) {
        colorsLight.removeAttribute('disabled');
        colorsDark.setAttribute('disabled', 'true');
    } else {
        colorsDark.removeAttribute('disabled');
        colorsLight.setAttribute('disabled', 'true');
    }
    console.log(colorsLight)
    console.log(colorsDark)
    console.log(darkmode)
}