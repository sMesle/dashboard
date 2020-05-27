import Vue from 'vue'
import Vuetify from 'vuetify'

import { shallowMount } from '@vue/test-utils'
import Tabs from '@/components/Tabs.vue'

Vue.use(Vuetify)

describe('Tabs', () => {
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
  })

  it('task is checked or unchecked', () => {
    wrapper = shallowMount(Tabs, {
      vuetify,
      mocks: {
        $store: {
          state: {
            tabs: {
              tasks: [
                { id: 0, selected: false, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
              ]
            }
          }
        }
      }
    })
    const tasks = wrapper.findAll('[data-test="task"]')
    expect(tasks.length).toBe(1)

    expect(wrapper.contains('[data-test="checkbox"]')).toBe(true)

    const check = wrapper.find('[data-test="checkbox"]')
    //TODO: expect(check.is('input[type="checkbox"]')).toBe(true)
  })
})
