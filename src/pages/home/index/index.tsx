import React, { FC } from 'react';

const HomeIndex: FC = () => {
  return (
    <div style={{ color: '#666' }}>
      <p style={{ lineHeight: '25px' }}>目前市面上的低代码系统，要么就是在线配置好，人家给你一个链接来使用。要么就是找一个开源的自己部署一套，这种是不具备物料功能，很多扩展功能实现起来很麻烦。</p>
      <p style={{ lineHeight: '25px' }}>xxx是一个结合AI的低代码平台：主打的就是一个快速开发、快速交付。</p>
      <h2>1、介绍</h2>
      <ul>
        <li style={{ lineHeight: '25px' }}>生成的代码会提供（管理后台+后端api）：在线预览、源码下载、编译后的文件下载</li>
        <li style={{ lineHeight: '25px' }}>除了提供手动操作的方式，还结合了GPT，以聊天的方式，自动帮你生成一套系统</li>
        <li style={{ lineHeight: '25px' }}>目前面向用户主要的功能有：物料市场、项目管理</li>
      </ul>
      <h2>2、物料市场</h2>
      <ul>
        <li style={{ lineHeight: '25px' }}>物料的定义：对需求功能的扩展，提供一键安装的方式，接入到系统中</li>
        <li style={{ lineHeight: '25px' }}>例如一个“用户管理”功能，生成的代码只有增删改查，想要实现一个用户登录功能，那么就需要扩展了</li>
        <li style={{ lineHeight: '25px' }}>物料可以由需求方、提供方在发布的时候进行定价</li>
      </ul>
    </div>
  );
};

export default HomeIndex;
