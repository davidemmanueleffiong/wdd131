const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list'); 

let chapterArray = getChapterList() || []; // initialize from localStorage or empty

chapterArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('button');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

    console.log("I like to copy code instead of typing it out myself and trying to understand it.");
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chapterArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // remove the 'X' from the end
    chapterArray = chapterArray.filter(item => item !== chapter);
    setChapterList();
}