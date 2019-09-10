import style from './../scss/style.scss';
import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());