---
title: Network
date: 2023-01-02T00:00:00+08:00
category: [Blog]
tags: []
draft: false
---

### OSI 模型

| 层次  | 中文名     | 英文名             |
| ----- | ---------- | ------------------ |
| 第7层 | 应用层     | Application Layer  |
| 第6层 | 表示层     | Presentation Layer |
| 第5层 | 会话层     | Session Layer      |
| 第4层 | 传输层     | Transport Layer    |
| 第3层 | 网络层     | Network Layer      |
| 第2层 | 数据链路层 | Data Link Layer    |
| 第1层 | 物理层     | Physical Layer     |

#### 各层次的必要性

**物理层**：向下屏蔽物理介质实现的细节，使物理层之上的层次不再操心物理学

**链路层**：保证数据的可靠传输与错误的检测纠正，使链路层之上的层次不再操心传输过来的数据是否正确。

数据链路层的存在主要是因为物理媒介的传输是有误差和干扰的，因此需要一个层次来处理和纠正传输过程中出现的错误，保证数据的可靠性。

数据链路层并不是所有网络通信都必须的。例如，一些无线网络技术（如 Wi-Fi）使用的是带有纠错功能的物理层技术，可以在传输过程中检测和纠正数据的错误，因此不需要数据链路层。

**网络层**：网络层的存在主要是因为当一个分组数据通过多个网络节点（如路由器）进行传输时，需要在不同的节点之间进行寻址、路由选择和拥塞控制等操作，从而实现数据的传输。网络层可以提供一种统一的、标准的数据传输接口，使得不同的物理网络可以在网络层上进行交互。此外，网络层也可以实现数据的分段和重新组合等操作，以适应不同网络中的数据传输需求。

**传输层**：传输层的存在主要是为了解决网络传输过程中可能出现的错误、丢失、重复、拥塞等问题，保证应用程序之间的数据传输的可靠性、稳定性和高效性。

**会话层**：会话层的是为应用程序之间建立会话并提供数据传输服务。这些应用程序可以是不同的计算机上运行的，也可以是同一台计算机上的不同进程。

**应用层**：提供各种应用程序的服务和功能，定义数据格式和交换方式以及实现应用程序的通信。它使得应用程序可以在网络上进行可靠的通信和交互，扩大了应用程序的使用范围。

### HTTP Status Code

- 1xx Informational Response

  服务器已经接收到客户端的请求, 并正在处理请求. 需要客户端继续等待或者继续发送请求

  - 100 Continue：

    客户端应该继续发送请求。

    通常在发送大型数据时使用：服务器在收到客户端发送的请求后，返回 100 状态码，告诉客户端可以继续发送请求体。

  - 101 Switching Protocols：

    服务器已经理解了客户端的请求，并将要切换到不同的协议。服务器返回 101 状态码时，会在响应头包含 “Upgrade” 和 “Connection” 字段，告诉客户端应该切换到哪种协议

  - 102 Processing：

    服务器已经接收到客户端的请求，但是还没有完成处理。

    通常用于长时间处理请求：例如上传大型文件，服务器返回 102 状态码时，会在响应头中包含"Processing"字段，告诉客户端请求正在处理中。

- 2xx Success

  服务器已成功处理客户端请求，并返回响应内容

  - 200 OK：

    服务器成功处理请求，并返回响应内容

  - 201 Created：

    服务器成功处理请求，并创建了新的资源。该资源的 URI 已经随 Location 头信息返回

  - 202 Accepted：

    服务器接受请求，但未处理完成

  - 203 Non-Authoritative Information：

    服务器成功处理请求，但返回的信息来自另一来源

  - 204 No Content：

    服务器成功处理请求，但没有相应内容

  - 205 Reset Content：

    服务器成功处理请求，但用户终端需重置当前界面

  - 206 Partial Content：

    服务器成功处理了部分 Get 请求。

    下载工具如迅雷使用此类响应实现断点续传

