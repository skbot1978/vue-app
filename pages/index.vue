<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <v-text-field v-model="form.login" label="ชื่อผู้ใช้"/>
      </v-flex>
      <v-flex>
        <v-text-field v-model="form.pass" label="รหัสผ่าน"/>
      </v-flex>
      <v-flex>
        <v-btn color="primary" @click="doLogin">เข้าสู่ระบบ</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
let blankForm = {
  login: '',
  pass: '',
}

export default {
  layout: 'public',
  data() {
    return {
      // เปลี่ยน blankForm ที่เป็นออปเจ็คให้อยู้่นรูปของ JSON
      form: JSON.parse(JSON.stringify(blankForm)),
    }
  },
  methods: {
    async doLogin() {
      let res = await this.$http.post('/login', this.form)
      if (!res.data.ok) {
        // TODO: login ไม่สำเร็จ
        return
      }
      console.log('login สำเร็จ')
      // 1. จำ user/login
      window.sessionStorage.setItem('user', JSON.stringify(res.data.user))
      // 2. ไปหน้า home
      this.$router.push('/home')
    },
  },
}
</script>
