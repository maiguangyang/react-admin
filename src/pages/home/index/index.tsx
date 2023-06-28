import React from 'react';

const HomeIndex = () => {
  return (
    <div style={{ color: '#666' }}>
      <p style={{ lineHeight: '25px' }}>xxx是一个结合AI的低代码平台：主打的就是一个快速开发、快速上线，不想写的功能，别人帮你写</p>
      <h2>1、简介</h2>
      <ul>
        <li style={{ lineHeight: '25px' }}>除了提供手动操作的方式，还结合了GPT，以聊天的方式，自动帮你生成一套系统</li>
        <li style={{ lineHeight: '25px' }}>生成的代码会提供（管理后台+后端api）：在线预览、源码下载、编译后的文件下载</li>
        <li style={{ lineHeight: '25px' }}>目前面向用户主要的功能有：物料市场、项目管理</li>
      </ul>
      <h2>2、物料市场</h2>
      <ul>
        <li style={{ lineHeight: '25px' }}>物料的定义：对需求功能的扩展，提供一键安装的方式，接入到系统中</li>
        <li style={{ lineHeight: '25px' }}>面对用户需求，生成的代码只包含了基础的增删改查功能</li>
        <li style={{ lineHeight: '25px' }}>例如一个“用户管理”功能，生成的代码只有增删改查，想要实现一个用户登录功能，那么这个登录功能就需要扩展了</li>
        <li style={{ lineHeight: '25px' }}>物料可以由需求方、提供方在发布的时候进行定价</li>
      </ul>
    </div>
  );
};

export default HomeIndex;
