export default function ({ store, redirect }) {
  if (store.state.auth.status === '') {
    return redirect('/login')
  }
}
