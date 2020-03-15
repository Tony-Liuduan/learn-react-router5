# learn-react-router4
学习react-router4源码

## 启动项目
```sh
npm i
npm start
```

# history

## action
* POP: goBack，go, goForward事件触发跳转
* PUSH: history.push 触发的跳转，如Link默认跳转
* REPLACE: history.replace 触发的跳转

## length
> 记录当前浏览器tab页面的url变化个数
history.length === window.history.length

## hashhistory
 * history.push    --> window.location.hash = newHashPath   --> update allPaths --> history.setState --> react.setState --> render --> handleHashChange
 * history.replace --> window.location.replace(newHrefPath) --> update allPaths --> history.setState --> react.setState --> render --> handleHashChange
 * history.goBack  --> window.history.go(-1)                ----------------------> handleHashChange --> history.setState --> react.setState --> render
 * Link 默认走 history.push，可以设置replace属性，则用replace跳转



## browserhistory
* push: history.pushState({key, state}, title, href)完成路径更新，通过Router组件setState更新，这里不会触发popState事件，只有浏览器的back，go事件才会触发
* replace: 同push，只是调用的history.repaceState()方法
* goBack: 通过监听 window.addEventListener('popstate', handlePopState) 触发Router组件setState更新
```js
var globalHistory = window.history;
globalHistory.replaceState({
                key: key,
                state: state
            }, null, href);
```

### webpack-dev server config
```js
    devServer: { // 默认热更新
        port: 3000,
        historyApiFallback: true,
        before(app) {
            app.get("/api/test", (req, res) => {
                res.json({
                    code: 0,
                    msg: "hello world"
                });
            });
        },
    }
```

### node server
```js
module.exports = () => {
    return async function (ctx, next) {
        const accept = ctx.header.accept || '';
        if (accept.indexOf('text/html') > -1 || !accept) { // 判断是页面请求
            try {
                const body = await fs.readFile(Path.join(rootPath, 'public/' + pageName + '.html'));
                ctx.body = body.toString();
            } catch (error) {
                ctx.status = 302;
                ctx.redirect('/');
            }
        } else {
            await next();
        }
    };
};
```




## Route 属性 
* path: /:paramName(pattern正则)[?*+]
* exact: 在正则结尾加$符号，只匹配到当前path结束
* strict: 校验结尾是否需要匹配 '/'，严格匹配，有则有，无则无
* sensitive: 大小写严格匹配
* 优先级: children > component > render 
* location的search、hash配置不受exact strict sensitive配置影响，样例见下面Link说明

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


## Link 
* to 属性可以是string or object
```jsx
// 此种方式可以通过 history.location.state 传递参数
            <Link to={{
                pathname: '/b',
                search: '?c=1&x=d',
                hash: '#a',
                state: {
                    test: 1
                }
            }}>Link跳转到bpp</Link>
```
* browserhistory 传递的state是保存在window.history.state.state上，所以页面刷新时不会清空state
* hashhistory 传递的state是存在自定义history对象的属性中，也就是内存中，所以页面刷新时，就会清空state