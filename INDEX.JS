
      let addBtn = document.getElementById("add_btn");
      addBtn.addEventListener("click", addChapter);
      let parentList = document.getElementById("parentList");

      function addChapter() {
        let currentInput = document.getElementById("chapter_input");
        let currentChapteName = currentInput.value.trim();

        if (currentChapteName === "") {
          alert("Please enter a chapter name.");
          return;
        }

        // Remove "nothing is here" message if it exists
        let emptyMsg = document.querySelector(".emptyMsg");
        if (emptyMsg) {
          emptyMsg.remove();
        }

        let newLi = document.createElement("li");
        newLi.className = "list-group-item d-flex justify-content-between";
        newLi.innerHTML = `
          <h3 class="flex-grow-1">${currentChapteName}</h3>
          <button class="btn btn-warning mx-3" onclick="editChapter(this)">Edit</button>
          <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`;

        parentList.appendChild(newLi);
        currentInput.value = "";
      }

      function removeChapter(currElement) {
        currElement.parentElement.remove();
        if (parentList.children.length === 0) {
          let newEmptyMsg = document.createElement("h3");
          newEmptyMsg.className = "emptyMsg";
          newEmptyMsg.textContent = "Nothing is here, please add a chapter!";
          parentList.appendChild(newEmptyMsg);
        }
      }

      function editChapter(currElement) {
        let currentLi = currElement.parentElement;
        let currentChapteName = currentLi.querySelector("h3").textContent;
        let currentInput = document.createElement("input");

        currentInput.type = "text";
        currentInput.className = "form-control";
        currentInput.value = currentChapteName;

        currentLi.innerHTML = "";
        currentLi.appendChild(currentInput);

        let saveBtn = document.createElement("button");
        saveBtn.className = "btn btn-success mx-3";
        saveBtn.textContent = "Save";
        saveBtn.onclick = function() {
          let newChapterName = currentInput.value.trim();
          if (newChapterName === "") {
            alert("Chapter name cannot be empty.");
            return;
          }
          currentLi.innerHTML = `
            <h3 class="flex-grow-1">${newChapterName}</h3>
            <button class="btn btn-warning mx-3" onclick="editChapter(this)">Edit</button>
            <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`;
        };

        currentLi.appendChild(saveBtn);
      }
    