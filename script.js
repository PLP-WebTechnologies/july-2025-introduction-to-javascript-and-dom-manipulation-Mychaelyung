// PART 1: JAVASCRIPT BASICS
        // Global variables to demonstrate different data types
        let userName = '';
        let userAge = 0;
        const currentYear = new Date().getFullYear();
        let isAdult = false;

        function analyzeUser() {
            // Get input values and demonstrate type conversion
            userName = document.getElementById('userName').value;
            userAge = parseInt(document.getElementById('userAge').value);
            
            // Input validation using conditionals
            if (!userName || isNaN(userAge)) {
                document.getElementById('userAnalysis').innerHTML = 
                    '<strong style="color: red;">⚠️ Please enter both name and age!</strong>';
                return;
            }

            // Conditional logic and operators
            isAdult = userAge >= 18;
            let birthYear = currentYear - userAge;
            let category = '';
            
            // Nested conditionals
            if (userAge < 13) {
                category = 'Child';
            } else if (userAge < 18) {
                category = 'Teenager';
            } else if (userAge < 65) {
                category = 'Adult';
            } else {
                category = 'Senior';
            }

            // String concatenation and template literals
            let message = `
                <h3>User Analysis Results:</h3>
                <p><strong>Name:</strong> ${userName}</p>
                <p><strong>Age:</strong> ${userAge} years old</p>
                <p><strong>Birth Year:</strong> ${birthYear}</p>
                <p><strong>Category:</strong> ${category}</p>
                <p><strong>Adult Status:</strong> ${isAdult ? 'Yes' : 'No'}</p>
                <p><strong>Days Lived:</strong> Approximately ${userAge * 365} days</p>
            `;

            document.getElementById('userAnalysis').innerHTML = message;
            console.log('User analysis completed for:', userName);
        }

        // PART 2: JAVASCRIPT FUNCTIONS
        // Function 1: Calculator with multiple operations
        function performCalculations() {
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            
            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById('functionResults').innerHTML = 
                    '<strong style="color: red;">Please enter valid numbers!</strong>';
                return;
            }

            // Call helper functions
            let results = `
                <h3>Calculation Results:</h3>
                <p><strong>Addition:</strong> ${add(num1, num2)}</p>
                <p><strong>Subtraction:</strong> ${subtract(num1, num2)}</p>
                <p><strong>Multiplication:</strong> ${multiply(num1, num2)}</p>
                <p><strong>Division:</strong> ${divide(num1, num2)}</p>
                <p><strong>Power:</strong> ${power(num1, num2)}</p>
                <p><strong>Average:</strong> ${calculateAverage(num1, num2)}</p>
            `;
            
            document.getElementById('functionResults').innerHTML = results;
        }

        // Helper functions for calculations
        function add(a, b) { return a + b; }
        function subtract(a, b) { return a - b; }
        function multiply(a, b) { return a * b; }
        function divide(a, b) { return b !== 0 ? (a / b).toFixed(2) : 'Cannot divide by zero'; }
        function power(a, b) { return Math.pow(a, b); }
        function calculateAverage(a, b) { return ((a + b) / 2).toFixed(2); }

        // Function 2: Text formatting utilities
        function formatText() {
            let text = document.getElementById('textToFormat').value;
            
            if (!text) {
                document.getElementById('functionResults').innerHTML = 
                    '<strong style="color: red;">Please enter some text!</strong>';
                return;
            }

            let results = `
                <h3>Text Formatting Results:</h3>
                <p><strong>Original:</strong> "${text}"</p>
                <p><strong>Uppercase:</strong> ${text.toUpperCase()}</p>
                <p><strong>Lowercase:</strong> ${text.toLowerCase()}</p>
                <p><strong>Title Case:</strong> ${toTitleCase(text)}</p>
                <p><strong>Reversed:</strong> ${reverseString(text)}</p>
                <p><strong>Word Count:</strong> ${countWords(text)}</p>
                <p><strong>Character Count:</strong> ${text.length}</p>
            `;
            
            document.getElementById('functionResults').innerHTML = results;
        }

        // Helper functions for text formatting
        function toTitleCase(str) {
            return str.replace(/\w\S*/g, (txt) => 
                txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
            );
        }

        function reverseString(str) {
            return str.split('').reverse().join('');
        }

        function countWords(str) {
            return str.trim().split(/\s+/).length;
        }

        // PART 3: JAVASCRIPT LOOPS 
        // Example 1: For loop to generate numbers
        function generateNumbers() {
            let count = parseInt(document.getElementById('loopCount').value) || 10;
            let display = document.getElementById('loopDisplay');
            display.innerHTML = '';

            // For loop demonstration
            for (let i = 1; i <= count; i++) {
                let item = document.createElement('div');
                item.className = 'loop-item';
                item.textContent = i;
                item.style.backgroundColor = getRandomColor();
                display.appendChild(item);
                
                // Add delay for animation effect
                setTimeout(() => {
                    item.style.opacity = '1';
                }, i * 50);
            }

            console.log(`Generated ${count} numbers using for loop`);
        }

        // Example 2: While loop to create patterns
        function createPattern() {
            let display = document.getElementById('loopDisplay');
            display.innerHTML = '';
            
            let i = 1;
            let symbols = ['🌟', '🔥', '💎', '⚡', '🎨', '🚀', '🎯', '💡'];
            
            // While loop demonstration
            while (i <= 16) {
                let item = document.createElement('div');
                item.className = 'loop-item';
                item.innerHTML = symbols[i % symbols.length];
                item.style.backgroundColor = `hsl(${i * 22.5}, 70%, 60%)`;
                display.appendChild(item);
                i++;
            }

            console.log('Created pattern using while loop');
        }

        // Example 3: Countdown using setInterval (loop-like behavior)
        function startCountdown() {
            let countdownDisplay = document.getElementById('countdownDisplay');
            let count = 10;
            
            countdownDisplay.style.display = 'block';
            countdownDisplay.innerHTML = count;

            let countdown = setInterval(() => {
                count--;
                if (count > 0) {
                    countdownDisplay.innerHTML = count;
                } else {
                    countdownDisplay.innerHTML = '🎉 BLAST OFF! 🎉';
                    clearInterval(countdown);
                    setTimeout(() => {
                        countdownDisplay.style.display = 'none';
                    }, 2000);
                }
            }, 1000);

            console.log('Countdown started');
        }

        // Helper function for random colors
        function getRandomColor() {
            const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        // PART 4: DOM MANIPULATION
        let itemCounter = 0;

        // DOM Interaction 1: Adding new elements dynamically
        function addNewItem() {
            itemCounter++;
            let container = document.getElementById('dynamicContent');
            
            // Create new element
            let newItem = document.createElement('div');
            newItem.className = 'dom-item';
            newItem.innerHTML = `
                Item #${itemCounter} - Click me to change color! 
                <button onclick="removeItem(this.parentElement)" style="float: right; background: rgba(255,255,255,0.2); border: 1px solid white;">❌</button>
            `;
            
            // Add event listener
            newItem.addEventListener('click', function(e) {
                if (e.target.tagName !== 'BUTTON') {
                    this.classList.toggle('clicked');
                    this.innerHTML = this.classList.contains('clicked') 
                        ? this.innerHTML.replace('Click me', '✅ Clicked! Click again')
                        : this.innerHTML.replace('✅ Clicked! Click again', 'Click me');
                }
            });
            
            container.appendChild(newItem);
            console.log('Added new DOM item #' + itemCounter);
        }

        // DOM Interaction 2: Toggle classes on all items
        function toggleAllItems() {
            let items = document.querySelectorAll('.dom-item');
            
            // Use forEach loop to iterate through NodeList
            items.forEach(item => {
                item.classList.toggle('clicked');
            });
            
            console.log('Toggled all item states');
        }

        // DOM Interaction 3: Remove all items
        function clearAllItems() {
            let container = document.getElementById('dynamicContent');
            container.innerHTML = '<p style="color: #7f8c8d; font-style: italic;">All items cleared! Add some new ones.</p>';
            itemCounter = 0;
            console.log('Cleared all DOM items');
        }

        // Remove individual items
        function removeItem(element) {
            element.remove();
            console.log('Removed individual item');
        }

        // Task list functionality
        function addTask() {
            let taskInput = document.getElementById('newTask');
            let taskText = taskInput.value.trim();
            
            if (!taskText) return;
            
            let taskList = document.getElementById('taskList');
            let listItem = document.createElement('li');
            listItem.className = 'task-item';
            listItem.innerHTML = `
                ${taskText}
                <button onclick="toggleTask(this.parentElement)" style="float: right; margin-left: 10px;">✓</button>
                <button onclick="deleteTask(this.parentElement)" style="float: right; background: #e74c3c;">🗑️</button>
            `;
            
            taskList.appendChild(listItem);
            taskInput.value = '';
            
            console.log('Added new task:', taskText);
        }

        function toggleTask(taskElement) {
            taskElement.classList.toggle('completed');
            console.log('Toggled task completion');
        }

        function deleteTask(taskElement) {
            taskElement.remove();
            console.log('Deleted task');
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            console.log('🚀 JavaScript Fundamentals Project Loaded!');
            console.log('This project demonstrates:');
            console.log('✓ Variables, data types, and conditionals');
            console.log('✓ Custom functions and reusability');
            console.log('✓ Various loop types and iterations');
            console.log('✓ DOM manipulation and event handling');
            
            // Add some initial content
            document.getElementById('countdownDisplay').style.display = 'none';
        });

        // Add Enter key support for inputs
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (e.target.id === 'newTask') {
                    addTask();
                }
            }
        });
