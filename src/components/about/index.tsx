import CONFIG from '../../gitprofile.config';

const About = () => {
  return (
    <section id="about" className="py-10">
      <h2 className="text-3xl font-bold text-center">{CONFIG.about.title}</h2>
      <p className="text-lg text-center mt-4">{CONFIG.about.description}</p>
    </section>
  );
};

export default About;
