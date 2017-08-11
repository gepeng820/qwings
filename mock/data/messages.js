let port = require('../port');
let ip = require('../ipLocation');


module.exports = {
    notice:{
        name:'张江药谷',
        msg:'您的订单已经打包发货'
    },
    messages:[
        {
            avatar:`http://${ip}:${port}/pdd.jpg`,
            sender:'我很帅',
            content:'我觉得你这样有失公正',
            time:'18:30'
        },
        {
            avatar:`http://${ip}:${port}/pdd.jpg`,
            sender:'我很帅',
            content:'我觉得你这样有失公正',
            time:'昨天'
        }
    ]
};