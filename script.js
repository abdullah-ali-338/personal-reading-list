const STORAGE_KEY = 'demo_reading_list';

const stateLoading = document.getElementById('state-loading');
const stateError = document.getElementById('state-error');
const stateEmpty = document.getElementById('state-empty');
const stateContent = document.getElementById('state-content');
const readingList = document.getElementById('reading-list');

const form = document.getElementById('reading-form');
const titleInput = document.getElementById('book-title');
const authorInput = document.getElementById('book-author');

const btnForceEmpty = document.getElementById('btn-force-empty');
const btnForceError = document.getElementById('btn-force-error');
const btnForceLoading = document.getElementById('btn-force-loading');
const btnResetDemo = document.getElementById('btn-reset-demo');
const btnRetry = document.getElementById('btn-retry');
const btnFirstAction = document.getElementById('btn-first-action');

function hideAllStates() {
  stateLoading.hidden = true;
  stateError.hidden = true;
  stateEmpty.hidden = true;
  stateContent.hidden = true;
}

function showLoading() {
  hideAllStates();
  stateLoading.hidden = false;
}

function showError(message) {
  hideAllStates();
  document.getElementById('error-message').textContent = message;
  stateError.hidden = false;
}

function showEmpty() {
  hideAllStates();
  stateEmpty.hidden = false;
}

function showContent(items) {
  hideAllStates();
  readingList.innerHTML = '';

  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'reading-item';

    const infoDiv = document.createElement('div');
    infoDiv.className = 'item-info';

    const titleEl = document.createElement('h3');
    titleEl.textContent = item.title;

    const authorEl = document.createElement('p');
    authorEl.textContent = `By ${item.author}`;

    infoDiv.appendChild(titleEl);
    infoDiv.appendChild(authorEl);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger';
    deleteBtn.textContent = 'Remove';
    deleteBtn.setAttribute('aria-label', `Remove ${item.title}`);
    deleteBtn.addEventListener('click', () => removeItem(item.id));

    li.appendChild(infoDiv);
    li.appendChild(deleteBtn);
    readingList.appendChild(li);
  });

  stateContent.hidden = false;
}

function fetchReadingList(simulateDelay = 300, forceFail = false) {
  showLoading();

  setTimeout(() => {
    if (forceFail) {
      showError('Failed to synchronize with local persistent storage. Click Retry below.');
      return;
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const items = stored ? JSON.parse(stored) : [];

      if (items.length === 0) {
        showEmpty();
      } else {
        showContent(items);
      }
    } catch (err) {
      showError('Stored data is corrupted or cannot be parsed. Please reset demo data.');
    }
  }, simulateDelay);
}

function saveItems(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function addItem(title, author) {
  const stored = localStorage.getItem(STORAGE_KEY);
  const items = stored ? JSON.parse(stored) : [];
  const newItem = {
    id: Date.now().toString(),
    title,
    author
  };
  items.unshift(newItem);
  saveItems(items);
  fetchReadingList(200);
}

function removeItem(id) {
  const stored = localStorage.getItem(STORAGE_KEY);
  let items = stored ? JSON.parse(stored) : [];
  items = items.filter(item => item.id !== id);
  saveItems(items);
  fetchReadingList(200);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
    addItem(title, author);
    form.reset();
    titleInput.blur();
  }
});

btnFirstAction.addEventListener('click', () => {
  titleInput.focus();
});

btnRetry.addEventListener('click', () => {
  fetchReadingList(400, false);
});

btnForceEmpty.addEventListener('click', () => {
  localStorage.removeItem(STORAGE_KEY);
  fetchReadingList(200, false);
});

btnForceError.addEventListener('click', () => {
  fetchReadingList(400, true);
});

btnForceLoading.addEventListener('click', () => {
  fetchReadingList(2500, false);
});

btnResetDemo.addEventListener('click', () => {
  const samples = [
    { id: '1', title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann' },
    { id: '2', title: 'Clean Architecture', author: 'Robert C. Martin' }
  ];
  saveItems(samples);
  fetchReadingList(300, false);
});

if (!localStorage.getItem(STORAGE_KEY)) {
  showEmpty();
} else {
  fetchReadingList(300, false);
}
