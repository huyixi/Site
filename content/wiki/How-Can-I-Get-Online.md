## 搭建自己的梯子

### 服务器的选择

1. 由于一些应用或服务无法在一些国家提供，所以选择的服务器尽量选在能提供你所需要的服务的国家
2. 服务器系统推荐 `Ubantu Server 14.04 LTS `
3. 磁盘类型中公共 IP 地址选择静态 IP

### 连接虚拟机并启动服务

使用命令行或者软件连接

下列方括号中的内容都需要修改

```
ssh [username]@[IP address]
```

连接到服务器后，获取 Root 权限

```
sudo su
```

判断当前是否为 `root` 用户

```
whoami
```

更新 Ubantu 的软件列表

```
sudo apt-get update
```

安装 pip 软件管理程序

```
sudo apt-get install python-pip
```

安装 Shadowsocks

```
pip install shadowsocks
```

在后台运行 Shadowsocks

```
sudo ssserver -p [port number] -k [password] -m [Encryption algorithm] --user nobody -d start
```

停止运行

```
sudo ssserver -d stop
```

检查运行日志

```
sudo less /var/log/shadowsocks.log
```

### 连接服务器

使用 Shadowrocket 软件添加配置连接服务器，Shadowrocket 即可使用服务

分享节点，将得到的订阅连接使用转换器转换为 clash 链接后即可在 clash 上使用

### 参考链接

- [shadowsocks](https://github.com/shadowsocks/shadowsocks)
- [pip shadowsocks](https://pypi.org/project/shadowsocks/)
- [订阅转换](https://sub-zh.vercel.app/)
