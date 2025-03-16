const generateBtn = document.querySelector('.generate-btn');
        const comicDisplay = document.querySelector('.comic-display');
        const promptInput = document.querySelector('.prompt-input');

        generateBtn.addEventListener('click', async () => {
            if (!promptInput.value.trim()) {
                alert('Please enter a description for your comic');
                return;
            }

            // Simulate comic generation (replace with actual API call)
            comicDisplay.innerHTML = '<p>Generating your comic...<p>';
            
            // Add loading state
            generateBtn.disabled = true;
            generateBtn.textContent = 'Generating...';
            
            // Simulated delay
            setTimeout(() => {
                // Create sample comic panels
                comicDisplay.innerHTML = '';
                for (let i = 0; i < 4; i++) {
                    const panel = document.createElement('img');
                    panel.className = 'comic-panel';
                    panel.src = `panels/panel-${i+1}.jpg`; // Replace with actual generated images
                    panel.alt = `Comic Panel ${i+1}`;
                    comicDisplay.appendChild(panel);
                }
                
                generateBtn.disabled = false;
                generateBtn.textContent = 'Generate Comic';
            }, 2000);
        });