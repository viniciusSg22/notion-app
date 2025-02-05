import useScript from "../hooks/useScript";

const EmbbededWebchat = () => {
    useScript(import.meta.env.VITE_BOTPRESS_JS_SCRIPT);
    useScript(import.meta.env.VITE_BOTPRESS_EMBED_CODE);

    return null;
};

export default EmbbededWebchat;
