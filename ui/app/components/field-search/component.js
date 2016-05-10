import Ember from 'ember';

export default Ember.Component.extend({
  treeData:  [
              {
                'text' : 'Parent Item 1',
                'state' : {
                    'opened' : true
                 },
                'children' : [
                  { 'text' : 'Child 1' },
                  'Child 2',
                  'Child 3'
                ]
              },
              {
                'text' : 'Parent Item 2',
                'state' : {
                    'opened' : true
                 },
                'children' : [
                  { 'text' : 'Child 1' },
                  'Child 2'
                ]
              },
              {
                'text' : 'Parent Item 3',
                'state' : {
                    'opened' : true
                 },
                'children' : [
                  { 'text' : 'Child 1' },
                  'Child 2'
                ]
              }
  ],
  themes: {
    "theme": "default",
    "dots": false,
    "icons": false
  }/*,
  plugins: ["wholerow"]*/

});
