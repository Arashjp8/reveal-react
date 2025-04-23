interface Props {
    title: string;
}

export default function Header({ title }: Props) {
    return <h3 className="border">{title}</h3>;
}
