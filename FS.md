node中的内置模块
[fs内置模块]实现I/O操作
```
1.fs.mkdir/fs.mkdirSync:创建文件夹，有Sync的是同步创建，反之没有是异步，想要实现无阻塞的I/O操作，我们一般是用异步操作完成要处理的事情

2.fs.readdir/readdirSync:读取文件目录内容

```