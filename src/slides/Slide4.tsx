import Header from "../components/Header";

export default function Slide4() {
    return (
        <section>
            <Header title="Mame" />
            <section data-markdown>
                <pre>
                    <code className="language-ts">
                        {`const greet = (name: string): string => \`Hello, \${name}!\`; \n`}
                        {`const greet = (name: string): string => \`Hello, \${name}!\`; \n`}
                    </code>
                </pre>
            </section>
            <section data-markdown data-transition="fast">
                <pre>
                    <code className="language-ts">
                        {`const greet = (name: string): string => \`Hello, \${name}!\`;`}
                    </code>
                </pre>
            </section>
        </section>
    );
}
