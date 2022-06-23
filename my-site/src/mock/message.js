import Mock from "mockjs";
import qs from "querystring";

Mock.mock ( "/api/message",
            "post",
            {
                code: 0,
                msg : "",
                data: {
                    id        : "@guid",
                    nickname  : "@cname",
                    content   : "@cparagraph(1, 10)",
                    createDate: Date.now (),
                    "avatar|1": [
                        "https://n.sinaimg.cn/sinacn20113/560/w1080h1080/20190718/0851-hzxsvnp3572972.jpg",
                        "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4162/20220623110834.png",
                        "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4162/20220623110652.png",
                        "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4162/20220623110944.png"
                    ]
                }
            } );

Mock.mock ( /^\/api\/message\/?(\?.+)?$/,
            "get",
            function ( options ) {
                const query = qs.parse ( options.url );
    
                return Mock.mock ( {
                                       code: 0,
                                       msg : "",
                                       data: {
                                           total                            : 52,
                                           [ `rows|${ query.limit || 10 }` ]: [
                                               {
                                                   id        : "@guid",
                                                   nickname  : "@cname",
                                                   content   : "@cparagraph(1, 10)",
                                                   createDate: Date.now (),
                                                   "avatar|1": [
                                                       "https://n.sinaimg.cn/sinacn20113/560/w1080h1080/20190718/0851-hzxsvnp3572972.jpg",
                                                       "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4162/20220623110834.png",
                                                       "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4162/20220623110652.png",
                                                       "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4162/20220623110944.png"
                                                   ]
                                               }
                                           ]
                                       }
                                   } );
            } );