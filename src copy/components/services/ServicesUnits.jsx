import { useEffect, useState } from "react"
import './Styles/ServicesUnits.css'


const ServicesUnits = () => {
    const [services, setServices] = useState([])

    useEffect(() => {

        const servicesData = [

            {
                "name": "SEO",
                className: "seo",
                "description": "This is a description about the service you are ofering. It can be as long as you want."
            },
            {
                "name": "Guest Posting",
                className: "posting",
                "description": "This is a description about the service you are ofering. It can be as long as you want."
            },
            {
                "name": "Brand Marketing",
                className: "Marketing",
                "description": "This is a description about the service you are ofering. It can be as long as you want."

            },
            {
                "name": "Content Writing",
                className: "content-writing",
                "description": "This is a description about the service you are ofering. It can be as long as you want."
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
                    <div className={`services__card ${service.className}`} key={index}>
                        <div className="services__card-header">
                            <div className={`img__container ${service.className}`}> </div>
                        </div>
                        <div className="services__card-name">
                            <h2>{service.name}</h2>
                            <hr className="card__name-hr"/>
                        </div>
                        <div className="services__description">
                            <span>{service.description}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

        </article>
    )
}

export default ServicesUnits