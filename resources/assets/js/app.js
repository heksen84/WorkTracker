require('./bootstrap');

import Vue from 'vue';

// views
import welcome  from './views/welcome.vue';
import login from './views/login.vue';
import register from './views/register.vue';
import listworks from './views/listworks.vue';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';
import layout from 'bootstrap-vue/src/components/layout';
import form from 'bootstrap-vue/src/components/form';
import form_input from 'bootstrap-vue/src/components/form-input';
import form_group from 'bootstrap-vue/src/components/form-group';
import form_textarea from 'bootstrap-vue/src/components/form-textarea';
import form_checkbox from 'bootstrap-vue/src/components/form-checkbox';
import form_select from 'bootstrap-vue/src/components/form-select';
import form_file from 'bootstrap-vue/src/components/form-file';
import button from 'bootstrap-vue/src/components/button';
import table from 'bootstrap-vue/src/components/table';
import link from 'bootstrap-vue/src/components/link';
import image from 'bootstrap-vue/src/components/image';
import radio from 'bootstrap-vue/src/components/form-radio';
import navbar from 'bootstrap-vue/src/components/navbar';
import modal from 'bootstrap-vue/src/components/modal';


Vue.use(layout);
Vue.use(form);
Vue.use(form_input);
Vue.use(form_group);
Vue.use(form_checkbox);
Vue.use(form_textarea);
Vue.use(form_select);
Vue.use(form_file);
Vue.use(button);
Vue.use(table);
Vue.use(link);
Vue.use(image);
Vue.use(radio);
Vue.use(navbar);
Vue.use(modal);


import store from './store'; // хранилище

const app = new Vue({
    el: '#app',
    data: store,
    components: {
      welcome,
      login,
      register,
      listworks
  }
});