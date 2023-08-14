我的 git 自定义配置

#### 全局 Git 忽略

`.DS_Store` 文件是 macOS 文件系统所特有的，并在每个目录中自动创建。这些文件用于存储目录的自定义属性，例如窗口位置、图标位置或背景颜色。对于大多数开发项目，通常不想将这些文件包含在版本控制中。

**解决方案**

1. 在的主目录（通常是 `/Users/你的用户名`）中创建一个名为 `.gitignore_global` 的文件

   ```bash
   touch ~/.gitignore_global
   ```

2. **编辑 `.gitignore_global` 文件**：

   打开刚才创建的 `.gitignore_global` 文件，并添加你想全局忽略的文件和文件夹模式。例如，要忽略所有 `.DS_Store` 文件，你可以添加以下内容：

   ```bash
   .DS_Store
   ```

3. 将刚才创建的 `.gitignore_global` 文件作为全局忽略文件

   ```bash
   git config --global core.excludesfile ~/.gitignore_global
   ```

4. 验证配置

   ```bash
   git config --get core.excludesfile
   ```

5. 如果返回你刚才设置的文件路径,则配置成功.
