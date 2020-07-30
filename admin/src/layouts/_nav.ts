
export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Панель состояния',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'warning',
      text: ' inactive ',
    }
  }, {
    _tag: 'CSidebarNavDropdown',
    name: 'Новости',
    to: '/news/',
    icon: 'cil-newspaper',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Все новости',
        to: '/news/',
        icon: 'cil-layers'
      }, {
        _tag: 'CSidebarNavItem',
        name: 'Категории',
        to: '/news/categories',
        icon: 'cil-folder-open'
      }, {
        _tag: 'CSidebarNavItem',
        name: 'Теги',
        to: '/news/tags',
        icon: 'cil-tags'
      }, {
        _tag: 'CSidebarNavItem',
        name: 'Источники',
        to: '/news/sources',
        icon: 'cil-share-alt'
      },
    ]
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Настройки',
    to: '/settings',
    icon: 'cil-settings',
    badge: {
      color: 'warning',
      text: ' inactive ',
    }
  },
]