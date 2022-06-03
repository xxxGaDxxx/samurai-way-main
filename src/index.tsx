import {store} from './redux/state';
import React from 'react';
import {render} from './render';


store.subscribe(render)
render()