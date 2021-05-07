const logout = async function() {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out');
  }
};

if(document.querySelector('#logout-link')) {
  document.querySelector('#logout-link').addEventListener('click', logout);
}
