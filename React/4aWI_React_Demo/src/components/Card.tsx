type Props = {
    title: string;
    description: string;
};

export default function Card({ title, description }: Props) {
    return (
        <div className="border p-4">
            <h2 className="font-bold">{title}</h2>
            <p>{description}</p>
        </div>
    );
}


