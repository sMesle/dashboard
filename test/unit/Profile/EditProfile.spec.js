import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import { mount, createLocalVue } from '@vue/test-utils'
import EditProfile from '@/components/Profile/EditProfile.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()
localVue.use(Vuex)

describe('EditProfile.vue', () => {
  let wrapper, vuetify, actions, store

  const takeProfileFromStore = jest.fn().mockName('takeProfileFromStore')

  beforeEach(() => {
    actions = {
      EDIT_PROFILE: jest.fn().mockName('profile/EDIT_PROFILE')
    }

    store = new Vuex.Store({
      actions
      // state: {
      //   inputs: {
      //     username: '',
      //     firstName: '',
      //     lastName: '',
      //     email: '',
      //     company: 'Lorem Ipsum',
      //     about: ''
      //   }
      // }
    })

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

    wrapper = mount(EditProfile, {
      store,
      localVue,
      vuetify,
      created () {
        takeProfileFromStore()
      },
      methods: {
        takeProfileFromStore
      },
      state: {
        inputs: {
          username: '',
          firstName: '',
          lastName: '',
          email: '',
          company: 'Lorem Ipsum',
          about: ''
        }
      },
      mocks: {
        $store: {
          state: {
            profile: {
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
              private: true
            }
            // state: {
            //   inputs: {
            //     username: '',
            //     firstName: '',
            //     lastName: '',
            //     email: '',
            //     company: 'Lorem Ipsum',
            //     about: ''
            //   }
            // }
          }
        }
      }
    })
  })

  it('is component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(takeProfileFromStore).toHaveBeenCalled()
    expect(wrapper.find('[data-test="profile"]').exists()).toBe(true)
    expect(wrapper.find('h2').exists()).toBeTruthy()
    // const company = (wrapper.find('[data-test="company"]'))
  })

  it('submit form', async () => {
    expect(wrapper.find('[data-test="form"]').exists()).toBeTruthy()
    wrapper.find('[data-test="form"]').trigger('submit.prevent')
    await wrapper.vm.$nextTick()
    expect(actions.EDIT_PROFILE).toHaveBeenCalled()
  })
})
