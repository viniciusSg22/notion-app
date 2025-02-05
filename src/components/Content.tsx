import botpressImg from "../assets/images/botpress.png";
// import ComponentWebchat from './ComponentWebchat';
import EmbbededWebchat from "./EmbeddedWebchat";

export default function Content() {
    return (
        // <section className="py-24 bg-white overflow-hidden" style="background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;">
        <section className="py-24 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4 justify-evenly">
                    <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                        <img src={botpressImg} alt="Botpress Log" />
                        Colocar Bot Aqui --- ComponentWebchat.tsx Funciona
                        <EmbbededWebchat />
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm">Como funciona</span>
                        <h2 className="mb-12 text-4xl md:text-5xl leading-tight font-bold tracking-tighter">Integração Notion-Botpress</h2>
                        <div className="flex flex-wrap -mx-4 text-center md:text-left">
                            <div className="w-full md:w-1/2 px-4 mb-8">
                                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-500 font-semibold rounded-full">1</div>
                                <h3 className="mb-2 text-xl font-bold">Faça uma pergunta</h3>
                                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Maximus imperdiet enim non aptent phasellus ad.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-4 mb-8">
                                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-500 font-semibold rounded-full">2</div>
                                <h3 className="mb-2 text-xl font-bold">Busque na base de conhecimento</h3>
                                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Maximus imperdiet enim non aptent phasellus ad.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-4 mb-8">
                                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-500 font-semibold rounded-full">3</div>
                                <h3 className="mb-2 text-xl font-bold">Aguarde a resposta</h3>
                                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Maximus imperdiet enim non aptent phasellus ad.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-500 font-semibold rounded-full">4</div>
                                <h3 className="mb-2 text-xl font-bold">Acabou a criatividade</h3>
                                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Maximus imperdiet enim non aptent phasellus ad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
