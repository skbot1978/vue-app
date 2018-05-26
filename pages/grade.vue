
<template>
  <div>
    <student-box :student="st" @phone="onPhone"/>
    <div>
      Grade
    </div>
  </div>
</template>
<script>
import StudentBox from '~/components/student-box.vue'

export default {
  components: {
    StudentBox,
  },
  data() {
    return {
      st: {
        code: '9999',
        firstName: 'Fisrtname777',
        lastName: 'Lastname888',
        room: '1/2',
      },
    }
  },
  methods: {
    onPhone() {
      console.log('student phone')
    },
  },
}
</script>
