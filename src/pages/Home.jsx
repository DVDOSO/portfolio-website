import Nav from "../components/Nav";
import SocialButton from "../components/SocialButton";
import Section from "../components/Section";
import "./Home.css";

function Home() {
    return (
        <>
            <div className="container home">
                <Nav color="darkmagenta" />
                <section className="hero">
                    <article className="mainCaption">
                        <h1 className="mainTitle">
                            Hello, my <span id="nowrap">name is</span> <br />{" "}
                            <b id="headerBold">
                                David Jiang<span id="accent1">.</span>
                            </b>
                        </h1>
                        <p className="caption">
                            I&apos;m a <b id="darkcolor2">software developer</b>{" "}
                            and a <b id="darkcolor2">computer science</b>{" "}
                            student at the{" "}
                            <b id="darkcolor2">
                                University of Waterloo, Canada
                            </b>
                            .
                        </p>
                        <section className="socials">
                            <SocialButton
                                name="GitHub"
                                address="https://github.com/DVDOSO"
                                icon="github-mark.svg"
                                width={50}
                            />
                            <SocialButton name="LinkedIn" address="https://www.linkedin.com/in/david-jiang-187b86181/"
                                icon="icons8-linkedin.svg"
                                width={50}
                            />
                        </section>
                    </article>
                    <img
                        className="avatar"
                        src="avatar.png"
                        alt="avatar"
                        width={450}
                    />
                </section>
                <section className="sections">
                    <Section
                        imgPath="avatar.png"
                        order="right"
                        color="darkmagenta"
                        title="About Me."
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                        buttons={[{text: 'Learn more about me!', link: '#/about'}]}
                    />
                    {/* Change format of projects later */}
                    <Section
                        imgPath="avatar.png"
                        order="left"
                        color="darkmagenta"
                        title="My Projects."
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                        buttons={[{text: 'Check out my projects!', link: '#/projects'}]}
                    />
                    <Section
                        imgPath="avatar.png"
                        order="right"
                        color="darkmagenta"
                        title="Qualifications."
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                        buttons={[{text: 'Download my resume!', link: '#/resume'}, {text: 'Contact me!', link: '#/resume'}]}
                    />
                </section>
                <h2>Contact me!</h2>
            </div>
        </>
    );
}

export default Home;
