import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import { mount, createLocalVue } from '@vue/test-utils'
import Cards from '@/components/Dashboard/Cards.vue'

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

    wrapper = mount(Cards, {
      vuetify,
      localVue,
      data () {
        return {
          cards: [
            {
              header: 'Message',
              info: '158',
              icon: 'message',
              action: 'mark unread',
              subicon: 'markunread',
              fill: 'rgba(255, 206, 86, 1)'
            }
          ]
        }
      }
    })
  })

  it('set Data', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.find('[data-test="row"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-test="col"]').length).toEqual(1)
  })
})
