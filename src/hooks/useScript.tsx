import { useEffect } from "react";

const useScript = (src: any, async = true) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = async;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src, async]);
};

export default useScript;
