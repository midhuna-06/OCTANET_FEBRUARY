function addTask() {
            var input = document.getElementById("task-input");
            var task = input.value;
            if (task.trim() !== "") {
                var ul = document.getElementById("task-list");
                var li = document.createElement("li");
                li.textContent = task;
                ul.appendChild(li);
                input.value = "";
            }
        }