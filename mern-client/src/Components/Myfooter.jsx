import React from 'react';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Myfooter() {
    return (
        <Footer className="bg-blue-300 text-black">
            <div className="w-full px-6 lg:px-24">
                <div className="grid grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
                    {[
                        { title: "Company", links: ["About", "Careers", "Brand Center", "Blog"] },
                        { title: "Help Center", links: ["Discord Server", "Twitter", "Facebook", "Contact Us"] },
                        { title: "Legal", links: ["Privacy Policy", "Licensing", "Terms & Conditions"] },
                        { title: "Download", links: ["iOS", "Android", "Windows", "MacOS"] }
                    ].map((section, index) => (
                        <div key={index}>
                            <h4 className="text-lg font-semibold text-black mb-4">{section.title}</h4>
                            <Footer.LinkGroup col>
                                {section.links.map((link, idx) => (
                                    <Footer.Link
                                        key={idx}
                                        href="#"
                                        className="text-black hover:text-black transition"
                                    >
                                        {link}
                                    </Footer.Link>
                                ))}
                            </Footer.LinkGroup>
                        </div>
                    ))}
                </div>
                <div className="w-full border-t border-black/20 px-6 py-6 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Flowbite™" year={2022} className="text-black-100" />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        {[BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble].map((Icon, index) => (
                            <Footer.Icon
                                key={index}
                                href="#"
                                icon={Icon}
                                className="text-black hover:text-balck-300 transition"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Footer>
    );
}

export default Myfooter;
