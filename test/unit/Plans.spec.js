import Vue from 'vue'
import Vuetify from 'vuetify'

import { shallowMount } from '@vue/test-utils'
import Plans from '@/components/Plans.vue'

Vue.use(Vuetify)

describe('Alert', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Plans, {
      data: () => ({
        cardList: [
          {
            id: 0,
            title: 'Trial',
            team: 2,
            member: 10,
            membership: 1,
            price: 0,
            parallax: 'https://images.unsplash.com/photo-1524313118018-d8139913a0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
          },
          {
            id: 1,
            title: 'Basic',
            team: 5,
            member: 25,
            membership: 1,
            price: 19,
            parallax: 'https://images.unsplash.com/photo-1578922348103-46c3a7ebdd86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
          }
        ]
      })
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper).toBeTruthy()
    expect(wrapper.findAll('[data-test="col"]').length).toBe(2)
  })
})
