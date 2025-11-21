import Image from "next/image"

/* packages and modules */
import { TypingAnimation } from "@/components/ui/typing-animation";
import Swal from "sweetalert2"

import Accordion from "./accordion";
import Icon from "./icon";

/* images */
import MissionImage from "../../public/images/mission.jpg"
import VisionImage from "../../public/images/vision.jpg"

/* Index Function Page */
export default function Index() {
    /* ----- Alerts ----- */
    /* join us */
    const joinUs = () => {
        Swal.fire({
            title: "Contact the Administration!",
            html: 
            `
                <h2>‪+260 97 884 7195‬ | ‪+260 97 889 8985</h2>
                <h1>info@learninglmpactfoundation.org</h1>
                <b>Join Us Now!</b>
            `,
            icon: "success"
        });
    }
    /* get started */
    const getStarted = () => {
        Swal.fire({
            title: "Website Under Maintenance",
            html:
            `
                <h1>For inquiries, please contact us at:</h1>
                <a>info@learningimpactfoundation.org</a>
            `,
            icon: "warning"
        });
    }

    const coreValues = [
        { title: 'Integrity', content: 'We uphold honesty and transparency.' },
        { title: 'Excellence', content: 'We strive for the highest quality in everything we do.' },
        { title: 'Collaboration', content: 'We work respectfully with communities, schools, and partners.' },
        { title: 'Impact-Driven', content: 'We focus on measurable improvements.' },
        { title: 'Empowerment', content: 'We build capacity for teachers and learners.' },
        { title: 'Equity', content: 'We prioritize the most vulnerable and underserved.' },
        { title: 'Innovation', content: 'We embrace creative, evidence-based solutions.' },
        { title: 'Sustainability', content: 'We promote lasting change beyond external support.' },
    ];

    return (
        <>
            <div className="banner">
                <h1 className="text-5xl font-bold">
                    <span className="text-white">Welcome to Learning Impact Foundation (LIF)</span>
                </h1>

                <h2 className="text-2xl font-semibold text-gray-200">
                    <TypingAnimation duration={80} words={[, "igniting progress"]} loop />
                </h2>
                
                <button className="bg-orange-400 rounded btn btn-small" onClick={getStarted}>
                    <Icon name="arrow" className="inline-block mr-2" /> Get Started
                </button>
            </div>

            <section id="about-us">
                <h1 className="text-center text-2xl font-bold mb-2"><i className="fa-solid fa-circle-info"></i> About Us</h1>
                <p>
                    Learning Impact Foundation (LIF) is dedicated to improving primary education across Zambia, especially in underserved communities. We focus on monitoring learning outcomes, providing high-quality learning materials, supporting teachers, fostering international knowledge exchange, and addressing poverty-related barriers that prevent children from accessing education.
                </p>
            </section>

            {/* vision and mission */}
            <section className="mission-vision w-full flex flex-column bg-gray-800 text-gray-200 px-4 py-10">
                <div className="our-mission flex flex-row-reverse justify-around flex-wrap mb-10 gap-8" id="our-mission">
                    <div className="text flex flex-col justify-center w-full md:w-1/2">
                        <h1 className="text-center md:text-left text-2xl font-bold mb-2">Our Mission</h1>
                        <p>
                            To enhance primary education by delivering independent learning assessments, effective teaching resources, comprehensive teacher support, and targeted poverty interventions to ensure equitable learning opportunities for all children.
                        </p>
                    </div>
                    <div className="image-div w-full md:w-1/3 flex justify-center items-center">
                        <Image src={MissionImage} alt="Learning Impact Mission" className="image w-full h-auto" />
                    </div>
                </div>

                <div className="our-vision flex flex-row justify-around flex-wrap gap-8" id="our-vision">
                    <div className="text flex flex-col justify-center w-full md:w-1/2">
                        <h1 className="text-center md:text-left text-2xl font-bold mb-2">Our Vision</h1>
                        <p>
                            A Zambia where every child thrives with strong literacy and numeracy skills, supported by excellent teachers and a learning environment free from poverty barriers.
                        </p>
                    </div>
                    <div className="image-div w-full md:w-1/3 flex justify-center items-center">
                        <Image src={VisionImage} alt="Learning Impact Vision" className="image w-full h-auto" />
                    </div>
                </div>
            </section>
            <section className="py-4">
                <h1 className="text-center text-2xl font-bold"><i className="fa-solid fa-lightbulb mb-2"></i> Why We Exist</h1>
                <p>
                    Despite improvements in school enrollment, most children in Zambia still struggle to read and do basic math by the end of primary school. Many face poverty-related challenges like lack of school supplies, nutrition, and menstrual hygiene support, especially in rural areas. LIZ exists to address these issues with a holistic approach — combining learning assessments, teaching support, and poverty alleviation — to ensure every child can succeed.
                </p>
            </section>

            {/* core values */}
            <section id="our-core-values" className="py-10">
                <h1 className="text-center text-2xl font-bold mb-6">Our Core Values</h1>
                <div className="max-w-3xl mx-auto">
                    <Accordion items={coreValues} />
                </div>
            </section>

            {/* join us */}
            <section className="join-us text-center m-auto">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Get Involved</h1>
                    <p>
                        Join us in transforming education across Zambia. Whether you are a donor, partner, teacher, or community member, your support makes a real difference.
                    </p>
                </div>
                <button className="btn btn-lg mt-2 bg-orange-400 text-white px-10" onClick={joinUs}>Join Us</button>
            </section>
        </>
    )
}