# ImgBust
Анимация картинков в JS. Когда нет возможности использовать .mov, а хочется коротких анимаций с прозрачностью.
## Демо
https://gloagent.ru/category/blog/web/imgbust.html
## Использование
```javascript
var url_stack = [];
var num = 99 // картинок в папке
for(var i = 0; i <= ; i++){
    url_stack[i] = '/folder/animation/' + i + '.png';
}
var graz = new ImgBust('#graz', url_stack, 30);
graz.start();
```
