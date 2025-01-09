"use client";

import { useEffect, useState } from "react";
import MemberCard from "@/components/MemberCard";

export default function Team() {
    const [teamData, setTeamData] = useState(null);
    const [selectedYear, setSelectedYear] = useState('2024/25');

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await fetch('/team-details.json');
                const data = await response.json();
                setTeamData(data);
            } catch (error) {
                console.error('Error loading team data:', error);
            }
        };

        fetchTeamData();
    }, []);

    if (!teamData) {
        return (
            <div className="z-0 min-h-screen p-8 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-700 h-12 w-12 mb-4"></div>
                <h2 className="text-xl">Loading...</h2>
            </div>
        );
    }

    const years = Object.keys(teamData.years).reverse();
    const currentYearData = teamData.years[selectedYear];

    const renderSection = (title, members) => (
        members && (
            <section className="mb-12 w-full max-w-6xl">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">{title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {members.map((member, index) => (
                        <MemberCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            social={member.social}
                            img={member.img}
                        />
                    ))}
                </div>
            </section>
        )
    );

    return (
        <div className="z-0 min-h-screen p-8 flex flex-col items-center bg-gradient-to-br from-gray-900 to-gray-800 relative text-white">
            <div className="z-10 w-full max-w-7xl my-20 flex flex-col items-center">
                <h1 className="text-6xl font-extrabold mb-6 text-center text-gray-100">
                    Equipa
                </h1>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-4 py-2 rounded-full border transition 
                                ${
                                selectedYear === year
                                    ? 'bg-gray-700 text-white border-gray-700'
                                    : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {renderSection("Presidência", currentYearData.Presidencia)}
                {renderSection("Departamento de Informática", currentYearData.DepartamentoInformatica)}
                {renderSection("Departamento de Gestão", currentYearData.DepartamentoGestao)}
                {renderSection("Departamento de Marketing", currentYearData.DepartamentoMarketing)}
            </div>
        </div>
    );
}
