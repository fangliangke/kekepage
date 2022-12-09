const store = new Vuex.Store({
    state: {
        typeList: ['综合', '有趣', '仿照', '游戏'],
        typeIndex: 0,
        articleList: [{
            type: '仿照',
            createTime: '2022年11月11日',
            title: '高仿小米官网',
            content: '简简单单仿照一个小米官网咯',
            view: 100,
            like: 99,
            cover: 'cat.jpeg',
            url: 'mi/index.html'
        }]
    },
    getters: {
        getArticleList(state) {
            if (state.typeIndex === 0) {
                return state.articleList;
            } else {
                return state.articleList.filter((obj)=> state.typeList[state.typeIndex] === obj.type)
            }
        }
    },
    mutations: {
        setTypeIndex(state,value) {
          state.typeIndex = value;
        }
    },
    actions: {
        setTypeIndex: ({
                           commit
                       }, value) => commit('setTypeIndex', value),
    }
})