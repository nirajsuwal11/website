// Function to add a comment to the respective blog post
function addComment(postId) {
    // Get the name and comment text from the input fields
    const name = document.getElementById(`comment-name-${postId}`).value;
    const text = document.getElementById(`comment-text-${postId}`).value;

    // Check if both fields are filled
    if (name === "" || text === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Create a new div to hold the comment
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    // Create the content of the comment
    const commentContent = `
        <p><strong>${name}</strong> says:</p>
        <p>${text}</p>
    `;

    // Set the content inside the comment div
    commentDiv.innerHTML = commentContent;

    // Add the new comment to the list of comments for the specific post
    document.getElementById(`comment-list-${postId}`).appendChild(commentDiv);

    // Clear the input fields for the next comment
    document.getElementById(`comment-name-${postId}`).value = "";
    document.getElementById(`comment-text-${postId}`).value = "";
}
