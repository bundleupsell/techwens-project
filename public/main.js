function login() {
    const username = document.getElementById('username').value; 
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username }), 
    })
      .then(response => response.json())
      .then(data => {
        document.cookie = `${username}=${encodeURIComponent(data.token)}; expires=Sat, 31 Nov 2023 23:59:59 GMT; path=/`;
        document.cookie = `username=${username}; expires=Sat, 31 Nov 2023 23:59:59 GMT; path=/`;
        window.location.href = `/dashboard`
      })
      .catch(error => {
        console.error('Login error:', error);
      });
  }
  
  function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const username = getCookie('username');
    const token = getCookie(username);
    console.log(username, token);
    if (!file || !token || !username) {
     alert('Please select a file, provide a token, and ensure a valid username.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData)
  
    fetch('/api/v1/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if(data.error){
            alert(data.error);
            return;
        } 
        if(data.sucess) {
            alert('File uploaded successfully!');
            document.getElementById('filepath').innerHTML= ` <h4>FILE PATH:</h4><a target="_blanck" href="${data.filePath}">${data.filePath}<a>`;
            return ;
        }else{
            alert(data.message);
        }
        
      })
      .catch(error => {
        console.error('Upload error:', error);
        alert('File upload failed.');
      });
  }
  
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }
  if(document.getElementById('token')){
     const username = getCookie('username');
     console.log(username)
    const token = getCookie(username);
    document.getElementById('token').innerHTML = token
    document.getElementById('username').innerHTML = username
  }