import { Store } from 'svelte/store.js';
import SideBar from './components/SideBar.html'
const store =  new Store({
  name: 'Grid Playground',
  sizes: [0, '4px', '8px', '16px', '32px'],
  fg: 'seagreen',
  bg: '#f1f1f1',
  surface: 'white',
  c: 'MainView',
  l: 'SideNav',
  r: 'Drawer',
  t: 'TitleBar',
  b: 'ActionBar',
  p: '0px',
  m: '0px',
  colGap: '0px',
  rowGap: '0px',
  cols: `1fr 4fr 1fr`,
  rows: `50px 1fr 50px`,
  areas: `'t t t'
'l c r'
'l b r'`
,
  flow: 'row wrap',
  lComponent: SideBar,
})

store.compute(
  'numRows',
  ['rows'],
  (rows) =>  rows.length
)

store.compute(
  'numCols',
  ['cols'],
  (cols) =>  cols.length
)

export default store;