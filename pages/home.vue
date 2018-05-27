
<template>
  <div>
    <v-toolbar-title align="center" textcolor="#ff00cc"> <h3>ระบบติดตามนักศึกษาฝึกงาน</h3> </v-toolbar-title>
    <!--
    <input :value="name" type="text"> <br>
    <input v-model="name" type="text"> <br>
    <input v-model="dept" type="text"> <br>
    -->
    <div align="center">
      <table width="60%" align="center">
        <tr align="center" height="50">
          <td bgcolor="#3399ff"><button @click="doShow" ><h4>แสดงรายชื่อนักเรียน</h4></button></td>
        </tr>
        <tr height="10" />
        <tr align="center" height="50">
          <td bgcolor="#99ffcc" ><button bgcolor="#3399ff" textcolor="#ff00cc" @click="doInsert"><h4>เพิ่มรายชื่อนักเรียน</h4></button></td>
        </tr>
        <tr height="10" />
        <tr align="center" height="50">
          <td bgcolor="#3399ff" ><button bgcolor="#3399ff" textcolor="#ff00cc" @click="doUpdate"><h4>จัดการผู้ใช้งาน</h4></button></td>
        </tr>
        <tr height="10" />
        <tr align="center" height="50">
          <td bgcolor="#99ffcc"><button @click="doInternship"><h4>ข้อมูลสถานที่ฝึกงาน</h4></button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  // async created() {
  //   let res = await this.$http.get('/student/list')
  //   if (!res.data.ok) {
  //     // TODO: login ไม่สำเร็จ
  //     return
  //   }
  //   this.$store.commit('setStudents', res.data.student)
  //   window.sessionStorage.setItem('studen-list', JSON.stringify(res.data.student))
  // },
  methods: {
    doShow() {
      this.$router.push('/student-list')
    },
    doInsert() {
      this.$router.push('/student-insert')
    },
    doUpdate() {
      this.$router.push('/student-list')
    },
    doInternship() {
      this.$router.push('/student-list')
    },
  },
}
</script>
