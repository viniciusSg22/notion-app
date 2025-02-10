import botpressImg from "../assets/images/botpress.png";
import EmbbededWebchat from "./EmbeddedWebchat";

export default function Content() {
    return (
        <section className="bg-white dark:bg-gray-900 py-24 overflow-hidden">
            <div className="container mx-auto px-4 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-between">
                    <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                        <img src={botpressImg} alt="Botpress Logo" className="mx-auto lg:mx-0 mb-6 mix-blend-multiply" />
                        <div>
                            <EmbbededWebchat />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wide text-white bg-primary-600 rounded-lg">Como funciona</span>
                        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">Integração Notion-Botpress</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {["Faça uma pergunta", "Busque na base de conhecimento", "Aguarde a resposta", "Aprimore suas interações"].map((title, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-xl font-semibold text-white bg-primary-600 rounded-full">{index + 1}</div>
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis varius ligula.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
