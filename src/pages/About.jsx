import Nav from "../components/Nav";
import Section from "../components/Section";

function About() {
    return (
        <div className="container about">
            <Nav color="aquamarine" />
            <Section
                imgPath="avatar.png"
                order="left"
                color="aquamarine"
                title="Title"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                buttons={[{text: 'Check out my projects!', link: '#/projects'}, {text: 'Check out my resume!', link: '#/resume'}]}
            />
        </div>
    );
}

export default About;
