
import './style.css';
import RenderElement from './elements.js';
import WebpageController from './ui.js';
import Storage from './storage.js';


const webpageController = new WebpageController;
Storage.Load();
webpageController.renderHomepage();


