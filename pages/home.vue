
<template>
  <div>
    <v-toolbar-title align="center" textcolor="#ff00cc"> <h3>ระบบติดตามนักศึกษาฝึกงาน</h3> </v-toolbar-title>
    <input :value="name" type="text"> <br>
    <input v-model="name" type="text"> <br>
    <input v-model="dept" type="text"> <br>
    <div align="center">
      <table width="60%" align="center">
        <tr align="center" height="50">
          <td bgcolor="#3399ff"><button @click="doShow" ><h4>แสดงรายชื่อนักเรียน</h4></button></td>
        </tr>
        <tr height="10" />
        <tr align="center" height="50">
          <td bgcolor="#99ffcc" ><button bgcolor="#3399ff" textcolor="#ff00cc" @click="doUpdate"><h4>ปรับปรุงข้อมูลนักเรียน</h4></button></td>
        </tr>
        <tr height="10" />
        <tr align="center" height="50">
          <td bgcolor="#3399ff"><button @click="doInternship"><h4>ข้อมูลสถานที่ฝึกงาน</h4></button></td>
        </tr>
      </table>
    </div>
  </div>
</template>
