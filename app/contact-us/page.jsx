import Nav from "../components/navbar";
import Footer from "../components/footer";

export default function Page() 
{
    return (
        <>
            <Nav />
            <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h1>
                <p className="text-lg text-gray-600 mb-6">We would love to hear from you! Please reach out to us using the contact information below.</p>
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-2">Phone: <a href="tel:+260978847195" className="text-blue-600 hover:underline">+260 97 884 7195</a></p>
                    <p className="text-gray-600 mb-4">Email: <a href="mailto:info@learninglmpactfoundation.org" className="text-blue-600 hover:underline">info@learninglmpactfoundation.org</a></p>
                    <p className="text-gray-600">Address: Lusaka, Zambia</p>
                </div>
            </div>
            <Footer />
        </>
    )
} 