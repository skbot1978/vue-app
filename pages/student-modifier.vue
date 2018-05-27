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
        <v-btn :disabled="!$store.state.online" color="primary" @click="doInsert">บันทึก</v-btn>
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="showMsg"
      top
    >
      {{ showText }}
      <v-btn flat color="pink" @click.native="showMsg = false">Close</v-btn>
    </v-snackbar>
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
  // layout: 'public',
  data() {
    return {
      // เปลี่ยน blankForm ที่เป็นออปเจ็คให้อยู้่นรูปของ JSON
      form: JSON.parse(JSON.stringify(blankForm)),
      // ตัวเก็บรหัสนักศึกษา
      code: '0001',
      showText: '',
      showMsg: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    students() {
      return this.$store.state.students
    },
    students2() {
      // let out = []
      // for (let i = 0; i < this.students.length; i++) {
      //   if (this.students[i].room === this.room) {
      //     out.push(this.students[i])
      //   }
      // }
      // return out
      return this.students.find(st => st.stCode === this.$route.query.stCode)
    },
  }, // computed

  created() {
    console.log(this.students2)
    this.form = JSON.parse(JSON.stringify(this.students2))
  },
  methods: {
    async doInsert() {
      let res = await this.$http.post('/student/update', this.form)
      if (!res.data.ok) {
        // TODO: login ไม่สำเร็จ
        this.showText = 'บันทึกไม่สำเร็จ'
        this.showMsg = true
        return
      }
      this.showText = 'บันทึกสำเร็จ'
      this.showMsg = true
      console.log('บันทึกสำเร็จ')
      this.$store.dispatch('updStudent', res.data.student)
      // 1. จำ user/login
      // window.sessionStorage.setItem('user', JSON.stringify(res.data.user))
      // 2. ไปหน้า home
      // this.$router.push('/home')
    },
  },
}
</script>
