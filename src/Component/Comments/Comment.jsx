export default function Comment({ comment }) {
    return(
        <>
        <li className="block">
            {/* Get username from comment */}
        <span>{comment.user}</span>
        <p>{comment.comment}</p>
        <span>{comment.date_created}</span>
        </li>
        </>
    )
}