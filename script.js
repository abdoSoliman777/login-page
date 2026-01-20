  document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const messageDiv = document.getElementById('message');


            
            if (email && password) {
                messageDiv.textContent = 'Login successful!';
                messageDiv.className = 'message success';
                document.getElementById('loginForm').reset();
            } else {
                messageDiv.textContent = 'Please fill in all fields.';
                messageDiv.className = 'message error';
            }


        });
        window.alert = function(message) {
            const customAlert = document.createElement('div');
            customAlert.className = 'custom-alert';     
            customAlert.textContent = message;
            document.body.appendChild(customAlert);
            setTimeout(() => {
                document.body.removeChild(customAlert);
            }, 3000);
        };
            