- 3xx Redirection

  需要客户端采取进一步的操作才能完成请求

  - 300 Multiple Choices：

    请求的资源包括多个位置，客户端可以自行选择一个位置进行重定向。

  - 301 Moved Permanently：

    请求的资源已经永久移动到新位置，将来的所有请求应该直接使用新的URL进行。

  - 302 Found：

    请求的资源已经暂时移动到新的位置，将来的请求应该继续使用原始URL。

  - 303 See Other：

    请求的资源可在另一个URI下被找到，客户端应当使用 GET 方法进行访问。

  - 304 Not Modified：

    客户端发出了一个带条件的请求，例如 If-Match 或 If-Modified-Since，但服务器判断该请求不满足条件。

- 4xx Client Error

  客户端发生错误

  - 400 Bad Request：请求格式有误，服务器无法理解。
  - 401 Unauthorized：客户端未提供认证信息或者认证失败。
  - 402 Payment Required：预留给未来的 HTTP 扩展。
  - 403 Forbidden：服务器拒绝请求，通常因为客户端没有访问该资源的权限。
  - 404 Not Found：请求的资源不存在。
  - 405 Method Not Allowed：请求方法不允许，例如客户端使用了错误的请求方法。
  - 406 Not Acceptable：请求资源的内容特性无法满足客户端要求。
  - 407 Proxy Authentication Required：客户端必须先通过代理服务器进行身份验证，类似于 401。
  - 408 Request Timeout：客户端请求超时。
  - 409 Conflict：请求冲突，通常是因为资源状态已经发生变化。
  - 410 Gone：请求的资源已经不存在，该状态码表示资源已经被永久删除。
  - 411 Length Required：客户端请求缺少 Content-Length 头信息。
  - 412 Precondition Failed：请求头中的条件不满足。
  - 413 Payload Too Large：请求的实体过大，服务器无法处理。
  - 414 URI Too Long：请求的URI过长，服务器无法处理。
  - 415 Unsupported Media Type：请求的格式不受支持。
  - 416 Range Not Satisfiable：客户端请求的范围无效。
  - 417 Expectation Failed：服务器无法满足 Expect 头信息。
  - 418 I'm a teapot：预留给愚人节使用，表示服务器是一台茶壶。
  - 421 Misdirected Request：请求被发送到错误的服务器。
  - 422 Unprocessable Entity：请求格式正确，但是由于语义错误无法处理。
  - 423 Locked：请求的资源已经被锁定。
  - 424 Failed Dependency：请求失败，依赖的资源也无法满足请求。
  - 426 Upgrade Required：客户端需要升级以便能够继续请求。
  - 428 Precondition Required：客户端必须满足条件，例如携带特定的请求头信息。
  - 429 Too Many Requests：客户端在规定时间内发送的请求过多。
  - 431 Request Header Fields Too Large：请求头信息过长。
  - 451 Unavailable For Legal Reasons：请求因为法律原因无法处理。

- 5xx Server Error

  服务器发生错误

  - 500 Internal Server Error：通用错误信息，服务器遇到了意料之外的错误。

  - 501 Not Implemented：客户端请求的功能还未被实现。

  - 502 Bad Gateway：充当网关或代理服务器的服务器，从远端服务器接收到了无效的响应。

  - 503 Service Unavailable：服务器暂时无法处理请求，通常是因为服务器过载或正在进行维护。

  - 504 Gateway Timeout：充当网关或代理服务器的服务器，未在规定时间内从远端服务器接收到响应。

  - 505 HTTP Version Not Supported：服务器不支持客户端请求的 HTTP 版本。

  - 506 Variant Also Negotiates：服务器有一个内部配置错误，导致正在处理的资源被递归请求。

  - 507 Insufficient Storage：服务器无法存储请求所需的全部内容。

  - 508 Loop Detected：服务器检测到一个无限循环。

  - 509 Bandwidth Limit Exceeded：服务器已经超出带宽限制。

  - 510 Not Extended：请求需要扩展。

  - 511 Network Authentication Required：客户端请求需要身份验证，类似于 401 但表示需要使用代理服务器进行身份验证。

    

## Link

- [RFC](https://www.rfc-editor.org/)
- [Wikipedia HTTP状态码](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)
- [MDN HTTP Response Status](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)

