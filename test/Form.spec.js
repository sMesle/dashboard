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
      propsData: {
        formType: 'login'
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
})
