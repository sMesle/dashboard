import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import { shallowMount, createLocalVue } from '@vue/test-utils'
import Tabs from '@/components/Tabs.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Tabs', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify({
      mocks: {
        $vuetify: {
          lang: {
            t: () => {}
          },
          theme: {
            dark: false,
            themes: {
              dark: {}
            }
          }
        }
      }
    })
  })

  it('exist', () => {
    const wrapper = shallowMount(Tabs, {
      store: new Vuex.Store({
        state: { tabs: [] }
      }),
      localVue,
      vuetify
    })

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
