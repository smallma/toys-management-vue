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
          <router-link :to=item.href></router-link>
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
            title: this.$t('message.common.home'),
            icon: 'home',
            href: '/'
          },
          {
            key: '2',
            title: this.$t('message.common.model'),
            icon: 'pie-chart',
            href: '/zoids',
            children: [
              {
                key: '2.1',
                title: this.$t('message.common.zoids'),
                icon: 'pie-chart',
                children: [
                  {
                    key: '2.1.1',
                    title: this.$t('message.common.zoidsKotobukiya'),
                    icon: 'pie-chart',
                    href: '/zoidsKotobukiya',

                  },
                  {
                    key: '2.1.2',
                    title: this.$t('message.common.zoidsTT'),
                    icon: 'pie-chart',
                    href: '/zoids',
                  }
                ],
              },
            ],
          },
          {
            key: '3',
            title: this.$t('message.common.kachaball'),
            icon: 'pie-chart',
          },
          {
            key: '4',
            title: this.$t('message.common.hako'),
            icon: 'pie-chart',
            children: [
              {
                key: '4.1',
                title: this.$t('message.common.zoids'),
                icon: 'pie-chart',
                children: [
                  {
                    key: '4.1.1',
                    title: this.$t('message.common.zoidsKotobukiya'),
                    icon: 'pie-chart'
                  },
                  {
                    key: '4.1.2',
                    title: this.$t('message.common.zoidsTT'),
                    icon: 'pie-chart'
                  }
                ],
              },
            ],
          },
          {
            key: '5',
            title: this.$t('message.common.weapon'),
            icon: 'pie-chart',
            children: [
              {
                key: '5.1',
                title: this.$t('message.common.mononofu'),
                icon: 'pie-chart',
                children: [
                  {
                    key: '5.1.1',
                    title: this.$t('message.common.mononofu3'),
                    icon: 'pie-chart'
                  },
                  {
                    key: '5.1.2',
                    title: this.$t('message.common.mononofu4'),
                    icon: 'pie-chart'
                  },
                  {
                    key: '5.1.3',
                    title: this.$t('message.common.mononofu5'),
                    icon: 'pie-chart'
                  },
                  {
                    key: '5.1.4',
                    title: this.$t('message.common.mononofu6'),
                    icon: 'pie-chart'
                  },
                  {
                    key: '5.1.5',
                    title: this.$t('message.common.mononofu7'),
                    icon: 'pie-chart'
                  },
                  {
                    key: '5.1.6',
                    title: this.$t('message.common.mononofu8'),
                    icon: 'pie-chart'
                  }
                ],
              },
              {
                key: '5.2',
                title: this.$t('message.common.swordghost'),
                icon: 'pie-chart',
                children: [
                  {
                    key: '5.2.1',
                    title: this.$t('message.common.swordghost1'),
                    icon: 'pie-chart'
                  },
                  {
                    key: '5.2.2',
                    title: this.$t('message.common.swordghost2'),
                    icon: 'pie-chart'
                  },
                  {
                    key: '5.2.3',
                    title: this.$t('message.common.swordghost3'),
                    icon: 'pie-chart'
                  },
                ]
              },
              {
                key: '5.3',
                title: this.$t('message.common.sango'),
                icon: 'pie-chart',
                children: [
                  {
                    key: '5.3.1',
                    title: this.$t('message.common.sango1'),
                    icon: 'pie-chart'
                  },
                  {
                    key: '5.3.2',
                    title: this.$t('message.common.sango2'),
                    icon: 'pie-chart'
                  },
                  {
                    key: '5.3.3',
                    title: this.$t('message.common.sango3'),
                    icon: 'pie-chart'
                  },
                ]
              }
            ],
          },
          {
            key: '6',
            title: this.$t('message.common.godzilla'),
            icon: 'pie-chart',
          }
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

</style>
