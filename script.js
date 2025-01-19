const screen = document.getElementById("screen");

        function append(value) {
            if (screen.textContent === "0") {
                screen.textContent = value;
            } else {
                screen.textContent += value;
            }
        }

        function clearScreen() {
            screen.textContent = "0";
        }

        function deleteLast() {
            screen.textContent = screen.textContent.slice(0, -1) || "0";
        }

        function calculate() {
            try {
                screen.textContent = eval(screen.textContent) || "0";
            } catch {
                screen.textContent = "Error";
            }
        }

        document.addEventListener("keydown", function (event) {
            const key = event.key;
            if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
                append(key);
            } else if (key === "Enter") {
                event.preventDefault();
                calculate();
            } else if (key === "Backspace") {
                deleteLast();
            } else if (key === "Escape") {
                clearScreen();
            }
        });