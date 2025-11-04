export default function ReviewCard({reviewProp}) {

    const { name, vote, text } = reviewProp

    return (
        <>
            <div class="review-card">
                <div class="review-content">
                    <p>{vote}</p>
                    <p>{name}</p>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}