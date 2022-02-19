function bytesToSize(bytes) {
  let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
}

const element = (tag, classes = [], content) => {
  const node = document.createElement(tag);
  if (classes.length) {
    node.classList.add(...classes);
  }
  if (content) {
    node.textContent = content;
  }
  return node;
};

export function upload(selector, options = {}) {
  let files = [];
  const input = document.getElementById(selector);
  const preview = element('div', ['preview']);
  const open = element('button', ['btn'], 'Open');
  const upload = element('button', ['btn', 'primary'], 'Upload');
  upload.style.display = 'none';

  if (options.multi) {
    input.setAttribute('multiple', true);
  }
  if (options.accept && Array.isArray(options.accept)) {
    input.setAttribute('accept', options.accept.join(','));
  }

  input.insertAdjacentElement('afterend', preview);
  input.insertAdjacentElement('afterend', upload);
  input.insertAdjacentElement('afterend', open);

  const triggerInput = () => input.click();
  const changeHandler = (e) => {
    if (!e.target.files.length) {
      return;
    }
    files = Array.from(e.target.files);
    preview.innerHTML = '';
    upload.style.display = 'inline';
    files.forEach((file) => {
      if (!file.type.match('image')) {
        return;
      }

      const reader = new FileReader();
      reader.onload = (ev) => {
        preview.insertAdjacentHTML(
          'afterbegin',
          `
          <div class="preview-image">
          <div class="preview-remove" data-name="${file.name}">&times;</div>
             <img src="${ev.target.result}" />
             <div class="preview-info">
                <span>${file.name}</span>
                <span>${bytesToSize(file.size)}</span>
             </div>
          </div>`
        );
      };
      reader.readAsDataURL(file);
    });
  };

  const removeHandler = (event) => {
    if (!event.target.dataset) {
      return;
    }
    const { name } = event.target.dataset;
    files = files.filter((el) => el.name !== name);
    if (!files.length) {
      upload.style.display = 'none';
    }

    const block = preview
      .querySelector(`[data-name="${name}"]`)
      .closest('.preview-image');
    block.classList.add('removing');
    setTimeout(() => block.remove(), 300);
  };

  const uploadHandler = () => {};

  open.addEventListener('click', triggerInput);

  input.addEventListener('change', changeHandler);

  preview.addEventListener('click', removeHandler);
  upload.addEventListener('click', uploadHandler);
}
