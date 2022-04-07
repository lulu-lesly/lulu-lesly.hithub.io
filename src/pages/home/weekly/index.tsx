import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import Navigator from '../../../comp/navigator/index';
import { isMobile } from '../../../util/index';
import './index.less';

const { TabPane } = Tabs;

const Weekly = () => {
  const [mode, setMode] = useState<'left' | 'right' | 'top' | 'bottom'>('left');

  useEffect(() => {
    if (isMobile()) {
      setMode('top')
    }
    console.log('isMobile === ', isMobile());
  }, []);

  const menuList = [
    {
      title: '02/7 - 02/13',
      node: <div className='node'>
        上班了🤦‍♀️
      </div>
    },
    {
      title: '02/14 - 02/20',
      node: <div className='node'>
        <p>瑞士著名心理学家卡尔·荣格说过：“人们会想尽办法，各种荒谬的办法，来避免面对自己的灵魂。”</p>
        <p>但他还说过：“只有直面灵魂的人，才会觉醒。”</p>
        <br />
        <p>最近看到很多关于面试的准备：
          <ul>
            <li>
              <a target='_blank' href='https://www.freecodecamp.org/news/why-i-studied-full-time-for-8-months-for-a-google-interview-cc662ce9bb13' rel="noreferrer">为什么我为谷歌面试全日制学习了 8 个月</a>
            </li>
          </ul>
        </p>
        <p>无意中得知同事最近学到凌晨3:00，突然觉得我努力的还不够，不然怎么在一群面试的人中脱颖而出。</p>
        <p>甩几个最近访问的链接吧</p>
        <p>
          <a target='_blank' href='https://vue3js.cn/interview/' rel="noreferrer">web前端面试 - 面试官系列</a>
        </p>
        <p>
          <a target='_blank' href='https://www.yuque.com/cuggz/interview/lph6i8' rel="noreferrer">前端面试题之性能优化篇</a>
        </p>
        <p>
          <a target='_blank' href='https://zhuanlan.zhihu.com/p/258068663' rel="noreferrer">32个手撕JS，彻底摆脱初级前端</a>
        </p>
        <p>
          <a target='_blank' href='https://febook.hzfe.org/awesome-interview/' rel="noreferrer">剑指前端 Offer</a>
        </p>
      </div>
    },
    {
      title: '02/21 - 02/27',
      node: <div className='node'>
        <p>这周有许多的面试</p>
        <p>身边四个同事提了离职</p>
      </div>
    },
    {
      title: '...',
      node: <div className='node'>
        鸽鸽鸽鸽鸽
      </div>
    },
    {
      title: '03/21 - 03/27',
      node: <div className='node'>
        <p>最近脑子里想了很多事情，面对了很多事情，也解决了很多事情，对自己认识也逐渐清晰</p>
        <strong className='title' >工作</strong>
        <p>关于影响我最直接的事情就是，现在同事拿到和我下家同一家的offer，但是却比我高了2k，自己心里却一直愤愤不平，可是事实是：别人的本事得来的</p>
        <p>晚上翻来覆去睡不着，告诉自己一定要和自己和解💆‍♀️，为什么要和解而不是继续纠结呢？</p>
        <p>因为他可以学习学到凌晨3-5点，他已经比我多准备了1-2个月的时间刷题，我的面试只是短短3-4周就结束了</p>
        <p>我觉得这个事情就可以到此结束了，别人努力别人拿得多，我心里不好受是因为我也想那么多，也不甘心承认自己那么菜</p>
        <p>菜不菜看中有什么用呢，再看中到最后不过是每个月发到手扣完五险一金，交掉房租，补上基金，剩余的一些而已</p>

        <strong className='title' >变漂亮</strong>
        <p>夏天近在眼前，可是我的体重还是没有下来，很久没化妆了，美瞳也没囤货了，夏天的小裙子也只有两条</p>
        <p>越去考虑这些，就会变成我焦虑的事情🤯，做女人好难🤦‍♀️</p>

        <strong className='title' >搬家</strong>
        <p>搬完家之后，需要买的东西越来越多，哪里都是要花的钱，都是该花的</p>
        <p>昨天建军吐了，吃的太快了，这次搬家感觉孩子们适应的还行，还是有待观察</p>
      </div>
    },
    {
      title: '03/28 - 04/05',
      node: <div className='node'>
        <p>这一周整个就是浑浑噩噩，严重浮躁 + 中度焦虑</p>
        <p>我不是找到工作了吗，把之前计划准备做的事情都实施起来呀？为什么我不去做？因为我实在不知道干什么了，积累了太多的事情</p>
        <p>比如：画画、看书、学英语、健身，那么多事情可以做，但是都没有手机好玩🤦‍♀️</p>

        <strong className='title' >疫情</strong>
        <p>计划4月8号之后回淮北，可是现在的疫情一天比一天严重，回不去了，准备了好久的计划被打乱就很难受</p>

        <strong className='title' >不动就会焦虑</strong>
        <p>04/05我在家躺了一天，主要我是纯生生的躺，躺着嗑瓜子追剧，躺着吃水果追剧，躺着睡觉</p>
        <p>睡醒的我异常的焦虑，啥也不想干，都很晚了，第二天还要去上班</p>
        <p>跑去刷了个碗，平复下了心情，觉得自己突然变有用了，就没有那么焦虑了</p>
        <p>这咋办呀，难道是劳碌命🤦‍♀️</p>

        <strong className='title' >咖啡机上头</strong>
        <p>最近执着于买咖啡机，看了测评觉得自己没必要，起不来还穷，重点是知道这些之后还是想买😂</p>

        <strong className='title' >交接</strong>
        <p>早点交接就早点离职，我也不着急入职或者晚点离职了，就歇歇吧</p>

        <strong className='title' >日积月累</strong>
        <p>https://segmentfault.com/a/1190000023716452</p>
      </div>
    },
    {
      title: '04/06 - 04/08',
      node: <div className='node'>
        <strong className='title' >日积月累</strong>
        <p>https://segmentfault.com/a/1190000023716452</p>
      </div>
    }
  ]

  return (
    <div className='week'>
      <Navigator previousUrl="/home" />
      <Tabs tabPosition={mode} className='title-tab' defaultActiveKey={`${menuList.length - 1}`} >
        {menuList.map((item, index) => (
          <TabPane tab={item.title} key={index} >
            {
              item.node
            }
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}

export default Weekly;