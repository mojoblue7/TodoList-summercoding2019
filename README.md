## TodoList-summercoding2019
#### Summercoding Internship 2차 과제물로 제작한 TODO List 웹 프로그램입니다. <br><br>

### 사용한 기술
#### - React library ( v16.8.6 )
#### - Node.js web server ( v.8.12.0 )
#### - npm v6.5.0
<br>

### dependencies
- "bootstrap": "^4.3.1"
- "cross-env": "^5.2.0"
- "react": "^16.8.6"
- "react-bootstrap": "^1.0.0-beta.8"
  - https://react-bootstrap.github.io/
- "react-datepicker": "^2.5.0"
  - https://www.npmjs.com/package/react-datepicker
- "react-dom": "^16.8.6"
- "react-scripts": "3.0.1"
- "react-toastify": "^5.1.0"
   - https://github.com/fkhadra/react-toastify
<br><br>

설치 및 빌드 방법 (Linux 기준)

<b> Node.js v8.x 설치</b>
- ref: https://github.com/nodesource/distributions/blob/master/README.md
``` 
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -sL https://deb.nodesource.com/setup_8.x | bash -
apt-get install -y nodejs
```
<b> npm 또는 yarn 설치 </b>
```
## install npm
apt-get install npm

## install yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -

echo "deb http://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
deb http://dl.yarnpkg.com/debian/ stable main

apt-get update

apt-get install yarn
```

<b>프로그램 다운</b>
```
git clone git@github.com:mojoblue7/TodoList-summercoding2019.git

cd test

# build using yarn
yarn run build

# build using npm
npm run build
```

<b>프로그램 실행</b>
```
# start app using yarn
yarn start

# start app using npm
npm start
```

### Demo page : http://mojosummercoding.s3-website.ap-northeast-2.amazonaws.com/
![데모](https://user-images.githubusercontent.com/28758879/57987587-65b13d00-7abe-11e9-906b-64dd617ca7f0.PNG)
