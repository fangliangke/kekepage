const store = new Vuex.Store({
    state: {
        typeList: ['综合', '有趣', '仿照', '游戏', '工具'],
        typeIndex: 0,
        //关键字搜索
        searchText:'',
        articleList: [{
            type: '仿照',
            createTime: '2022年11月11日',
            title: '高仿小米官网',
            content: '简简单单仿照一个小米官网咯',
            view: 100,
            like: 99,
            cover: 'cat.jpeg',
            url: 'mi/index.html'
        },
            {
                type: '有趣',
                createTime: '2022年11月11日',
                title: '圣诞树',
                content: '简简单单的圣诞树',
                view: 100,
                like: 99,
                cover: 'cat.jpeg',
                url: 'funny/christmasTree.html'
            },
            {
                type: '工具',
                createTime: '2022年12月13日',
                title: 'mybatis日志解析成可执行SQL',
                content: '一个快速mybatis日志解析成可执行SQL工具',
                view: 100,
                like: 99,
                cover: 'cat.jpeg',
                url: 'tool/mybatis-tool.html'
            },
            {
                type: '工具',
                createTime: '2023年1月03日',
                title: '字符串切割',
                content: '可以将excel中一行数据切割为数组方便sql作in操作',
                view: 100,
                like: 99,
                cover: 'cat.jpeg',
                url: 'tool/string-tool.html'
            }
            ]
    },
    getters: {
        getArticleList(state) {
            debugger;
            if (state.typeIndex === 0) {
                return state.articleList.filter(obj => {
                    if (state.searchText.length >0) {
                        return obj.title.includes(state.searchText)
                    }else{
                        return true;
                    }
                });
            } else {
                return state.articleList
                    .filter((obj) => {state.typeList[state.typeIndex] === obj.type})
                    .filter(obj => {
                        if (state.searchText.length >0) {
                            return obj.title.includes(state.searchText)
                        }else{
                            return true
                        }
                    });
            }
        }
    },
    mutations: {
        setTypeIndex(state, value) {
            state.typeIndex = value;
        },
        // 搜索值
        setSearchText(state, value) {
            state.searchText = value
        },
    },
    actions: {
        setTypeIndex: ({
                           commit
                       }, value) => commit('setTypeIndex', value),
        setSearchText: ({
                           commit
                       }, value) => commit('setSearchText', value),
    }
})