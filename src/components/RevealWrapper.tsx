import { useEffect, useRef, ReactNode } from "react";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/night.css";
import "reveal.js/plugin/highlight/monokai.css";

interface RevealWrapperProps {
    children: ReactNode;
}

const RevealWrapper = ({ children }: RevealWrapperProps) => {
    const revealRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!revealRef.current) return;

        const deck = new Reveal(revealRef.current, {
            hash: true,
            plugins: [Markdown, Highlight],
            autoPlayMedia: false,
            slideNumber: true,
            transition: "slide",
        });

        deck.initialize();

        return () => {
            deck.destroy();
        };
    }, []);

    return (
        <div className="reveal" ref={revealRef}>
            <div className="slides">{children}</div>
        </div>
    );
};

export default RevealWrapper;
