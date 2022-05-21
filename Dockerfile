FROM node:14 # 基于node14去构建镜像
WORKDIR /app  # 工作目录
COPY . /app   # copy当前目录下的所有文件，到app目录里

# 设置时区 （docker容器不存在时区，需要在构建的时候设置时区）
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone

# 安装 (设置淘宝源)
RUN npm set registry https://registry.npm.taobao.org
RUN npm install

# 启动 (只能存在一个CMD)
CMD echo $SERVER_NAME && echo $AUTHOR_NAME && npm run dev && npx pm2 log  # pm2 log 为阻塞控制台程序 (最后必须为阻塞控制台 - 要不然运行完就结束了)

# 环境变量
ENV SERVER_NAME = 'ak-editor-server'
ENV AUTHOR_NAME = 'AKclown'