import about from '../images/about.jpeg';

export const About = () =>{
    return (
         <section className="section" id="about">
      <div className="section-title">
        <h2>about <span>us</span></h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={about}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            It is through exploration that we transcend the boundaries of our own existence, unravel the mysteries of the unknown, and discover the remarkable beauty and diversity that our planet has to offer. By venturing into uncharted territories, we not only gain a deeper understanding of our own place in the world but also foster cultural exchange, promote scientific advancements, and forge connections that unite us as a global community. 
          </p>
          <p>
            The necessity of exploring the world lies in our collective pursuit of knowledge, personal growth, and the preservation of our shared heritage for future generations.
          </p>
          <a href="#" className="btn">read more</a>
        </article>
      </div>
    </section>
    );
};