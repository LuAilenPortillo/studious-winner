import React from "react";

const Footer = () => {

    // Aca pongo el código javaScript
    // Calculamos el año corriente

    const fecha = new Date().getFullYear();

    return (
        <div>
            <hr />
            <p>© 2022 Lucila Ailen Portillo Zuccotti</p>
            <a href="https://www.facebook.com/elcampitorefugio" ><img src="./LogoFacebook.png" alt="Facebook"/></a>
            <p>Año {fecha}</p>
        </div>
    );
}

export default Footer;