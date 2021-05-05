const commentFormHandler = async function(event) {
  event.preventDefault();

  const post_id = document.querySelector('#post-id').value;
  const user_id = document.querySelector('#user-id').value;
  const comment = document.querySelector('#comment-body').value;

  if (comment) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        user_id,
        comment
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
