# learn-react-router4
学习react-router4源码

## 启动项目
```sh
npm i
npm start
```





## Route 属性 
* path: /:paramName(pattern正则)[?*+]
* exact: 在正则结尾加$符号，只匹配到当前path结束
* strict: 校验结尾是否需要匹配 '/'，严格匹配，有则有，无则无
* sensitive: 大小写严格匹配
* 优先级: children > component > render 

```js
// props.match
        return {
            path, // Route props path
            url: path === "/" && url === "" ? "/" : url, // location hash path 和 正则exec匹配后得出的数组[0]
            isExact, // pathname === url, pathname就是location hash path
            params: keys.reduce((memo, key, index) => {
                memo[key.name] = values[index];
                return memo;
            }, {})
        };
```

1. exact
```
path="/c/:type(view|edit)/:id(\d+)?"
var regexp0 = /^\/c\/((?:view|edit))(?:\/((?:\d+)))?(?:\/(?=$))?(?=\/|$)/i
var regexp1 = /^\/c\/((?:view|edit))(?:\/((?:\d+)))?(?:\/(?=$))?$/i
```


2. exact strict
```
path="/c/:type(view|edit)/:id(\d+)?/"
var regexp0 = /^\/c\/((?:view|edit))(?:\/((?:\d+)))?(?:\/(?=$))?(?=\/|$)/i
var regexp1 = /^\/c\/((?:view|edit))(?:\/((?:\d+)))?(?:\/(?=$))?$/i
var regexp3 = /^\/c\/((?:view|edit))(?:\/((?:\d+)))?\/$/i


path="/c/:type(view|edit)/:id(\d+)?"
regexp = /^\/c\/((?:view|edit))(?:\/((?:\d+)))?$/i
```



3. exact strict sensitive 
```
regexp = /^\/c\/((?:view|edit))(?:\/((?:\d+)))?$/
```