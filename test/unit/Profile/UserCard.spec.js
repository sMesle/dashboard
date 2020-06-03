import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import { shallowMount, createLocalVue } from '@vue/test-utils'
import UserCard from '@/components/Profile/UserCard.vue'

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

    wrapper = shallowMount(UserCard, {
      vuetify,
      localVue,
      computed: {
        profile () {
          return {
            company: 'Lorem Inc.',
            description: 'Founder',
            username: 'jane123',
            email: 'jane@email.com',
            password: 'admin123',
            firstName: 'Jane',
            lastName: 'Smith',
            about: 'Asia-Pacific international Nordic ryokan conversation, joy finest destination Toto perfect the best pintxos exclusive. Nordic ryokan emerging Tsutaya exclusive Boeing 787. K-pop quality of life Shinkansen Nordic, first-class Singapore liveable discerning impeccable Airbus A380 exquisite boulevard. Carefully curated Fast Lane exquisite Lufthansa international cosy. Classic international discerning eclectic izakaya Tsutaya joy signature Ginza sharp charming.',
            post: 'Asia-Pacific international Nordic ryokan conversation, joy finest destination Toto perfect the best pintxos exclusive',
            tasks: 25,
            avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
            joined: 'December 2012',
            private: false
          }
        }
      }
    })
  })

  it('set Data', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.find('[data-test="post"]').text()).toBe(wrapper.vm.profile.post)
    expect(wrapper.find('[data-test="name"]').text()).toBe(wrapper.vm.profile.firstName + ' ' + wrapper.vm.profile.lastName)
  })
})
