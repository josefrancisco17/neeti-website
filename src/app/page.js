export default function Home() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-4xl bg-zinc-950 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-600 mb-6">
          Bem-vindo/a ao Núcleo de Estudantes de Engenharia de Telecomunicações e Informática
        </h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sobre nós</h2>
          <p className="text-gray-600 leading-relaxed">
            Fundado a 5 de Abril de 2022, no Instituto Superior de Engenharia do Porto (ISEP), o Núcleo de Estudantes de Engenharia de Telecomunicações e Informática (NEETI) é um órgão que representa o interesse dos estudantes do curso.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Objetivos</h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>Fomentar o desenvolvimento pessoal e académico de cada estudante.</li>
            <li>Organizar eventos de caráter pedagógico.</li>
            <li>Fomentar a comunicação entre alunos e docentes.</li>
            <li>Promover o contato direto com o mercado de trabalho.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
