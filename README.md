# Использование конфига eslint
```
npm i -D @rmr/eslint-plugin-rmr-code-style \
         eslint-plugin-jest@latest \
         eslint-plugin-react@latest \
         eslint-plugin-import@latest \
         eslint-plugin-prettier@latest \
         eslint-config-prettier@latest
```

В файле `.eslintrc`:
```json
"extends": [
    "plugin:@rmr/rmr-code-style/config"
],
```

[Пример полного конфига](https://git.redmadrobot.com/web-frontend/docs/code-style/blob/master/example/.eslintrc.json)
