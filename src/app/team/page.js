"use client";

import {useEffect, useState} from "react";
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

    if (!teamData) return <div className="z-0 min-h-screen p-8 flex flex-col items-center justify-center bg-black relative text-white">Loading...</div>;

    const years = Object.keys(teamData.years).reverse();
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

                {currentYearData.Presidencia && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-center mb-8">Presidência</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {currentYearData.Presidencia.map((member, index) => (
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
                )}

                {currentYearData.DepartamentoInformatica && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-center mb-8">Departamento de Informática</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {currentYearData.DepartamentoInformatica.map((member, index) => (
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
                )}

                {currentYearData.DepartamentoGestao && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-center mb-8">Departamento de Gestão</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {currentYearData.DepartamentoGestao.map((member, index) => (
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
                )}

                {currentYearData.DepartamentoMarketing && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-center mb-8">Departamento de Marketing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {currentYearData.DepartamentoMarketing.map((member, index) => (
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
                )}
            </div>
        </div>
    );
}
