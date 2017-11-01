import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('banner-head', {
  buildKey: (attrs) => 'home-banner',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) { } else { 
 
contents.push(
new RawHtml({ html: `<div>
<div id="banner-content">
<br />
<center>test test test test test</center>
<br />
 </div>
`})
 
   );
   
} 

return contents;

}
});
