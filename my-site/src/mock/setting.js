import Mock from "mockjs";

Mock.mock ( "/api/setting",
            "get",
            {
                code: 0,
                msg : "",
                data: {
                    avatar      : "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4162/Avatar.png",
                    siteTitle   : "我的个人空间",
                    github      : "https://github.com/Sunny-Sea/",
                    qq          : "663253062",
                    qqQrCode    : "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4162/Avatar.png",
                    weixin      : "SunnySea-qsl",
                    weixinQrCode: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4162/Avatar.png",
                    mail        : "663253062@qq.com",
                    icp         : "Chinese",
                    githubName  : "Sunny-Sea",
                    favicon     : "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4162/Avatar.png"
                }
            } );