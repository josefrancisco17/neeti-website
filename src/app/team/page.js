"use client";

import {useEffect, useState} from "react";
import MemberCard from "@/components/MemberCard";

export default function Team() {
    const [isUnderConstruction] = useState(false);

    if (isUnderConstruction) {
        return (
            <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-black relative text-white">
                <div className="absolute inset-0 z-0"/>
                <div className="z-10 mt-20 text-center">
                    <h1 className="text-6xl font-bold mb-4">Page Under Construction</h1>
                </div>
            </div>
        );
    }

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

    if (!teamData) return <div>Loading...</div>;

    const years = Object.keys(teamData.years);
    const currentYearData = teamData.years[selectedYear];
    return (
        <div className="z-0 min-h-screen p-8 flex flex-col items-center justify-center bg-black relative text-white">
            <div className="absolute inset-0 z-0"/>
            <div className="z-10 my-20 text-white flex flex-col items-center">
                <h1 className="text-6xl font-bold mb-4">Equipa</h1>
                <div className="flex justify-center gap-4 mb-12">
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-4 py-2 rounded ${
                                selectedYear === year
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-700'
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {currentYearData.presidencia && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-center mb-8">Presidência</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {currentYearData.presidencia.map((member, index) => (
                                <MemberCard
                                    key={index}
                                    name={member.name}
                                    role={member.role}
                                    social={member.social}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {currentYearData.diretoria && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-center mb-8">Diretoria</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {currentYearData.diretoria.map((member, index) => (
                                <MemberCard
                                    key={index}
                                    name={member.name}
                                    role={member.role}
                                    social={member.social}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
