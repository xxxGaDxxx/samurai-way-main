import {store} from './redux/state';
import React from 'react';
import {renderTree} from './render';


store.subscribe(renderTree)
renderTree()