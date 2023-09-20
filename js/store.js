const store = new Vuex.Store({
    state: {
        typeList: ['综合', '有趣', '仿照', '游戏', '工具'],
        typeIndex: 0,
        //关键字搜索
        searchText: '',
        articleList: [
            {
                type: '有趣',
                createTime: '2022年11月11日',
                title: '圣诞树',
                content: '简简单单的圣诞树',
                view: 100,
                like: 99,
                cover: 'cat.jpeg',
                url: 'page/funny/christmasTree.html'
            },
            {
                type: '有趣',
                createTime: '2023年06月09日',
                title: '八卦阵时钟',
                content: '简简单单的八卦阵时钟',
                view: 100,
                like: 99,
                cover: 'cat.jpeg',
                url: 'page/funny/bg-clock.html'
            },
            {
                type: '有趣',
                createTime: '2023年06月09日',
                title: '地图服务',
                content: '简简单单的地图服务',
                view: 100,
                like: 99,
                cover: 'cat.jpeg',
                url: 'page/funny/arcgis.html'
            },
            {
                type: '工具',
                createTime: '2022年12月13日',
                title: 'mybatis日志解析成可执行SQL',
                content: '一个快速mybatis日志解析成可执行SQL工具',
                view: 100,
                like: 99,
                cover: 'cat.jpeg',
                url: 'page/tool/mybatis-tool.html'
            },
            {
                type: '工具',
                createTime: '2023年1月03日',
                title: '字符串切割',
                content: '可以将excel中一行数据切割为数组方便sql作in操作',
                view: 100,
                like: 99,
                cover: 'cat.jpeg',
                url: 'page/tool/string-tool.html'
            },
            {
                type: '工具',
                createTime: '2023年06月09日',
                title: '表格转字符串',
                content: '将excel中内容按规则转为字符串',
                view: 100,
                like: 99,
                cover: 'cat.jpeg',
                url: 'page/tool/table-excel.html'
            },
            {
                type: '游戏',
                createTime: '2023年2月09日',
                title: '五子棋',
                content: '来一局简简单单的五子棋',
                view: 100,
                like: 99,
                cover: 'cat.jpeg',
                url: 'page/game/vue_gobang.html'
            }
        ]
    },
    getters: {
        getArticleList(state) {
            if (state.typeIndex === 0) {
                return state.articleList.filter(obj => {
                    if (state.searchText.length > 0) {
                        return obj.title.includes(state.searchText) || obj.content.includes(state.searchText)
                    } else {
                        return true;
                    }
                });
            } else {
                return state.articleList
                    .filter((obj) => {
                        return state.typeList[state.typeIndex] === obj.type
                    })
                    .filter(obj => {
                        if (state.searchText.length > 0) {
                            return obj.title.includes(state.searchText) || obj.content.includes(state.searchText)
                        } else {
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