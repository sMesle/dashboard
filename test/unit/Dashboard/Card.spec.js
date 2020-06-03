import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import { shallowMount, createLocalVue } from '@vue/test-utils'
import Card from '@/components/Dashboard/Card.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

Vue.use(Vuetify)

describe('Cards from Dashboard', () => {
  let wrapper, vuetify

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

    wrapper = shallowMount(Card, {
      vuetify,
      localVue,
      propsData: {
        card: {
          header: 'Message',
          info: '158',
          icon: 'message',
          action: 'mark unread',
          subicon: 'markunread',
          fill: 'rgba(255, 206, 86, 1)'
        }
      }
    })
  })

  it('set Data', () => {
    expect(wrapper.find('[data-test="card"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="button"]').exists()).toBe(true)
  })
})
