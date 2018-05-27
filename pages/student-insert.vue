<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <v-text-field v-model="form.stCode" label="รหัส"/>
      </v-flex>
      <v-flex>
        <v-text-field v-model="form.stFirstname" label="ชื่อ"/>
      </v-flex>
      <v-flex>
        <v-text-field v-model="form.stLastname" label="นามสกุล"/>
      </v-flex>
      <v-flex>
        <v-text-field v-model="form.stRoom" label="ห้อง"/>
      </v-flex>
      <v-flex>
        <v-text-field v-model="form.stShip" label="สถานที่ฝึกงาน"/>
      </v-flex>
      <v-flex>
        <v-text-field v-model="form.stMap" label="แผนที่"/>
      </v-flex>
      <v-flex>
        <v-btn color="primary" @click="doInsert">บันทึก</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
let blankForm = {
  stCode: '',
  stFirstname: '',
  stLastname: '',
  stRoom: '',
  stShip: '',
  stMap: '',
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
    async doInsert() {
      let res = await this.$http.post('/student/insert', this.form)
      if (!res.data.ok) {
        // TODO: login ไม่สำเร็จ
        return
      }
      console.log('login สำเร็จ')
      // 1. จำ user/login
      window.sessionStorage.setItem('user', JSON.stringify(res.data.user))
      // 2. ไปหน้า home
      // this.$router.push('/home')
    },
  },
}
</script>
