
<template>
  <v-layout row style="border: 1px solid red">
    <v-flex xs4><img src=""></v-flex>
    <v-flex xs8>
      <div>รหัสประจำตัว <b>{{ student.code }}</b></div>
      <div>ชื่อ - นามสกุล {{ student.firstName }} {{ student.lastName }}</div>
      <div>อ.ที่ปรึกษา ห้อง {{ student.room }}</div>
      <div>GPA: {{ student.grade || 'N/A' }}</div>
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
          code: 'N/A',
          firstName: '',
          lastName: '',
          room: '',
          grade: '',
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
