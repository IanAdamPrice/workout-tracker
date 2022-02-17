async function newFormHandler(event) {
    event.preventDefault();
  
    const stat_height = document.querySelector('input[name="stat-height"]').value;
    //const post_url = document.querySelector('input[name="post-url"]').value;
  
    const response = await fetch(`/api/stats`, {
      method: 'PUT',
      body: JSON.stringify({
        stat_height,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/stats');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  