import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/Angeler.css';
import '@pnotify/core/dist/PNotify.css';

function onFetchError(text) {
  alert({
    text: text,
    type: 'error',
    dir: 'left',
    delay: 1500,
    icon: true,
    addClass: 'angeler-extended',
    width: '370px',
    closer: true,
  });
}

export default onFetchError;
