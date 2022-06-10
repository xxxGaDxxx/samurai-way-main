import {store} from './redux/redux-store';
import React from 'react';
import {renderTree} from './render';


store.subscribe(()=>{renderTree()})
renderTree()