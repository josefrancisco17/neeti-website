import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function MemberCard({ img, name, role, social }) {
    const getSocialIcon = (platform) => {
        const iconClasses = "w-5 h-5";

        switch (platform) {
            case 'github':
                return <FaGithub className={iconClasses} />;
            case 'linkedin':
                return <FaLinkedin className={iconClasses} />;
            case 'mail':
                return <FaEnvelope className={iconClasses} />;
            case 'instagram':
                return <FaInstagram className={iconClasses} />;
            default:
                return null;
        }
    };

    return (
        <motion.div
            className="flex flex-col p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
        >
            <div className="relative w-40 h-40 mx-auto">
                <Image
                    src={img}
                    alt={`${name}'s profile`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-4 border-gray-700"
                />
            </div>

            <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-white">{name}</h3>
                <p className="text-sm text-gray-300 mt-1">{role}</p>
            </div>

            <div className="mt-4 flex justify-center space-x-4">
                {Object.entries(social).map(([platform, url]) => (
                    <motion.a
                        key={platform}
                        href={platform === 'mail' ? `mailto:${url}` : url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gray-200"
                        whileHover={{ scale: 1.2, color: "#d1d5db" }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        aria-label={`${platform} link`}
                    >
                        {getSocialIcon(platform)}
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
}
