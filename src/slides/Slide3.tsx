import Header from "../components/Header";

export default function Slide3() {
    return (
        <section>
            <Header title="Reveal Animation" />
            <section>
                <p className="fragment fade-in">First appears</p>
                <p className="fragment fade-in">Then this</p>
                <p className="fragment fade-in">Finally this</p>
            </section>
        </section>
    );
}
