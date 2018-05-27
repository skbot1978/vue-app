
<template>
  <div>
    <div>
      <h1>{{ user.name }}</h1>

      <select v-model="room">
        <option v-for="r in roomList" :key="r" :value="r">ห้อง {{ r }}</option>
      </select>
      <v-radio-group v-model="room">
        <v-radio
          v-for="n in roomList"
          :key="n"
          :label="`ห้อง ${n}`"
          :value="n"
        />
      </v-radio-group>
      <v-btn @click="doSave">SAVE</v-btn>
    </div>
    <student-box
      v-for="st in students2" :key="st.stCode" :student="st"
      @phone="onPhone"
      @click="onClick"
    />

    <!--
    <table>
      <tr>
        <td>รหัส</td>
        <td>ชื่อ</td>
        <td>ห้อง</td>
      </tr>
      <tr v-for="st in students2" :key="st.code">
        <td>{{ st.code }}</td>
        <td>{{ st.name }}</td>
        <td>{{ st.room }}</td>
      </tr>
    </table>
    -->
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
      list: [
        { code: '0001', firstName: 'Name1', lastName: 'Lastname1', room: '1/1' },
        { code: '0002', firstName: 'Name2', lastName: 'Lastname2', room: '1/1' },
        { code: '0003', firstName: 'Name3', lastName: 'Lastname3', room: '1/1' },
      ],
      room: '1',
    }
  }, // data
  computed: {
    user() {
      return this.$store.state.user
    },
    students() {
      return this.$store.state.students
    },
    roomList() {
      // let out = []
      // for (let i = 0; i < this.students.length; i++) {
      //   if (out.indexOf(this.students[i].room) === -1) {
      //     out.push(this.students[i].room)
      //   }
      // }
      // let out = {}
      // for (let i = 0; i < this.students.length; i++) {
      //   if (!out[this.students[i].room]) {
      //     out[this.students[i].room] = true
      //   }
      // }
      // return Object.keys(out) // ['1', '2', '3', '4']
      // prev = ['1']
      // return this.students.reduce((prev, st) => {
      //   if (prev.indexOf(st.room) === -1) {
      //     prev.push(st.room)
      //   }
      //   // return prev
      // }, [])
      return Object.keys(this.students.reduce((p, st) => {
        p[st.stRoom] = st.stRoom
        return p
      }, {}))
    },
    students2() {
      // let out = []
      // for (let i = 0; i < this.students.length; i++) {
      //   if (this.students[i].room === this.room) {
      //     out.push(this.students[i])
      //   }
      // }
      // return out
      return this.students.filter(st => st.stRoom === this.room)
    },
  }, // computed
  methods: {
    async doSave() {
      let res = await this.$http.post('/student/save', { code: '', name: '', birth: '' })
      if (res.data.ok) {
        // SAVE สำเร็จ
        console.log('save สำเร็จนะ')
      } else {
        // SAVE ไม่เสร็จ
        console.log('save ไม่สำเร็จนะ')
      }
    },
    onPhone() {
      console.log('student list phone')
    },
    onClick() {
      console.log('student list click')
    },
  },
}
</script>
