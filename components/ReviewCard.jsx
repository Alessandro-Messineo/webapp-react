export default function ReviewCard({reviewProp}) {

    const { name, vote, text } = reviewProp

    return (
        <>
            <div className="review-card">
                <div className="review-content">
                    <p>{vote}</p>
                    <p>{name}</p>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}