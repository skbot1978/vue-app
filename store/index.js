import Vue from 'vue'

export const state = () => ({
  online: false,
  drawer: false,
  user: {},
  students: [],
})

// mutations ใช้สำหรับแก้ไขข้อมูลใน state หรือ store
export const mutations = {
  setOnline(state, status) {
    state.online = status
  },
  setDrawer(state, status) {
    state.drawer = status
  },
  setUser(state, user) {
    state.user = user
  },
  setStudents(state, data) {
    state.students = data
  },
}

export const actions = {
  async loadStudents(store) {
    // 1. โหลดข้อมูลเก่าจาก localStorage ก่อน
    let students = JSON.parse(window.localStorage.getItem('students') || '[]')
    // 2 commit เป็นการเรียกใช้ mutations เพื่อแก้ไข้อมูลใน state หรือ store
    store.commit('setStudents', students)

    // 3. ยิง api เพื่อข้อมูลใหม่จาก server มาแคชไว้ในเครื่องโดยยิงไปที่ api
    // let res = await Vue.axios.post('/student/list?room=2', { room: '2', year: 3 })
    // let res = await Vue.axios.get('/student/list?room=2', { room: '2', year: 3 })
    let res = await Vue.axios.get('/student/list ')
    // let res = await Vue.axios.get('/student/list?room=2')
    // let res = await Vue.axios.get('/student/list', { params: { room: 2 } })

    // 4. commit เป็นการเรียกใช้ mutations  เพื่อแก้ไข้อมูลใน state หรือ store
    store.commit('setStudents', res.data.student)
    // 5. เก็บลง localStorage
    window.localStorage.setItem('students', JSON.stringify(res.data.student))
  },
  loadUser(store) {
    let user = window.sessionStorage.getItem('user')
    if (!user) {
      return false
    }
    store.commit('setUser', JSON.parse(user))
    return true
  },
}
