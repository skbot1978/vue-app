<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app right/>
    <v-toolbar app>
      <v-toolbar-title>สวัสดี
        {{ user.name }}
        {{ online ? 'ONLINE' : 'OFFLINE' }}
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
    </v-toolbar>
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    }
  },

  computed: {
    online: {
      get() {
        return this.$store.state.online
      },
      set(value) {
        this.$store.commit('setOnline', value)
      },
    },
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(value) {
        this.$store.commit('setDrawer', value)
      },
    },
  },

  created() {
    let user = window.sessionStorage.getItem('user')
    if (!user) {
      return this.$router.replace('/')
    }
    // this.user = JSON.parse(user) // แปลงยูสเดิมจาก stringnifier ให้เป็น JSON
    // this.$store.dispatch('loadStudents') // โหลดข้อมูล action  loadStudents  ใน store/index
    return this.$router.replace('/home')
  }, // created

  mounted() {
    this.$store.commit('setOnline', window.navigator.onLine)
    window.addEventListener('offline', this.toggleNetworkStatus)
    window.addEventListener('online', this.toggleNetworkStatus)
  },

  beforeDestroyed() {
    window.removeEventListener('offline', this.toggleNetworkStatus)
    window.removeEventListener('online', this.toggleNetworkStatus)
  },

  methods: {
    toggleNetworkStatus({ type }) {
      this.online = type === 'online'
    },
  },
}
</script>
