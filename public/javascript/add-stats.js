async function newFormHandler(event) {
    event.preventDefault();
  
    const height = document.querySelector('input[name="stat-height"]').value.trim();
    //const post_url = document.querySelector('input[name="post-url"]').value;
  
    const response = await fetch(`/api/stats/:id`, {
      method: 'PUT',
      body: JSON.stringify({
        height,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      console.error(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  