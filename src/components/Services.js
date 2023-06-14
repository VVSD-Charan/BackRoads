import { servicesSection } from "../data";

export const Services = () =>{
    return (
        <section className="section services" id="services">
        <div className="section-title">
          <h2>our <span>services</span></h2>
        </div>
        <div className="section-center services-center">
            {
                servicesSection.map((services)=>{
                    return (
                        <article className="service" key={services.id}>
                        <span className="service-icon"><i className={services.icon}></i></span>
                        <div className="service-info">
                          <h4 className="service-title">{services.title}</h4>
                          <p className="service-text">
                            {services.text}
                          </p>
                        </div>
                      </article>
                    );
                })
            }
        </div>
      </section>
    );
};