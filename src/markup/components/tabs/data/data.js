var data = {tabs: {
    list: [
        {
            id: 'opportunity',
            title: 'Возможности',
            href: 'jav0',
            active: true
        },
        {
            id: 'info',
            title: 'Информация',
            href: 'jav0'
        },
        {
            id: 'privilege',
            title: 'Привилегии',
            href: 'jav0'
        }
    ],
    opportunity: {
        id: 'opportunity',
        title: 'Возможности',
        active: true
    },
    info: {
        id: 'info',
        title: 'Информация'
    },
    privilege: {
        id: 'privilege',
        title: 'Привилегии'
    },
    slides: {
        content: function (fullData) {
            return fullData.slider;
        }
    }
}};
