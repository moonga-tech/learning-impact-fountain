import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800">
            <div className="footer-content flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-10 gap-8">
                <div>
                    <h1>Contact Us</h1>
                    <div className="text-md">
                        📞 <a href="tel:+260978847195" className="hover:text-amber-400 transition">+260 97 884 7195</a> | <a href="tel:+260978898985" className="hover:text-amber-400 transition">+260 97 889 8985</a>
                        <p>
                            ✉ <a href="mailto:info@learninglmpactfoundation.org" className="hover:text-amber-400 transition">info@learninglmpactfoundation.org</a>
                        </p>
                    </div>
                </div>
                <div>
                    <h1>Quick Links</h1>
                    <li>
                        <Link href="#about-us" className="hover:text-amber-400 transition">About Us</Link>
                    </li>
                    <li>
                        <Link href="#our-mission" className="hover:text-amber-400 transition">Our Mission</Link>
                    </li>
                    <li>
                        <Link href="#our-vision" className="hover:text-amber-400 transition">Our Vision</Link>
                    </li>
                    <li>
                        <Link href="#core-values" className="hover:text-amber-400 transition">Core Values</Link>
                    </li>
                </div>
                <div>
                    <h1>Address</h1>
                    <p className="text-md">
                        📍 123 Learning Impact St, Lusaka, Zambia
                    </p>
                </div>
            </div>
            <div className="text-center py-4">
                <small>© 2025 Learning Impact Foundation. Designed & Developed by Manongo Tech</small>
            </div>
        </footer>
    )
}