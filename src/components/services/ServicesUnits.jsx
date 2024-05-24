import { useEffect, useState } from "react"
import './Styles/ServicesUnits.css'


const ServicesUnits = () => {
    const [services, setServices] = useState([])

    useEffect(() => {

        const servicesData = [

            {
                "name": "Web Design",
                className: "web-design"
            },
            {
                "name": "Branding",
                className: "branding"
            },
            {
                "name": "Product Strategy",
                className: "product-strategy"

            },
            {
                "name": "App Developing",
                className: "app-developing"
            },

        ];
        setServices(servicesData)
    }, [])

    return (
        <article className="services__card-container">
            <div className="services__tilte">
                <span className="services__title-01">Services</span>
                <span className="services__title-02">Services</span>
            </div>
            <div className="services__map">
                {services.map((service, index) => (
                    <div className="services__card" key={index}>
                        <div className="services__card-header">
                            <div className={`img__container ${service.className}`}> </div>
                        </div>
                        <div className="services__card-name">
                            <h2>{service.name}</h2>
                            <hr className="card__name-hr"/>
                        </div>
                    </div>
                ))}
            </div>

        </article>
    )
}

export default ServicesUnits