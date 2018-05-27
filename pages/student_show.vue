<template>
  <div>
    <div v-for="st in student" :key="st.id">
      {{ st.stFirstname }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    student() {
      return this.$store.state.students
    },
  },
}
</script>
