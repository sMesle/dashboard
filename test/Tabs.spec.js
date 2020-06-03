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

    wrapper = shallowMount(Tabs, {
      vuetify,
      mocks: {
        $store: {
          state: {
            tabs: {
              tasks: [
                { id: 0, selected: false, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
              ],
              messages: [
                { id: 0, starred: true, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
              ],
              bookmarks: [
                { id: 0, bookmarked: true, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
              ],
              favorites: [
                { id: 0, favorite: true, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
              ]
            }
          }
        }
      }
    })
  })

  it('all content', () => {
    expect(wrapper.find('[ data-test="task-content"]').text()).toBe(wrapper.vm.tabs.tasks[0].content)
    expect(wrapper.find('[ data-test="message-content"]').text()).toBe(wrapper.vm.tabs.messages[0].content)
    expect(wrapper.find('[ data-test="bookmark-content"]').text()).toBe(wrapper.vm.tabs.bookmarks[0].content)
    expect(wrapper.find('[ data-test="favorite-content"]').text()).toBe(wrapper.vm.tabs.favorites[0].content)
  })
})
