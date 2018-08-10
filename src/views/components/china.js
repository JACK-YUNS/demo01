export default {
    // title : {
    //     text: 'iphone销量',
    //     subtext: '纯属虚构',
    //     x:'center'
    // },
    tooltip : {
        trigger: 'item'
    },
    // legend: {
    //     orient: 'vertical',
    //     x:'left',
    //     data:['iphoneX']
    // },
    dataRange: {
        min: 0,
        max: 2500,
        x: 'left',
        y: 'bottom',
        text:['高','低'],           
        calculable : true
    },
    toolbox: {
        show: true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series : [
        {
            name: '人数(千人)',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                {value:528, name:'黑龙江'},
                {value:359, name:'辽宁'},
                {value:350, name:'北京'},
                {value:668, name:'河北'},
                {value:427, name:'山东'},
                {value:388, name:'江苏'},
                {value:284, name:'安徽'},
                {value:280, name:'浙江'},
                {value:650, name:'云南'},
                {value:356, name:'重庆'},
                // {name: '北京',value: Math.round(Math.random()*1000)},
                // {name: '天津',value: Math.round(Math.random()*1000)}
            ]
        }
    ]
  };