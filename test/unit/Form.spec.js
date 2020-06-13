import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import { createLocalVue, mount } from '@vue/test-utils'
import Form from '@/components/Form.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Form', () => {
  let wrapper

  const checkFromType = jest.fn().mockName('checkFromType')

  beforeEach(() => {
    // store = new Vuex.Store({})

    wrapper = mount(Form, {
      localVue,
      methods: {
        checkFromType
      },
      state: {
        userInputs: {
          email: '',
          password: ''
        }
      },
      mocks: {
        $store: {
          state: {
            profile: {
              name: '',
              email: 'lorem',
              password: 'ipsum'
            }
          }
        }
      },
      created () {
        checkFromType()
      }
    })
  })

  it('calls checkFormType from created hooks', () => {
    expect(checkFromType).toHaveBeenCalled()
  })

  it('is button text "login" ', () => {
    const login = 'login'
    const btn = wrapper.find('[data-test="button"]')
    expect(btn.exists()).toBe(true)
    expect(btn.text()).toMatch(login)
    expect(wrapper.findAll('[data-test="email"]').length).toEqual(1)
    expect(wrapper.findAll('[data-test="password"]').length).toEqual(1)
  })

  it('is button text "register"', () => {
    const register = 'register'
    const btn = wrapper.find('[data-test="button"]')
    wrapper.setProps({ formType: register })
    expect(wrapper.vm.formType).toBe(register)
    Vue.nextTick(() => {
      expect(btn.text()).toMatch(register)
      expect(wrapper.findAll('[data-test="name"]').length).toEqual(1)
    })
  })

  it('submit form', () => {
    wrapper.find('[data-test="form"]').trigger('submit.prevent')
    expect(wrapper.emitted().submitForm[0]).toEqual([{
      email: 'lorem',
      password: 'ipsum',
      name: ''
    }])
  })
})
