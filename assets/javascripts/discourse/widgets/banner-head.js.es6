import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('toxu-items', {
  buildKey: (attrs) => 'home-toxu',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) { } else { 
 
contents.push(
new RawHtml({ html: `<div>
<div id="banner-content">

test test test test test

 </div>
`})
 
   );
   
} 

return contents;

}
});
