import React from "react";

const links = [
    {
        title: "myTEE (TEE)",
        description:
            "Used for submitting Building Identity (HTK), Law 4495/2017 declarations, and engineering fee calculations.",
        urls: [
            { href: "https://authaireta.gov.gr/ypeka/auth/pages/", text: "Authaireta" },
            { href: "https://web.tee.gr/e-building", text: "TEE e-Building" },
        ],
    },
    {
        title: "e-Adeies (Online Building Permit System)",
        description:
            "Platform for submitting and tracking building permits.",
        urls: [{ href: "https://eadeies.mindigital.gr", text: "e-Adeies Portal" }],
    },
    {
        title: "Hellenic Cadastre – Property & KAEK Search",
        description:
            "For searching property and cadastral data (KAEK, geodata, owners).",
        urls: [{ href: "https://www.ktimatologio.gr", text: "Cadastre Search" }],
    },
    {
        title: "Cadastre Maps – Aerial & Geospatial Viewer",
        description:
            "Online map viewer with cadastral overlays and aerial photographs.",
        urls: [{ href: "https://maps.ktimatologio.gr/index.html?locale=el", text: "Cadastre Maps" }],
    },
    {
        title: "BuildingCert – Energy Performance Certificates (EPC)",
        description:
            "Official portal for submitting and issuing Energy Certificates (ΠΕΑ).",
        urls: [{ href: "https://www.buildingcert.gr", text: "BuildingCert" }],
    },
];

const UseFulLinks = () => {
    return (
        <section className="bg-[#F1F5F9] py-8">
            <div className="max-w-4xl ">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    BuildAI – Useful Links for Engineers
                </h2>
                <div className="space-y-6">
                    {links.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow p-4 hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                            <div className="flex flex-wrap gap-3">
                                {item.urls.map((u, i) => (
                                    <a
                                        key={i}
                                        href={u.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline text-sm"
                                    >
                                        {u.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseFulLinks;
