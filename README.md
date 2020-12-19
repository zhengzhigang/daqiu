# daqiu

## 1.克隆项目
```
git clone git@github.com:zhengzhigang/daqiu.git
```
## 2.安装依赖
```
cd daqiu
yarn install
```

### 3.启动本地服务
```
yarn serve
```

### 4.编译
```
yarn build
```
```
build完成以后将dist文件夹下的文件放到服务器上

nginx配置示例

server {
    listen       80 default_server;
    listen       [::]:80 default_server;
    server_name  _;
    root         /usr/share/nginx/html;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    location / {
    }
}
```
