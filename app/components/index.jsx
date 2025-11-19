import Image from "next/image"
import { TypingAnimation } from "@/components/ui/typing-animation";

import Swal from "sweetalert2"

function Icon({ name, className = "inline-block" }) {
    const map = {
        target: "fa-solid fa-bullseye",
        vision: "fa-solid fa-eye",
        
        check: "fa-solid fa-circle-check",
        arrow: "fa-solid fa-arrow-right",
    };
    const fa = map[name] || map.arrow;
    return <i className={`${fa} ${className}`} aria-hidden="true"></i>;
}

/* images */
import MissionImage from "../../public/images/mission.jpg"
import VisionImage from "../../public/images/vision.jpg"

export default function Index() {

    /* ----- Alerts ----- */
    /* join us */
    const joinUs = () => {
        Swal.fire({
            title: "Contact the Administration!",
            html: 
            `
                <h2>‪+260 97 884 7195‬ | ‪+260 97 889 8985</h2>
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
                <p>For inquiries, please contact us at:</p>
                <a>info@learningimpactfoundation.org</a>
            `,
            icon: "warning"
        });
    }

    return (
        <>
            <div className="banner">
                <h1 className="text-5xl font-bold">
                    <span className="text-white">Welcome to Learning Impact Foundation (LIF)</span>
                </h1>

                <h2 className="py-5">
                    <TypingAnimation duration={80} words={["Measuring learning outcomes", "igniting progress"]} loop />
                </h2>
                
                <button className="bg-orange-400 px-4 py-2 rounded" onClick={getStarted}>
                    <Icon name="arrow" className="inline-block mr-3" /> Get Started
                </button>
            </div>

            <section id="about-us">
                <h1 className="text-center"><i className="fa-solid fa-circle-info"></i> About Us</h1>
                <p>
                    Learning Impact Foundation (LIZ) is dedicated to improving primary education across Zambia, especially in underserved communities. We focus on monitoring learning outcomes, providing high-quality learning materials, supporting teachers, fostering international knowledge exchange, and addressing poverty-related barriers that prevent children from accessing education.
                </p>
            </section>

            {/* vision and mission */}
            <section className="mission-vision w-full bg-gray-800 text-gray-200 px-4 py-10">
                <div className="our-mission flex flex-row-reverse justify-around flex-wrap mb-10 gap-8" id="our-mission">
                    <div className="text flex flex-col justify-center w-full md:w-1/2">
                        <h1 className="text-center md:text-left">Our Mission</h1>
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
                        <h1 className="text-center md:text-left">Our Vision</h1>
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
                <h1 className="text-center"><i className="fa-solid fa-lightbulb"></i> Why We Exist</h1>
                <p>
                    Despite improvements in school enrollment, most children in Zambia still struggle to read and do basic math by the end of primary school. Many face poverty-related challenges like lack of school supplies, nutrition, and menstrual hygiene support, especially in rural areas. LIZ exists to address these issues with a holistic approach — combining learning assessments, teaching support, and poverty alleviation — to ensure every child can succeed.
                </p>
            </section>

            {/* core values */}
            <section id="our-core-values">
                <h1 className="text-center">Our Core Values</h1>
                <ol>
                    <li className="mb-2"><Icon name="check" className="inline-block mr-3 -mt-1" /> <strong>Integrity:</strong> We uphold honesty and transparency.</li>
                    <li className="mb-2"><Icon name="check" className="inline-block mr-3 -mt-1" /> <strong>Excellence:</strong> We strive for the highest quality in everything we do.</li>
                    <li className="mb-2"><Icon name="check" className="inline-block mr-3 -mt-1" /> <strong>Collaboration:</strong> We work respectfully with communities, schools, and partners.</li>
                    <li className="mb-2"><Icon name="check" className="inline-block mr-3 -mt-1" /> <strong>Impact-Driven:</strong> We focus on measurable improvements.</li>
                    <li className="mb-2"><Icon name="check" className="inline-block mr-3 -mt-1" /> <strong>Empowerment:</strong> We build capacity for teachers and learners.</li>
                    <li className="mb-2"><Icon name="check" className="inline-block mr-3 -mt-1" /> <strong>Equity:</strong> We prioritize the most vulnerable and underserved.</li>
                    <li className="mb-2"><Icon name="check" className="inline-block mr-3 -mt-1" /> <strong>Innovation:</strong> We embrace creative, evidence-based solutions.</li>
                    <li className="mb-2"><Icon name="check" className="inline-block mr-3 -mt-1" /> <strong>Sustainability:</strong> We promote lasting change beyond external support.</li>
                </ol>
            </section>

            {/* join us */}
            <section className="join-us text-center m-auto">
                <div>
                    <h1>Get Involved</h1>
                    <p>
                        Join us in transforming education across Zambia. Whether you are a donor, partner, teacher, or community member, your support makes a real difference.
                    </p>
                </div>
                <button className="btn btn-primary mt-5" onClick={joinUs}>Join Us</button>
            </section>
        </>
    )
}