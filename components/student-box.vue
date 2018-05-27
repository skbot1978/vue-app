
<template>
  <v-layout row style="border: 1px solid red">
    <v-flex xs4><img src=""></v-flex>
    <v-flex xs8>
      <div>รหัสประจำตัว <b>{{ student.stCode }}</b></div>
      <div>ชื่อ - นามสกุล {{ student.stFirstname }} {{ student.lastName }}</div>
      <div>ห้อง {{ student.stRoom }}</div>
      <div>สถานที่ฝึกงาน{{ student.stShip }}</div>
      <v-btn icon @click="doClick"><v-icon>phone</v-icon></v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    student: {
      type: Object,
      required: true,
      default() {
        return {
          // code: 'N/A',
          // firstName: '',
          // lastName: '',
          // room: '',
          // grade: '',
          stCode: 'N/A',
          stFirstame: '',
          stLastName: '',
          stRoom: '',
          stShip: '',
        }
      },
    },
  },
  methods: {
    doClick() {
      this.$emit('phone')
    },
  },
}
</script>
