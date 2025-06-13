import { useState } from 'react';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            id: 1,
            cert_name: "Web design Course",
            cert_brand: "IBM SkillBuild",
            cert_pdf: "/certificates/WebDesign-IBM.pdf",
            cert_issdate: "April 2nd, 2025"
        },
        {
            id: 2,
            cert_name: "Advanced Software Engineer Job Simulation",
            cert_brand: "Walmart GlobalTech",
            cert_pdf: "/certificates/Advanced SE-Walmart.pdf",
            cert_issdate: "April 3rd, 2025"
        },
        {
            id: 3,
            cert_name: "Frontend Software Engineer Job Simulation",
            cert_brand: "Skyscanner",
            cert_pdf: "/certificates/Frontend SE-Skyscanner.pdf",
            cert_issdate: "April 3rd, 2025"
        },
        {
            id: 4,
            cert_name: "Web Development in React.js: Development Basics Course",
            cert_brand: "Coursera",
            cert_pdf: "/certificates/React-Coursera.pdf",
            cert_issdate: "June 1st, 2025"
        },
        {
            id: 5,
            cert_name: "What Is Generative AI? Course",
            cert_brand: "Linkedin Learning",
            cert_pdf: "/certificates/Generative AI-linkedin.pdf",
            cert_issdate: "May 11th, 2025"
        },
        {
            id: 6,
            cert_name: "MongoDB Node.js Developer Path for SmartBridge Course",
            cert_brand: "MongoDB",
            cert_pdf: "/certificates/Smartinterz(MongoDB)-full stack.pdf",
            cert_issdate: "May 11th, 2025"
        },
        {
            id: 7,
            cert_name: "Web Development Course with live project",
            cert_brand: "Aajhub and Sapienz Recruit",
            cert_pdf: "/certificates/Frontend-Aajhub.pdf",
            cert_issdate: "March 23rd, 2025"
        },
        {
            id: 8,
            cert_name: "Build Your First Chatbot Course",
            cert_brand: "IBM SkillBuild",
            cert_pdf: "/certificates/Build you first chatbot-IBM.pdf",
            cert_issdate: "April 3rd, 2025"
        },
        {
            id: 9,
            cert_name: "CCNAv7:Introduction to Networks Course",
            cert_brand: "Cisco Networking Academy",
            cert_pdf: "/certificates/Networks-CCNAv7.pdf",
            cert_issdate: "April 25th, 2025"
        },
        {
            id: 9,
            cert_name: "Developer Virtual Internship",
            cert_brand: "Salesforce",
            cert_pdf: "/certificates/Developer-Salesforce.pdf",
            cert_issdate: "Nov - Dec, 2023"
        },
        {
            id: 10,
            cert_name: "Data Visualisation: Empowering Business with Effective Insights Job Simulation",
            cert_brand: "TATA",
            cert_pdf: "/certificates/Data-Visualization-TATA.pdf",
            cert_issdate: "March 26th, 2025"
        },
        {
            id: 11,
            cert_name: "Cloud Computing Course",
            cert_brand: "NPTEL",
            cert_pdf: "/certificates/Cloud Computing-NPTEL.pdf",
            cert_issdate: "Jul - Oct, 2024"
        },
        {
            id: 12,
            cert_name: "ES105x: Macroeconomics: Theory and Policy Course",
            cert_brand: "edX",
            cert_pdf: "/certificates/Macro economics-edX.pdf",
            cert_issdate: "April 24th, 2024"
        },
        {
            id: 13,
            cert_name: "AI: Transformative Learning with TechSaksham Internship",
            cert_brand: "Microsoft & SAP, implemented by Edunet Foundation",
            cert_pdf: "/certificates/AI-Transformative-Learning-TechSaksham.pdf",
            cert_issdate: "January 24th, 2025"
        },
        {
            id: 14,
            cert_name: "Android Developer Virtual Internship",
            cert_brand: "India Edu Program & Google for Developers",
            cert_pdf: "/certificates/Android developer-Eduskills.pdf",
            cert_issdate: "Apr - Jun, 2024"
        }
    ];

    return (
        <div className=" bg-gradient-to-tr from-blue-50 to-indigo-50 min-h-screen p-4 sm:p-6">
            <h1 className="text-3xl font-bold text-center my-10">Certificates</h1>

            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            onClick={() => setSelectedCert(cert)}
                            className="cursor-pointer relative group bg-white border border-gray-300 rounded-lg shadow-md p-2 flex flex-col items-center w-full max-w-sm mx-auto"
                        >
                            <h2 className="font-semibold text-center mb-2 text-sm">{cert.cert_brand}</h2>
                            <div className="w-full h-[240px] overflow-hidden pointer-events-none">
                                <Viewer
                                    fileUrl={cert.cert_pdf}
                                    defaultScale={SpecialZoomLevel.PageFit}
                                />
                            </div>
                            <div className="absolute rounded-t-xl bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm text-center px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {cert.cert_name}
                            </div>
                        </div>
                    ))}
                </div>
                {selectedCert && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-150">
                        <div className="bg-white w-[95%] sm:w-[90%] md:w-[75%] h-[90vh] rounded-lg shadow-lg relative overflow-hidden">
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full px-3 py-1 text-sm z-10"
                            >
                                ✕
                            </button>
                            <div className="h-full p-4 overflow-y-auto">
                                <h2 className="text-xl font-bold text-center mb-2">
                                    {selectedCert.cert_name} <br />
                                    <span className="text-sm font-medium text-gray-500">by {selectedCert.cert_brand}</span>
                                </h2>
                                <p className="text-sm text-end mb-2 text-gray-600">
                                    Issued On: {selectedCert.cert_issdate}
                                </p>
                                <div className="h-[80%]">
                                    <Viewer
                                        fileUrl={selectedCert.cert_pdf}
                                        defaultScale={SpecialZoomLevel.PageFit}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Worker>
        </div>
    );
};

export default Certificates;
