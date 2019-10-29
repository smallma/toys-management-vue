<template>
  <div>
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['2']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
    >
      <template v-for="item in list">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon :type=item.icon /><span>{{item.title}}</span>
          <router-link :to="`${item.href || ''}`"></router-link>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.key" />
      </template>
    </a-menu>
  </div>
</template>

<script>
  import { Menu, Icon } from 'ant-design-vue';

  import SubMenu from './submenu';

  export default {
    name: 'sidenav',
    components: {
      'sub-menu': SubMenu,
    },
    data() {
      return {
        collapsed: false,
        list: [
          {
            key: '1',
            title: this.$t('message.nav.search'),
            icon: 'search',
            href: '/search'
          },
          {
            key: '8',
            title: this.$t('message.nav.add'),
            icon: 'plus',
            href: '/add'
          },
          {
            key: '2',
            title: this.$t('message.nav.model'),
            icon: 'ordered-list',
            children: [
              {
                key: '2.1',
                title: this.$t('message.nav.zoids'),
                icon: 'ordered-list',
                children: [
                  {
                    key: '2.1.1',
                    title: this.$t('message.nav.zoidsKotobukiya'),
                    icon: 'caret-right',
                    href: '/toy/zoidsKotobukiyaright',

                  },
                  {
                    key: '2.1.2',
                    title: this.$t('message.nav.zoidsTT'),
                    icon: 'caret-right',
                    href: '/toy/zoidsTT',
                  }
                ],
              },
            ],
          },

          {
            key: '4',
            title: this.$t('message.nav.hako'),
            icon: 'ordered-list',
            children: [
              {
                key: '4.1',
                title: this.$t('message.nav.zoids'),
                icon: 'ordered-list',
                children: [
                  {
                    key: '4.1.1',
                    title: this.$t('message.nav.zoidsKotobukiya'),
                    icon: 'caret-right',
                    href: '/toy/zoids',
                  },
                  {
                    key: '4.1.2',
                    title: this.$t('message.nav.zoidsTT'),
                    icon: 'caret-right',
                    href: '/toy/zoidsTT',
                  }
                ],
              },
            ],
          },
          {
            key: '5',
            title: this.$t('message.nav.weapon'),
            icon: 'ordered-list',
            children: [
              {
                key: '5.1',
                title: this.$t('message.nav.mononofu'),
                icon: 'ordered-list',
                children: [
                  {
                    key: '5.1.1',
                    title: this.$t('message.nav.mononofu3'),
                    icon: 'caret-right',
                    href: '/toy/mononofu3',
                  },
                  {
                    key: '5.1.2',
                    title: this.$t('message.nav.mononofu4'),
                    icon: 'caret-right',
                    href: '/toy/mononofu4',
                  },
                  {
                    key: '5.1.3',
                    title: this.$t('message.nav.mononofu5'),
                    icon: 'caret-right',
                    href: '/toy/mononofu5',
                  },
                  {
                    key: '5.1.4',
                    title: this.$t('message.nav.mononofu6'),
                    icon: 'caret-right',
                    href: '/toy/mononofu6',
                  },
                  {
                    key: '5.1.5',
                    title: this.$t('message.nav.mononofu7'),
                    icon: 'caret-right',
                    href: '/toy/mononofu7',
                  },
                  {
                    key: '5.1.6',
                    title: this.$t('message.nav.mononofu8'),
                    icon: 'caret-right',
                    href: '/toy/mononofu8',
                  }
                ],
              },
              {
                key: '5.2',
                title: this.$t('message.nav.swordghost'),
                icon: 'ordered-list',
                children: [
                  {
                    key: '5.2.1',
                    title: this.$t('message.nav.swordghost1'),
                    icon: 'caret-right',
                    href: '/toy/swordghost1',
                  },
                  {
                    key: '5.2.2',
                    title: this.$t('message.nav.swordghost2'),
                    icon: 'caret-right',
                    href: '/toy/swordghost2',
                  },
                  {
                    key: '5.2.3',
                    title: this.$t('message.nav.swordghost3'),
                    icon: 'caret-right',
                    href: '/toy/swordghost3',
                  },
                ]
              },
              {
                key: '5.3',
                title: this.$t('message.nav.sango'),
                icon: 'ordered-list',
                children: [
                  {
                    key: '5.3.1',
                    title: this.$t('message.nav.sango1'),
                    icon: 'caret-right',
                    href: '/toy/sango1',
                  },
                  {
                    key: '5.3.2',
                    title: this.$t('message.nav.sango2'),
                    icon: 'caret-right',
                    href: '/toy/sango2',
                  },
                  {
                    key: '5.3.3',
                    title: this.$t('message.nav.sango3'),
                    icon: 'caret-right',
                    href: '/toy/sango3',
                  },
                ]
              }
            ],
          },
          {
            key: '6',
            title: this.$t('message.nav.godzilla'),
            icon: 'ordered-list',
            children: [
              {
                key: '6.1',
                title: this.$t('message.nav.xplus'),
                icon: 'caret-right',
                href: '/toy/zoids',
              },
              {
                key: '6.2',
                title: this.$t('message.nav.hako'),
                icon: 'caret-right',
                href: '/toy/zoids',
              },
            ]
          },
          {
            key: '3',
            title: this.$t('message.nav.kachaball'),
            icon: 'caret-right',
            href: '/toy/kachaball'
          },

        ],
      };
    },
    methods: {
      toggleCollapsed() {
        this.collapsed = !this.collapsed;
      },
    },
  }
</script>

<style lang="scss" scoped>
  .sidenav {
    &:before {
      position: absolute;
      content: '';
      display: block;

      width: 100%;
      min-height: calc(100vh - 97px);

      background: #333;
    }
    > button {
      position: absolute;

      top: 0;
      width: 100%;
      border-radius: 0;

      background: #f2c811;
      border: 1px solid #f2c811;
    }

    /deep/ .ant-menu-dark.ant-menu-inline {
      margin-top: 32px;
    }

    /deep/ .ant-menu-dark.ant-menu-vertical {
      margin-top: 28px;
    }
  }
</style>
