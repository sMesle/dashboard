import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import { shallowMount, createLocalVue } from '@vue/test-utils'
import Form from '@/components/Form.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Form', () => {
  let wrapper, store

  beforeEach(() => {
    wrapper = shallowMount(Form, {
      localVue,
      store,
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
              email: 'lorem',
              password: 'ipsum'
            }
          }
        }
      }
    })
  })

  it('calls checkFormType from created hooks', () => {
    wrapper.vm.checkFormType = jest.fn().mockName('checkFromType')
    wrapper.vm.checkFormType()
    expect(wrapper.vm.checkFormType).toHaveBeenCalled()
  })

  it('is button text "login" ', () => {
    const login = 'login'
    const btn = wrapper.find('[data-test="button"]')
    expect(btn.exists()).toBe(true)
    expect(btn.text()).toMatch(login)
  })

  it('is button text "register"', () => {
    const register = 'register'
    const btn = wrapper.find('[data-test="button"]')
    wrapper.setProps({ formType: register })
    expect(wrapper.vm.formType).toBe(register)
    Vue.nextTick(() => {
      expect(btn.text()).toMatch(register)
    })
  })
})
