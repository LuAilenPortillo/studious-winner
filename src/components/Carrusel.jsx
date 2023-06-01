import React from "react";
import './Carrusel.css';


const Carrusel = () => {

    return (
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://scontent.faep19-1.fna.fbcdn.net/v/t39.30808-6/348454259_627552615927966_91762669835719106_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFw54I5yaPTqSNpVxCBqBGt-NSRR7FWGzH41JFHsVYbMSKudp6IuTyLZ_avvYqOuUsbZT7x0L0R5eg1KpBNbM_b&_nc_ohc=d_XtOaGkbHMAX_CAL5S&_nc_ht=scontent.faep19-1.fna&oh=00_AfCTn3nGWzj-hOmwQa1ypYQtFUVzbvq8ddBf9hJliWHbJg&oe=647E81C9" className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <img src="https://scontent.faep19-1.fna.fbcdn.net/v/t39.30808-6/346287147_566039752180228_3673351877658421365_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEPSdlbeKmKpQnz1uBWBr4ue6P6YkR9gzd7o_piRH2DN_QDl5gMHeqJGIKbCme2ZVNH4nFhD-tzL4WLxxIIyGQV&_nc_ohc=5wkL8pJU8rsAX_xRdqq&_nc_ht=scontent.faep19-1.fna&oh=00_AfDC1m328jLIG0LFp7VKGIeCS7JKhD6HlhAIqOhxaNLEdQ&oe=647D7684" className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <img src="https://scontent.faep19-1.fna.fbcdn.net/v/t39.30808-6/340451467_2069030073302442_2889164256020669434_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFTj8jxLRdSvMrjCnpLOvc6QBWsCzmV3QlAFawLOZXdCex6ABHfv-P8QB0H4lCGG7F6nPt5Pw0i6_rIKqlfrA8w&_nc_ohc=DO6Z3vfNgUYAX9ealot&_nc_ht=scontent.faep19-1.fna&oh=00_AfDii5R5soZaKSc_O-U92_2qQJJfd8CdWrONEtzT_O4cOw&oe=647E45DC" className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    )
    
}

export default Carrusel;