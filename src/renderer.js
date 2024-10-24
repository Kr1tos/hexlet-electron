window.addEventListener('DOMContentLoaded', () => {
    const addUserBtn = document.getElementById('addUserBtn');
    const submitUserBtn = document.getElementById('submitUserBtn');
    const userForm = document.getElementById('userForm');
    const userTableBody = document.querySelector('#userTable tbody');
  
    let users = [];
  
    addUserBtn.addEventListener('click', () => {
      userForm.classList.toggle('hidden');
    });
  
    submitUserBtn.addEventListener('click', () => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
  
      if (name && email) {
        const user = { name, email };
        users.push(user);
        addUserToTable(user);
        userForm.classList.add('hidden');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
      }
    });
  
    function addUserToTable(user) {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${user.name}</td><td>${user.email}</td>`;
      userTableBody.appendChild(row);
    }
  });
  