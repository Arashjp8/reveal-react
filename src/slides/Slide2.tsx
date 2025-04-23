import Header from "../components/Header";

const Slide2 = () => (
    <section>
        <Header title="Code Example" />
        <section>
            <pre>
                <code className="language-ts">
                    {`const greet = (name: string): string => \`Hello, \${name}!\`;`}
                </code>
            </pre>
        </section>
    </section>
);

export default Slide2;
