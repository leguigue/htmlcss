
            document.getElementById('contactForm').addEventListener('submit', function(event) {
                event.preventDefault();
                
                document.getElementById('responseMessage').style.display = 'block';

                document.getElementById('contactForm').reset();
            })